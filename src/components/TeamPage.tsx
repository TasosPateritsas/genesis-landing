"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useLocale } from "@/i18n/LocaleProvider";

export function TeamPage() {
  const { t } = useLocale();
  const page = t.teamPage;

  return (
    <>
      <Header />
      <main className="pt-16 md:pt-[4.25rem]">
        <div className="section-pad container-narrow pt-8 pb-24 md:pt-10">
          <p className="services-breadcrumb">{page.breadcrumb}</p>
          <h1 className="mt-10 text-4xl font-semibold tracking-[-0.02em] text-ink">{page.heading}</h1>
          <div className="min-h-48" />
        </div>
      </main>
      <Footer />
    </>
  );
}
