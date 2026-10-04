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
    "How a registered nurse got her Texas insurance license, and what she teaches the people she mentors.",
};

const points = [
  "How getting licensed in Texas works, step by step",
  "What I actually do with a family, from first call to policy",
  "What the licensing process takes",
];

const learning = [
  {
    icon: MessageSquareText,
    text: "To explain coverage in plain words, the way you already explain things to patients or students",
  },
  {
    icon: Users,
    text: "To sit down with a family and find what’s missing",
  },
  {
    icon: BadgeCheck,
    text: "To do it properly: licensed, trained and by the rules",
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
                For nurses, teachers and people who like helping people
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
                I got my Texas insurance license in{" "}
                <Confirm>{site.licensedSince}</Confirm> and learned to help
                families understand their protection. If you&rsquo;re curious
                how that works alongside a full-time career, I&rsquo;ll show you
                what I did.
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

      {/* What you'd be learning */}
      <section className="sv-container flex flex-col gap-12 md:gap-16">
        <Reveal>
          <div className="sv-head">
            <div className="sv-head-stack">
              <span className="sv-badge mx-auto">Mentorship</span>
              <h2 className="sv-h2">What you&rsquo;d be learning</h2>
            </div>
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
            <div className="flex max-w-[480px] flex-col gap-2.5">
              <span className="sv-badge">Before we talk</span>
              <h2 className="sv-h2">What this is, plainly</h2>
            </div>
          </Reveal>
        </div>
        <div className="grid gap-2">
          {[
            <>
              This is not a job, a salary or a position. You would be an
              independent agent.
            </>,
            <>
              You need a state insurance license before you can talk to clients
              about products.
            </>,
            <>
              Agents are paid commissions only when a client puts a policy in
              place. Nobody is paid for bringing in other agents, and there is
              no guarantee of income.
            </>,
            <>
              There are costs to get started, such as state licensing{" "}
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
        </div>
      </section>

      {/* Who I work well with */}
      <section className="sv-container">
        <Reveal>
          <div className="sv-head max-w-[640px]">
            <div className="sv-head-stack">
              <span className="sv-badge mx-auto">Who I work well with</span>
              <p className="sv-h2">
                People who are patient, honest and good at explaining things.
              </p>
            </div>
            <p className="sv-lg">
              Most of the people I mentor are nurses and teachers.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Closing */}
      <section className="sv-container pt-0 md:pt-0">
        <Reveal>
          <div className="sv-card-dark flex flex-col items-center gap-3 rounded-3xl px-6 py-16 text-center md:py-20">
            <h2 className="sv-h2 max-w-xl">
              Have a conversation first. Decide after.
            </h2>
            <a href="#book" className="sv-btn sv-btn-light mt-4">
              Book a conversation
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
