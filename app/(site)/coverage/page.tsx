import type { Metadata } from "next";
import {
  Briefcase,
  CalendarClock,
  FileSearch,
  HeartPulse,
  ListChecks,
  MessageCircle,
} from "lucide-react";
import { site } from "@/lib/site";
import { Confirm } from "@/components/Confirm";
import { LeadForm } from "@/components/LeadForm";
import { CountUp } from "@/components/sevora/CountUp";
import { Faq } from "@/components/sevora/Faq";
import { Process } from "@/components/sevora/Process";
import { Reveal } from "@/components/sevora/Reveal";
import { Words } from "@/components/sevora/Words";

export const metadata: Metadata = {
  title: "Life insurance you don't have to die to use",
  description:
    "A 15-minute check of what your coverage does today, with a registered nurse and licensed Texas agent.",
};

const points = [
  {
    icon: Briefcase,
    text: "Understand what your coverage through work does, and what happens to it if you leave",
  },
  {
    icon: HeartPulse,
    text: "Learn how living benefits work and who qualifies*",
  },
  {
    icon: MessageCircle,
    text: "Get plain answers from a nurse, with no pressure",
  },
];

const comparison = [
  [
    "Usually pays at death only",
    "Can include living benefits for serious illness*",
  ],
  ["Often tied to your employer", "Stays with you if you change jobs"],
  [
    "Rarely explained to you",
    "Explained by someone who has worked the same floors",
  ],
];

const steps = [
  {
    icon: <CalendarClock size={20} strokeWidth={1.75} />,
    title: "You pick a time.",
    text: "I call you.",
  },
  {
    icon: <FileSearch size={20} strokeWidth={1.75} />,
    title: "We look at what you have today.",
  },
  {
    icon: <ListChecks size={20} strokeWidth={1.75} />,
    title: "I show you the gaps, if there are any.",
    text: "You decide what to do next.",
  },
];

const faqs = [
  {
    question: "How do you get paid?",
    answer:
      "The call comes with no obligation. I’m an appointed insurance agent, so if you choose to buy a policy, the insurance company pays me a commission.",
  },
  {
    question: "I already have insurance at work.",
    answer:
      "Good. Bring what you have. We’ll look at what it pays and what happens to it if you leave.",
  },
  {
    question: "Do I need a medical exam?",
    answer:
      "It depends on the policy and the insurance company. We’ll find out together.",
  },
  {
    question: "Will you pressure me?",
    answer:
      "No. It’s a fifteen-minute conversation. If you’re fine as you are, I’ll say so.",
  },
  {
    question: "Do you give tax or investment advice?",
    answer:
      "No. For tax questions, including moving retirement accounts, please talk to a tax professional.",
  },
];

