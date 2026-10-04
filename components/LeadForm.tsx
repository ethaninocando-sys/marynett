"use client";

import { useState } from "react";

type Variant = "coverage" | "recruit";

const bestTimes = ["Morning", "Afternoon", "Evening", "Weekend"];

const copy = {
  coverage: {
    title: "Get your 15-minute check",
    intro: "I call you personally, at a time that fits your shift.",
    button: "Book my 15-minute check",
  },
  recruit: {
    title: "Book a conversation",
    intro: "I call you personally. Ask me anything.",
    button: "Book a conversation",
  },
};

export function LeadForm({ variant }: { variant: Variant }) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle",
  );
  const [firstName, setFirstName] = useState("");
  const text = copy[variant];

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, variant }),
      });
      if (!res.ok) throw new Error("Request failed");
      setFirstName(String(data.firstName ?? ""));
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div id="book" className="sv-form-card p-6 sm:p-8" aria-live="polite">
        <h2 className="sv-h3">Thank you{firstName ? `, ${firstName}` : ""}.</h2>
        <p className="sv-body mt-2">
          I have your details. Pick a time below and I&rsquo;ll call you then.
        </p>
        <div className="mt-5 flex min-h-64 flex-col items-center justify-center gap-1 rounded-xl bg-[var(--sv-50)] p-6 text-center shadow-[inset_0_0_0_1px_var(--sv-200)]">
          <span className="sv-h6">Booking calendar</span>
          <span className="sv-sm">
            Cal.com embed, limited to Marynett&rsquo;s off-shift hours
          </span>
        </div>
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

        {variant === "coverage" ? (
          <>
            <div>
              <label htmlFor="coverage-iAm" className="sv-label">
                I am
              </label>
              <select
                id="coverage-iAm"
                name="iAm"
                className="sv-field"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Choose one
                </option>
                <option>A nurse or healthcare worker</option>
                <option>A teacher or school employee</option>
                <option>Within 10 years of retiring</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label htmlFor="coverage-lookingFor" className="sv-label">
                I&rsquo;m looking for
              </label>
              <select
                id="coverage-lookingFor"
                name="lookingFor"
                className="sv-field"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Choose one
                </option>
                <option>Coverage for my family</option>
                <option>Questions about retirement income</option>
                <option>I&rsquo;m curious about what you do</option>
              </select>
            </div>
          </>
        ) : (
          <>
            <div>
              <label htmlFor="recruit-occupation" className="sv-label">
                What do you do now?
              </label>
              <input
                id="recruit-occupation"
                name="occupation"
                className="sv-field"
                autoComplete="organization-title"
                required
              />
            </div>
            <div>
              <label htmlFor="recruit-licensed" className="sv-label">
                Do you have a Texas insurance license?
              </label>
              <select
                id="recruit-licensed"
                name="licensed"
                className="sv-field"
                defaultValue=""
                required
              >
                <option value="" disabled>
                  Choose one
                </option>
                <option>Yes</option>
                <option>No</option>
                <option>Working on it</option>
              </select>
            </div>
          </>
        )}

        <div>
          <label htmlFor={`${variant}-bestTime`} className="sv-label">
            Best time to call
          </label>
          <select
            id={`${variant}-bestTime`}
            name="bestTime"
            className="sv-field"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Choose one
            </option>
            {bestTimes.map((time) => (
              <option key={time}>{time}</option>
            ))}
          </select>
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
          That didn&rsquo;t go through. Please try again, or call me directly.
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
