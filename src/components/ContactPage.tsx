"use client";

import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/data/content";
import { useLocale } from "@/i18n/LocaleProvider";

export function ContactPage() {
  const { t } = useLocale();
  const page = t.contactPage;

  return (
    <>
      <Header />
      <main className="contact-page pt-16 md:pt-[4.25rem]">
        <div className="section-pad container-narrow pb-16 pt-8 md:pb-24 md:pt-10">
          <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-16">
            <div>
              <p className="contact-breadcrumb">{page.breadcrumb}</p>
              <h1 className="mt-10 max-w-xl text-[clamp(2rem,3.6vw,2.75rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-white">
                {page.heading}
              </h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
                {page.subtext}
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a className="contact-mini-card" href={`mailto:${site.email}`}>
                  <span className="contact-mini-kicker">{page.preferEmail}</span>
                  <span className="contact-mini-value">{site.email}</span>
                </a>
                <a className="contact-mini-card" href={site.phoneHref}>
                  <span className="contact-mini-kicker">{page.preferPhone}</span>
                  <span className="contact-mini-value">{page.phoneDisplay}</span>
                </a>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
