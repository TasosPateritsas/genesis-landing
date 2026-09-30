"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/data/content";
import { useLocale } from "@/i18n/LocaleProvider";
import { localizePath, stripLocalePrefix } from "@/lib/routes";

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
  const { locale } = useLocale();
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const sync = () => setHash(window.location.hash);
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [pathname]);

  function hrefFor(next: Locale) {
    const bare = stripLocalePrefix(pathname);
    return `${localizePath(bare, next)}${hash}`;
  }

  if (compact) {
    const next = locale === "en" ? "el" : "en";
    return (
      <Link
        href={hrefFor(next)}
        className={`inline-flex h-9 items-center rounded-md border px-2.5 text-xs font-semibold tracking-wide no-underline ${
          tone === "dark"
            ? "border-white/20 bg-white/10 text-white"
            : "border-border bg-bg-elevated text-ink"
        } ${className}`}
        aria-label={locale === "en" ? "Switch to Greek" : "Switch to English"}
        hrefLang={next}
      >
        <span
          className={`rounded px-1.5 py-0.5 ${
            tone === "dark" ? "bg-white text-[#0B3B30]" : "bg-accent text-white"
          }`}
        >
          {locale.toUpperCase()}
        </span>
      </Link>
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
          <Link
            key={code}
            href={hrefFor(code)}
            hrefLang={code}
            aria-current={active ? "page" : undefined}
            className={`rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide no-underline transition-colors ${
              active ? activeClass : inactiveClass
            }`}
          >
            {code.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
