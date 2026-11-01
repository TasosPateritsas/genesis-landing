"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

/** Reveals a `.gx-up` group once, when `threshold` of the observed element is visible. */
export function useReveal<T extends Element>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const desktop = window.matchMedia("(min-width: 1024px)").matches;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setRevealed(true);
        observer.disconnect();
      },
      { threshold, rootMargin: desktop ? "0px 0px -10% 0px" : "0px 0px -5% 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, revealed };
}

/** Entrance delay in seconds; `mobile` applies below 1024px. */
export function revealDelay(desktop: number, mobile = desktop): CSSProperties {
  return { "--gx-delay": `${desktop}s`, "--gx-delay-sm": `${mobile}s` } as CSSProperties;
}

/** The standard sibling stagger: 0.1s on desktop, 0.06s (max 0.3s) below 1024px. */
export function stagger(index: number): CSSProperties {
  return revealDelay(index * 0.1, Math.min(index * 0.06, 0.3));
}
