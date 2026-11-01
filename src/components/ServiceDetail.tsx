"use client";

import Link from "next/link";
import { Bot, ShoppingBag, Smartphone, Workflow, type LucideIcon } from "lucide-react";
import type { Dictionary } from "@/data/content";
import { useLocale } from "@/i18n/LocaleProvider";
import { contactHref } from "@/lib/contactHref";
import { useReveal } from "@/lib/reveal";

type ServiceBlock = Dictionary["servicesPage"]["blocks"][number];

const icons: Record<ServiceBlock["icon"], LucideIcon> = {
  smartphone: Smartphone,
  bot: Bot,
  workflow: Workflow,
  "shopping-bag": ShoppingBag,
};

type ServiceDetailProps = {
  block: ServiceBlock;
  includedLabel: string;
  cta: string;
  proofLabel: string;
  proofHref: string;
  fromRight: boolean;
};

export function ServiceDetail({ block, includedLabel, cta, proofLabel, proofHref, fromRight }: ServiceDetailProps) {
  const { locale } = useLocale();
  const Icon = icons[block.icon];
  const [ref, revealed] = useReveal<HTMLElement>();
  const className = [
    "service-detail",
    fromRight ? "is-from-right" : "",
    revealed ? "is-revealed" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section id={block.id} className="service-block" aria-labelledby={`${block.id}-heading`}>
      <article ref={ref} className={className}>
        <div className="service-detail-badge" aria-hidden>
          <Icon className="h-5 w-5" strokeWidth={1.8} />
        </div>
        <div className="service-detail-body">
          <p className="service-kicker">{block.kicker}</p>
          <h2 id={`${block.id}-heading`} className="service-title">
            {block.heading}
          </h2>
          <p className="service-body">{block.body}</p>

          <p className="service-included-label">{includedLabel}</p>
          <ul className="service-included">
            {block.included.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <ol className="service-steps">
            {block.steps.map((step, index) => (
              <li key={step.title} className="service-step">
                <p className="service-step-title">
                  {index + 1}. {step.title}
                </p>
                <p className="service-step-detail">{step.detail}</p>
              </li>
            ))}
          </ol>

          <div className="service-actions">
            <Link href={contactHref(locale, "booking")} className="services-primary">
              {cta}
              <span className="services-primary-arrow" aria-hidden>
                →
              </span>
            </Link>
            {block.proof ? (
              <Link href={proofHref} className="services-proof">
                <span className="services-proof-text">{proofLabel}</span>
                <span className="services-proof-arrow" aria-hidden>
                  →
                </span>
              </Link>
            ) : null}
          </div>
        </div>
      </article>
    </section>
  );
}
