import type { Metadata } from "next";
import { BadgeCheck, MessageSquareText, Users } from "lucide-react";
import { site } from "@/lib/site";
import { Confirm } from "@/components/Confirm";
import { LeadForm } from "@/components/LeadForm";
import { Reveal } from "@/components/sevora/Reveal";
import { Words } from "@/components/sevora/Words";

export const metadata: Metadata = {
  title: "Work with me",
  description:
    "How a registered nurse got her Texas insurance license, and what she teaches new agents.",
};

const points = [
  "How Texas licensing works",
  "What an agent does, first call to policy",
  "What it costs to start",
];

const learning = [
  { icon: MessageSquareText, text: "Explain coverage in plain words." },
  { icon: Users, text: "Sit with a family and find what’s missing." },
  {
    icon: BadgeCheck,
    text: "Do it by the rules: licensed and trained first.",
  },
];

export default function WorkWithMePage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto w-full max-w-[1200px] px-4 pt-8 pb-4 md:px-6 md:pt-14">
        <div className="sv-hero-panel grid items-start gap-x-16 gap-y-8 pb-8 min-[1200px]:grid-cols-[1.1fr_1fr] min-[1200px]:grid-rows-[auto_1fr] min-[1200px]:p-20">
          <div className="flex flex-col gap-4">
            <Reveal>
              <span className="sv-badge">
                <span className="sv-dot" />
                Any background. Texas license required.
              </span>
            </Reveal>
            <h1 className="sv-display-sm">
              <Words text="I was a nurse for" />
              <Confirm>{site.nurseYearsBeforeLicense}</Confirm>{" "}
              <Words
                text="years before anyone explained this to me."
                start={6}
              />
              <Words text="Now I teach it." start={13} muted />
            </h1>
            <Reveal delay={450}>
              <p className="sv-lg max-w-[500px]">
                <Confirm>I came to this from nursing, not finance.</Confirm> I
                got my Texas license in <Confirm>{site.licensedSince}</Confirm>.
                Want to know what it takes? Ask me.
              </p>
            </Reveal>
          </div>

          {/* On phones the form sits right under the headline. */}
          <Reveal
            delay={300}
            className="min-[1200px]:col-start-2 min-[1200px]:row-span-2 min-[1200px]:row-start-1"
          >
            <LeadForm variant="recruit" />
          </Reveal>

          <Reveal delay={650} className="min-[1200px]:col-start-1">
            <ul className="grid max-w-[500px] gap-3">
              {points.map((point) => (
                <li
                  key={point}
                  className="flex items-start gap-3 text-lg leading-7"
                >
                  <span className="sv-dot mt-2" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* What you'd learn */}
      <section className="sv-container flex flex-col gap-12 md:gap-16">
        <Reveal>
          <div className="sv-head max-w-[640px]">
            <h2 className="sv-h2">What you&rsquo;d learn</h2>
            <p className="sv-lg">
              Agents sit down with families and help them choose life insurance
              and annuities from the companies they are appointed with.
            </p>
          </div>
        </Reveal>
        <div className="grid gap-2 md:grid-cols-3">
          {learning.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.text} delay={index * 100}>
                <article className="sv-card flex h-full min-h-[240px] flex-col justify-between gap-10 p-6">
                  <span className="sv-tile">
                    <Icon size={24} strokeWidth={1.5} />
                  </span>
                  <p className="sv-h4">{item.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* What this is, plainly */}
      <section className="sv-container grid gap-12 lg:grid-cols-2 lg:gap-24">
        <div className="lg:sticky lg:top-[164px] lg:self-start">
          <Reveal>
            <h2 className="sv-h2">What this is, plainly</h2>
          </Reveal>
        </div>
        <div className="grid gap-2">
          {[
            <>Not a job. No salary. You&rsquo;d be an independent agent.</>,
            <>
              License first. No license, no talking to clients about products.
            </>,
            <>
              Commission only, paid when a client puts a policy in place. No pay
              for recruiting. No income guarantee.
            </>,
            <>
              It costs money to start: state licensing{" "}
              <Confirm>and FEG&rsquo;s one-time $125 enrollment fee</Confirm>.
            </>,
          ].map((item, index) => (
            <Reveal key={index} delay={index * 80}>
              <div className="sv-card flex items-start gap-5 p-6">
                <span className="sv-tile size-10 shrink-0 rounded-full text-base font-medium">
                  {index + 1}
                </span>
                <p className="pt-1.5 text-lg leading-7">{item}</p>
              </div>
            </Reveal>
          ))}
          <p className="sv-sm px-1 pt-2">
            See the{" "}
            <a
              href="https://id.freedomequitygroup.com/"
              className="underline underline-offset-2"
              target="_blank"
              rel="noreferrer"
            >
              FEG Income Disclosure Statement
            </a>
            .
          </p>
        </div>
      </section>

      {/* Who does well */}
      <section className="sv-container">
        <Reveal>
          <div className="sv-head max-w-[640px]">
            <h2 className="sv-h2">
              Anyone willing to get licensed can do this.
            </h2>
            <p className="sv-lg">
              It suits people who are patient, honest and good at explaining
              things.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Closing */}
      <section className="sv-container pt-0 md:pt-0">
        <Reveal>
          <div className="sv-card-dark flex flex-col items-center gap-3 rounded-3xl px-6 py-16 text-center md:py-20">
            <h2 className="sv-h2 max-w-xl">Talk first. Decide after.</h2>
            <a href="#book" className="sv-btn sv-btn-light mt-4">
              Let&rsquo;s talk
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
