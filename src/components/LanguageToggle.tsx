"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import type { Locale } from "@/data/content";

type LanguageToggleProps = {
  compact?: boolean;
  className?: string;
};

export function LanguageToggle({ compact = false, className = "" }: LanguageToggleProps) {
  const { locale, setLocale } = useLocale();

  function select(next: Locale) {
    setLocale(next);
  }

  if (compact) {
    return (
      <button
        type="button"
        onClick={() => select(locale === "en" ? "el" : "en")}
        className={`inline-flex h-9 items-center rounded-md border border-border bg-bg-elevated px-2.5 text-xs font-semibold tracking-wide text-ink ${className}`}
        aria-label={locale === "en" ? "Switch to Greek" : "Switch to English"}
      >
        <span className="rounded bg-accent px-1.5 py-0.5 text-white">{locale.toUpperCase()}</span>
      </button>
    );
  }

  return (
    <div
      className={`inline-flex items-center rounded-full border border-border bg-bg-elevated/80 p-0.5 ${className}`}
      role="group"
      aria-label="Language"
    >
      {(["en", "el"] as const).map((code) => {
        const active = locale === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => select(code)}
            aria-pressed={active}
            className={`rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide transition-colors ${
              active
                ? "bg-accent text-white"
                : "text-ink-muted opacity-50 hover:opacity-80"
            }`}
          >
            {code.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
