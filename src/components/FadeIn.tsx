"use client";

import { useEffect, useRef, type ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  className?: string;
  delay?: 0 | 1 | 2 | 3;
  /** "section" fades the whole block once, when about 20% is visible. */
  variant?: "rise" | "section" | "from-left" | "from-right";
};

export function FadeIn({
  children,
  className = "",
  delay = 0,
  variant = "rise",
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.unobserve(node);
        }
      },
      variant === "rise"
        ? { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
        : { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [variant]);

  const delayClass =
    variant === "rise" && delay === 1
      ? "fade-in-delay-1"
      : variant === "rise" && delay === 2
        ? "fade-in-delay-2"
        : variant === "rise" && delay === 3
          ? "fade-in-delay-3"
          : "";

  const motionClass =
    variant === "section"
      ? "fade-in-section"
      : variant === "from-left"
        ? "service-enter-left"
        : variant === "from-right"
          ? "service-enter-right"
          : "fade-in";

  return (
    <div ref={ref} className={`${motionClass} ${delayClass} ${className}`.trim()}>
      {children}
    </div>
  );
}
