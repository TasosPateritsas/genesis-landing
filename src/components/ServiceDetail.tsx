"use client";

import Link from "next/link";
import { Bot, ShoppingBag, Smartphone, Workflow, type LucideIcon } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import type { Dictionary } from "@/data/content";

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
  from: "left" | "right";
};

export function ServiceDetail({ block, includedLabel, cta, from }: ServiceDetailProps) {
  const Icon = icons[block.icon];

  return (
    <FadeIn variant={from === "left" ? "from-left" : "from-right"}>
      <section id={block.id} className="scroll-mt-24" aria-labelledby={`${block.id}-heading`}>
        <article className="service-detail">
          <div className="service-detail-badge" aria-hidden>
            <Icon className="h-5 w-5" strokeWidth={1.8} />
          </div>
          <div className="min-w-0 flex-1">
            <p className="service-kicker">{block.kicker}</p>
            <h2
              id={`${block.id}-heading`}
              className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-ink"
            >
              {block.heading}
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-relaxed text-ink-muted">{block.body}</p>

            <p className="service-included-label mt-6">{includedLabel}</p>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-ink-muted">
              {block.included.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <ol className="service-steps mt-6">
              {block.steps.map((step, index) => (
                <li key={step.title} className="service-step">
                  <p className="text-sm font-semibold text-ink">
                    {index + 1}. {step.title}
                  </p>
                  <p className="mt-1 text-sm text-ink-muted">{step.detail}</p>
                </li>
              ))}
            </ol>

            <Link href="/#contact" className="service-inline-cta">
              {cta}
            </Link>
          </div>
        </article>
      </section>
    </FadeIn>
  );
}
