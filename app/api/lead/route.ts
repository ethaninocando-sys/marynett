import { NextRequest } from "next/server";
import { createClient, type SupabaseClient } from "@supabase/supabase-js";
import { Resend } from "resend";
import { agent, consent } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Lead intake.
 *
 * The destination is not decided yet, so every sink is optional and the handler
 * degrades gracefully when its env vars are absent — same shape as
 * e2-technologies' contact route. Wiring the real destination is a .env change,
 * not a code change.
 *
 * Two things this route must always get right, regardless of destination:
 *   1. The consent artifact is recorded verbatim (FEG P&P 17(H)(vi) bans
 *      autodialers; carriers commonly require agent-specific written consent).
 *   2. Leads outside a licensed state are flagged, never treated as solicitable
 *      (FEG Compliance Declaration #3).
 */

let _supabase: SupabaseClient | null = null;
function getSupabase(): SupabaseClient | null {
  if (_supabase) return _supabase;
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  _supabase = createClient(url, key);
  return _supabase;
}

function getResend(): Resend | null {
  const key = process.env.RESEND_API_KEY;
  return key ? new Resend(key) : null;
}

type LeadBody = {
  firstName?: string;
  phone?: string;
  state?: string;
  iAm?: string;
  bestTime?: string;
  consentGiven?: boolean;
  consentVersion?: string;
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json().catch(() => null)) as LeadBody | null;
    if (!body || typeof body !== "object") {
      return Response.json({ error: "Invalid request body." }, { status: 400 });
    }

    const firstName = (body.firstName ?? "").trim();
    const phoneRaw = (body.phone ?? "").trim();
    const digits = phoneRaw.replace(/\D/g, "");
    const state = (body.state ?? "").trim().toUpperCase();

    if (!firstName) {
      return Response.json(
        { error: "Please add your first name." },
        { status: 400 }
      );
    }
    if (digits.length < 10 || digits.length > 11) {
      return Response.json(
        { error: "Please add a phone number I can reach you on." },
        { status: 400 }
      );
    }
    if (body.consentGiven !== true) {
      return Response.json(
        { error: "Please tick the box so I know it's okay to call you." },
        { status: 400 }
      );
    }

    /**
     * She may only solicit where licensed. Out-of-area enquiries are stored so
     * nobody is silently dropped, but flagged so they are never worked as leads.
     */
    const licensed = (agent.licensedStates as readonly string[]).includes(state);

    const record = {
      first_name: firstName,
      phone: digits,
      state,
      i_am: body.iAm ?? null,
      best_time: body.bestTime ?? null,
      out_of_area: !licensed,
      // Consent artifact — stored verbatim alongside the exact language shown.
      consent_given: true,
      consent_version: body.consentVersion ?? consent.version,
      consent_text: consent.text,
      consent_at: new Date().toISOString(),
      ip:
        req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
        req.headers.get("x-real-ip") ??
        null,
      user_agent: req.headers.get("user-agent") ?? null,
    };

    const supabase = getSupabase();
    if (supabase) {
      const { error } = await supabase.from("leads").insert(record);
      if (error) console.error("[lead] supabase insert failed:", error.message);
    }

    const resend = getResend();
    const to = process.env.LEAD_NOTIFY_EMAIL;
    const from = process.env.LEAD_FROM_EMAIL;
    if (resend && to && from) {
      const subject = licensed
        ? `New 15-minute check — ${firstName}`
        : `Out-of-area enquiry (${state}) — ${firstName}`;
      try {
        await resend.emails.send({
          from,
          to,
          subject,
          text: [
            `Name:        ${firstName}`,
            `Phone:       ${phoneRaw}`,
            `State:       ${state}${licensed ? "" : "  ← OUTSIDE LICENSED STATES — do not solicit"}`,
            `They are:    ${record.i_am ?? "—"}`,
            `Best time:   ${record.best_time ?? "—"}`,
            ``,
            `Consent:     given ${record.consent_at} (v${record.consent_version})`,
            `Language:    ${consent.text}`,
            `IP:          ${record.ip ?? "—"}`,
          ].join("\n"),
        });
      } catch (err) {
        console.error("[lead] resend send failed:", err);
      }
    }

    // Always leaves a trace, even with no sink configured.
    if (!supabase && !(resend && to && from)) {
      console.info(
        "[lead] no destination configured; received:",
        JSON.stringify({ ...record, consent_text: "(stored)" })
      );
    }

    return Response.json({ ok: true, outOfArea: !licensed });
  } catch (err) {
    console.error("[lead] unexpected error:", err);
    return Response.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
