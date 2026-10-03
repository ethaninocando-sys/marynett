import Link from "next/link";
import { site, isPrototype } from "@/lib/site";

export function Header() {
  return (
    <>
      {isPrototype ? (
        <p className="bg-navy px-5 py-2 text-center text-[0.8125rem] leading-snug text-white">
          Prototype 1.0. Highlighted text still needs Marynett&rsquo;s
          confirmation.
        </p>
      ) : null}
      <header className="shell flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-5">
        <Link href="/" className="block">
          <span className="block font-serif text-[1.375rem] leading-tight font-medium tracking-[-0.01em]">
            {site.name}, {site.credentials}
          </span>
          <span className="eyebrow mt-0.5 block text-muted">
            Independent Agent &middot; {site.city}
          </span>
        </Link>
        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2 text-base font-medium">
          <Link href="/coverage" className="hover:text-gold">
            Protect my family
          </Link>
          <Link href="/work-with-me" className="hover:text-gold">
            Work with me
          </Link>
          <a
            href={site.phoneHref}
            className="whitespace-nowrap hover:text-gold"
          >
            {site.phoneDisplay}
          </a>
        </nav>
      </header>
    </>
  );
}
