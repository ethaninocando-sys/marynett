"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { consent, cta } from "@/lib/site";

/**
 * Native <select> rather than the Base UI one. Most traffic here arrives from
 * Meta on a phone, where the OS picker is faster and more reliable than any
 * custom listbox, and it keeps JS off the conversion path.
 */
function Field({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label
        htmlFor={id}
        className="eyebrow text-foreground/70"
      >
        {label}
      </Label>
      {children}
    </div>
  );
}

const selectClass =
  "h-11 w-full appearance-none rounded-lg border border-border bg-input px-3 pr-9 text-[0.9375rem] " +
  "text-foreground shadow-xs outline-none transition-colors " +
  "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50";

const chevron =
  "pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground";

export function LeadForm({ className }: { className?: string }) {
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
      consentGiven: agreed,
      consentVersion: consent.version,
      consentText: consent.text,
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
      className={cn(
        "rounded-2xl bg-card p-6 text-card-foreground shadow-xl shadow-black/10 sm:p-7",
        className
      )}
    >
      <h2 className="font-display text-2xl tracking-tight">
        Get your 15-minute check
      </h2>
      <p className="mt-1.5 text-[0.9375rem] text-muted-foreground">
        I call you myself, at a time that works around your shift.
      </p>

      <div className="mt-6 space-y-4">
        <Field id="firstName" label="Your name">
          <Input
            id="firstName"
            name="firstName"
            autoComplete="given-name"
            placeholder="First name"
            required
            className="h-11 text-[0.9375rem]"
          />
        </Field>

        <Field id="phone" label="Phone">
          <Input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            placeholder="(956) 000-0000"
            required
            className="h-11 text-[0.9375rem]"
          />
        </Field>

        <Field id="state" label="State">
          <div className="relative">
            <select
              id="state"
              name="state"
              defaultValue="TX"
              className={selectClass}
            >
              <option value="TX">Texas</option>
              <option value="OTHER">Another state</option>
            </select>
            <ChevronDown className={chevron} />
          </div>
        </Field>

        <Field id="iAm" label="I am">
          <div className="relative">
            <select id="iAm" name="iAm" className={selectClass}>
              <option value="healthcare">A nurse or healthcare worker</option>
              <option value="education">A teacher or school employee</option>
              <option value="responder">A first responder</option>
              <option value="retired">Retired</option>
              <option value="other">Something else</option>
            </select>
            <ChevronDown className={chevron} />
          </div>
        </Field>

        <Field id="bestTime" label="Best time to call">
          <div className="relative">
            <select id="bestTime" name="bestTime" className={selectClass}>
              <option value="morning">Mornings, after my shift</option>
              <option value="afternoon">Afternoons</option>
              <option value="evening">Evenings</option>
              <option value="weekend">Weekends</option>
            </select>
            <ChevronDown className={chevron} />
          </div>
        </Field>

        {/* TCPA consent: unchecked by default, never pre-selected. */}
        <div className="flex gap-3 rounded-lg bg-muted/60 p-3">
          <Checkbox
            id="consent"
            checked={agreed}
            onCheckedChange={(v) => setAgreed(v === true)}
            className="mt-0.5"
            aria-describedby="consent-text"
          />
          <Label
            htmlFor="consent"
            id="consent-text"
            className="text-[0.8125rem] leading-snug font-normal text-muted-foreground"
          >
            {consent.text}
          </Label>
        </div>
      </div>

      {error ? (
        <p
          role="alert"
          aria-live="polite"
          className="mt-4 text-[0.875rem] text-destructive"
        >
          {error}
        </p>
      ) : null}

      <Button
        type="submit"
        disabled={pending}
        className="mt-5 h-12 w-full rounded-xl text-[0.9375rem] font-semibold"
      >
        {pending ? "Sending…" : cta.primary}
      </Button>

      <p className="mt-3 text-center text-[0.8125rem] text-muted-foreground">
        No spam, no list. One call, from me.
      </p>
    </form>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M4 6l4 4 4-4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
