"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { emailHref, phoneHref, site } from "@/config/site";
import { useLocale } from "@/i18n/LocaleProvider";
import { revealDelay, useReveal } from "@/lib/reveal";
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
        <div className="home-contact-row">
          <div className="home-contact-copy">
            <p className="home-contact-eyebrow gx-up" style={revealDelay(0, 0)}>
              {t.contact.label}
            </p>
            <h2 id="contact-heading" className="home-contact-title gx-up" style={revealDelay(0.1, 0.06)}>
              {t.contact.heading}
            </h2>
            <Link
              href={contactHref(locale, "message")}
              className="home-contact-cta gx-up"
              style={revealDelay(0.2, 0.12)}
            >
              {t.contact.cta}
              <span className="cta-arrow" aria-hidden>
                →
              </span>
            </Link>
          </div>

          <div className="home-contact-aside">
            <div className="gx-up" style={revealDelay(0.3, 0.18)}>
              <p className="home-contact-intro">{t.contact.intro}</p>
              <p className="home-contact-detail">{t.contact.introDetail}</p>
            </div>
            <hr className="home-contact-rule" />
            <p className="home-contact-direct-label gx-up" style={revealDelay(0.4, 0.24)}>
              {t.contact.directLabel}
            </p>
            <div className="home-contact-links gx-up" style={revealDelay(0.5, 0.3)}>
              {emailHref ? (
                <a href={emailHref} className="home-contact-link">
                  <Mail className="home-contact-icon" strokeWidth={1.75} aria-hidden />
                  <span className="label">{site.emailDisplay}</span>
                </a>
              ) : (
                <span className="home-contact-link">
                  <Mail className="home-contact-icon" strokeWidth={1.75} aria-hidden />
                  <span className="label">{site.emailDisplay}</span>
                </span>
              )}
              <a href={phoneHref} className="home-contact-link">
                <Phone className="home-contact-icon" strokeWidth={1.75} aria-hidden />
                <span className="label">{site.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
