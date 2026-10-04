import Link from "next/link";
import {
  affiliation,
  agent,
  footnotes,
  generalDisclosure,
  indexDisclosure,
  notGovernment,
} from "@/lib/site";
import { Container, Section } from "@/components/archio/section";

export function SiteFooter() {
  return (
    <Section tone="bone" className="border-t border-border pb-[140px]">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <p className="font-display text-[26px] leading-none font-light tracking-[-0.04em]">
              {agent.name}, {agent.credentials}
            </p>
            <p className="body-sm mt-4 max-w-xs text-muted-foreground">
              I work {agent.serviceAreas.join(", ")} and the rest of the Valley.
            </p>
          </div>

          <div>
            <p className="label text-primary">Get in touch</p>
            <ul className="mt-4 space-y-2 text-[15px] tracking-[-0.02em]">
              <li>
                <a href={agent.phoneHref} className="hover:text-primary">
                  {agent.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${agent.email}`}
                  className="break-all hover:text-primary"
                >
                  {agent.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="label text-primary">Licensing</p>
            <ul className="body-sm mt-4 space-y-1.5 text-muted-foreground">
              <li className="text-foreground">{agent.legalName}</li>
              <li>
                {agent.licenseType} · License #{agent.licenseNumber}
              </li>
              <li>NPN {agent.npn}</li>
              <li>Licensed in Texas only</li>
            </ul>
          </div>
        </div>

        {/* ------------------------------------------------------------------
            Required disclosures. P&P 17(F) and Agent Agreement 4(J) require the
            independent-agent phrase wherever the FEG name appears; the Social
            Media Policy requires "FEG Insurance Services" on material that
            solicits insurance sales.
        ------------------------------------------------------------------ */}
        <div className="mt-14 space-y-4 border-t border-border pt-8 text-[13px] leading-relaxed text-muted-foreground">
          <p className="font-medium text-foreground">
            {affiliation.independence} · {affiliation.name}
          </p>

          <p>{generalDisclosure}</p>
          <p>{notGovernment}</p>

          <p>{indexDisclosure}</p>

          {footnotes.map((note) => (
            <p key={note.claim}>
              {note.claim}{" "}
              {note.source ? (
                <span>Source: {note.source}</span>
              ) : (
                <span className="font-medium text-primary">
                  [Source pending. Supply the FEG published material before
                  publication.]
                </span>
              )}
            </p>
          ))}

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-3">
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy policy
            </Link>
            <span aria-hidden="true">|</span>
            <span>
              &copy; {new Date().getFullYear()} {agent.legalName}
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
}
