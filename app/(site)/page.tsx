import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Handshake,
  Play,
  ShieldCheck,
} from "lucide-react";
import { site } from "@/lib/site";
import { Confirm } from "@/components/Confirm";
import { CountUp } from "@/components/sevora/CountUp";
import { Reveal } from "@/components/sevora/Reveal";
import { Words } from "@/components/sevora/Words";

const topics = [
  "Living benefits",
  "Work coverage",
  "Family protection",
  "Retirement questions",
  "Getting licensed in Texas",
  "Plain answers",
];

const videos = [
  "What does my work policy cover?",
  "What are living benefits?",
  "What is an IUL?",
  "What to ask before you retire",
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto w-full max-w-[1200px] px-4 pt-8 pb-12 md:px-6 md:pt-14">
        <div className="sv-hero-panel">
          <div className="relative z-10 flex flex-col gap-12 min-[1200px]:w-[56%] min-[1200px]:gap-16">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4">
                <Reveal>
                  <span className="sv-badge">
                    <span className="sv-dot" />
                    RN &middot; Licensed Texas agent
                  </span>
                </Reveal>
                <h1 className="sv-display-sm">
                  <Confirm>{site.nurseYears}</Confirm>{" "}
                  <Words text="years at the bedside." start={1} />
                  <Words
                    text="I’ve seen what families aren’t ready for."
                    start={5}
                    muted
                  />
                </h1>
                <Reveal delay={450}>
                  <p className="sv-lg max-w-[520px]">
                    Marynett Bolivar is a registered nurse and a licensed Texas
                    insurance agent. She explains coverage in plain words and
                    trains new agents to do the same.
                  </p>
                </Reveal>
              </div>
              <Reveal
                delay={550}
                className="grid max-w-[440px] gap-2 sm:grid-cols-2"
              >
                <Link href="/coverage" className="sv-btn sv-btn-primary">
                  <ShieldCheck
                    size={18}
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  Protect my family
                </Link>
                <Link href="/work-with-me" className="sv-btn sv-btn-primary">
                  <Handshake size={18} strokeWidth={1.75} aria-hidden="true" />
                  Work with me
                </Link>
              </Reveal>
            </div>

            <Reveal delay={650}>
              <dl className="flex flex-wrap gap-x-10 gap-y-6">
                <div>
                  <dd className="font-serif text-[32px] leading-[48px] font-semibold">
                    <Confirm>
                      <CountUp value={32} />
                    </Confirm>
                    <span className="text-[36px] tracking-[-0.02em]">yr</span>
                  </dd>
                  <dt className="sv-body">Nurse</dt>
                </div>
                <div>
                  <dd className="font-serif text-[32px] leading-[48px] font-semibold">
                    <Confirm>{site.licensedSince}</Confirm>
                  </dd>
                  <dt className="sv-body">Licensed</dt>
                </div>
                <div>
                  <dd className="font-serif text-[32px] leading-[48px] font-semibold">
                    <CountUp value={15} />
                    <span className="text-[36px] tracking-[-0.02em]">min</span>
                  </dd>
                  <dt className="sv-body">First call</dt>
                </div>
              </dl>
            </Reveal>
          </div>

          {/* Portrait breaks out of the top of the panel on desktop. */}
          <div className="pointer-events-none relative -mx-6 mt-6 h-[400px] overflow-hidden rounded-b-[24px] min-[1200px]:absolute min-[1200px]:top-[-72px] min-[1200px]:right-0 min-[1200px]:bottom-0 min-[1200px]:mx-0 min-[1200px]:mt-0 min-[1200px]:h-auto min-[1200px]:w-[560px] min-[1200px]:rounded-br-[32px] min-[1200px]:rounded-bl-none">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/marynett-hero.webp"
              alt="Marynett Bolivar"
              className="absolute inset-0 size-full object-contain object-bottom min-[1200px]:object-right-bottom"
            />
          </div>

          <Reveal
            delay={750}
            className="absolute right-6 bottom-6 left-6 z-10 min-[1200px]:right-12 min-[1200px]:bottom-12 min-[1200px]:left-auto min-[1200px]:w-[360px]"
          >
            <Link
              href="/coverage#book"
              className="sv-glass flex items-center gap-8 px-8 py-7 max-[1199px]:bg-[rgba(14,37,54,0.62)]"
            >
              <span className="sv-h5 flex-1">Let&rsquo;s connect</span>
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-white text-[var(--sv-900)]">
                <ArrowUpRight size={24} strokeWidth={1.75} />
              </span>
            </Link>
          </Reveal>
        </div>

        <div className="sv-ticker mt-12" aria-hidden="true">
          <div className="sv-ticker-track">
            {[...topics, ...topics, ...topics, ...topics].map(
              (topic, index) => (
                <span
                  key={`${topic}-${index}`}
                  className="flex items-center gap-3 text-xl leading-7 font-semibold tracking-[-0.03em] text-[var(--sv-600)]"
                >
                  <span className="sv-dot" />
                  {topic}
                </span>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Two doors */}
      <section className="sv-container flex flex-col gap-12 md:gap-16">
        <Reveal>
          <div className="sv-head">
            <h2 className="sv-h2">Pick one.</h2>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <Link
              href="/coverage"
              className="sv-card group block h-full overflow-hidden"
            >
              <div className="relative flex h-[230px] items-end gap-3 overflow-hidden px-8 pt-8">
                <div className="flex-1 rounded-t-xl bg-[var(--sv-50)] p-5 shadow-[inset_0_0_0_1px_var(--sv-100)]">
                  <p className="sv-sm">Coverage through work</p>
                  <p className="mt-3 border-t border-[var(--sv-200)] pt-3 text-[var(--sv-500)]">
                    Usually pays at death only
                  </p>
                  <p className="mt-3 border-t border-[var(--sv-200)] pt-3 text-[var(--sv-500)]">
                    Often tied to your employer
                  </p>
                </div>
                <div className="sv-card-dark flex-1 rounded-b-none p-5 transition-transform duration-500 group-hover:-translate-y-2">
                  <p className="text-sm leading-5 text-[var(--sv-accent-soft)]">
                    Coverage you own
                  </p>
                  <p className="mt-3 border-t border-white/15 pt-3 font-medium">
                    Can include living benefits*
                  </p>
                  <p className="mt-3 border-t border-white/15 pt-3 font-medium">
                    Stays with you if you change jobs
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2 p-8">
                <h3 className="sv-h3">Protect my family</h3>
                <p className="sv-lg">See what your coverage actually does.</p>
                <p className="mt-4 flex items-center gap-2 font-medium">
                  Go
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </p>
              </div>
            </Link>
          </Reveal>

          <Reveal delay={100}>
            <Link
              href="/work-with-me"
              className="sv-card group block h-full overflow-hidden"
            >
              <div className="relative flex h-[230px] flex-col justify-end gap-2 overflow-hidden px-8 pt-8">
                {[
                  "Get licensed in Texas",
                  "Learn to explain coverage",
                  "Sit with a family",
                ].map((step, index) => (
                  <p
                    key={step}
                    className="flex items-center gap-3 rounded-xl bg-[var(--sv-50)] px-4 py-3 shadow-[inset_0_0_0_1px_var(--sv-100)] transition-transform duration-500 group-hover:translate-x-1"
                    style={{ marginLeft: index * 28 }}
                  >
                    <span className="sv-tile size-8 rounded-lg text-sm font-medium">
                      {index + 1}
                    </span>
                    <span className="font-medium">{step}</span>
                  </p>
                ))}
              </div>
              <div className="flex flex-col gap-2 p-8">
                <h3 className="sv-h3">Work with me</h3>
                <p className="sv-lg">How I got licensed, and how you can.</p>
                <p className="mt-4 flex items-center gap-2 font-medium">
                  Go
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </p>
              </div>
            </Link>
          </Reveal>
        </div>
        <p className="sv-sm mx-auto -mt-6 max-w-2xl text-center md:-mt-10">
          *Living benefits are provided through policy riders. Availability,
          qualifying conditions and limits vary by insurance company and state.
          Using them reduces the death benefit.
        </p>
      </section>

      {/* Her story */}
      <section className="sv-container flex flex-col gap-12 md:gap-16">
        <Reveal>
          <div className="flex max-w-[520px] flex-col gap-2">
            <span className="sv-badge">Why a nurse</span>
            <h2 className="sv-h2">
              Most families had coverage. Few knew what it did.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-2 lg:grid-cols-[338fr_338fr_461fr]">
          <Reveal className="grid gap-2 lg:grid-rows-[auto_1fr]">
            <div className="sv-card flex items-center gap-3 p-6">
              <span className="sv-tile sv-tile-dark size-9 rounded-full font-serif text-sm font-semibold">
                MB
              </span>
              <span className="sv-h6">
                {site.name}, {site.credentials}
              </span>
            </div>
            <div className="sv-card flex min-h-[296px] flex-col justify-between gap-10 p-6">
              <p className="sv-lg text-[var(--sv-900)]">
                Night shifts, most of my career.
              </p>
              <p>
                <span className="sv-number block">
                  <Confirm>12</Confirm>
                  <span className="text-[36px]"> hr</span>
                </span>
                <span className="mt-1 block text-[var(--sv-500)]">Shifts</span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={100} className="grid gap-2 lg:grid-rows-[1fr_auto]">
            <div className="sv-card flex min-h-[316px] flex-col justify-between gap-10 p-6">
              <p className="sv-lg text-[var(--sv-900)]">
                I got licensed to explain it in plain words.
              </p>
              <p>
                <span className="sv-number block">
                  <Confirm>
                    <CountUp value={22} />
                  </Confirm>
                  <span className="text-[36px]"> yr</span>
                </span>
                <span className="mt-1 block text-[var(--sv-500)]">
                  Nursing before the license
                </span>
              </p>
            </div>
            <div className="sv-card flex items-center gap-2 px-6 py-5">
              <span className="sv-dot" />
              <span className="sv-h6">By appointment.</span>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="sv-card-dark flex h-full min-h-[388px] flex-col justify-between gap-10 p-6">
              <p className="max-w-[380px] font-serif text-[28px] leading-[1.25] tracking-[-0.02em]">
                I&rsquo;ve sat with families on their worst day. Then the bills
                came.
              </p>
              <p className="text-white/60">&mdash; Marynett</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Videos */}
      <section className="sv-container flex flex-col gap-12 md:gap-16">
        <Reveal>
          <div className="sv-head">
            <div className="sv-head-stack">
              <span className="sv-badge mx-auto">60 seconds each</span>
              <h2 className="sv-h2">What people ask me.</h2>
            </div>
          </div>
        </Reveal>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {videos.map((title, index) => (
            <Reveal key={title} delay={index * 80}>
              <article className="sv-card flex h-[272px] flex-col justify-between p-5">
                <span className="sv-tile">
                  <Play size={20} strokeWidth={1.5} />
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="sv-h5">{title}</h3>
                  <p className="sv-sm">Soon</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Closing */}
      <section className="sv-container pt-0 md:pt-0">
        <Reveal>
          <div className="sv-card-dark flex flex-col items-center gap-3 rounded-3xl px-6 py-16 text-center md:py-20">
            <h2 className="sv-h2">Not sure? Call or text.</h2>
            <a href={site.phoneHref} className="sv-btn sv-btn-light mt-4">
              {site.phoneDisplay}
            </a>
          </div>
        </Reveal>
      </section>
    </>
  );
}
