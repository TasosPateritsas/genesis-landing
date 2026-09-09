"use client";

import { useEffect, useState } from "react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Logo } from "@/components/Logo";
import { useLocale } from "@/i18n/LocaleProvider";

export function Header() {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#work", label: t.nav.work },
    { href: "#team", label: t.nav.team },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background,border,backdrop-filter] duration-300 ${
        scrolled || open
          ? "border-b border-border bg-bg-elevated/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="section-pad container-narrow flex h-16 items-center justify-between md:h-[4.25rem]">
        <a href="#top" className="text-lg md:text-xl" aria-label="Genesis home">
          <Logo />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
          <LanguageToggle />
          <a
            href="#contact"
            className="inline-flex h-10 items-center rounded-md bg-accent px-4 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
          >
            {t.nav.cta}
          </a>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle compact />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-bg-elevated text-ink"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-4 flex-col gap-1.5" aria-hidden>
              <span
                className={`h-0.5 w-full bg-ink transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`h-0.5 w-full bg-ink transition-opacity ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 w-full bg-ink transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className="section-pad border-t border-border bg-bg-elevated pb-4 lg:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1 pt-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-md px-3 py-3 text-base font-medium text-ink"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="px-3 py-3">
              <LanguageToggle />
            </li>
            <li className="pt-1">
              <a
                href="#contact"
                className="flex h-11 items-center justify-center rounded-md bg-accent text-sm font-semibold text-white"
                onClick={() => setOpen(false)}
              >
                {t.nav.cta}
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
