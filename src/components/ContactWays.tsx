"use client";

import { Calendar, Mail, Phone, type LucideIcon } from "lucide-react";
import { useEffect, useRef, type MouseEvent, type Ref } from "react";
import { ContactForm } from "@/components/ContactForm";
import { emailHref, phoneHref, site } from "@/config/site";
import { useLocale } from "@/i18n/LocaleProvider";
import { openCalendlyPopup } from "@/lib/calendly";
import { fill } from "@/lib/fill";
import { revealDelay, useReveal } from "@/lib/reveal";

const CARD_DELAYS = [0, 0.3, 0.6, 0.9];
const CARD_DELAYS_SM = [0, 0.18, 0.36, 0.54];

function cardDelay(index: number) {
  return revealDelay(CARD_DELAYS[index], CARD_DELAYS_SM[index]);
}

function WayCard({
  icon: Icon,
  title,
  body,
  link,
  href,
  onClick,
  anchorRef,
}: {
  icon: LucideIcon;
  title: string;
  body: string;
  link: string;
  href: string | null;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
  anchorRef?: Ref<HTMLAnchorElement>;
}) {
  const content = (
    <>
      <Icon className="ways-card-icon" size={22} strokeWidth={1.6} aria-hidden />
      <h3 className="ways-card-title">{title}</h3>
      <p className="ways-card-body">{body}</p>
      <span className="ways-card-link">
        <span className="ways-card-link-text">{link}</span>
        {href ? (
          <span className="cta-arrow" aria-hidden>
            →
          </span>
        ) : null}
      </span>
    </>
  );

  if (!href) return <div className="ways-card">{content}</div>;

  return (
    <a ref={anchorRef} className="ways-card is-link" href={href} onClick={onClick}>
      {content}
    </a>
  );
}

export function ContactWays() {
  const { t } = useLocale();
  const ways = t.contactPage.ways;
  const [headingRef, headingRevealed] = useReveal<HTMLDivElement>();
  const [gridRef, gridRevealed] = useReveal<HTMLDivElement>();
  const bookingRef = useRef<HTMLAnchorElement>(null);
  const calendlyUrl = site.booking.calendlyUrl;

  useEffect(() => {
    const openFromHash = () => {
      if (window.location.hash === "#booking") void openCalendlyPopup(calendlyUrl, bookingRef.current);
    };
    openFromHash();
    window.addEventListener("hashchange", openFromHash);
    return () => window.removeEventListener("hashchange", openFromHash);
  }, [calendlyUrl]);

  function openBooking(event: MouseEvent<HTMLAnchorElement>) {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;
    event.preventDefault();
    void openCalendlyPopup(calendlyUrl, event.currentTarget);
  }

  return (
    <section className="contact-ways" aria-labelledby="ways-heading">
      <div className="wrap-content">
        <div ref={headingRef} className={headingRevealed ? "is-revealed" : undefined}>
          <div className="gx-up">
            <p className="contact-eyebrow">{ways.eyebrow}</p>
            <h2 id="ways-heading" className="contact-h2 ways-heading">
              {ways.heading}
            </h2>
          </div>
          <div className="ways-rule" aria-hidden />
        </div>

        <div ref={gridRef} className={`ways-grid${gridRevealed ? " is-revealed" : ""}`}>
          <div className="gx-up ways-cell" style={cardDelay(0)}>
            <div className="ways-card ways-form-card">
              <h3 className="ways-card-title">{ways.message.title}</h3>
              <p className="ways-card-body">{ways.message.body}</p>
              <ContactForm />
            </div>
          </div>

          <div className="ways-stack">
            <div id="booking" className="gx-up ways-cell" style={cardDelay(1)}>
              <WayCard
                icon={Calendar}
                title={ways.booking.title}
                body={fill(ways.booking.body, { minutes: site.booking.durationMin })}
                link={ways.booking.link}
                href={calendlyUrl}
                onClick={openBooking}
                anchorRef={bookingRef}
              />
            </div>
            <div className="gx-up ways-cell" style={cardDelay(2)}>
              <WayCard
                icon={Mail}
                title={ways.email.title}
                body={ways.email.body}
                link={site.emailDisplay}
                href={emailHref}
              />
            </div>
            <div className="gx-up ways-cell" style={cardDelay(3)}>
              <WayCard
                icon={Phone}
                title={ways.phone.title}
                body={ways.phone.body}
                link={site.phoneDisplay}
                href={phoneHref}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
