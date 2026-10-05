import Link from "next/link";
import { site } from "@/lib/site";
import { Confirm } from "@/components/Confirm";

const pages = [
  { href: "/", label: "Home" },
  { href: "/coverage", label: "Protect my family" },
  { href: "/work-with-me", label: "Work with me" },
  { href: "/privacy", label: "Privacy" },
];

const linkClass =
  "text-sm leading-5 font-medium text-[var(--sv-500)] hover:text-[var(--sv-900)]";

export function Footer() {
  return (
    <footer className="mx-auto mt-auto w-full max-w-[1200px] px-4 pt-8 pb-8 md:px-0 md:pt-12">
      <div className="sv-footer-shell">
        <div className="sv-footer-card">
          <div className="relative px-6 pt-10 pb-28 md:px-12 md:pt-12 md:pb-52">
            <div className="flex flex-col gap-10 md:flex-row md:justify-between md:gap-24">
              <div className="flex max-w-[480px] flex-col gap-4">
                <p className="text-lg leading-7 font-semibold tracking-[-0.03em]">
                  {site.name}, {site.credentials}
                </p>
                <p className="sv-body">
                  Independent agent
                  <br />
                  Texas insurance license #
                  <Confirm>{site.licenseNumber}</Confirm> &middot; Licensed in
                  Texas only
                </p>
              </div>
              <div className="flex flex-wrap gap-x-24 gap-y-10">
                <div className="flex w-[168px] flex-col gap-5">
                  <p className="text-sm leading-5 font-medium">Pages</p>
                  <ul className="grid gap-4">
                    {pages.map((page) => (
                      <li key={page.href}>
                        <Link href={page.href} className={linkClass}>
                          {page.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-col gap-5">
                  <p className="text-sm leading-5 font-medium">Contact</p>
                  <ul className="grid gap-4">
                    <li>
                      <a href={site.phoneHref} className={linkClass}>
                        {site.phoneDisplay}
                      </a>
                    </li>
                    <li>
                      <a href={`mailto:${site.email}`} className={linkClass}>
                        {site.email}
                      </a>
                    </li>
                    <li className={linkClass}>{site.city}</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="sv-sm relative z-10 mt-12 max-w-3xl">
              This website was created by an independent agent. It is general
              education, not tax, legal or investment advice. Life insurance and
              annuities are not bank deposits, are not FDIC insured, and are not
              investments in the stock market. Guarantees depend on the
              claims-paying ability of the issuing insurance company.
            </p>

            <p
              className="sv-wordmark absolute right-0 bottom-0 left-0 text-center"
              aria-hidden="true"
            >
              Marynett
            </p>
          </div>
          <div className="sv-footer-bar flex flex-wrap items-center justify-between gap-3 px-6 py-6 text-sm leading-5 md:px-12">
            <p>
              © 2026 <span className="text-white">{site.name}</span>
            </p>
            <p className="font-medium">Licensed in Texas only</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
