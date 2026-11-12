"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageToggle } from "@/components/LanguageToggle";
import { Logo } from "@/components/Logo";
import { emailHref, site } from "@/config/site";
import { useLocale, useLocalizedPath } from "@/i18n/LocaleProvider";
import { contactHref } from "@/lib/contactHref";
import { primaryNav, stripLocalePrefix } from "@/lib/routes";

export type HeaderVariant = "light" | "dark";

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

function isCurrent(path: string, barePath: string) {
  if (path === "/") return barePath === "/";
  return barePath === path || barePath.startsWith(`${path}/`);
}

export function Header({ variant = "light" }: { variant?: HeaderVariant }) {
  const { locale, t } = useLocale();
  const hrefFor = useLocalizedPath();
  const barePath = stripLocalePrefix(usePathname());
  const talkHref = contactHref(locale, "message");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const dark = variant === "dark";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > (barePath === "/" ? window.innerHeight * 0.8 : 20));
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [barePath]);

  useEffect(() => {
    if (!open) return;

    const root = document.documentElement;
    const previousOverflow = root.style.overflow;
    root.style.overflow = "hidden";

    const close = () => {
      setOpen(false);
      toggleRef.current?.focus();
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab") return;
      const panelItems = Array.from(panelRef.current?.querySelectorAll<HTMLElement>(FOCUSABLE) ?? []);
      const items = [toggleRef.current, ...panelItems].filter((item): item is HTMLElement => item != null);
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    const desktop = window.matchMedia("(min-width: 1024px)");
    const onResize = () => {
      if (desktop.matches) setOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onResize);
    return () => {
      root.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <>
      <a href="#main" className="skip-link">
        {t.nav.skip}
      </a>
      <header
        className="site-header"
        data-variant={variant}
        data-path={barePath}
        data-scrolled={scrolled}
        data-open={open}
        data-cursor={dark ? "dark" : undefined}
      >
        <div className="site-header-bar">
          <Link href={hrefFor("/")} className="site-header-logo" aria-label={`${site.name} home`} onClick={closeMenu}>
            <Logo tone={dark ? "inverse" : "default"} />
          </Link>

          <nav className="site-header-nav" aria-label="Primary">
            {primaryNav.map((item) => {
              const current = isCurrent(item.path, barePath);
              return (
                <Link
                  key={item.path}
                  href={hrefFor(item.path)}
                  aria-current={current ? "page" : undefined}
                  className="site-nav-link"
                >
                  {t.nav[item.label]}
                  <span className="site-nav-underline" aria-hidden />
                </Link>
              );
            })}
          </nav>

          <div className="site-header-actions">
            <LanguageToggle className="site-header-lang" />
            <Link href={talkHref} className="site-header-cta" tabIndex={open ? -1 : undefined} aria-hidden={open || undefined}>
              {t.nav.cta}
              <span className="cta-arrow" aria-hidden>
                →
              </span>
            </Link>
            <button
              ref={toggleRef}
              type="button"
              className="site-header-burger"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              onClick={() => setOpen((value) => !value)}
            >
              <span aria-hidden />
              <span aria-hidden />
              <span aria-hidden />
            </button>
          </div>
        </div>
      </header>

      <div
        ref={panelRef}
        id="mobile-nav"
        className="site-menu"
        data-variant={variant}
        data-open={open}
        inert={!open}
        data-cursor={dark ? "dark" : undefined}
      >
        <nav aria-label="Mobile">
          <ul>
            {primaryNav.map((item) => {
              const current = isCurrent(item.path, barePath);
              return (
                <li key={item.path}>
                  <Link
                    href={hrefFor(item.path)}
                    aria-current={current ? "page" : undefined}
                    className="site-menu-link"
                    onClick={closeMenu}
                  >
                    {t.nav[item.label]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="site-menu-bottom">
          <LanguageToggle className="lang-switch-lg" onNavigate={closeMenu} />
          <Link href={talkHref} className="site-menu-cta" onClick={closeMenu}>
            {t.nav.cta}
            <span className="cta-arrow" aria-hidden>
              →
            </span>
          </Link>
          {emailHref ? (
            <a href={emailHref} className="site-menu-email">
              {site.emailDisplay}
            </a>
          ) : (
            <span className="site-menu-email">{site.emailDisplay}</span>
          )}
        </div>
      </div>
    </>
  );
}
