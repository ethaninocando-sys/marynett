import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

/**
 * "Do I pay you?" is answered as a commission disclosure, never as "free".
 * FEG Compliance Declaration #23 bars an agent from presenting their services
 * as free or their products as lowest cost.
 */
const questions = [
  {
    q: "Do I pay you?",
    a: "You don’t write me a check. If you end up buying a policy, the insurance company pays me a commission that’s built into it. I’ll walk you through how that works on the call so nothing catches you off guard.",
  },
  {
    q: "I already have insurance at work.",
    a: "Good, bring it. We’ll look at what it actually pays if you get sick, and what happens to it the day you leave.",
  },
  {
    q: "Do I need a medical exam?",
    a: "Depends on the policy and the company. A lot of them skip it now. We’ll find out on the call.",
  },
  {
    q: "Is this a sales call?",
    a: "It’s a review. If what you’ve got is right for you, I’ll say so and we’ll hang up. If there’s a gap, I’ll show you your options and you decide.",
  },
];

export function Faq() {
  return (
    <section className="section-y bg-background">
      <div className="container-page max-w-3xl">
        <p className="eyebrow text-teal">Questions people ask</p>
        <h2 className="mt-4 text-[1.875rem] leading-[1.12] font-semibold tracking-[-0.02em] text-balance sm:text-[2.25rem]">
          The same four, every time
        </h2>

        <Accordion className="mt-8">
          {questions.map((item) => (
            <AccordionItem key={item.q} className="border-border">
              <AccordionTrigger className="py-5 text-[1.0625rem] font-semibold hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-[0.9375rem] leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
