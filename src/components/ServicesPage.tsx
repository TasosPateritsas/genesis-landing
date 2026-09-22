"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useLocale } from "@/i18n/LocaleProvider";

export function ServicesPage() {
  const { t } = useLocale();

  return (
    <>
      <Header />
      <main className="bg-[#fafafa] pt-16 md:pt-[4.25rem]">
        <div className="section-pad container-narrow py-16 md:py-20">
          <h1 className="text-3xl font-semibold tracking-[-0.02em] text-ink md:text-4xl">
            {t.nav.services}
          </h1>

          <div className="mt-12 space-y-12">
            {t.services.items.map((service) => (
              <section key={service.icon} aria-labelledby={`service-${service.icon}`}>
                <h2
                  id={`service-${service.icon}`}
                  className="text-2xl font-semibold tracking-tight text-ink"
                >
                  {service.title}
                </h2>
                <div className="mt-4 min-h-24" />
              </section>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
