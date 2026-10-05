"use client";

import { Mail, Phone } from "lucide-react";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ContactForm } from "@/components/ContactForm";
import { ContactReviews } from "@/components/ContactReviews";
import { ContactStats } from "@/components/ContactStats";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/data/content";
import { useLocale } from "@/i18n/LocaleProvider";

function colStyle(index: number, mobileIndex?: number): CSSProperties {
  const style: CSSProperties & { "--col-delay": string; "--col-delay-mobile"?: string } = {
    "--col-delay": `${150 + index * 70}ms`,
  };
  if (mobileIndex != null) style["--col-delay-mobile"] = `${150 + mobileIndex * 70}ms`;
  return style;
}

export function ContactPage() {
  const { t } = useLocale();
  const page = t.contactPage;
  const howRef = useRef<HTMLDivElement>(null);
  const [howInView, setHowInView] = useState(false);

  useEffect(() => {
    const node = howRef.current;
    if (!node) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setHowInView(true);
        observer.disconnect();
      },
      { threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className="contact-page pt-16 md:pt-[4.25rem]" data-cursor="dark">
          <div className="section-pad container-narrow pb-16 pt-8 md:pb-24 md:pt-10">
            <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_420px] lg:gap-16">
              <div>
                <p className="contact-breadcrumb contact-col-item" style={colStyle(0)}>
                  {page.breadcrumb}
                </p>
                <h1
                  className="contact-col-item max-w-xl text-[clamp(2rem,3.6vw,2.75rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-white"
                  style={colStyle(1)}
                >
                  {page.heading}
                </h1>
                <p
                  className="contact-col-item mt-4 max-w-xl text-base leading-relaxed text-white/80 md:text-lg"
                  style={colStyle(2)}
                >
                  {page.subtext}
                </p>
                <div className="contact-col-item mt-8 grid gap-3 sm:grid-cols-2" style={colStyle(3)}>
                  <a className="contact-mini-card" href={`mailto:${site.email}`}>
                    <span className="contact-mini-kicker">{page.preferEmail}</span>
                    <span className="contact-mini-value">
                      <Mail className="contact-mini-icon" strokeWidth={1.75} aria-hidden />
                      {site.email}
                    </span>
                  </a>
                  <a className="contact-mini-card" href={site.phoneHref}>
                    <span className="contact-mini-kicker">{page.preferPhone}</span>
                    <span className="contact-mini-value">
                      <Phone className="contact-mini-icon" strokeWidth={1.75} aria-hidden />
                      {page.phoneDisplay}
                    </span>
                  </a>
                </div>
                <div ref={howRef} className={`contact-how mt-8${howInView ? " is-inview" : ""}`}>
                  <p
                    className="contact-col-item text-xs font-medium uppercase tracking-[0.14em] text-white/55"
                    style={colStyle(4, 0)}
                  >
                    {page.howWeWork.eyebrow}
                  </p>
                  <ol className="mt-4">
                    {page.howWeWork.steps.map((step, index) => (
                      <li
                        key={step.title}
                        className="contact-col-item relative flex gap-3 pb-4 last:pb-0"
                        style={colStyle(5 + index, 1 + index)}
                      >
                        {index < page.howWeWork.steps.length - 1 ? (
                          <span
                            className="absolute bottom-0 left-[13.5px] top-7 w-px bg-white/[0.18]"
                            aria-hidden
                          />
                        ) : null}
                        <span className="relative z-10 flex size-7 shrink-0 items-center justify-center rounded-full border border-white/35 text-[13px] font-medium leading-none text-white">
                          {index + 1}
                        </span>
                        <div className="min-w-0 pt-0.5">
                          <p className="text-[15px] font-bold leading-tight text-white">{step.title}</p>
                          <p className="mt-1 text-[14px] leading-snug text-white/60">{step.body}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
        <ContactStats />
        <ContactReviews />
      </main>
      <Footer />
    </>
  );
}
