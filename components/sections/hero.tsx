import { Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LeadForm } from "@/components/forms/lead-form";
import { agent, cta, yearsLicensed } from "@/lib/site";

/**
 * Copy note: nothing here addresses the reader's age, health, family or
 * financial situation — Meta's Personal Attributes policy (4.3) treats implied
 * knowledge of those as a violation, and it reads the landing page alongside
 * the ad. Every claim is about the product, not the person.
 */
const points = [
  "If you get seriously ill, money can come to you — not only to your family after.",
  "A policy that goes with you when you leave the hospital.",
  // Compliance Dec #14: no suggestion of direct market participation.
  "A floor that protects your value in a down index year.",
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-band text-band-foreground">
      {/* Quiet diagonal wash, a nod to her printed material. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          background:
            "radial-gradient(90rem 40rem at 78% -10%, color-mix(in oklab, var(--teal) 55%, transparent), transparent 62%)",
        }}
      />

      <div className="container-page relative grid gap-12 py-14 sm:py-18 lg:grid-cols-[1.05fr_minmax(0,26rem)] lg:gap-14 lg:py-24">
        <div className="max-w-2xl">
          <div className="eyebrow flex items-center gap-2.5 text-gold">
            <span className="grid size-7 shrink-0 place-items-center rounded-full border border-gold/40 text-[0.625rem] font-bold tracking-normal">
              MB
            </span>
            {/* Stacks on phones so the separator never dangles at a line end. */}
            <p className="flex flex-col gap-y-0.5 sm:flex-row sm:items-center sm:gap-x-2">
              <span>Licensed Texas agent since {agent.licensedSince}</span>
              <span aria-hidden="true" className="hidden text-band-muted sm:inline">
                ·
              </span>
              <span>Registered nurse, night shift</span>
            </p>
          </div>

          <h1 className="mt-6 text-[2.5rem] leading-[1.04] font-semibold tracking-[-0.02em] text-balance sm:text-[3.25rem] lg:text-[3.75rem]">
            Life insurance you don&rsquo;t have to die to use.
          </h1>

          <p className="mt-6 max-w-xl text-[1.0625rem] leading-relaxed text-band-muted sm:text-lg">
            And retirement options that aren&rsquo;t invested in the market.
            I&rsquo;m Marynett, a nurse and a licensed Texas agent since{" "}
            {agent.licensedSince}. Fifteen minutes and you&rsquo;ll know where
            you stand.
          </p>

          <ul className="mt-8 space-y-3.5">
            {points.map((point, i) => (
              <li key={point} className="flex gap-3.5">
                <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-gold text-gold-foreground">
                  <Check className="size-3.5" strokeWidth={3} aria-hidden="true" />
                </span>
                <span className="text-[0.9375rem] leading-relaxed text-band-foreground/90 sm:text-base">
                  {point}
                  {i === 2 ? (
                    <sup className="ml-0.5 text-band-muted">*</sup>
                  ) : null}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <a
              href="#book"
              className={cn(buttonVariants(), "h-13 rounded-xl bg-gold px-7 text-base font-semibold text-gold-foreground hover:bg-gold-hover")}
            >
              {cta.primary}
            </a>
            <p className="mt-4 max-w-md text-[0.875rem] leading-relaxed text-band-muted">
              No obligation. No exam to talk. If what you have is fine, I&rsquo;ll
              tell you that too.
            </p>
          </div>
        </div>

        <div id="book" className="scroll-mt-24 lg:pt-2">
          <LeadForm />
        </div>
      </div>

      <TrustBar />
    </section>
  );
}

function TrustBar() {
  const items = [
    { lead: `${yearsLicensed} years`, rest: "licensed in Texas" },
    { lead: "12-hour nights,", rest: "same as you" },
    { lead: "Independent agent,", rest: "multiple carriers" },
    { lead: null, rest: agent.serviceAreas.join(" · ") },
  ];

  return (
    <div className="relative border-t border-band-border bg-background text-foreground">
      <dl className="container-page grid grid-cols-1 gap-x-8 gap-y-3 py-5 sm:grid-cols-2 lg:grid-cols-4 lg:py-4">
        {items.map((item) => (
          <div
            key={item.rest}
            className="flex flex-wrap items-baseline gap-x-1.5 text-[0.9375rem]"
          >
            {item.lead ? (
              <dt className="font-semibold">{item.lead}</dt>
            ) : null}
            <dd className={item.lead ? "text-muted-foreground" : "font-semibold"}>
              {item.rest}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
