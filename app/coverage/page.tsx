import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Container, Eyebrow, Section } from "@/components/archio/section";
import { BgShapes } from "@/components/archio/bg-shapes";
import { Cta } from "@/components/archio/cta";
import { LeadForm } from "@/components/forms/lead-form";
import { Placeholder } from "@/components/ui/placeholder";
import { agent, testimonials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Life insurance you don't have to die to use",
  description:
    "A 15-minute check of what your coverage does today, with a registered nurse and licensed Texas agent.",
};

const points = [
  "What your coverage at work actually does, and what happens to it if you leave",
  "How living benefits work, and who qualifies*",
  "Straight answers from a nurse. No pressure either way",
];

const comparison: [string, string][] = [
  ["Usually pays at death only", "Can include living benefits for serious illness*"],
  ["Often tied to your employer", "Stays with you if you change jobs"],
  ["Rarely explained to you", "Explained by someone who works the same floors"],
];

const steps: [string, string][] = [
  ["You pick a time.", "I call you."],
  ["We look at what you have today.", ""],
  ["I show you the gaps, if there are any.", "You decide what to do next."],
];

/**
 * "How do you get paid?" is answered as a commission disclosure, never as
 * "free" — FEG Compliance Declaration #23 bars an agent from presenting their
 * services as free or their products as lowest cost.
 */
const faqs: [string, string][] = [
  [
    "How do you get paid?",
    "The call comes with no obligation. I’m an appointed insurance agent, so if you buy a policy the insurance company pays me a commission that’s built into it. I’ll walk you through how that works on the call so nothing catches you off guard.",
  ],
  [
    "I already have insurance at work.",
    "Good, bring it. We’ll look at what it actually pays if you get sick, and what happens to it the day you leave.",
  ],
  [
    "Do I need a medical exam?",
    "Depends on the policy and the company. A lot of them skip it now. We’ll find out on the call.",
  ],
  [
    "Will you pressure me?",
    "No. It’s a fifteen-minute conversation. If you’re fine as you are, I’ll say so.",
  ],
  [
    "Do you give tax or investment advice?",
    "No. For tax questions, including moving retirement accounts, please talk to a tax professional.",
  ],
];

