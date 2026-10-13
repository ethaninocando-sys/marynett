// Runs after a visitor sends the form. The form has already tried to store
// the lead in Formspree and tells this route whether that worked.
//
// This route then does two things, each switched on by settings on the server:
//
//   Thank-you email to the visitor, with the Calendly link
//       needs RESEND_API_KEY, LEAD_FROM_EMAIL and the booking link in lib/site.ts
//       BLOCKS LAUNCH until all three exist. See LAUNCH.md.
//   Backup copy to Marynett, only when Formspree did not store the lead
//       needs RESEND_API_KEY and LEAD_TO_EMAIL

import { booking, formspree, licenses, site } from "@/lib/site";
import { thankYouEmail } from "@/lib/thank-you-email";

// true when delivered, false when it failed, null when it is not set up.
type Delivery = boolean | null;

async function sendEmail(message: Record<string, unknown>): Promise<Delivery> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return null;
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
    if (!res.ok) {
      // Resend explains the refusal, for example a key that cannot send
      // from this domain. The key itself is never logged.
      console.error(`Resend refused the email (${res.status}):`, await res.text());
    }
    return res.ok;
  } catch (error) {
    console.error("Resend could not be reached:", error);
    return false;
  }
}

function thankVisitor(
  firstName: string,
  email: string,
  siteAddress: string,
): Promise<Delivery> {
  const from = process.env.LEAD_FROM_EMAIL;
  // Say which piece is missing, so the host's logs explain a skipped email.
  const missing = [
    !process.env.RESEND_API_KEY && "RESEND_API_KEY",
    !from && "LEAD_FROM_EMAIL",
    !booking.url && "the booking link in lib/site.ts",
  ].filter(Boolean);
  if (!from || missing.length > 0) {
    console.warn(`Thank-you email skipped. Missing: ${missing.join(", ")}.`);
    return Promise.resolve(null);
  }
  const { subject, text, html } = thankYouEmail({
    firstName,
    bookingUrl: booking.url,
    phone: site.phoneDisplay,
    phoneHref: site.phoneHref,
    brandName: site.name,
    brandLine: `${site.credentials} · Independent Agent`,
    signature: `${site.name}, ${site.credentials}`,
    title: "Independent Agent",
    licenseLine:
      "Insurance licenses: " +
      licenses
        // The non-breaking space keeps each state with its number.
        .map((license) => `${license.abbr}\u00a0#${license.number}`)
        .join(" · "),
    footer: `${site.legalName} · ${site.city}`,
    // Mail apps load her photo from the live site.
    photoUrl: new URL("/email/marynett.png", siteAddress).toString(),
  });
  return sendEmail({
    from,
    to: email,
    reply_to: site.email,
    subject,
    text,
    html,
  });
}

function tellMarynett(
  kind: string,
  firstName: string,
  phone: string,
  email: string,
): Promise<Delivery> {
  const to = process.env.LEAD_TO_EMAIL;
  if (!to) return Promise.resolve(null);
  return sendEmail({
    from: process.env.LEAD_FROM_EMAIL ?? "onboarding@resend.dev",
    to,
    reply_to: email,
    subject: `New ${kind.toLowerCase()} lead: ${firstName}`,
    text: [
      `Type: ${kind}`,
      `First name: ${firstName}`,
      `Phone: ${phone}`,
      `Email: ${email}`,
    ].join("\n"),
  });
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  // Spam bots fill in the hidden "company" field. Pretend it worked.
  if (body.company) return Response.json({ ok: true });

  const firstName = String(body.firstName ?? "").trim().slice(0, 200);
  const phone = String(body.phone ?? "").trim().slice(0, 40);
  const phoneDigits = phone.replace(/\D/g, "");
  const email = String(body.email ?? "").trim().slice(0, 200);
  if (!firstName || phoneDigits.length < 10 || !/^\S+@\S+\.\S+$/.test(email)) {
    return Response.json({ ok: false }, { status: 400 });
  }

  const kind = body.variant === "recruit" ? "Recruit" : "Client";

  // The lead has to be kept somewhere before the visitor is thanked.
  let kept = body.stored === true;
  if (!kept) {
    const backup = await tellMarynett(kind, firstName, phone, email);
    if (backup === null && !formspree.endpoint) {
      console.warn("Lead received but there is nowhere to send it yet.");
      return Response.json({ ok: true });
    }
    kept = backup === true;
  }
  if (!kept) return Response.json({ ok: false }, { status: 502 });

  const thanked = await thankVisitor(firstName, email, request.url);
  if (thanked === false) {
    console.error("The lead was kept, but the thank-you email was not sent.");
  }
  return Response.json({ ok: true });
}
