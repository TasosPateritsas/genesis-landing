"use client";

import Link from "next/link";
import { Bot, ShoppingBag, Smartphone, Workflow, type LucideIcon } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import { useLocale, useLocalizedPath } from "@/i18n/LocaleProvider";
import { stagger, useReveal } from "@/lib/reveal";

const serviceIcons: Record<"app" | "agents" | "workflows" | "shop", LucideIcon> = {
  app: Smartphone,
  agents: Bot,
  workflows: Workflow,
  shop: ShoppingBag,
};

const serviceAnchors = {
  app: "/services#app-development",
  agents: "/services#ai-agents",
  workflows: "/services#ai-workflows",
  shop: "/services#websites-eshops",
} as const;

export function WhatWeBuild() {
  const { t } = useLocale();
  const hrefFor = useLocalizedPath();
  const [ref, revealed] = useReveal<HTMLElement>();

  return (
    <section
      ref={ref}
      id="services"
      className={`home-services${revealed ? " is-revealed" : ""}`}
      aria-labelledby="services-heading"
    >
      <div className="offer-section container-narrow">
        <div className="gx-up">
          <SectionHeading
            id="services-heading"
            eyebrow={t.services.label}
            title={t.services.heading}
            intro={t.services.intro}
          />
        </div>

        <div className="offer-grid home-card-grid">
          {t.services.items.map((service, index) => {
            const Icon = serviceIcons[service.icon];
            return (
              <Link
                key={service.icon}
                href={hrefFor(serviceAnchors[service.icon])}
                className="offer-card home-service-card gx-up"
                style={stagger(index)}
              >
                <span className="home-card-arrow" aria-hidden>
                  →
                </span>
                <div className="offer-card-badge flex items-center justify-center rounded-md">
                  <Icon className="h-5 w-5" strokeWidth={1.8} aria-hidden />
                </div>
                <h3 className="home-card-title">{service.title}</h3>
                <p className="home-card-body">{service.description}</p>
              </Link>
            );
          })}
        </div>

        <p className="home-see-all">
          <Link href={hrefFor("/services")} className="see-all-services inline-flex items-center gap-1.5">
            <span className="see-all-services-text">{t.services.seeAll}</span>
            <span className="see-all-services-arrow" aria-hidden>
              →
            </span>
          </Link>
        </p>
      </div>
    </section>
  );
}
