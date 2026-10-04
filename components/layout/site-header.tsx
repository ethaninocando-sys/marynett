import Link from "next/link";
import { Phone } from "lucide-react";
import { agent } from "@/lib/site";

/**
 * Archio's top bar: wordmark left, status and contact right. The template put
 * a green dot and "available for work" here; the equivalent honest signal for
 * a licensed agent is her credential, not availability.
 */
export function SiteHeader() {
  return (
    <header className="bg-background">
      <div className="container-page flex items-center justify-between gap-4 px-[18px] py-5 md:px-[50px]">
        <Link
          href="/"
          className="font-display text-[26px] leading-none font-light tracking-[-0.04em] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          {agent.name}
          <span className="body-sm ml-2 align-middle text-muted-foreground">
            {agent.credentials}
          </span>
        </Link>

        <div className="flex items-center gap-5">
          <span className="label hidden items-center gap-2 text-muted-foreground sm:flex">
            <span className="size-2 rounded-pill bg-live" aria-hidden="true" />
            Licensed Texas agent
          </span>
          <a
            href={agent.phoneHref}
            className="flex items-center gap-2 rounded-[10px] text-[15px] font-medium tracking-[-0.02em] transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <Phone className="size-4" aria-hidden="true" />
            <span className="hidden sm:inline">{agent.phoneDisplay}</span>
            <span className="sr-only sm:hidden">
              Call {agent.phoneDisplay}
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
