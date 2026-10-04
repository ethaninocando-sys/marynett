"use client";

import { useEffect, useState } from "react";
import { useInView } from "@/components/sevora/useInView";

// Counts from zero up to `value` once the number scrolls into view.
export function CountUp({
  value,
  decimals = 0,
  duration = 1400,
}: {
  value: number;
  decimals?: number;
  duration?: number;
}) {
  const [ref, inView] = useInView<HTMLSpanElement>(1);
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = reduced ? 1 : Math.min((now - start) / duration, 1);
      setShown(value * (1 - Math.pow(1 - t, 3)));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {shown.toFixed(decimals)}
    </span>
  );
}
