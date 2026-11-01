"use client";

import Link from "next/link";
import { Logo } from "@/components/Logo";
import { phoneHref, site } from "@/config/site";
import { useLocale, useLocalizedPath } from "@/i18n/LocaleProvider";
import { primaryNav } from "@/lib/routes";

export type FooterVariant = "light" | "mint" | "dark";

type FooterLink = { label: string; href: string | null };

function FooterItem({ link }: { link: FooterLink }) {
  if (!link.href) return <span className="site-footer-text">{link.label}</span>;
  if (link.href.startsWith("/")) {
    return (
      <Link href={link.href} className="site-footer-link">
        {link.label}
      </Link>
    );
  }
  return (
    <a href={link.href} className="site-footer-link">
      {link.label}
    </a>
  );
}

export function Footer({ variant = "light" }: { variant?: FooterVariant }) {
  const { t } = useLocale();
  const hrefFor = useLocalizedPath();
  const year = new Date().getFullYear();

  const columns: Array<{ title: string; links: FooterLink[] }> = [
    {
      title: t.footer.companyTitle,
      links: primaryNav.map((item) => ({ label: t.nav[item.label], href: hrefFor(item.path) })),
    },
    {
      title: t.footer.servicesTitle,
      links: t.footer.services.map((item) => ({ label: item.label, href: hrefFor(item.href) })),
    },
    {
      title: t.footer.contactTitle,
      links: [
        { label: site.email, href: `mailto:${site.email}` },
        { label: site.phoneDisplay, href: phoneHref },
      ],
    },
  ];

  return (
    <footer className="site-footer" data-variant={variant} data-cursor={variant === "dark" ? "dark" : undefined}>
      <div className="site-footer-inner site-footer-top">
        <div className="site-footer-brand">
          <Link href={hrefFor("/")} className="site-footer-logo" aria-label={`${site.name} home`}>
            <Logo tone={variant === "dark" ? "inverse" : "default"} />
          </Link>
          <p className="site-footer-location">{t.footer.location}</p>
          <p className="site-footer-tagline">{t.footer.tagline}</p>
        </div>
        {columns.map((column) => (
          <nav key={column.title} className="site-footer-col" aria-label={column.title}>
            <p className="site-footer-title">{column.title}</p>
            <ul>
              {column.links.map((link) => (
                <li key={link.label}>
                  <FooterItem link={link} />
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className="site-footer-bottom">
        <div className="site-footer-inner site-footer-bar">
          <p>
            © {year} {site.name}. {t.footer.rights}
          </p>
          <p className="site-footer-legal">
            <Link href={hrefFor("/privacy")} className="site-footer-link">
              {t.footer.privacy}
            </Link>
            <span className="site-footer-dot" aria-hidden>
              ·
            </span>
            <Link href={hrefFor("/cookies")} className="site-footer-link">
              {t.footer.cookies}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
