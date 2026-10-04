"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { consent } from "@/lib/site";

/**
 * One form, two funnels. `coverage` books the 15-minute review; `recruit`
 * opens a conversation about getting licensed. The variant rides along to the
 * API so the two never get mixed.
 *
 * Native <select> rather than a custom listbox: most traffic arrives from Meta
 * on a phone, where the OS picker is faster and keeps JS off the conversion path.
 */

const COPY = {
  coverage: {
    title: "Get your 15-minute check",
    sub: "I call you myself, at a time that works around your shift.",
    submit: "Book my 15-minute check",
    foot: "No spam, no list. One call, from me.",
    roleLabel: "I am",
    role: [
      ["family", "Someone my family depends on"],
      ["healthcare", "A nurse or healthcare worker"],
      ["education", "A teacher or school employee"],
      ["retired", "Retired or close to it"],
      ["other", "Something else"],
    ],
  },
  recruit: {
    title: "Ask me what it takes",
    sub: "I’ll walk you through how I got licensed and what the work actually looks like.",
    submit: "Start the conversation",
    foot: "No pressure. You can stop after the call.",
    roleLabel: "I am",
    role: [
      ["nurse", "A nurse"],
      ["teacher", "A teacher"],
      ["licensed", "Already licensed"],
      ["curious", "Just curious for now"],
    ],
  },
} as const;

const field =
  "h-12 w-full rounded-[10px] border border-border bg-white px-3.5 text-[15px] " +
  "tracking-[-0.02em] text-foreground outline-none transition-colors " +
  "placeholder:text-muted-foreground/50 focus-visible:border-primary " +
  "focus-visible:ring-2 focus-visible:ring-primary/20";

export function LeadForm({
  variant = "coverage",
  className,
}: {
  variant?: keyof typeof COPY;
  className?: string;
}) {
  const copy = COPY[variant];
  const router = useRouter();
  const [pending, setPending] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [agreed, setAgreed] = React.useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);

    const form = new FormData(e.currentTarget);
    const payload = {
      firstName: String(form.get("firstName") ?? "").trim(),
      phone: String(form.get("phone") ?? "").trim(),
      state: String(form.get("state") ?? ""),
      iAm: String(form.get("iAm") ?? ""),
      bestTime: String(form.get("bestTime") ?? ""),
      variant,
      consentGiven: agreed,
      consentVersion: consent.version,
    };

    if (!payload.firstName)
      return setError("Add your first name so I know who I’m calling.");
    if (payload.phone.replace(/\D/g, "").length < 10)
      return setError("I need a number I can actually reach you on.");
    if (!agreed)
      return setError("Check the box so I know it’s okay to call you.");

    setPending(true);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json().catch(() => null)) as {
        error?: string;
      } | null;
      if (!res.ok) {
        setError(data?.error ?? "That didn’t go through. Give it another try.");
        setPending(false);
        return;
      }
      router.push("/thank-you");
    } catch {
      setError(
        "That didn’t send. Try again, or just call me and skip the form."
      );
      setPending(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      id="book"
      className={cn(
        "scroll-mt-24 rounded-2xl border border-border bg-card p-6 shadow-inner-glow sm:p-8",
        className
      )}
    >
      <h2 className="display-md">{copy.title}</h2>
      <p className="body-sm mt-2 text-muted-foreground">{copy.sub}</p>

      <div className="mt-6 space-y-4">
        <div className="space-y-1.5">
          <label htmlFor="firstName" className="label block text-foreground/70">
            Your name
          </label>
          <input
            id="firstName"
            name="firstName"
            autoComplete="given-name"
            placeholder="First name"
            required
            className={field}
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="phone" className="label block text-foreground/70">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="(956) 000-0000"
            required
            className={field}
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="state" className="label block text-foreground/70">
            State
          </label>
          <select id="state" name="state" defaultValue="TX" className={field}>
            <option value="TX">Texas</option>
            <option value="OTHER">Another state</option>
          </select>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="iAm" className="label block text-foreground/70">
            {copy.roleLabel}
          </label>
          <select id="iAm" name="iAm" className={field}>
            {copy.role.map(([value, text]) => (
              <option key={value} value={value}>
                {text}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-1.5">
          <label htmlFor="bestTime" className="label block text-foreground/70">
            Best time to call
          </label>
          <select id="bestTime" name="bestTime" className={field}>
            <option value="morning">Mornings, after my shift</option>
            <option value="afternoon">Afternoons</option>
            <option value="evening">Evenings</option>
            <option value="weekend">Weekends</option>
          </select>
        </div>

        {/* TCPA consent: unchecked by default, never pre-selected. */}
        <label
          htmlFor="consent"
          className="flex cursor-pointer gap-3 rounded-[10px] bg-white/60 p-3.5"
        >
          <input
            id="consent"
            type="checkbox"
            checked={agreed}
            onChange={(e) => setAgreed(e.target.checked)}
            className="mt-0.5 size-4 shrink-0 accent-[var(--primary)]"
          />
          <span className="text-[13px] leading-snug text-muted-foreground">
            {consent.text}
          </span>
        </label>
      </div>

      {error ? (
        <p
          role="alert"
          aria-live="polite"
          className="mt-4 text-[14px] text-destructive"
        >
          {error}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={pending}
        className="shadow-cta mt-5 h-12 w-full rounded-[10px] bg-primary text-[15px] font-medium tracking-[-0.02em] text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
      >
        {pending ? "Sending…" : copy.submit}
      </button>

      <p className="mt-3 text-center text-[13px] text-muted-foreground">
        {copy.foot}
      </p>
    </form>
  );
}
