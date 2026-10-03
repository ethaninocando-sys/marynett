import Link from "next/link";
import { site } from "@/lib/site";
import { Confirm } from "@/components/Confirm";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-rule bg-wash">
      <div className="shell py-12">
        <p className="font-serif text-xl leading-tight font-medium">
          {site.name}, {site.credentials}
        </p>
        <p className="mt-2 text-base">
          An Independent FEG Agent &middot; FEG Insurance Services
        </p>
        <p className="mt-1 text-base">
          Texas insurance license #<Confirm>{site.licenseNumber}</Confirm>{" "}
          &middot; Licensed in Texas only
        </p>

        <p className="fine mt-6 max-w-3xl">
          This website was created by an independent agent. It is general
          education, not tax, legal or investment advice. Life insurance and
          annuities are not bank deposits, are not FDIC insured, and are not
          investments in the stock market. Guarantees depend on the
          claims-paying ability of the issuing insurance company.
        </p>

        <p className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-base">
          <a href={site.phoneHref} className="text-link whitespace-nowrap">
            {site.phoneDisplay}
          </a>
          <a href={`mailto:${site.email}`} className="text-link">
            {site.email}
          </a>
          <Link href="/privacy" className="text-link">
            Privacy
          </Link>
        </p>
      </div>
    </footer>
  );
}
