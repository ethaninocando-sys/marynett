import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { agent, consent } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  robots: { index: true, follow: true },
};

/**
 * Baseline policy covering what this site actually collects. Meta requires a
 * reachable privacy policy for lead traffic, and FEG Agent Agreement 2(Q)
 * obliges the agent to safeguard client data.
 *
 * REVIEW BEFORE LAUNCH: Marynett should have this read by her own counsel or
 * FEG compliance; it is written to match the form as built, not as legal advice.
 */
const sections = [
  {
    h: "What I collect",
    p: [
      "When you fill in the form on this site I collect your first name, your phone number, the state you are in, how you describe yourself, and the time of day you would like to be called.",
      "I also record that you ticked the consent box, the exact wording you agreed to, the date and time, your IP address and your browser's user agent. That record exists so there is proof of what you agreed to and when.",
      "I do not ask for health information, Social Security numbers, bank details or payment information anywhere on this site. If a form ever asks you for those, it is not mine.",
    ],
  },
  {
    h: "Why I collect it",
    p: [
      "To call you back about life insurance and annuity products, which is what you asked me to do. That is the only reason.",
    ],
  },
  {
    h: "How I contact you",
    p: [
      `Calls and texts are made manually by me. I do not use autodialers or automated texting systems.`,
      `The consent you give reads: "${consent.text}"`,
      "You can tell me to stop at any time, on a call, by text, or by email, and I will.",
    ],
  },
  {
    h: "Who else sees it",
    p: [
      "I do not sell, rent or trade your information, and I do not share it with other agents.",
      "If you choose to apply for a policy, the information needed for that application goes to the insurance carrier you are applying to. Each carrier has its own privacy notice, which you receive as part of the application.",
      "Service providers who help run this site — hosting and email delivery — process data on my behalf under their own agreements and are not permitted to use it for anything else.",
    ],
  },
  {
    h: "How long I keep it",
    p: [
      "Enquiry records, including the consent record, are kept as long as I am required to under state insurance recordkeeping rules, and then deleted.",
    ],
  },
  {
    h: "How it is protected",
    p: [
      "Information is transmitted over an encrypted connection and stored with access restricted to me. Paper records, if any, are kept locked, and documents that are no longer needed are shredded.",
    ],
  },
  {
    h: "Your choices",
    p: [
      "You can ask me what I hold about you, ask me to correct it, or ask me to delete it. Contact me using the details below and I will act on it.",
    ],
  },
];

export default function Privacy() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="section-y bg-background">
          <div className="container-page max-w-2xl">
            <h1 className="text-[2rem] leading-[1.1] font-semibold tracking-[-0.02em] sm:text-[2.5rem]">
              Privacy policy
            </h1>
            <p className="mt-4 text-[0.9375rem] text-muted-foreground">
              How I handle what you send me through this site.
            </p>

            <div className="mt-10 space-y-9">
              {sections.map((section) => (
                <div key={section.h}>
                  <h2 className="text-[1.25rem] font-semibold tracking-tight">
                    {section.h}
                  </h2>
                  <div className="mt-3 space-y-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
                    {section.p.map((para) => (
                      <p key={para.slice(0, 40)}>{para}</p>
                    ))}
                  </div>
                </div>
              ))}

              <div>
                <h2 className="text-[1.25rem] font-semibold tracking-tight">
                  Contact
                </h2>
                <div className="mt-3 space-y-1 text-[0.9375rem] leading-relaxed text-muted-foreground">
                  <p className="text-foreground">{agent.legalName}</p>
                  <p>
                    {agent.licenseType} · License #{agent.licenseNumber} · NPN{" "}
                    {agent.npn}
                  </p>
                  <p>
                    <a
                      href={agent.phoneHref}
                      className="underline underline-offset-4"
                    >
                      {agent.phoneDisplay}
                    </a>
                  </p>
                  <p>
                    <a
                      href={`mailto:${agent.email}`}
                      className="break-all underline underline-offset-4"
                    >
                      {agent.email}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
