"use client";

import { Check } from "lucide-react";
import { BrowserFrame } from "@/components/work/DeviceFrames";
import { useLocale } from "@/i18n/LocaleProvider";

const words = {
  en: ["Weddings", "For couples", "For wedding pros", "Venues & vendors", "Plan together"],
  el: ["Γάμοι", "Για ζευγάρια", "Για επαγγελματίες", "Χώροι & συνεργάτες", "Οργανώστε μαζί"],
} as const;

export function WorkComingSoon() {
  const { locale, t } = useLocale();
  const page = t.workPage;
  const half = [...words[locale], ...words[locale]];
  const line = [...half, ...half];

  return (
    <section className="work-soon" aria-labelledby="coming-soon-heading">
      <div className="work-soon-glow" aria-hidden />
      <div className="work-marquee" aria-hidden="true">
        <div className="work-marquee-track">
          {line.map((word, index) => (
            <span key={`${word}-${index}`} className="work-marquee-item">
              {word}
              <span className="work-marquee-star">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="section-pad container-narrow relative grid items-center gap-10 py-12 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div>
          <h2
            id="coming-soon-heading"
            className="text-[clamp(56px,7.5vw,112px)] font-semibold leading-[0.92] tracking-[-0.045em] text-white"
          >
            {page.comingTitle}
          </h2>
          <p className="mt-6 max-w-[440px] text-lg leading-relaxed text-white/80">
            <strong className="font-semibold text-white">Weddingflow</strong>
            {page.comingBody}
          </p>
          <p className="mt-5 text-[13px] font-medium text-[#7FCDB2]">{page.comingLabel}</p>
          <ol className="mt-8 flex flex-wrap items-center">
            {page.comingSteps.map((step, index) => (
              <li key={step.label} className="flex items-center">
                <span className="flex items-center gap-2">
                  {step.state === "done" ? (
                    <span className="flex size-[22px] items-center justify-center rounded-full bg-[#7FCDB2] text-[#0B3B30]">
                      <Check className="size-3.5" strokeWidth={2.5} aria-hidden />
                    </span>
                  ) : step.state === "current" ? (
                    <span className="flex size-[22px] items-center justify-center rounded-full border-2 border-[#7FCDB2]">
                      <span className="size-2 rounded-full bg-[#7FCDB2]" />
                    </span>
                  ) : (
                    <span className="size-[22px] rounded-full border-2 border-white/25" />
                  )}
                  <span
                    className={`text-sm ${
                      step.state === "done"
                        ? "text-white/85"
                        : step.state === "current"
                          ? "text-[#7FCDB2]"
                          : "text-white/50"
                    }`}
                  >
                    {step.label}
                  </span>
                </span>
                {index < page.comingSteps.length - 1 ? (
                  <span className="mx-2 h-px w-[18px] bg-white/20" aria-hidden />
                ) : null}
              </li>
            ))}
          </ol>
        </div>

        <BrowserFrame
          image="/projects/weddingflow-desktop.jpg"
          alt={page.comingImageAlt}
          barHeight={28}
          dotSize={8}
          domainSize={11}
          barColor="#F4F1EC"
          radiusClass="rounded-[10px]"
          shadowClass="shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)]"
          sizes="(max-width: 1024px) 100vw, 480px"
        />
      </div>
    </section>
  );
}
