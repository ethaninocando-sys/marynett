"use client";

import { useState } from "react";
import { formspree } from "@/lib/site";

type Variant = "coverage" | "recruit";

const copy = {
  coverage: {
    title: "Let’s Connect",
    intro: "See If There’s A Fit",
    button: "Send",
  },
  recruit: {
    title: "Let’s Connect",
    intro: "See If There’s A Fit",
    button: "Send",
  },
};

// Stores the lead in Formspree, which keeps the list and sends the alert.
// Answers false when Formspree is not set up or did not accept it.
async function storeLead(
  variant: Variant,
  lead: { firstName: string; phone: string; email: string },
) {
  if (!formspree.endpoint) return false;
  const kind = variant === "recruit" ? "Recruit" : "Client";
  try {
    const res = await fetch(formspree.endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name: lead.firstName,
        phone: lead.phone,
        email: lead.email,
        type: kind,
        _subject: `New ${kind.toLowerCase()} lead: ${lead.firstName}`,
      }),
    });
    return res.ok;
  } catch {
    return false;
  }
}

export function LeadForm({ variant }: { variant: Variant }) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle",
  );
  const [firstName, setFirstName] = useState("");
  const text = copy[variant];

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const lead = {
      firstName: String(data.firstName ?? ""),
      phone: String(data.phone ?? ""),
      email: String(data.email ?? ""),
    };
    setStatus("sending");
    try {
      // Spam bots fill in the hidden field, so their entries are not stored.
      const stored = data.company ? false : await storeLead(variant, lead);
      // The site then emails the thank-you, and a backup copy of the lead if
      // it could not be stored.
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, variant, stored }),
      });
      if (!res.ok) throw new Error("Request failed");
      setFirstName(lead.firstName);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div id="book" className="sv-form-card p-6 sm:p-8" aria-live="polite">
        <h2 className="sv-h3">Got it{firstName ? `, ${firstName}` : ""}.</h2>
        <p className="sv-body mt-2">
          Check your email for next steps and to pick a time.
        </p>
      </div>
    );
  }

  return (
    <form id="book" onSubmit={onSubmit} className="sv-form-card p-6 sm:p-8">
      <h2 className="sv-h3">{text.title}</h2>
      <p className="sv-body mt-1">{text.intro}</p>

      <div className="mt-6 grid gap-4">
        <div>
          <label htmlFor={`${variant}-firstName`} className="sv-label">
            First name
          </label>
          <input
            id={`${variant}-firstName`}
            name="firstName"
            className="sv-field"
            autoComplete="given-name"
            required
          />
        </div>

        <div>
          <label htmlFor={`${variant}-phone`} className="sv-label">
            Phone
          </label>
          <input
            id={`${variant}-phone`}
            name="phone"
            type="tel"
            className="sv-field"
            autoComplete="tel"
            inputMode="tel"
            placeholder="(956) 000-0000"
            pattern="[0-9\(\)\+\-\.\s]{10,}"
            title="Please enter a 10-digit phone number"
            required
          />
        </div>

        <div>
          <label htmlFor={`${variant}-email`} className="sv-label">
            Email
          </label>
          <input
            id={`${variant}-email`}
            name="email"
            type="email"
            className="sv-field"
            autoComplete="email"
            inputMode="email"
            required
          />
        </div>

        {/* Hidden field that only spam bots fill in. */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor={`${variant}-company`}>Company</label>
          <input
            id={`${variant}-company`}
            name="company"
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
      </div>

      <button
        type="submit"
        className="sv-btn sv-btn-primary mt-6 w-full"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : text.button}
      </button>

      {status === "error" ? (
        <p className="mt-3 text-base text-red-800" role="alert">
          That didn&rsquo;t go through. Try again, or call me.
        </p>
      ) : null}

      <p className="sv-sm mt-4">
        By submitting, you agree that Marynett Bolivar may call, text or email
        you about your request. Consent is not a condition of any purchase. I
        don&rsquo;t sell or share your information.
      </p>
    </form>
  );
}
