"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export type FaqItem = { question: string; answer: string };

// Accordion. `defaultOpen` is the index of the item that starts open.
export function Faq({
  items,
  defaultOpen = -1,
}: {
  items: FaqItem[];
  defaultOpen?: number;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="mx-auto grid w-full max-w-3xl gap-3">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.question} className="sv-faq" data-open={isOpen}>
            <h3>
              <button
                type="button"
                className="sv-faq-trigger"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                onClick={() => setOpen(isOpen ? -1 : index)}
              >
                {item.question}
                <Plus
                  className="sv-faq-icon"
                  size={20}
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={`faq-panel-${index}`}
              className="sv-faq-panel"
              role="region"
              inert={!isOpen}
            >
              <div>
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
