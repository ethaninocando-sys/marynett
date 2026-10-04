import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Container, Section } from "@/components/archio/section";
import { Cta } from "@/components/archio/cta";
import { AnimatedHeading } from "@/components/motion/animated-heading";
import { LeadForm } from "@/components/forms/lead-form";
import { Placeholder } from "@/components/ui/placeholder";
import { agent, testimonials } from "@/lib/site";

export const metadata: Metadata = {
  title: "Life insurance you don't have to die to use",
  description:
    "A 15-minute check of what your coverage does today, with a registered nurse and licensed Texas agent.",
};

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

const faqs: [string, string][] = [
  ["How do you get paid?", "The call comes with no obligation. I’m an appointed insurance agent, so if you buy a policy the insurance company pays me a commission that’s built into it. I’ll walk you through how that works on the call so nothing catches you off guard."],
  ["I already have insurance at work.", "Good, bring it. We’ll look at what it actually pays if you get sick, and what happens to it the day you leave."],
  ["Do I need a medical exam?", "Depends on the policy and the company. A lot of them skip it now. We’ll find out on the call."],
  ["Will you pressure me?", "No. It’s a fifteen-minute conversation. If you’re fine as you are, I’ll say so."],
  ["Do you give tax or investment advice?", "No. For tax questions, including moving retirement accounts, please talk to a tax professional."],
];

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

export default function BCoverage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Section tone="white" className="bg-background pt-10 text-center">
          <Container className="max-w-3xl">
            <p className="label text-muted-foreground">
              Registered nurse · Licensed Texas agent since {agent.licensedSince}
            </p>
            <AnimatedHeading
              className="display-xl mt-6 text-balance"
              text="Life insurance you don't have to die to use."
            />
            <p className="lede mx-auto mt-6 max-w-xl text-muted-foreground">
              Some policies can pay you while you&rsquo;re living if you&rsquo;re
              diagnosed with a serious illness.<sup>*</sup> In fifteen minutes
              I&rsquo;ll walk you through what you have now and what it would do.
            </p>

            <dl className="mt-12 grid grid-cols-3 gap-6 border-y border-border py-8">
              {stats.map(([value, label]) => (
                <div key={label}>
                  <dt className="font-display text-[26px] leading-none font-semibold tracking-[-0.02em] md:text-[32px]">
                    {value}
                  </dt>
                  <dd className="label mt-2 text-muted-foreground">{label}</dd>
                </div>
              ))}
            </dl>
          </Container>

          <Container className="mt-12 max-w-xl text-left">
            <LeadForm variant="coverage" className="rounded-2xl" />
            <p className="body-sm mt-4 text-center text-muted-foreground">
              No obligation, and no medical exam just to talk. If your coverage
              is already fine, I&rsquo;ll tell you so.
            </p>
          </Container>
        </Section>

        <Section tone="white" className="bg-background">
          <Container className="max-w-3xl text-center">
            <p className="label text-muted-foreground">
              The question nobody at work asks
            </p>
            <AnimatedHeading
              as="h2"
              className="display-lg mt-4 text-balance"
              text="If you got sick tomorrow and couldn't work, who pays the bills?"
            />
            <div className="lede mx-auto mt-6 max-w-xl space-y-4 text-left text-muted-foreground">
              <p>
                Many people I work with have life insurance through their job and
                believe they&rsquo;re covered. That coverage usually pays if you
                die. It&rsquo;s often tied to the job.
              </p>
              <p>
                And most people have never been shown what it does if they survive
                a heart attack, a stroke or cancer and can&rsquo;t work for a year.
              </p>
              <p>
                About 4 in 10 of us will hear the word cancer in our lifetime.
                <sup>1</sup> Most of us will survive it. The bills don&rsquo;t know
                that.
              </p>
            </div>
          </Container>

          <Container className="mt-12 max-w-3xl">
            <div className="overflow-hidden rounded-2xl border border-border bg-card">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="border-b border-border">
                    <th scope="col" className="label w-1/2 p-5 text-muted-foreground">
                      Coverage through work
                    </th>
                    <th scope="col" className="label w-1/2 p-5">
                      Coverage you own
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map(([work, own]) => (
                    <tr key={work} className="border-b border-border last:border-0 align-top">
                      <td className="body-sm p-5 text-muted-foreground">{work}</td>
                      <td className="p-5 text-[16px] font-medium tracking-[-0.02em]">
                        {own}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-8 text-center">
              <Cta href="#book" className="rounded-full">
                Check what mine covers
              </Cta>
            </div>
          </Container>
        </Section>

        <Section tone="white" className="bg-background">
          <Container className="max-w-4xl text-center">
            <h2 className="display-lg text-balance">How the 15 minutes works</h2>
            <ol className="mt-10 grid gap-4 md:grid-cols-3">
              {steps.map(([title, detail], i) => (
                <li
                  key={title}
                  className="rounded-2xl border border-border bg-card p-6 text-left"
                >
                  <p className="font-display text-[28px] leading-none font-semibold text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p className="mt-4 text-[16px] font-medium tracking-[-0.02em]">
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

        <Section tone="white" className="bg-background">
          <Container className="max-w-3xl text-center">
            <p className="label text-muted-foreground">What people say</p>
            {testimonials.length > 0 ? null : (
              <Placeholder
                className="mt-6 min-h-40 rounded-2xl"
                label="Client stories"
                note="Hidden at launch. Added only with real quotes, written permission and FEG approval."
              />
            )}
          </Container>
        </Section>

        <Section tone="white" className="bg-background">
          <Container className="max-w-3xl">
            <h2 className="display-lg text-center text-balance">
              The ones that come up every time
            </h2>
            <dl className="mt-10 space-y-3">
              {faqs.map(([q, a]) => (
                <div key={q} className="rounded-2xl border border-border bg-card p-6">
                  <dt className="text-[17px] font-medium tracking-[-0.02em]">{q}</dt>
                  <dd className="body-sm mt-2 text-muted-foreground">{a}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <Cta href="#book" className="rounded-full">
                Book my 15-minute check
              </Cta>
              <Cta
                href={agent.phoneHref}
                variant="secondary"
                className="rounded-full border border-border"
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
