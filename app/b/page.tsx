import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Container, Section } from "@/components/archio/section";
import { Cta } from "@/components/archio/cta";
import { AnimatedHeading } from "@/components/motion/animated-heading";
import { agent, yearsLicensed } from "@/lib/site";

/**
 * Direction B splitter, in Sevora's shape: centred hero, two-tone animated
 * headline, a stats row under the fold line, then white cards on grey.
 * Same copy as Direction A so the comparison is about design, not words.
 */

const stats: [string, string][] = [
  [`${agent.nurseYears}yr`, "At the bedside"],
  [`${yearsLicensed}yr`, "Licensed in Texas"],
  ["15 min", "That's the whole call"],
];

const doors = [
  {
    eyebrow: "For families",
    title: "Protect my family",
    body: "See what your coverage does, and what it doesn't.",
    href: "/b/coverage",
  },
  {
    eyebrow: "For nurses and teachers",
    title: "Work with me",
    body: "How I got licensed, and what I teach.",
    href: "/b/work-with-me",
  },
];

export default function DirectionBHome() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Hero, centred, with the per-character reveal */}
        <Section tone="white" className="bg-background pt-10 text-center">
          <Container className="max-w-3xl">
            <p className="label text-muted-foreground">
              Registered nurse · Licensed Texas agent
            </p>

            <AnimatedHeading
              className="display-xl mt-6 text-balance"
              lead={`${agent.nurseYearsWord} years at the bedside taught me`}
              text="what families aren't ready for."
            />

            <p className="lede mx-auto mt-6 max-w-xl text-muted-foreground">
              I&rsquo;m Marynett, a registered nurse and a licensed Texas
              insurance agent since {agent.licensedSince}. I help families
              understand their protection before they need it, and I teach
              others to do the same.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Cta href="/b/coverage" className="rounded-full">
                Protect my family
              </Cta>
              <Cta
                href="/b/work-with-me"
                variant="secondary"
                className="rounded-full border border-border"
              >
                Work with me
              </Cta>
            </div>

            <dl className="mt-16 grid grid-cols-3 gap-6 border-t border-border pt-10">
              {stats.map(([value, label]) => (
                <div key={label}>
                  <dt className="font-display text-[28px] leading-none font-semibold tracking-[-0.02em] md:text-[34px]">
                    {value}
                  </dt>
                  <dd className="label mt-2 text-muted-foreground">{label}</dd>
                </div>
              ))}
            </dl>
          </Container>
        </Section>

        {/* Two doors */}
        <Section tone="white" className="bg-background pt-0">
          <Container className="grid gap-4 md:grid-cols-2">
            {doors.map((door) => (
              <a
                key={door.href}
                href={door.href}
                className="group block rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-md"
              >
                <p className="label text-muted-foreground">{door.eyebrow}</p>
                <h2 className="display-md mt-3 flex items-center gap-2">
                  {door.title}
                  <ArrowUpRight
                    className="size-6 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden="true"
                  />
                </h2>
                <p className="body-sm mt-3 text-muted-foreground">
                  {door.body}
                </p>
              </a>
            ))}
          </Container>
        </Section>

        {/* Why a nurse does this */}
        <Section tone="white" className="bg-background">
          <Container className="grid items-center gap-10 md:grid-cols-[1fr_0.8fr] md:gap-16">
            <div>
              <p className="label text-muted-foreground">
                Why a nurse does this
              </p>
              <AnimatedHeading
                as="h2"
                className="display-lg mt-4 text-balance"
                lead="Most families had coverage."
                text="Few knew what it actually did."
              />
              <div className="lede mt-6 space-y-4 text-muted-foreground">
                <p>
                  I&rsquo;ve worked 12-hour night shifts for most of my career.
                  I&rsquo;ve sat with families on the worst day of their lives,
                  and I&rsquo;ve watched the second shock arrive later: the
                  bills.
                </p>
                <p>
                  I got licensed so I could explain it in plain words, one
                  family at a time.
                </p>
              </div>
            </div>

            <figure className="mx-auto w-full max-w-xs md:max-w-none">
              <div className="overflow-hidden rounded-2xl border border-border bg-card">
                <Image
                  src="/marynett-bolivar.webp"
                  alt={`${agent.name}, registered nurse and licensed Texas insurance agent`}
                  width={525}
                  height={635}
                  sizes="(min-width: 768px) 22rem, 80vw"
                  className="h-auto w-full object-cover"
                />
              </div>
            </figure>
          </Container>
        </Section>

        {/* Closing */}
        <Section tone="white" className="bg-background">
          <Container className="rounded-2xl bg-primary px-8 py-16 text-center text-primary-foreground">
            <h2 className="display-lg text-balance">
              Not sure which door is yours?
            </h2>
            <p className="lede mx-auto mt-4 max-w-md text-white/70">
              Call or text me and I&rsquo;ll point you the right way.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={agent.phoneHref}
                className="rounded-full bg-white px-6 py-3 text-[15px] font-medium text-primary transition-opacity hover:opacity-90"
              >
                {agent.phoneDisplay}
              </a>
            </div>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
