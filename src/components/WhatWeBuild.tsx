"use client";

import Link from "next/link";
import { FadeIn } from "./FadeIn";
import { useLocale } from "@/i18n/LocaleProvider";

function ServiceIcon({ type }: { type: "app" | "agents" | "workflows" | "shop" }) {
  const common = "h-5 w-5";

  if (type === "app") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="7" y="3" width="10" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M11 18h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "agents") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="5" y="8" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 8V5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="4" r="1" fill="currentColor" />
        <circle cx="9" cy="12.5" r="1" fill="currentColor" />
        <circle cx="15" cy="12.5" r="1" fill="currentColor" />
        <path d="M9 16h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }

  if (type === "workflows") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <rect x="3" y="3" width="7.5" height="7.5" rx="1.2" />
        <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.2" />
        <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.2" />
        <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.2" />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 8h12l-1 12H7L6 8Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path
        d="M9 8V7a3 3 0 0 1 6 0v1"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function WhatWeBuild() {
  const { t } = useLocale();

  return (
    <section
      id="services"
      className="bg-[#fafafa] py-20 md:py-28"
      aria-labelledby="services-heading"
    >
      <div className="offer-section container-narrow">
        <FadeIn variant="section">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-12">
            <div className="min-w-0">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0F6E56]">
                {t.services.label}
              </p>
              <h2
                id="services-heading"
                className="mt-3 text-2xl font-bold tracking-[-0.02em] text-ink md:text-3xl"
              >
                {t.services.heading}
              </h2>
            </div>
            <p className="max-w-md text-base font-normal leading-relaxed text-ink-muted md:max-w-sm md:pl-6 lg:max-w-md">
              {t.services.intro}
            </p>
          </div>

          <div className="offer-grid mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {t.services.items.map((service) => (
              <Link
                key={service.icon}
                href="/services"
                className="offer-card block h-full border border-border bg-white outline-none"
              >
                <div className="offer-card-badge flex items-center justify-center rounded-md">
                  <ServiceIcon type={service.icon} />
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-ink">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>

          <p className="mt-10 text-center">
            <Link
              href="/services"
              className="see-all-services inline-flex items-center gap-1.5 text-sm font-medium"
            >
              <span className="see-all-services-text">{t.services.seeAll}</span>
              <span className="see-all-services-arrow" aria-hidden>
                →
              </span>
            </Link>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
