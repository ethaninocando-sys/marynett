import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Confirm } from "@/components/Confirm";
import { LeadForm } from "@/components/LeadForm";
import { Placeholder } from "@/components/Placeholder";

export const metadata: Metadata = {
  title: "Life insurance you don't have to die to use",
  description:
    "A 15-minute check of what your coverage does today, with a registered nurse and licensed Texas agent.",
};

const points = [
  "Understand what your coverage through work does, and what happens to it if you leave",
  "Learn how living benefits work and who qualifies*",
  "Get plain answers from a nurse, with no pressure",
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
  ["You pick a time.", "I call you."],
  ["We look at what you have today.", ""],
  ["I show you the gaps, if there are any.", "You decide what to do next."],
];

const faqs = [
  [
    "How do you get paid?",
    "The call comes with no obligation. I’m an appointed insurance agent, so if you choose to buy a policy, the insurance company pays me a commission.",
  ],
  [
    "I already have insurance at work.",
    "Good. Bring what you have. We’ll look at what it pays and what happens to it if you leave.",
  ],
  [
    "Do I need a medical exam?",
    "It depends on the policy and the insurance company. We’ll find out together.",
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
      <section className="shell grid items-start gap-x-16 gap-y-8 pt-10 pb-16 lg:grid-cols-[1.25fr_1fr] lg:grid-rows-[auto_1fr] lg:pt-16 lg:pb-24">
        <div>
          <p className="eyebrow">
            Registered nurse &middot; Licensed Texas agent since{" "}
            <Confirm>{site.licensedSince}</Confirm>
          </p>
          <h1 className="display mt-4">
            Life insurance you don&rsquo;t have to die to use.
          </h1>
          <p className="lede measure mt-6">
            Some policies can pay you while you&rsquo;re living if you&rsquo;re
            diagnosed with a serious illness.* In fifteen minutes I&rsquo;ll
            walk you through what you have now and what it would do.
          </p>
        </div>

        {/* On phones the form sits right under the headline. */}
        <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <LeadForm variant="coverage" />
          <p className="fine mt-4">
            No obligation. No exam to talk. If what you have is fine, I&rsquo;ll
            tell you that too.
          </p>
        </div>

        <ul className="measure grid gap-3.5 lg:col-start-1">
          {points.map((point) => (
            <li key={point} className="flex gap-3.5">
              <span
                aria-hidden="true"
                className="mt-[0.7em] h-px w-5 shrink-0 bg-gold"
              />
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>

      <section
        className="border-t border-rule bg-wash"
        aria-label="About Marynett"
      >
        <ul className="shell grid gap-x-8 gap-y-2 py-6 text-base font-medium sm:grid-cols-2 lg:grid-cols-4">
          <li>
            RN for <Confirm>32</Confirm> years
          </li>
          <li>
            Licensed in Texas since <Confirm>{site.licensedSince}</Confirm>
          </li>
          <li>Edinburg, TX</li>
          <li>Calls around your shift</li>
        </ul>
      </section>

      <section className="section">
        <div className="shell grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <div>
            <p className="eyebrow">The question nobody at work asks</p>
            <h2 className="h2 measure mt-4">
              If you got sick tomorrow and couldn&rsquo;t work, who pays the
              bills?
            </h2>
            <div className="copy measure mt-6">
              <p>
                Many people I work with have life insurance through their job
                and believe they&rsquo;re covered. That coverage usually pays if
                you die. It&rsquo;s often tied to the job.
              </p>
              <p>
                And most people have never been shown what it does if they
                survive a heart attack, a stroke or cancer and can&rsquo;t work
                for a year.
              </p>
            </div>
          </div>
          <Placeholder
            className="aspect-[4/3] w-full self-start"
            label="Photo or short video"
            note="Marynett in scrubs, or at the table with a family"
          />
        </div>

        <div className="shell mt-12">
          <table className="w-full max-w-3xl border-collapse text-left text-base">
            <thead>
              <tr className="border-b border-ink align-bottom">
                <th scope="col" className="eyebrow w-1/2 py-3 pr-5 text-muted">
                  Coverage through work
                </th>
                <th scope="col" className="eyebrow w-1/2 py-3 pl-5">
                  Coverage you own
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map(([work, own]) => (
                <tr key={work} className="border-b border-rule align-top">
                  <td className="py-4 pr-5 text-muted">{work}</td>
                  <td className="py-4 pl-5 font-medium">{own}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <a href="#book" className="btn mt-10">
            Check what mine covers
          </a>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <h2 className="h2 measure">How the 15 minutes works</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {steps.map(([title, detail], index) => (
              <li key={title} className="border-t border-ink pt-5">
                <p className="font-serif text-[2rem] leading-none text-gold">
                  {index + 1}
                </p>
                <p className="mt-4 font-semibold">{title}</p>
                {detail ? <p className="mt-1 text-muted">{detail}</p> : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <p className="eyebrow">What people say</p>
          <Placeholder
            className="mt-6 min-h-40"
            label="Client stories"
            note="Hidden at launch. Added only with real quotes, written permission and FEG approval."
          />
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <p className="eyebrow">Questions people ask</p>
          <dl className="mt-6 max-w-3xl">
            {faqs.map(([question, answer]) => (
              <div key={question} className="border-b border-rule py-6">
                <dt className="h3">{question}</dt>
                <dd className="measure mt-2 text-muted">{answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <h2 className="h2 measure">
            Fifteen minutes, and you&rsquo;ll know where you stand.
          </h2>
          <a href="#book" className="btn mt-8">
            Book my 15-minute check
          </a>
          <p className="fine mt-12 max-w-3xl">
            *Living benefits are provided through policy riders. Availability,
            qualifying conditions and limits vary by insurance company and
            state. Using them reduces the death benefit.
          </p>
        </div>
      </section>
    </>
  );
}