export default function CoveragePage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <Section tone="white" className="pt-5 pb-0">
          <Container className="grid items-start gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
            <div>
              <Eyebrow>
                Registered nurse · Licensed Texas agent since{" "}
                {agent.licensedSince}
              </Eyebrow>
              <h1 className="display-xl mt-5 text-balance">
                Life insurance you don&rsquo;t have to die to use.
              </h1>
              <p className="lede mt-6 max-w-xl text-muted-foreground">
                Some policies can pay you while you&rsquo;re living if
                you&rsquo;re diagnosed with a serious illness.
                <sup>*</sup> In fifteen minutes I&rsquo;ll walk you through what
                you have now and what it would do.
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

            <div>
              <LeadForm variant="coverage" />
              <p className="body-sm mt-4 text-muted-foreground">
                If your coverage is already fine, I&rsquo;ll tell you so.
              </p>
            </div>
          </Container>
        </Section>

        {/* Trust strip */}
        <div className="border-y border-border bg-bone">
          <ul className="container-page grid gap-x-8 gap-y-2 px-[18px] py-6 text-[15px] font-medium tracking-[-0.02em] sm:grid-cols-2 lg:grid-cols-4 md:px-[50px]">
            <li>RN for {agent.nurseYears} years</li>
            <li>Licensed in Texas since {agent.licensedSince}</li>
            <li>
              {agent.city}, {agent.state}
            </li>
            <li>Calls around your shift</li>
          </ul>
        </div>

        {/* The question + comparison */}
        <Section tone="bone">
          <BgShapes position="right" />
          <Container>
            <div className="max-w-2xl">
              <Eyebrow>The question nobody at work asks</Eyebrow>
              <h2 className="display-lg mt-4 text-balance">
                If you got sick tomorrow and couldn&rsquo;t work, who pays the
                bills?
              </h2>
              <div className="lede mt-6 space-y-4 text-muted-foreground">
                <p>
                  Many people I work with have life insurance through their job
                  and believe they&rsquo;re covered. That coverage usually pays
                  if you die. It&rsquo;s often tied to the job.
                </p>
                <p>
                  And most people have never been shown what it does if they
                  survive a heart attack, a stroke or cancer and can&rsquo;t
                  work for a year.
                </p>
                <p>
                  About 4 in 10 of us will hear the word cancer in our lifetime.
                  <sup>1</sup> The bills don&rsquo;t know that.
                </p>
              </div>
            </div>

            <table className="mt-12 w-full max-w-3xl border-collapse text-left">
              <thead>
                <tr className="border-b border-foreground align-bottom">
                  <th scope="col" className="label w-1/2 py-3 pr-5 text-muted-foreground">
                    Coverage through work
                  </th>
                  <th scope="col" className="label w-1/2 py-3 pl-5 text-primary">
                    Coverage you own
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map(([work, own]) => (
                  <tr key={work} className="border-b border-border align-top">
                    <td className="body-sm py-4 pr-5 text-muted-foreground">
                      {work}
                    </td>
                    <td className="py-4 pl-5 text-[15px] font-medium tracking-[-0.02em]">
                      {own}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <Cta href="#book" className="mt-10">
              Check what mine covers
            </Cta>
          </Container>
        </Section>

        {/* How the 15 minutes works */}
        <Section tone="white">
          <Container>
            <h2 className="display-lg max-w-2xl text-balance">
              How the 15 minutes works
            </h2>
            <ol className="mt-10 grid gap-8 md:grid-cols-3">
              {steps.map(([title, detail], i) => (
                <li key={title} className="border-t border-foreground pt-5">
                  <p className="font-display text-[2rem] leading-none font-light text-primary">
                    {i + 1}
                  </p>
                  <p className="mt-4 text-[15px] font-medium tracking-[-0.02em]">
                    {title}
                  </p>
                  {detail ? (
                    <p className="body-sm mt-1 text-muted-foreground">{detail}</p>
                  ) : null}
                </li>
              ))}
            </ol>
          </Container>
        </Section>

        {/* Proof — stays empty until there are real, consented quotes */}
        <Section tone="bone">
          <Container>
            <Eyebrow>What people say</Eyebrow>
            {testimonials.length > 0 ? (
              <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((t) => (
                  <li
                    key={`${t.initial}-${t.city}`}
                    className="rounded-lg border border-border bg-card p-6"
                  >
                    <blockquote className="font-display text-[18px] leading-relaxed">
                      &ldquo;{t.quote}&rdquo;
                    </blockquote>
                    <p className="body-sm mt-4 font-medium">
                      {t.initial}, {t.city}
                      <span className="text-muted-foreground"> · {t.role}</span>
                    </p>
                  </li>
                ))}
              </ul>
            ) : (
              <Placeholder
                className="mt-6 min-h-40"
                label="Client stories"
                note="Hidden at launch. Added only with real quotes, written permission and FEG approval."
              />
            )}
          </Container>
        </Section>

        {/* FAQ */}
        <Section tone="white">
          <Container className="max-w-3xl">
            <Eyebrow>Questions people ask</Eyebrow>
            <h2 className="display-lg mt-4 text-balance">
              The ones that come up every time
            </h2>
            <dl className="mt-10">
              {faqs.map(([q, a]) => (
                <div key={q} className="border-b border-border py-6 first:border-t">
                  <dt className="text-[17px] font-medium tracking-[-0.02em]">
                    {q}
                  </dt>
                  <dd className="body-sm mt-2 max-w-2xl text-muted-foreground">
                    {a}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-12 flex flex-wrap gap-3">
              <Cta href="#book">Book my 15-minute check</Cta>
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
