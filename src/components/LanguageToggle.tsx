"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Locale } from "@/data/content";
import { useLocale } from "@/i18n/LocaleProvider";
import { localizePath, stripLocalePrefix } from "@/lib/routes";

const LOCALES: readonly Locale[] = ["en", "el"];

export function LanguageToggle({
  className = "",
  onNavigate,
}: {
  className?: string;
  onNavigate?: () => void;
}) {
  const { locale } = useLocale();
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const sync = () => setHash(window.location.hash);
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, [pathname]);

  return (
    <div className={`lang-switch ${className}`.trim()} role="group" aria-label="Language">
      {LOCALES.map((code, index) => (
        <span key={code} className="contents">
          {index > 0 ? (
            <span className="lang-switch-sep" aria-hidden>
              /
            </span>
          ) : null}
          <Link
            href={`${localizePath(stripLocalePrefix(pathname), code)}${hash}`}
            hrefLang={code}
            aria-current={locale === code ? "page" : undefined}
            className="lang-switch-link"
            onClick={onNavigate}
          >
            {code.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  );
}
