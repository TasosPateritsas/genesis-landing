"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { phoneHref, site } from "@/config/site";
import { useLocale } from "@/i18n/LocaleProvider";
import { useReveal } from "@/lib/reveal";
import { contactHref } from "@/lib/contactHref";

export function Contact() {
  const { locale, t } = useLocale();
  const [ref, revealed] = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="contact"
      className={`home-contact${revealed ? " is-revealed" : ""}`}
      aria-labelledby="contact-heading"
    >
      <div className="home-contact-grid" aria-hidden />
      <div className="wrap-hero home-contact-inner">
        <div className={`home-contact-row gx-up`}>
          <div className="home-contact-copy">
            <p className="home-contact-eyebrow">{t.contact.label}</p>
            <h2 id="contact-heading" className="home-contact-title">
              {t.contact.heading}
            </h2>
            <Link href={contactHref(locale, "message")} className="home-contact-cta">
              {t.contact.cta}
              <span className="cta-arrow" aria-hidden>
                →
              </span>
            </Link>
          </div>

          <div className="home-contact-aside">
            <p className="home-contact-intro">{t.contact.intro}</p>
            <p className="home-contact-detail">{t.contact.introDetail}</p>
            <hr className="home-contact-rule" />
            <p className="home-contact-direct-label">{t.contact.directLabel}</p>
            <div className="home-contact-links">
              <a href={`mailto:${site.email}`} className="home-contact-link">
                <Mail className="home-contact-icon" strokeWidth={1.75} aria-hidden />
                {site.email}
              </a>
              {phoneHref ? (
                <a href={phoneHref} className="home-contact-link">
                  <Phone className="home-contact-icon" strokeWidth={1.75} aria-hidden />
                  {site.phoneDisplay}
                </a>
              ) : (
                <span className="home-contact-link">
                  <Phone className="home-contact-icon" strokeWidth={1.75} aria-hidden />
                  {site.phoneDisplay}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
