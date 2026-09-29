"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { useLocale } from "@/i18n/LocaleProvider";

export function ContactPage() {
  const { t } = useLocale();

  return (
    <>
      <Header />
      <main className="pt-16 md:pt-[4.25rem]">
        <div className="section-pad container-narrow py-16 md:py-20">
          <h1 className="text-[clamp(2rem,4.2vw,3.25rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-ink">
            {t.contact.label}
          </h1>
          <div className="mt-10 min-h-72" aria-hidden />
        </div>
      </main>
      <Footer />
    </>
  );
}
