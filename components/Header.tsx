import Link from "next/link";
import { Phone } from "lucide-react";
import { site, isPrototype } from "@/lib/site";
import { FloatNav } from "@/components/sevora/FloatNav";

const links = [
  { href: "/coverage", label: "Protect my family" },
  { href: "/work-with-me", label: "Work with me" },
];

function Brand() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <span className="sv-tile sv-tile-dark size-8 rounded-lg font-serif text-sm font-semibold">
        MB
      </span>
      <span className="text-lg leading-7 font-semibold tracking-[-0.03em] whitespace-nowrap">
        {site.name}, {site.credentials}
      </span>
    </Link>
  );
}

function NavLinks() {
  return (
    <nav className="hidden gap-2 md:flex">
      {links.map((link) => (
        <Link key={link.href} href={link.href} className="sv-navlink">
          {link.label}
        </Link>
      ))}
    </nav>
  );
}

function CallButton() {
  return (
    <a href={site.phoneHref} className="sv-btn sv-btn-sm sv-btn-primary">
      <Phone size={16} strokeWidth={1.75} aria-hidden="true" />
      <span className="hidden sm:inline">{site.phoneDisplay}</span>
      <span className="sm:hidden">Call</span>
    </a>
  );
}

export function Header() {
  return (
    <>
      {isPrototype ? (
        <p className="bg-[var(--sv-dark-bottom)] px-4 py-1.5 text-center text-xs leading-5 tracking-normal text-white/80">
          Prototype. Dotted underlines mark facts Marynett still has to confirm.
        </p>
      ) : null}
      <header className="mx-auto flex w-full max-w-[1200px] items-center justify-between gap-4 p-4 md:p-6">
        <Brand />
        <NavLinks />
        <CallButton />
      </header>
      <FloatNav>
        <Brand />
        <NavLinks />
        <CallButton />
      </FloatNav>
    </>
  );
}
