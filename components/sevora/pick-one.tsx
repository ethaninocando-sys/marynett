import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { livingBenefitsNote } from "@/lib/site";

/**
 * The splitter, with a preview of what sits behind each door rather than a
 * description of it. Left shows the comparison the coverage page is built
 * around; right shows the three steps the recruiting page walks through.
 *
 * Adapted from Ethan's build.
 */

const workRows = [
  "Coverage through work",
  "Usually pays at death only",
  "Often tied to your employer",
];

const ownRows = [
  "Coverage you own",
  "Can include living benefits*",
  "Stays with you if you change jobs",
];

const steps = [
  "Get licensed in Texas",
  "Learn to explain coverage",
  "Sit with a family",
];

function Door({
  href,
  title,
  body,
  children,
}: {
  href: string;
  title: string;
  body: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-3xl bg-white p-6 shadow-[0_4px_8px_-4px_var(--sv-300),0_12px_18px_-2px_var(--sv-300)] transition-shadow hover:shadow-[0_8px_16px_-6px_var(--sv-400),0_20px_32px_-4px_var(--sv-400)] sm:p-8"
    >
      <div className="relative mb-8 h-[300px] overflow-hidden rounded-2xl">
        {children}
      </div>
      <h3 className="display-md">{title}</h3>
      <p className="body-sm mt-2 text-muted-foreground">{body}</p>
      <p className="mt-6 flex items-center gap-2 text-[15px] font-medium">
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
    <section className="px-4 pb-16 sm:px-6">
      <div className="mx-auto w-full max-w-[1152px]">
        <h2 className="display-lg mb-12 text-center">Pick one.</h2>

        <div className="grid gap-5 lg:grid-cols-2">
          <Door
            href="/b/coverage"
            title="Protect my family"
            body="See what your coverage actually does."
          >
            {/* Work coverage, receding behind the policy she sells. */}
            <div className="absolute inset-x-0 top-6 bottom-6 left-0 w-[62%] rounded-xl bg-muted/70 px-5">
              {workRows.map((row) => (
                <p
                  key={row}
                  className="body-sm border-b border-border py-5 text-muted-foreground last:border-0"
                >
                  {row}
                </p>
              ))}
            </div>

            <div className="sv-card-dark absolute top-2 right-0 bottom-10 w-[58%] rounded-xl px-5 py-4 text-white">
              {ownRows.map((row) => (
                <p
                  key={row}
                  className="border-b border-white/15 py-4 text-[15px] leading-snug tracking-[-0.02em] last:border-0"
                >
                  {row}
                </p>
              ))}
            </div>
          </Door>

          <Door
            href="/b/work-with-me"
            title="Work with me"
            body="How I got licensed, and how you can."
          >
            {/* Three steps, each one a step further in. */}
            <div className="flex h-full flex-col justify-center gap-4">
              {steps.map((step, i) => (
                <div
                  key={step}
                  style={{ marginLeft: `${i * 9}%`, width: `${100 - i * 9}%` }}
                  className="sv-pill-light flex items-center gap-4 rounded-xl py-4 pr-5 pl-4"
                >
                  <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-white text-[15px] font-medium text-muted-foreground shadow-sm">
                    {i + 1}
                  </span>
                  <span className="text-[15px] font-medium tracking-[-0.02em]">
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </Door>
        </div>

        <p className="body-sm mx-auto mt-10 max-w-2xl text-center text-[13px] text-muted-foreground">
          {livingBenefitsNote}
        </p>
      </div>
    </section>
  );
}
