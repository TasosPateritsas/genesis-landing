"use client";

import Link from "next/link";
import { Bot, ShoppingBag, Smartphone, Workflow, type LucideIcon } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { useLocale, useLocalizedPath } from "@/i18n/LocaleProvider";

const serviceIcons: Record<"app" | "agents" | "workflows" | "shop", LucideIcon> = {
  app: Smartphone,
  agents: Bot,
  workflows: Workflow,
  shop: ShoppingBag,
};

export function WhatWeBuild() {
  const { t } = useLocale();
  const hrefFor = useLocalizedPath();

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
            {t.services.items.map((service) => {
              const Icon = serviceIcons[service.icon];
              return (
                <Link
                  key={service.icon}
                  href={hrefFor("/services")}
                  className="offer-card block h-full border border-border bg-white outline-none"
                >
                  <div className="offer-card-badge flex items-center justify-center rounded-md">
                    <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                    {service.description}
                  </p>
                </Link>
              );
            })}
          </div>

          <p className="mt-10 text-center">
            <Link
              href={hrefFor("/services")}
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
