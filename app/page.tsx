import Link from "next/link";
import { site } from "@/lib/site";
import { Confirm } from "@/components/Confirm";
import { Placeholder } from "@/components/Placeholder";

const videos = [
  "What does life insurance through work actually cover?",
  "What are living benefits?",
  "What is an IUL?",
  "What should I ask before I retire?",
];

export default function HomePage() {
  return (
    <>
      <section className="shell grid gap-10 pt-10 pb-16 md:grid-cols-[1.35fr_1fr] md:items-center md:gap-16 md:pt-16 md:pb-24">
        <div>
          <p className="eyebrow">
            Registered nurse &middot; Licensed Texas agent
          </p>
          <h1 className="display mt-4">
            <Confirm>{site.nurseYears}</Confirm> years at the bedside taught me
            what families aren&rsquo;t ready for.
          </h1>
          <p className="lede measure mt-6">
            I&rsquo;m Marynett, a registered nurse and a licensed Texas
            insurance agent since <Confirm>{site.licensedSince}</Confirm>. I
            help families understand their protection before they need it, and I
            teach others to do the same.
          </p>
        </div>
        <Placeholder
          className="aspect-[4/5] w-full max-w-sm md:max-w-none"
          label="Portrait of Marynett"
          note="Professional photo, plain background"
        />
      </section>

      <section className="section" aria-label="Choose your path">
        <div className="shell grid gap-5 md:grid-cols-2">
          <Link
            href="/coverage"
            className="group block rounded-md border border-rule bg-card p-7 transition-colors hover:border-navy sm:p-9"
          >
            <p className="eyebrow">For families</p>
            <h2 className="h2 mt-3">Protect my family</h2>
            <p className="mt-3 text-muted">
              See what your coverage does and doesn&rsquo;t do.
            </p>
            <p className="mt-6 font-semibold group-hover:text-gold">
              Start here &rarr;
            </p>
          </Link>
          <Link
            href="/work-with-me"
            className="group block rounded-md border border-rule bg-card p-7 transition-colors hover:border-navy sm:p-9"
          >
            <p className="eyebrow">For nurses and teachers</p>
            <h2 className="h2 mt-3">Work with me</h2>
            <p className="mt-3 text-muted">
              Learn how I got licensed and what I teach.
            </p>
            <p className="mt-6 font-semibold group-hover:text-gold">
              Start here &rarr;
            </p>
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <p className="eyebrow">Why a nurse does this</p>
          <h2 className="h2 measure mt-4">
            Most families had coverage. Few knew what it actually did.
          </h2>
          <div className="copy measure mt-6">
            <p>
              I&rsquo;ve worked <Confirm>12-hour night shifts</Confirm> for most
              of my career. I&rsquo;ve sat with families on the worst day of
              their lives, and I&rsquo;ve watched the second shock arrive later:
              the bills.
            </p>
            <p>
              I got licensed so I could explain it in plain words, one family at
              a time.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <p className="eyebrow">Learn in 60 seconds</p>
          <h2 className="h2 measure mt-4">
            Short answers to the questions I hear most.
          </h2>
          <ul className="mt-10 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {videos.map((title) => (
              <li key={title}>
                <Placeholder
                  className="aspect-[9/16]"
                  label="Video"
                  note="Coming soon"
                />
                <p className="mt-3 text-base leading-snug font-medium">
                  {title}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <h2 className="h2 measure">Not sure which door is yours?</h2>
          <p className="lede mt-4">
            Call or text me:{" "}
            <a
              href={site.phoneHref}
              className="text-link whitespace-nowrap text-ink"
            >
              {site.phoneDisplay}
            </a>
          </p>
        </div>
      </section>
    </>
  );
}
