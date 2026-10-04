import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Container, Eyebrow, Section } from "@/components/archio/section";
import { BgShapes } from "@/components/archio/bg-shapes";
import { Cta } from "@/components/archio/cta";
import { LeadForm } from "@/components/forms/lead-form";
import { affiliation, agent } from "@/lib/site";

/**
 * Recruiting funnel. Meta classifies this as the Employment Special Ad
 * Category: no lookalikes, no age/gender/ZIP targeting, 15-mile minimum radius
 * in the US. Ads for this page run as their own campaign and never point at
 * the consumer funnel.
 *
 * No income claims anywhere. Agent Agreement 2(H) and Compliance Declaration
 * #6 limit earnings statements to what FEG publishes, and FEG's own disclosure
 * puts the 2024 average for all licensed reps at $8,152.
 */

export const metadata: Metadata = {
  title: "Work with me",
  description:
    "How a registered nurse got her Texas insurance license, and what she teaches the people she mentors.",
  /** Ad traffic only. Stays out of search even after the consumer page launches. */
  robots: { index: false, follow: false },
};

const points = [
  "How getting licensed in Texas works, step by step",
  "What I actually do with a family, from first call to policy",
  "What the licensing process takes",
];

/** The compliance spine. Every line here maps to a Declaration. */
const plainly: [string, string][] = [
  [
    "This is not a job, a salary or a position.",
    "You would be an independent agent, running your own business.",
  ],
  [
    "You need a state insurance license first.",
    "Until you have one, you cannot talk to clients about products.",
  ],
  [
    "Nobody is paid for bringing in other agents.",
    "Agents are paid commissions only when a client puts a policy in place, and there is no guarantee of income.",
  ],
  [
    "There are costs to get started.",
    "State licensing, errors and omissions coverage, and FEG's one-time $125 enrollment fee.",
  ],
];

const learning = [
  "To explain coverage in plain words, the way you already explain things to patients or students",
  "To sit down with a family and find what is missing",
  "To do it properly: licensed, trained and by the rules",
];

export default function WorkWithMePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <Section tone="white" className="pt-5 pb-0">
          <Container className="grid items-start gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
            <div>
              <Eyebrow>
                For nurses, teachers and people who like helping people
              </Eyebrow>
              <h1 className="display-xl mt-5 text-balance">
                I was a nurse for {agent.nurseYearsBeforeLicense} years before
                anyone explained this to me. Now I teach it.
              </h1>
              <p className="lede mt-6 max-w-xl text-muted-foreground">
                I got my Texas insurance license in {agent.licensedSince} and
                learned to help families understand their protection. If
                you&rsquo;re curious how that works alongside a full-time
                career, I&rsquo;ll show you what I did.
              </p>

              <ul className="mt-8 max-w-xl space-y-3.5">
                {points.map((point) => (
                  <li key={point} className="flex gap-3.5">
                    <span
                      aria-hidden="true"
                      className="mt-[0.7em] h-px w-5 shrink-0 bg-primary"
                    />
                    <span className="text-[15px] leading-relaxed tracking-[-0.02em]">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <LeadForm variant="recruit" />
          </Container>
        </Section>

        {/* What this is, plainly — leads with honesty, which is the gap */}
        <Section tone="bone" className="mt-20 md:mt-24">
          <BgShapes position="left" />
          <Container>
            <Eyebrow>What this is, plainly</Eyebrow>
            <h2 className="display-lg mt-4 max-w-2xl text-balance">
              Before you spend any time on this, here is the honest version.
            </h2>

            <dl className="mt-10 max-w-3xl">
              {plainly.map(([title, body]) => (
                <div
                  key={title}
                  className="border-b border-border py-6 first:border-t"
                >
                  <dt className="text-[17px] font-medium tracking-[-0.02em]">
                    {title}
                  </dt>
                  <dd className="body-sm mt-2 text-muted-foreground">{body}</dd>
                </div>
              ))}
            </dl>

            <p className="body-sm mt-8 max-w-2xl text-muted-foreground">
              FEG publishes what its representatives actually earn. Read it
              before you decide anything:{" "}
              <a
                href={affiliation.incomeDisclosure}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-primary underline underline-offset-4"
              >
                FEG Income Disclosure
              </a>
              .
            </p>
          </Container>
        </Section>

        {/* What you'd be learning */}
        <Section tone="white">
          <Container>
            <Eyebrow>What you&rsquo;d be learning</Eyebrow>
            <ul className="mt-8 max-w-3xl">
              {learning.map((item) => (
                <li
                  key={item}
                  className="heading-sm border-b border-border py-5 first:border-t"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Container>
        </Section>

        {/* Who I work well with */}
        <Section tone="bone">
          <Container>
            <Eyebrow>Who I work well with</Eyebrow>
            <h2 className="display-lg mt-4 max-w-2xl text-balance">
              People who are patient, honest and good at explaining things.
            </h2>
            <p className="lede mt-4 max-w-xl text-muted-foreground">
              Most of the people I mentor are nurses and teachers. They already
              know how to sit with someone on a hard day, which is most of the
              job.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Cta href="#book">Ask me what it takes</Cta>
              <Cta href={agent.phoneHref} variant="secondary">
                Or call {agent.phoneDisplay}
              </Cta>
            </div>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
