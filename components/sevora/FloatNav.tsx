"use client";

import { useEffect, useState } from "react";

// The pill-shaped navigation that slides down once the page is scrolled.
export function FloatNav({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 160);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sv-floatnav" data-show={show} aria-hidden={!show}>
      {children}
    </div>
  );
}
