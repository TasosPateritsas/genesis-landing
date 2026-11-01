"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/config/site";
import { useLocale } from "@/i18n/LocaleProvider";
import { fill } from "@/lib/fill";

export function LegalPage({ kind }: { kind: "privacy" | "cookies" }) {
  const { t } = useLocale();
  const page = t.legal[kind];
  const values = { name: site.name, email: site.email };

  return (
    <>
      <Header />
      <main id="main" className="legal-page">
        <article className="wrap-content legal-inner">
          <p className="home-section-eyebrow">{site.name}</p>
          <h1 className="legal-title">{page.title}</h1>
          <p className="legal-updated">{t.legal.updated}</p>
          {page.sections.map((section) => (
            <section key={section.heading} className="legal-section">
              <h2>{section.heading}</h2>
              <p>{fill(section.body, values)}</p>
            </section>
          ))}
        </article>
      </main>
      <Footer />
    </>
  );
}
