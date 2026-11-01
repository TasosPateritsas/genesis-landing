"use client";

import type { SideTitle as SideTitleCopy } from "@/data/teamPage";
import { useLocale } from "@/i18n/LocaleProvider";

export function SideTitle({
  id,
  title,
  className,
}: {
  id: string;
  title: SideTitleCopy;
  className?: string;
}) {
  const { locale } = useLocale();
  const lines = title.lines[locale];

  return (
    <h2 id={id} className={className ? `team-side-title ${className}` : "team-side-title"} aria-label={lines.join(" ")}>
      {lines.map((line, index) => (
        <span key={`${line}-${index}`} className={index >= title.accentFrom ? "is-accent" : undefined}>
          {line}
        </span>
      ))}
    </h2>
  );
}
