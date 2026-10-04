import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Container, Section } from "@/components/archio/section";
import { Cta } from "@/components/archio/cta";
import { AnimatedHeading } from "@/components/motion/animated-heading";
import { LeadForm } from "@/components/forms/lead-form";
import { affiliation, agent } from "@/lib/site";

/**
 * Direction B recruiting funnel. Same compliance spine as Direction A: Meta
 * treats this as the Employment Special Ad Category, and there are no income
 * figures anywhere (Agent Agreement 2(H), Compliance Declaration #6).
 */

export const metadata: Metadata = {
  title: "Work with me",
  description:
    "How a registered nurse got her Texas insurance license, and what she teaches the people she mentors.",
  robots: { index: false, follow: false },
};

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

export default function BWorkWithMe() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Section tone="white" className="bg-background pt-10 text-center">
          <Container className="max-w-3xl">
            <p className="label text-muted-foreground">
              For nurses, teachers and people who like helping people
            </p>
            <AnimatedHeading
              className="display-xl mt-6 text-balance"
              text={`I was a nurse for ${agent.nurseYearsBeforeLicense} years before anyone explained this to me.`}
              muted="Now I teach it."
            />
            <p className="lede mx-auto mt-6 max-w-xl text-muted-foreground">
              I got my Texas insurance license in {agent.licensedSince} and
              learned to help families understand their protection. If
              you&rsquo;re curious how that works alongside a full-time career,
              I&rsquo;ll show you what I did.
            </p>
          </Container>

          <Container className="mt-12 max-w-xl text-left">
            <LeadForm variant="recruit" className="rounded-2xl" />
          </Container>
        </Section>

        {/* The honest version, up front */}
        <Section tone="white" className="bg-background">
          <Container className="max-w-3xl">
            <p className="label text-center text-muted-foreground">
              What this is, plainly
            </p>
            <AnimatedHeading
              as="h2"
              className="display-lg mt-4 text-center text-balance"
              text="Before you spend any time on this,"
              muted="here is the honest version."
            />
            <dl className="mt-10 space-y-3">
              {plainly.map(([title, body]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-border bg-card p-6"
                >
                  <dt className="text-[17px] font-medium tracking-[-0.02em]">
                    {title}
                  </dt>
                  <dd className="body-sm mt-2 text-muted-foreground">{body}</dd>
                </div>
              ))}
            </dl>
            <p className="body-sm mt-8 text-center text-muted-foreground">
              FEG publishes what its representatives actually earn. Read it
              before you decide anything:{" "}
              <a
                href={affiliation.incomeDisclosure}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground underline underline-offset-4"
              >
                FEG Income Disclosure
              </a>
              .
            </p>
          </Container>
        </Section>

        <Section tone="white" className="bg-background">
          <Container className="max-w-3xl text-center">
            <h2 className="display-lg text-balance">
              What you&rsquo;d be learning
            </h2>
            <ul className="mt-10 space-y-3 text-left">
              {learning.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl border border-border bg-card p-6 text-[18px] leading-relaxed font-medium tracking-[-0.02em]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Container>
        </Section>

        <Section tone="white" className="bg-background">
          <Container className="rounded-2xl bg-primary px-8 py-16 text-center text-primary-foreground">
            <h2 className="display-lg text-balance">
              People who are patient, honest and good at explaining things.
            </h2>
            <p className="lede mx-auto mt-4 max-w-md text-white/70">
              Most of the people I mentor are nurses and teachers. They already
              know how to sit with someone on a hard day, which is most of the
              job.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#book"
                className="rounded-full bg-white px-6 py-3 text-[15px] font-medium text-primary transition-opacity hover:opacity-90"
              >
                Ask me what it takes
              </a>
              <Cta
                href={agent.phoneHref}
                variant="secondary"
                className="rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20"
              >
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
