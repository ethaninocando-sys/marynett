import Link from "next/link";
import { Phone } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { agent, cta } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="container-page flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]">
        <Link href="/" className="min-w-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring">
          <span className="block font-display text-[1.0625rem] leading-tight font-semibold tracking-tight whitespace-nowrap sm:text-xl">
            {agent.name}
          </span>
          <span className="eyebrow hidden text-muted-foreground sm:block">
            Life Insurance · Living Benefits · Rio Grande Valley
          </span>
        </Link>

        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <a
            href={agent.phoneHref}
            className="flex items-center gap-2 rounded-lg px-1 py-1 text-sm font-medium text-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            <span className="grid size-8 place-items-center rounded-full bg-primary text-primary-foreground">
              <Phone className="size-3.5" aria-hidden="true" />
            </span>
            <span className="hidden sm:inline">{agent.phoneDisplay}</span>
            <span className="sr-only sm:hidden">Call {agent.phoneDisplay}</span>
          </a>

          <a
            href="#book"
            className={cn(
              buttonVariants(),
              "h-10 rounded-lg px-3.5 text-[0.8125rem] font-semibold sm:px-4 sm:text-[0.875rem]"
            )}
          >
            {/* The full label doesn’t fit beside her name at 375px. */}
            <span className="sm:hidden">Book a check</span>
            <span className="hidden sm:inline">{cta.header}</span>
          </a>
        </div>
      </div>
    </header>
  );
}
