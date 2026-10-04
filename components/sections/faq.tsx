import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

/**
 * "Do I pay you?" is answered as a commission disclosure, never as "free" —
 * FEG Compliance Declaration #23 bars an agent from presenting their services
 * as free or their products as lowest cost.
 */
const questions = [
  {
    q: "Do I pay you?",
    a: "You don't write me a check. If you decide to buy a policy, the insurance company pays me a commission that's already built into the product, and I'll tell you how that works on the call.",
  },
  {
    q: "I already have insurance at work.",
    a: "Good — bring it. We'll look at what it pays if you get sick, and what happens to it when you leave.",
  },
  {
    q: "Do I need a medical exam?",
    a: "Depends on the policy and the carrier. Many are exam-free today. We'll find out on the call.",
  },
  {
    q: "Is this a sales call?",
    a: "It's a review. If what you have is right for you, I'll say so. If there's a gap, I'll show you options and you decide.",
  },
];

export function Faq() {
  return (
    <section className="section-y bg-background">
      <div className="container-page max-w-3xl">
        <p className="eyebrow text-teal">Questions people ask</p>
        <h2 className="mt-4 text-[1.875rem] leading-[1.12] font-semibold tracking-[-0.02em] text-balance sm:text-[2.25rem]">
          Before you book, the things people always want to know
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
