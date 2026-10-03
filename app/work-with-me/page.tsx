import type { Metadata } from "next";
import { site } from "@/lib/site";
import { Confirm } from "@/components/Confirm";
import { LeadForm } from "@/components/LeadForm";
import { Placeholder } from "@/components/Placeholder";

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
  "To explain coverage in plain words, the way you already explain things to patients or students",
  "To sit down with a family and find what’s missing",
  "To do it properly: licensed, trained and by the rules",
];

export default function WorkWithMePage() {
  return (
    <>
      <section className="shell grid items-start gap-x-16 gap-y-8 pt-10 pb-16 lg:grid-cols-[1.25fr_1fr] lg:grid-rows-[auto_1fr] lg:pt-16 lg:pb-24">
        <div>
          <p className="eyebrow">
            For nurses, teachers and people who like helping people
          </p>
          <h1 className="display mt-4">
            I was a nurse for <Confirm>{site.nurseYearsBeforeLicense}</Confirm>{" "}
            years before anyone explained this to me. Now I teach it.
          </h1>
          <p className="lede measure mt-6">
            I got my Texas insurance license in{" "}
            <Confirm>{site.licensedSince}</Confirm> and learned to help families
            understand their protection. If you&rsquo;re curious how that works
            alongside a full-time career, I&rsquo;ll show you what I did.
          </p>
        </div>

        {/* On phones the form sits right under the headline. */}
        <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">
          <LeadForm variant="recruit" />
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

      <section className="section">
        <div className="shell grid gap-10 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
          <div>
            <p className="eyebrow">What you&rsquo;d be learning</p>
            <ul className="measure mt-6">
              {learning.map((item) => (
                <li
                  key={item}
                  className="h3 border-b border-rule py-5 first:border-t"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Placeholder
            className="aspect-[4/3] w-full self-start"
            label="Photo"
            note="Marynett teaching or meeting with someone she mentors"
          />
        </div>
      </section>

      <section className="section bg-wash">
        <div className="shell">
          <p className="eyebrow">What this is, plainly</p>
          <ul className="copy measure mt-6 grid gap-4">
            <li>
              This is not a job, a salary or a position. You would be an
              independent agent.
            </li>
            <li>
              You need a state insurance license before you can talk to clients
              about products.
            </li>
            <li>
              Agents are paid commissions only when a client puts a policy in
              place. Nobody is paid for bringing in other agents, and there is
              no guarantee of income.
            </li>
            <li>
              There are costs to get started, such as state licensing{" "}
              <Confirm>and FEG&rsquo;s one-time $125 enrollment fee</Confirm>.
            </li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <p className="eyebrow">Who I work well with</p>
          <p className="h2 measure mt-4">
            People who are patient, honest and good at explaining things.
          </p>
          <p className="lede measure mt-4">
            Most of the people I mentor are nurses and teachers.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <h2 className="h2 measure">
            Have a conversation first. Decide after.
          </h2>
          <a href="#book" className="btn mt-8">
            Book a conversation
          </a>
        </div>
      </section>
    </>
  );
}
