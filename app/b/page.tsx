import { ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Container, Section } from "@/components/archio/section";
import { SevoraHeroPanel } from "@/components/sevora/hero-panel";
import { Cta } from "@/components/archio/cta";
import { AnimatedHeading } from "@/components/motion/animated-heading";
import { agent } from "@/lib/site";

/**
 * Direction B splitter, in Sevora's shape: centred hero, two-tone animated
 * headline, a stats row under the fold line, then white cards on grey.
 * Same copy as Direction A so the comparison is about design, not words.
 */

/**
 * Concrete beats evocative here. The buyer's stated fear is being lied to, so
 * each stat is something they could go and verify: her tenure, her actual
 * license number on the Texas DOI lookup, and exactly what the call costs them
 * in time.
 */
const stats: [string, string][] = [
  [`${agent.nurseYears} years`, "A nurse, still working the floor"],
  [`Since ${agent.licensedSince}`, `Texas license #${agent.licenseNumber}`],
  ["15 minutes", "One call. No second appointment."],
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
        <SevoraHeroPanel
          eyebrow="Registered nurse · Licensed Texas agent"
          image="/marynett-hero.webp"
          imageAlt={`${agent.name}, registered nurse and licensed Texas insurance agent`}
          card={{
            label: "Next step",
            title: "Let’s talk",
            body: "Tell me what you have. I'll tell you where you stand.",
            href: "/b/coverage",
          }}
        >
          <AnimatedHeading
            className="display-xl text-balance"
            text={`${agent.nurseYearsWord} years at the bedside taught me what families aren't ready for.`}
          />

          <p className="lede mt-6 text-muted-foreground">
            I&rsquo;m Marynett, a registered nurse and a licensed Texas
            insurance agent since {agent.licensedSince}. I help families
            understand their protection before they need it, and I teach others
            to do the same.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
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

          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {stats.map(([value, label]) => (
              <div key={label}>
                <dt className="font-display text-[22px] leading-none font-semibold tracking-[-0.02em] md:text-[26px]">
                  {value}
                </dt>
                <dd className="label mt-2 text-[13px] text-muted-foreground">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </SevoraHeroPanel>

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
          <Container className="max-w-3xl">
            <div>
              <p className="label text-muted-foreground">
                Why a nurse does this
              </p>
              <AnimatedHeading
                as="h2"
                className="display-lg mt-4 text-balance"
                text="Most families had coverage. Few knew what it actually did."
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
