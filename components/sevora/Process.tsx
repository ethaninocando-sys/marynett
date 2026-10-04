"use client";

import { useEffect, useRef, useState } from "react";

export type Step = {
  icon: React.ReactNode;
  title: string;
  text?: string;
};

// A vertical list of steps. A line fills and each step lights up as the
// reader scrolls past it.
export function Process({ steps }: { steps: Step[] }) {
  const ref = useRef<HTMLOListElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const trigger = window.innerHeight * 0.6;
      const p = (trigger - rect.top) / rect.height;
      setProgress(Math.min(Math.max(p, 0), 1));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <ol ref={ref} className="relative grid gap-2">
      <div
        aria-hidden="true"
        className="absolute top-11 bottom-11 left-[43px] w-0.5 rounded-full bg-[var(--sv-100)]"
      >
        <div
          className="w-full rounded-full bg-[var(--sv-900)]"
          style={{ height: `${progress * 100}%` }}
        />
      </div>
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="sv-step"
          data-active={progress >= index / steps.length && progress > 0}
        >
          <span className="sv-step-icon">{step.icon}</span>
          <h3 className="sv-h4 py-1">{step.title}</h3>
          {step.text ? (
            <p className="sv-body mt-2 max-w-md">{step.text}</p>
          ) : null}
        </li>
      ))}
    </ol>
  );
}
