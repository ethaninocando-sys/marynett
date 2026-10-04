"use client";

import { useInView } from "@/components/sevora/useInView";

// Fades its children up into place the first time they scroll into view.
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const [ref, shown] = useInView<HTMLDivElement>();

  return (
    <div
      ref={ref}
      data-in={shown}
      className={`sv-reveal ${className}`}
      style={{ "--sv-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
