import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { agent } from "@/lib/site";

export const metadata: Metadata = {
  title: "You’re booked",
  robots: { index: false, follow: false },
};

export default function ThankYou() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <section className="section-y bg-background">
          <div className="container-page max-w-2xl text-center">
            <span className="mx-auto grid size-14 place-items-center rounded-full bg-gold text-gold-foreground">
              <Check className="size-7" strokeWidth={2.5} aria-hidden="true" />
            </span>

            <h1 className="mt-7 text-[2rem] leading-[1.1] font-semibold tracking-[-0.02em] text-balance sm:text-[2.5rem]">
              Got it. I&rsquo;ll call you myself.
            </h1>

            <p className="mt-5 text-[1.0625rem] leading-relaxed text-muted-foreground">
              I work nights, so I&rsquo;ll call in the window you picked. If you
              miss me I&rsquo;ll try once more. I&rsquo;m not going to fill up your
              phone.
            </p>

            <div className="mt-8 rounded-xl border border-border bg-card p-6 text-left">
              <p className="eyebrow text-teal">What happens on the call</p>
              <ul className="mt-4 space-y-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
                <li>
                  We look at what your coverage at work actually pays, and what
                  happens to it the day you leave.
                </li>
                <li>
                  If there&rsquo;s a gap, I&rsquo;ll walk you through your options.
                  If there isn&rsquo;t one, I&rsquo;ll say so.
                </li>
                <li>Fifteen minutes. You decide what happens next.</li>
              </ul>
            </div>

            <p className="mt-8 text-[0.9375rem] text-muted-foreground">
              Need me sooner?{" "}
              <a
                href={agent.phoneHref}
                className="font-semibold text-foreground underline underline-offset-4"
              >
                {agent.phoneDisplay}
              </a>
            </p>

            <p className="mt-6">
              <Link
                href="/"
                className="text-[0.9375rem] underline underline-offset-4 hover:text-primary"
              >
                Back to the homepage
              </Link>
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
