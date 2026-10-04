import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Sevora's hero, rebuilt from measurements of the live template at 1512px.
 *
 *   panel      1152 x 612, radius 32, padding 96, on a light ground
 *   text       480 wide, left aligned, Lora at 72px
 *   portrait   549 x 700, absolutely positioned, taller than the panel so it
 *              crops at the top and sits flush to the bottom right corner
 *   card       360 x 156, radius 16, floating over the lower part of the photo
 *
 * The panel clips its own overflow, which is what gives the portrait its
 * bottom-right radius without needing one of its own.
 */
export function SevoraHeroPanel({
  eyebrow,
  children,
  image,
  imageAlt,
  card,
  className,
}: {
  eyebrow?: string;
  children: React.ReactNode;
  image?: string;
  imageAlt?: string;
  card?: { label: string; title: string; body: string; href: string };
  className?: string;
}) {
  return (
    <section className="px-4 pt-8 pb-12 sm:px-6 md:pt-14">
      <div
        className={cn(
          "sv-panel relative mx-auto w-full max-w-[1152px] overflow-hidden rounded-[32px] bg-muted",
          "px-6 py-12 sm:px-10 sm:py-16 lg:px-24 lg:py-24",
          className
        )}
      >
        {/* Portrait. Hidden below lg, where the template stacks and centres. */}
        {image ? (
          <div className="pointer-events-none absolute right-0 bottom-0 hidden h-[760px] w-[507px] lg:block">
            {/*
              The asset ships greyscale with its background already removed, so
              no filter or edge treatment is needed here.
            */}
            {/*
              Explicit intrinsic size rather than `fill`. With `fill` the
              browser was picking a 240px srcset entry and stretching it to
              549, which looked like mush. A `0px` branch in `sizes` makes it
              worse: some browsers evaluate that before layout and take the
              smallest candidate in the set.
            */}
            <Image
              src={image}
              alt={imageAlt ?? ""}
              width={934}
              height={1400}
              sizes="507px"
              quality={90}
              className="h-full w-full object-contain object-bottom"
              priority
            />
          </div>
        ) : null}

        <div className="hero-copy relative max-w-[480px] text-center lg:max-w-[560px] lg:text-left">
          {eyebrow ? (
            <p className="label mb-5 text-muted-foreground">{eyebrow}</p>
          ) : null}
          {children}
        </div>

        {/* Floating card over the photo, lg and up only. */}
        {card && image ? (
          <a
            href={card.href}
            className="sv-card-dark absolute right-12 bottom-12 hidden w-[360px] items-start gap-4 rounded-2xl p-5 text-white transition-opacity hover:opacity-95 lg:flex"
          >
            <div className="min-w-0">
              <p className="text-[13px] text-white/60">{card.label}</p>
              <p className="mt-1 text-[17px] font-medium tracking-[-0.02em]">
                {card.title}
              </p>
              <p className="mt-1.5 text-[13px] leading-snug text-white/70">
                {card.body}
              </p>
            </div>
            <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white text-[#0e2536]">
              <ArrowUpRight className="size-5" aria-hidden="true" />
            </span>
          </a>
        ) : null}
      </div>
    </section>
  );
}
