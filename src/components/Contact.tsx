"use client";

import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { site } from "@/data/content";
import { FadeIn } from "./FadeIn";
import { useLocale } from "@/i18n/LocaleProvider";

export function Contact() {
  const { t } = useLocale();

  return (
    <section id="contact" className="contact-teaser" aria-labelledby="contact-heading">
      <div className="section-pad container-narrow py-20 md:py-28">
        <FadeIn variant="section">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-12">
            <div className="lg:w-[42%] lg:shrink-0">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0F6E56]">
                {t.contact.label}
              </p>
              <h2
                id="contact-heading"
                className="mt-3 text-[clamp(1.85rem,4vw,2.625rem)] font-bold leading-[1.15] tracking-[-0.02em] text-ink"
              >
                {t.contact.heading}
              </h2>
            </div>
            <p className="text-lg font-medium leading-relaxed text-[#4b5563] lg:flex-1">
              {t.contact.intro}
            </p>
          </div>

          <div className="mt-12 flex flex-col items-center gap-8 sm:flex-row sm:justify-center sm:gap-12">
            <Link href="/contact" className="contact-teaser-cta">
              {t.contact.cta}
            </Link>

            <div className="text-center sm:text-left">
              <p className="text-[13px] leading-snug text-[#5b6b66]">{t.contact.directLabel}</p>
              <div className="mt-2 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:justify-start">
                <a href={`mailto:${site.email}`} className="contact-direct-link">
                  <Mail className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
                  <span className="contact-direct-link-text">{site.email}</span>
                </a>
                <a href={site.phoneHref} className="contact-direct-link">
                  <Phone className="h-4 w-4 shrink-0" strokeWidth={1.75} aria-hidden />
                  <span className="contact-direct-link-text">{site.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
