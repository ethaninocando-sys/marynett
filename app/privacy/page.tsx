import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <section className="shell pt-10 pb-16 md:pt-16 md:pb-24">
      <p className="eyebrow">Privacy</p>
      <h1 className="display mt-4">What I do with your information.</h1>

      <div className="copy measure mt-8">
        <p>
          When you fill in a form on this site, I receive your first name, your
          phone number, the answers you chose and the best time to call. I do
          not ask for health, financial or identification details on this
          website.
        </p>
        <p>
          I use that information for one thing: to contact you about the request
          you made. I call and text personally. I do not use auto-dialers.
        </p>
        <p>
          I don&rsquo;t sell or share your information for marketing. If you
          later apply for a policy, the details needed for that application go
          to the insurance company you choose, and you will see exactly what is
          being sent.
        </p>
        <p>
          You can ask me to delete your details or stop contacting you at any
          time. Call or text{" "}
          <a href={site.phoneHref} className="text-link whitespace-nowrap">
            {site.phoneDisplay}
          </a>{" "}
          or email{" "}
          <a href={`mailto:${site.email}`} className="text-link">
            {site.email}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
