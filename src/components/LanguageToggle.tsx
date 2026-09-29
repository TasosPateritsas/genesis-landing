"use client";

import { useLocale } from "@/i18n/LocaleProvider";
import type { Locale } from "@/data/content";

type LanguageToggleProps = {
  compact?: boolean;
  className?: string;
  tone?: "default" | "dark";
};

export function LanguageToggle({
  compact = false,
  className = "",
  tone = "default",
}: LanguageToggleProps) {
  const { locale, setLocale } = useLocale();

  function select(next: Locale) {
    setLocale(next);
  }

  if (compact) {
    return (
      <button
        type="button"
        onClick={() => select(locale === "en" ? "el" : "en")}
        className={`inline-flex h-9 cursor-pointer items-center rounded-md border px-2.5 text-xs font-semibold tracking-wide ${
          tone === "dark"
            ? "border-white/20 bg-white/10 text-white"
            : "border-border bg-bg-elevated text-ink"
        } ${className}`}
        aria-label={locale === "en" ? "Switch to Greek" : "Switch to English"}
      >
        <span
          className={`rounded px-1.5 py-0.5 ${
            tone === "dark" ? "bg-white text-[#0B3B30]" : "bg-accent text-white"
          }`}
        >
          {locale.toUpperCase()}
        </span>
      </button>
    );
  }

  return (
    <div
      className={`inline-flex items-center rounded-full p-0.5 ${
        tone === "dark"
          ? "bg-[rgba(255,255,255,0.12)]"
          : "border border-border bg-bg-elevated/80"
      } ${className}`}
      role="group"
      aria-label="Language"
    >
      {(["en", "el"] as const).map((code) => {
        const active = locale === code;
        const activeClass =
          tone === "dark" ? "bg-white text-[#0B3B30]" : "bg-accent text-white";
        const inactiveClass =
          tone === "dark"
            ? "text-[rgba(255,255,255,0.6)] hover:text-white"
            : "text-ink-muted opacity-50 hover:opacity-80";
        return (
          <button
            key={code}
            type="button"
            onClick={() => select(code)}
            aria-pressed={active}
            className={`cursor-pointer rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide transition-colors ${
              active ? activeClass : inactiveClass
            }`}
          >
            {code.toUpperCase()}
          </button>
        );
      })}
    </div>
  );
}
