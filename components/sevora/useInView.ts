"use client";

import { useEffect, useRef, useState } from "react";

// True once the element has scrolled into view. Stays true afterwards.
// Uses a plain scroll check so it also works where IntersectionObserver
// callbacks are throttled.
export function useInView<T extends HTMLElement>(offset = 0.9) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return;
    const check = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * offset && rect.bottom > 0) {
        setInView(true);
      }
    };
    check();
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [inView, offset]);

  return [ref, inView] as const;
}
