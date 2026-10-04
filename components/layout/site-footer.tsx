import Link from "next/link";
import {
  affiliation,
  agent,
  footnotes,
  generalDisclosure,
  indexDisclosure,
  notGovernment,
} from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-band-border bg-band text-band-foreground">
      <div className="container-page py-14 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="font-display text-xl font-semibold tracking-tight">
              {agent.name}
            </p>
            <p className="eyebrow mt-2 text-band-muted">
              Life Insurance · Living Benefits · Rio Grande Valley
            </p>
            <p className="mt-5 text-[0.9375rem] text-band-muted">
              I work {agent.serviceAreas.join(", ")} and the rest of the Valley.
            </p>
          </div>

          <div>
            <p className="eyebrow text-gold">Get in touch</p>
            <ul className="mt-4 space-y-2 text-[0.9375rem]">
              <li>
                <a
                  href={agent.phoneHref}
                  className="rounded-sm hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  {agent.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${agent.email}`}
                  className="rounded-sm break-all hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                >
                  {agent.email}
                </a>
              </li>
              <li>
                <a href="#book" className="rounded-sm hover:text-gold">
                  Book a 15-minute check
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow text-gold">Licensing</p>
            <ul className="mt-4 space-y-1.5 text-[0.9375rem] text-band-muted">
              <li className="text-band-foreground">{agent.legalName}</li>
              <li>
                {agent.licenseType} · License #{agent.licenseNumber}
              </li>
              <li>NPN {agent.npn}</li>
              <li>{agent.qualification}</li>
              <li>
                {agent.city}, {agent.state}
              </li>
            </ul>
          </div>
        </div>

        {/* ------------------------------------------------------------------
            Required disclosures. FEG P&P 17(F) and Agent Agreement 4(J) require
            the independent-agent phrase wherever the FEG name appears; the
            Social Media Policy requires "FEG Insurance Services" on material
            that solicits insurance sales.
        ------------------------------------------------------------------ */}
        <div className="mt-12 space-y-4 border-t border-band-border pt-8 text-[0.8125rem] leading-relaxed text-band-muted">
          <p className="font-semibold text-band-foreground">
            {affiliation.independence} · {affiliation.name}
          </p>

          <p>{notGovernment}</p>

          <p>
            <sup>*</sup> {indexDisclosure}
          </p>

          {footnotes.map((note) => (
            <p key={note.id}>
              <sup>{note.id}</sup> {note.claim}{" "}
              {note.source ? (
                <span>Source: {note.source}</span>
              ) : (
                <span className="font-semibold text-gold">
                  [Source pending. Supply the FEG published material before
                  publication.]
                </span>
              )}
            </p>
          ))}

          <p>{generalDisclosure}</p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-3">
            <Link
              href="/privacy"
              className="rounded-sm underline underline-offset-4 hover:text-gold"
            >
              Privacy policy
            </Link>
            <span className="text-band-border" aria-hidden="true">
              |
            </span>
            <span>
              &copy; {new Date().getFullYear()} {agent.legalName}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
