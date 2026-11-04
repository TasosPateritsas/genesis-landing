import Link from "next/link";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/config/site";
import type { Locale } from "@/data/content";
import { localizePath } from "@/lib/routes";

const copy = {
  en: {
    crumb: "Page not found",
    title: "This page doesn't exist.",
    text: "The link may be old or mistyped.",
    home: "Back to home",
    work: "See our work",
  },
  el: {
    crumb: "Η σελίδα δεν βρέθηκε",
    title: "Αυτή η σελίδα δεν υπάρχει.",
    text: "Ο σύνδεσμος μπορεί να είναι παλιός ή να έχει κάποιο λάθος.",
    home: "Αρχική σελίδα",
    work: "Δείτε τα έργα μας",
  },
} as const;

export function NotFoundPage({ locale }: { locale: Locale }) {
  const t = copy[locale];
  const homeHref = localizePath("/", locale);
  const workHref = localizePath("/work", locale);

  return (
    <>
      <Header variant="dark" />
      <main id="main" className="nf-page">
        <section className="nf-hero work-hero" data-cursor="dark" aria-labelledby="nf-heading">
          <div className="work-hero-grid" aria-hidden />
          <div className="nf-hero-inner">
            <nav aria-label="Breadcrumb" className="work-crumb">
              <Link href={homeHref}>{site.name}</Link>
              <span aria-hidden>›</span>
              <span aria-current="page">{t.crumb}</span>
            </nav>
            <h1 id="nf-heading" className="nf-title">
              {t.title}
            </h1>
            <p className="nf-text">{t.text}</p>
            <div className="nf-actions">
              <Link href={homeHref} className="nf-home">
                {t.home}
              </Link>
              <Link href={workHref} className="nf-work">
                {t.work}
                <span className="nf-work-arrow" aria-hidden>
                  →
                </span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer variant="dark" />
    </>
  );
}
