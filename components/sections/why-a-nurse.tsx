import Image from "next/image";
import { agent, yearsLicensed } from "@/lib/site";

/**
 * Marynett rewrites this in her own words before launch. It is her story and
 * it has to be hers. This is a draft placeholder for layout, reviewed by her
 * and by FEG compliance prior to publication (Agent Agreement 2(C)).
 */
export function WhyANurse() {
  return (
    <section className="relative overflow-hidden bg-band text-band-foreground">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(70rem 32rem at 12% 110%, color-mix(in oklab, var(--teal) 60%, transparent), transparent 60%)",
        }}
      />

      <div className="container-page relative grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:py-24">
        <figure className="mx-auto w-full max-w-xs lg:max-w-sm">
          <div className="overflow-hidden rounded-2xl border border-band-border shadow-2xl shadow-black/30">
            <Image
              src="/marynett-bolivar.webp"
              alt=""
              width={525}
              height={635}
              sizes="(min-width: 1024px) 24rem, 18rem"
              className="h-auto w-full object-cover"
            />
          </div>
        </figure>

        <div className="max-w-xl">
          <p className="eyebrow text-gold">Why a nurse sells this</p>

          <h2 className="mt-4 text-[1.875rem] leading-[1.12] font-semibold tracking-[-0.02em] text-balance sm:text-[2.375rem]">
            I&rsquo;ve worked nights for years. I know who pays the bills when
            someone can&rsquo;t.
          </h2>

          <div className="mt-6 space-y-4 text-[1.0625rem] leading-relaxed text-band-muted">
            <p>
              In {agent.licensedSince} a neighbor sat me down and showed me a
              policy you don&rsquo;t have to die to use, and a retirement option
              that wasn&rsquo;t riding on the market. I got licensed so I could
              bring it to the people I work with.
            </p>
            <p>
              {yearsLicensed} years later I&rsquo;m still on the floor. That&rsquo;s
              why the call is fifteen minutes, and why I&rsquo;ll take it when your
              shift ends instead of when it suits me.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
