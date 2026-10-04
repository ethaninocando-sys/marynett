import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Container, Eyebrow, Section } from "@/components/archio/section";
import { BgShapes } from "@/components/archio/bg-shapes";
import { Cta } from "@/components/archio/cta";
import { Confirm } from "@/components/ui/confirm";
import { Placeholder } from "@/components/ui/placeholder";
import { agent } from "@/lib/site";

/**
 * The splitter. Two audiences live under one roof but never share a funnel:
 * families go to /coverage, prospective agents to /work-with-me. Meta ads point
 * at the sub-pages, never here, so the Employment Special Ad Category stays off
 * the consumer campaign.
 */

const doors = [
  {
    eyebrow: "For families",
    title: "Protect my family",
    body: "See what your coverage does, and what it doesn't.",
    href: "/coverage",
  },
  {
    eyebrow: "For nurses and teachers",
    title: "Work with me",
    body: "How I got licensed, and what I teach.",
    href: "/work-with-me",
  },
];

const videos = [
  "What does life insurance through work actually cover?",
  "What are living benefits?",
  "What is an IUL?",
  "What should I ask before I retire?",
];

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Section tone="white" className="pt-5 pb-[80px] md:pb-[100px]">
          <Container className="grid items-center gap-10 md:grid-cols-[1.35fr_1fr] md:gap-16">
            <div>
              <Eyebrow>Registered nurse · Licensed Texas agent</Eyebrow>
              <h1 className="display-xl mt-5 text-balance">
                <Confirm>{agent.nurseYearsWord}</Confirm> years at the bedside
                taught me what families aren&rsquo;t ready for.
              </h1>
              <p className="lede measure mt-6 ml-0 max-w-xl text-muted-foreground">
                I&rsquo;m Marynett, a registered nurse and a licensed Texas
                insurance agent since{" "}
                <Confirm>{agent.licensedSince}</Confirm>. I help families
                understand their protection before they need it, and I teach
                others to do the same.
              </p>
            </div>

            <figure className="mx-auto w-full max-w-sm md:max-w-none">
              <div className="overflow-hidden rounded-xl bg-card shadow-inner-glow">
                <Image
                  src="/marynett-bolivar.webp"
                  alt={`${agent.name}, registered nurse and licensed Texas insurance agent`}
                  width={525}
                  height={635}
                  sizes="(min-width: 768px) 24rem, 90vw"
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
            </figure>
          </Container>
        </Section>

        {/* Two doors */}
        <Section tone="bone">
          <Container className="grid gap-5 md:grid-cols-2">
            {doors.map((door) => (
              <a
                key={door.href}
                href={door.href}
                className="group block rounded-lg border border-border bg-card p-7 transition-colors hover:border-primary sm:p-9"
              >
                <Eyebrow>{door.eyebrow}</Eyebrow>
                <h2 className="display-md mt-3">{door.title}</h2>
                <p className="body-sm mt-3 text-muted-foreground">
                  {door.body}
                </p>
                <p className="mt-6 flex items-center gap-2 text-[15px] font-medium transition-colors group-hover:text-primary">
                  Start here
                  <ArrowRight
                    className="size-4 transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </p>
              </a>
            ))}
          </Container>
        </Section>

        {/* Why a nurse does this */}
        <Section tone="white">
          <BgShapes position="right" />
          <Container>
            <Eyebrow>Why a nurse does this</Eyebrow>
            <h2 className="display-lg measure mt-4 text-balance">
              Most families had coverage. Few knew what it actually did.
            </h2>
            <div className="measure lede mt-6 space-y-4 text-muted-foreground">
              <p>
                I&rsquo;ve worked <Confirm>12-hour night shifts</Confirm> for
                most of my career. I&rsquo;ve sat with families on the worst day
                of their lives, and I&rsquo;ve watched the second shock arrive
                later: the bills.
              </p>
              <p>
                I got licensed so I could explain it in plain words, one family
                at a time.
              </p>
            </div>
          </Container>
        </Section>

        {/* Learn in 60 seconds */}
        <Section tone="bone">
          <Container>
            <Eyebrow>Learn in 60 seconds</Eyebrow>
            <h2 className="display-lg measure mt-4 text-balance">
              Short answers to the questions I hear most.
            </h2>
            <ul className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
              {videos.map((title) => (
                <li key={title}>
                  <Placeholder
                    className="aspect-[9/16]"
                    label="Video"
                    note="Not filmed yet"
                  />
                  <p className="mt-3 text-[15px] leading-snug font-medium tracking-[-0.02em]">
                    {title}
                  </p>
                </li>
              ))}
            </ul>
          </Container>
        </Section>

        {/* Closing */}
        <Section tone="white">
          <Container className="text-center">
            <h2 className="display-lg text-balance">
              Not sure which door is yours?
            </h2>
            <p className="lede mt-4 text-muted-foreground">
              Call or text me and I&rsquo;ll point you the right way.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Cta href={agent.phoneHref}>{agent.phoneDisplay}</Cta>
              <Cta href="/coverage" variant="secondary">
                See what my coverage does
              </Cta>
            </div>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