export default function CoveragePage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto w-full max-w-[1200px] px-4 pt-8 pb-4 md:px-6 md:pt-14">
        <div className="sv-hero-panel grid items-start gap-x-16 gap-y-8 pb-8 min-[1200px]:grid-cols-[1.1fr_1fr] min-[1200px]:grid-rows-[auto_1fr] min-[1200px]:p-20">
          <div className="flex flex-col gap-4">
            <Reveal>
              <span className="sv-badge">
                <span className="sv-dot" />
                <span>
                  Registered nurse &middot; Licensed Texas agent since{" "}
                  <Confirm>{site.licensedSince}</Confirm>
                </span>
              </span>
            </Reveal>
            <h1 className="sv-display-sm">
              <Words text="Life insurance you don’t" />
              <Words text="have to die to use." start={4} muted />
            </h1>
            <Reveal delay={450}>
              <p className="sv-lg max-w-[500px]">
                Some policies can pay you while you&rsquo;re living if
                you&rsquo;re diagnosed with a serious illness.* In fifteen
                minutes I&rsquo;ll walk you through what you have now and what
                it would do.
              </p>
            </Reveal>
          </div>

          {/* On phones the form sits right under the headline. */}
          <Reveal
            delay={300}
            className="min-[1200px]:col-start-2 min-[1200px]:row-span-2 min-[1200px]:row-start-1"
          >
            <LeadForm variant="coverage" />
            <p className="sv-sm mt-4 px-1">
              No obligation. No exam to talk. If what you have is fine,
              I&rsquo;ll tell you that too.
            </p>
          </Reveal>

          <Reveal
            delay={650}
            className="min-[1200px]:col-start-1 min-[1200px]:self-end"
          >
            <dl className="flex flex-wrap gap-x-10 gap-y-6">
              <div>
                <dd className="font-serif text-[32px] leading-[48px] font-semibold">
                  <Confirm>
                    <CountUp value={32} />
                  </Confirm>
                  <span className="text-[36px] tracking-[-0.02em]">yr</span>
                </dd>
                <dt className="sv-body">Registered nurse</dt>
              </div>
              <div>
                <dd className="font-serif text-[32px] leading-[48px] font-semibold">
                  <Confirm>{site.licensedSince}</Confirm>
                </dd>
                <dt className="sv-body">Licensed in Texas since</dt>
              </div>
              <div>
                <dd className="font-serif text-[32px] leading-[48px] font-semibold">
                  <CountUp value={15} />
                  <span className="text-[36px] tracking-[-0.02em]">min</span>
                </dd>
                <dt className="sv-body">Calls around your shift</dt>
              </div>
            </dl>
          </Reveal>
        </div>
      </section>

      {/* What the call covers */}
      <section className="sv-container flex flex-col gap-12 md:gap-16">
        <Reveal>
          <div className="sv-head">
            <div className="sv-head-stack">
              <span className="sv-badge mx-auto">The 15-minute check</span>
              <h2 className="sv-h2">What we cover in 15 minutes</h2>
            </div>
          </div>
        </Reveal>
        <div className="grid gap-2 md:grid-cols-3">
          {points.map((point, index) => {
            const Icon = point.icon;
            return (
              <Reveal key={point.text} delay={index * 100}>
                <article className="sv-card flex h-full min-h-[240px] flex-col justify-between gap-10 p-6">
                  <span className="sv-tile">
                    <Icon size={24} strokeWidth={1.5} />
                  </span>
                  <p className="sv-h4">{point.text}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* The question nobody asks */}
      <section className="sv-container flex flex-col gap-12 md:gap-16">
        <Reveal>
          <div className="sv-head-split">
            <div className="flex max-w-[460px] flex-col gap-2">
              <span className="sv-badge">The question nobody at work asks</span>
              <h2 className="sv-h2">
                If you got sick tomorrow and couldn&rsquo;t work, who pays the
                bills?
              </h2>
            </div>
            <p className="sv-lg max-w-[480px]">
              Many people I work with have life insurance through their job and
              believe they&rsquo;re covered. That coverage usually pays if you
              die. It&rsquo;s often tied to the job.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-2 lg:grid-cols-[338fr_338fr_461fr]">
          <Reveal>
            <div className="sv-card flex h-full min-h-[300px] flex-col justify-between gap-10 p-6">
              <span className="sv-tile">
                <HeartPulse size={24} strokeWidth={1.5} />
              </span>
              <p className="sv-lg text-[var(--sv-900)]">
                And most people have never been shown what it does if they
                survive a heart attack, a stroke or cancer and can&rsquo;t work
                for a year.
              </p>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="sv-card h-full p-6">
              <h3 className="sv-sm">Coverage through work</h3>
              <ul className="mt-5">
                {comparison.map(([work]) => (
                  <li
                    key={work}
                    className="border-t border-[var(--sv-100)] py-5 text-lg leading-7 text-[var(--sv-500)] first:border-t-0 first:pt-0"
                  >
                    {work}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="sv-card-dark h-full p-6">
              <h3 className="text-sm leading-5 text-[var(--sv-accent-soft)]">
                Coverage you own
              </h3>
              <ul className="mt-5">
                {comparison.map(([, own]) => (
                  <li
                    key={own}
                    className="border-t border-white/15 py-5 text-lg leading-7 font-medium first:border-t-0 first:pt-0"
                  >
                    {own}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal className="flex justify-center">
          <a href="#book" className="sv-btn sv-btn-primary">
            Check what mine covers
          </a>
        </Reveal>
      </section>

      {/* How it works */}
      <section className="sv-container grid gap-12 lg:grid-cols-2 lg:gap-24">
        <div className="lg:sticky lg:top-[164px] lg:self-start">
          <Reveal>
            <div className="flex max-w-[480px] flex-col gap-2.5">
              <span className="sv-badge">Process</span>
              <h2 className="sv-h2">How the 15 minutes works</h2>
            </div>
          </Reveal>
        </div>
        <Process steps={steps} />
      </section>

      {/* FAQ */}
      <section className="sv-container flex flex-col gap-12 md:gap-16">
        <Reveal>
          <div className="sv-head">
            <h2 className="sv-h2">Questions people ask</h2>
          </div>
        </Reveal>
        <Reveal>
          <Faq items={faqs} defaultOpen={0} />
        </Reveal>
      </section>

      {/* Closing */}
      <section className="sv-container pt-0 md:pt-0">
        <Reveal>
          <div className="sv-card-dark flex flex-col items-center gap-3 rounded-3xl px-6 py-16 text-center md:py-20">
            <h2 className="sv-h2 max-w-xl">
              Fifteen minutes, and you&rsquo;ll know where you stand.
            </h2>
            <a href="#book" className="sv-btn sv-btn-light mt-4">
              Book my 15-minute check
            </a>
          </div>
        </Reveal>
        <p className="sv-sm mx-auto mt-8 max-w-3xl text-center">
          *Living benefits are provided through policy riders. Availability,
          qualifying conditions and limits vary by insurance company and state.
          Using them reduces the death benefit.
        </p>
      </section>
    </>
  );
}
