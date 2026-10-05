"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Logo } from "@/components/Logo";
import { useLocale, useLocalizedPath } from "@/i18n/LocaleProvider";
import { contactHref } from "@/lib/contactHref";
import { stripLocalePrefix } from "@/lib/routes";

export function Header() {
  const { locale, t } = useLocale();
  const hrefFor = useLocalizedPath();
  const pathname = usePathname();
  const barePath = stripLocalePrefix(pathname);
  const dark = barePath === "/contact";
  const talkHref = contactHref(locale, "message");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: hrefFor("/services"), path: "/services", label: t.nav.services },
    { href: hrefFor("/#work"), path: "", label: t.nav.work },
    { href: hrefFor("/#team"), path: "", label: t.nav.team },
    { href: hrefFor("/contact"), path: "/contact", label: t.nav.contact },
  ];

  function isCurrent(path: string) {
    return path !== "" && barePath === path;
  }

  function linkClass(path: string, mobile = false) {
    const current = isCurrent(path);
    const size = mobile ? "text-base" : "text-sm";
    if (dark) {
      return `${size} ${current ? "font-bold text-white" : "font-medium text-white/75 hover:text-white"}`;
    }
    return `${size} ${
      current ? "font-bold text-[#14181a]" : "font-medium text-[#4b5563] hover:text-[#14181a]"
    }`;
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-cursor={dark ? "dark" : undefined}
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background,backdrop-filter] duration-300 ${
        dark
          ? "border-white/12 bg-[#0B3B30]"
          : scrolled || open
            ? "border-accent/25 bg-bg-elevated/90 backdrop-blur-md"
            : "border-accent/25 bg-transparent"
      }`}
    >
      <div className="section-pad container-narrow flex h-16 items-center justify-between md:h-[4.25rem]">
        <Link href={hrefFor("/#top")} className="text-lg md:text-xl" aria-label="Genesis home">
          <Logo tone={dark ? "inverse" : "default"} />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isCurrent(link.path) ? "page" : undefined}
              className={`transition-colors ${linkClass(link.path)}`}
            >
              {link.label}
            </Link>
          ))}
          <LanguageToggle tone={dark ? "dark" : "default"} />
          <Link
            href={talkHref}
            className={`btn-primary inline-flex h-10 items-center rounded-md px-4 text-sm font-semibold${
              dark ? " btn-primary-glow" : ""
            }`}
          >
            {t.nav.cta}
          </Link>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageToggle compact tone={dark ? "dark" : "default"} />
          <button
            type="button"
            className={`inline-flex h-10 w-10 items-center justify-center rounded-md border ${
              dark
                ? "border-white/20 bg-transparent text-white"
                : "border-border bg-bg-elevated text-ink"
            }`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-4 flex-col gap-1.5" aria-hidden>
              <span
                className={`h-0.5 w-full transition-transform ${dark ? "bg-white" : "bg-ink"} ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`h-0.5 w-full transition-opacity ${dark ? "bg-white" : "bg-ink"} ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`h-0.5 w-full transition-transform ${dark ? "bg-white" : "bg-ink"} ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          className={`section-pad border-t pb-4 lg:hidden ${
            dark ? "border-white/12 bg-[#0B3B30]" : "border-border bg-bg-elevated"
          }`}
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1 pt-2">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isCurrent(link.path) ? "page" : undefined}
                  className={`block rounded-md px-3 py-3 transition-colors ${linkClass(link.path, true)}`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="px-3 py-3">
              <LanguageToggle tone={dark ? "dark" : "default"} />
            </li>
            <li className="pt-1">
              <Link
                href={talkHref}
                className={`btn-primary flex h-11 items-center justify-center rounded-md text-sm font-semibold${
                  dark ? " btn-primary-glow" : ""
                }`}
                onClick={() => setOpen(false)}
              >
                {t.nav.cta}
              </Link>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
