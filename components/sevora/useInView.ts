"use client";

import { useEffect, useRef, useState } from "react";

// True once the element has scrolled into view. Stays true afterwards.
// Uses both a scroll check and an IntersectionObserver, because either one
// alone can miss an element when the page jumps a long way at once.
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
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setInView(true);
    });
    observer.observe(el);
    window.addEventListener("scroll", check, { passive: true });
    window.addEventListener("resize", check);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", check);
      window.removeEventListener("resize", check);
    };
  }, [inView, offset]);

  return [ref, inView] as const;
}
