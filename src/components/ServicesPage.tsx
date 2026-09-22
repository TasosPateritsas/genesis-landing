"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LocaleDocumentMeta } from "@/components/LocaleDocumentMeta";
import { ServiceDetail } from "@/components/ServiceDetail";
import { useLocale } from "@/i18n/LocaleProvider";

const placeholderIds = ["app-development", "ai-agents", "ai-workflows", "websites-eshops"] as const;

export function ServicesPage() {
  const { t } = useLocale();
  const page = t.servicesPage;

  return (
    <>
      <LocaleDocumentMeta title={page.metaTitle} description={page.metaDescription} />
      <Header />
      <main className="services-page pt-16 md:pt-[4.25rem]">
        <div className="section-pad container-narrow pb-16 pt-8 md:pb-20 md:pt-10">
          <p className="services-breadcrumb">{page.breadcrumb}</p>

          <h1 className="mt-10 max-w-3xl text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-ink">
            {page.heading}
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
            {page.subtitle}
          </p>

          <nav
            aria-label={t.nav.services}
            className="mt-10 flex flex-wrap justify-center gap-3"
          >
            {page.chips.map((chip) => (
              <a key={chip.href} href={chip.href} className="service-chip px-4 py-2 text-sm font-medium">
                {chip.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="section-pad container-narrow space-y-12 pb-20">
          {t.services.items.map((service, index) => {
            const block = page.blocks.find((entry) => entry.id === placeholderIds[index]);
            if (block) {
              return (
                <ServiceDetail
                  key={block.id}
                  block={block}
                  includedLabel={page.includedLabel}
                  cta={page.cta}
                  from={index % 2 === 0 ? "left" : "right"}
                />
              );
            }

            return (
              <section key={service.icon} aria-labelledby={`service-${service.icon}`}>
                <h2
                  id={`service-${service.icon}`}
                  className="text-2xl font-semibold tracking-tight text-ink"
                >
                  {service.title}
                </h2>
                <div className="mt-4 min-h-24" />
              </section>
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
