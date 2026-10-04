import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Hero } from "@/components/sections/hero";
import { Story } from "@/components/sections/story";
import { Proof } from "@/components/sections/proof";
import { WhyANurse } from "@/components/sections/why-a-nurse";
import { Faq } from "@/components/sections/faq";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Story />
        <Proof />
        <WhyANurse />
        <Faq />
      </main>
      <SiteFooter />
    </>
  );
}
