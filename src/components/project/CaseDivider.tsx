import { useReveal } from "@/lib/reveal";

const MARGIN = "0px 0px -8% 0px";

export function CaseDivider({ label }: { label: string }) {
  const [ref, on] = useReveal<HTMLDivElement>(0.15, MARGIN);
  return (
    <div ref={ref} className={on ? "case-divider is-revealed" : "case-divider"}>
      <span className="case-divider-line is-left" aria-hidden />
      <p className="case-divider-label">{label}</p>
      <span className="case-divider-line is-right" aria-hidden />
    </div>
  );
}

export const caseRevealMargin = MARGIN;
