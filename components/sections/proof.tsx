import { Star } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { agent, cta, testimonials } from "@/lib/site";

const stats = [
  { value: String(agent.licensedSince), label: "Licensed in Texas" },
  { value: "15 min", label: "Is all it takes" },
  { value: "1 in 4", label: "Years the market ends down", note: 2 },
];

export function Proof() {
  const hasQuotes = testimonials.length > 0;

  return (
    <section
      className={
        // Until real quotes land this is a slim credibility band, not a full
        // section — otherwise three stats float in a screen of empty space.
        hasQuotes
          ? "section-y bg-secondary/50"
          : "border-y border-border bg-secondary/50 py-12 sm:py-14"
      }
    >
      <div className="container-page">
        {hasQuotes ? (
          <>
            <div className="mx-auto max-w-2xl text-center">
              <p className="eyebrow text-teal">What people say</p>
              <h2 className="mt-4 text-[2rem] leading-[1.1] font-semibold tracking-[-0.02em] text-balance sm:text-[2.5rem]">
                Real people from the Valley, in their own words
              </h2>
              <p className="mt-4 text-[0.9375rem] text-muted-foreground">
                Clients quoted by first initial and city, with their permission.
              </p>
            </div>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t) => (
                <li
                  key={`${t.initial}-${t.city}`}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <div className="flex gap-0.5 text-gold" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3.5 fill-current" />
                    ))}
                  </div>
                  <blockquote className="mt-4 font-display text-[0.9375rem] leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <p className="mt-4 text-[0.8125rem] font-semibold">
                    {t.initial}, {t.city}
                    <span className="font-normal text-muted-foreground">
                      {" "}
                      · {t.role}
                    </span>
                  </p>
                </li>
              ))}
            </ul>
          </>
        ) : null}

        <dl
          className={`grid grid-cols-3 gap-x-4 gap-y-8 text-center sm:gap-x-8 ${
            hasQuotes ? "mt-14" : ""
          }`}
        >
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="font-display text-[1.625rem] leading-none font-semibold tracking-tight sm:text-[2.25rem]">
                {stat.value}
              </dt>
              <dd className="eyebrow mt-2.5 text-[0.625rem] text-muted-foreground sm:text-[0.6875rem]">
                {stat.label}
                {stat.note ? (
                  <sup className="ml-0.5 normal-case">{stat.note}</sup>
                ) : null}
              </dd>
            </div>
          ))}
        </dl>

        <div className={hasQuotes ? "mt-12 text-center" : "mt-9 text-center"}>
          <a
            href="#book"
            className={cn(buttonVariants(), "h-12 rounded-xl px-7 text-[0.9375rem] font-semibold")}
          >
            {cta.primary}
          </a>
        </div>
      </div>
    </section>
  );
}
