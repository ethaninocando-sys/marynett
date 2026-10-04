"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

/**
 * Floating A/B switch. Maps the current page to its opposite-direction twin so
 * you land on the same content, not back at the home page.
 *
 *   A (Sevora)  /            /coverage            /work-with-me
 *   B (Archio)  /b           /b/coverage          /b/work-with-me
 *
 * Sevora is the default direction, so it owns the root routes.
 *
 * Review furniture, not part of the site. Remove before launch.
 */
export function DirectionSwitch() {
  const pathname = usePathname() ?? "/";
  const isB = pathname === "/b" || pathname.startsWith("/b/");
  const slug = isB ? pathname.replace(/^\/b/, "") || "/" : pathname;

  const aHref = slug;
  const bHref = slug === "/" ? "/b" : `/b${slug}`;

  const item =
    "rounded-full px-4 py-2 text-[13px] font-medium transition-colors";

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-5 z-50 flex justify-center px-4">
      <div className="pointer-events-auto flex items-center gap-1 rounded-full border border-black/10 bg-white/90 p-1 shadow-lg backdrop-blur-md">
        <span className="px-3 text-[11px] font-medium tracking-wide text-black/45 uppercase">
          Direction
        </span>
        <Link
          href={aHref}
          aria-current={!isB ? "page" : undefined}
          className={cn(
            item,
            !isB ? "bg-[#121218] text-white" : "text-black/60 hover:text-black"
          )}
        >
          A · Sevora
        </Link>
        <Link
          href={bHref}
          aria-current={isB ? "page" : undefined}
          className={cn(
            item,
            isB ? "bg-[#0f2438] text-white" : "text-black/60 hover:text-black"
          )}
        >
          B · Archio
        </Link>
      </div>
    </div>
  );
}
