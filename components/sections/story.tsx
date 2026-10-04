import Image from "next/image";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { agent } from "@/lib/site";

export function Story() {
  return (
    <section className="section-y bg-background">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="max-w-xl">
          <p className="eyebrow text-teal">The question nobody at work asks</p>

          <h2 className="mt-4 text-[2rem] leading-[1.1] font-semibold tracking-[-0.02em] text-balance sm:text-[2.5rem]">
            If you got sick tomorrow and couldn&rsquo;t work, who pays the bills?
          </h2>

          <div className="mt-6 space-y-4 text-[1.0625rem] leading-relaxed text-muted-foreground">
            <p>
              Most nurses I know have life insurance through the hospital and
              believe they&rsquo;re covered. That policy pays if you die. It
              usually pays nothing if you survive a heart attack, a stroke, or
              cancer and can&rsquo;t work for a year. And it ends the day you
              leave.
            </p>
            <p>
              About 4 in 10 of us will hear the word cancer in our lifetime.
              <sup className="ml-0.5">1</sup> Most of us will survive it. The
              bills don&rsquo;t know that.
            </p>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-secondary/70 p-5">
              <p className="eyebrow text-muted-foreground">The old way</p>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed">
                Coverage from work. Pays at death only. Gone when you change
                jobs.
              </p>
            </div>
            <div className="rounded-xl border border-teal/25 bg-teal/[0.06] p-5">
              <p className="eyebrow text-teal">The new way</p>
              <p className="mt-2.5 text-[0.9375rem] leading-relaxed">
                Your own permanent, portable policy with living benefit riders
                attached, explained by someone who works the same floors you do.
              </p>
            </div>
          </div>

          <a
            href="#book"
            className={cn(buttonVariants(), "mt-8 h-12 rounded-xl px-6 text-[0.9375rem] font-semibold")}
          >
            Check what mine covers
          </a>
        </div>

        <figure className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="overflow-hidden rounded-2xl border border-border bg-secondary shadow-lg shadow-black/5">
            <Image
              src="/marynett-bolivar.webp"
              alt={`${agent.name}, licensed Texas insurance agent and registered nurse`}
              width={525}
              height={635}
              sizes="(min-width: 1024px) 26rem, (min-width: 640px) 24rem, 90vw"
              className="h-auto w-full object-cover"
              priority={false}
            />
          </div>
          <figcaption className="mt-3 text-center text-[0.8125rem] text-muted-foreground lg:text-left">
            {agent.name} — {agent.city}, {agent.state}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
