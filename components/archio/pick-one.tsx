import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { livingBenefitsNote } from "@/lib/site";

/**
 * Direction A's splitter. Same idea as Direction B's, rendered in Archio's
 * language instead of Sevora's: cream cards at the template's 10px radius,
 * hairline rules, the serif numeral treatment Archio uses for process steps.
 */

const compare: [string, boolean, boolean][] = [
  ["Pays if you die", true, true],
  ["Can pay if you're seriously ill*", false, true],
  ["Still yours if you quit", false, true],
];

const steps = [
  "Get licensed in Texas",
  "Learn to explain coverage",
  "Sit with a family",
];

function Door({
  href,
  eyebrow,
  title,
  body,
  children,
}: {
  href: string;
  eyebrow: string;
  title: string;
  body: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group flex flex-col rounded-xl border border-border bg-card p-7 transition-colors hover:border-primary sm:p-9"
    >
      <div className="mb-8 min-h-[232px]">{children}</div>
      <p className="label text-primary">{eyebrow}</p>
      <h3 className="display-md mt-3">{title}</h3>
      <p className="body-sm mt-2 text-muted-foreground">{body}</p>
      <p className="mt-6 flex items-center gap-2 text-[15px] font-medium transition-colors group-hover:text-primary">
        Go
        <ArrowRight
          className="size-4 transition-transform group-hover:translate-x-1"
          aria-hidden="true"
        />
      </p>
    </Link>
  );
}

export function PickOne() {
  return (
    <section className="section-pad bg-background">
      <div className="container-page">
        <h2 className="display-lg mb-12 text-center">Pick one.</h2>

        <div className="grid gap-5 lg:grid-cols-2">
          <Door
            href="/b/coverage"
            eyebrow="For families"
            title="Protect my family"
            body="See where your coverage stops."
          >
            {/* A reduced version of the table on the coverage page. */}
            <div className="overflow-hidden rounded-lg border border-border">
              <div className="grid grid-cols-[1fr_auto_auto] items-center gap-x-5 bg-background px-4 py-3">
                <span className="label text-muted-foreground">What it does</span>
                <span className="label w-16 text-center text-muted-foreground">
                  Work
                </span>
                <span className="label w-16 rounded bg-primary py-1 text-center text-primary-foreground">
                  You own
                </span>
              </div>
              {compare.map(([label, work, own]) => (
                <div
                  key={label}
                  className="grid grid-cols-[1fr_auto_auto] items-center gap-x-5 border-t border-border bg-background px-4 py-3.5"
                >
                  <span className="text-[13px] leading-snug">{label}</span>
                  <span className="w-16 text-center text-muted-foreground">
                    {work ? (
                      <Check className="mx-auto size-4 text-primary" />
                    ) : (
                      "—"
                    )}
                  </span>
                  <span className="w-16 bg-bone/60 py-1 text-center">
                    {own ? <Check className="mx-auto size-4 text-primary" /> : "—"}
                  </span>
                </div>
              ))}
            </div>
          </Door>

          <Door
            href="/b/work-with-me"
            eyebrow="For nurses and teachers"
            title="Work with me"
            body="How I got licensed, and how you can."
          >
            {/* Archio's process treatment: serif numeral over a rule. */}
            <ol className="grid gap-5 sm:grid-cols-3">
              {steps.map((step, i) => (
                <li key={step} className="border-t border-foreground pt-4">
                  <p className="font-display text-[1.75rem] leading-none font-light text-primary">
                    {i + 1}
                  </p>
                  <p className="mt-3 text-[13px] leading-snug font-medium">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </Door>
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-[13px] leading-relaxed text-muted-foreground">
          {livingBenefitsNote}
        </p>
      </div>
    </section>
  );
}
