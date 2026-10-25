"use client";

import { BrowserFrame, PhoneFrame } from "@/components/work/DeviceFrames";
import { useLocale } from "@/i18n/LocaleProvider";
import type { Project } from "@/data/projects";

export function ProjectScreens({ project }: { project: Project }) {
  const { locale, t } = useLocale();
  const screens = project.screens ?? [];
  if (screens.length === 0) return null;

  return (
    <section className="border-t border-[#D8E0DC] bg-[#F3F8F5] py-[clamp(64px,8vw,112px)]">
      <div className="section-pad container-narrow">
        <h2 className="text-[clamp(28px,3vw,40px)] font-semibold tracking-[-0.02em] text-[#15201C]">
          {t.workPage.insideHeading}
        </h2>
        <div className="work-screen-grid mt-10">
          {screens.map((screen) =>
            screen.phone ? (
              <figure key={screen.image} className="work-screen-phone">
                <div
                  className="flex min-h-[280px] items-center justify-center rounded-[10px] px-6 py-8"
                  style={{ backgroundColor: project.stage }}
                >
                  <PhoneFrame
                    image={screen.image}
                    alt={screen.alt[locale]}
                    border={7}
                    radius={30}
                    sizes="180px"
                    className="w-[34%]"
                  />
                </div>
                <figcaption className="mt-3 text-sm text-[#5A675F]">{screen.caption[locale]}</figcaption>
              </figure>
            ) : (
              <figure key={screen.image} className={screen.wide ? "work-screen-wide" : undefined}>
                <BrowserFrame
                  image={screen.image}
                  alt={screen.alt[locale]}
                  domain={screen.wide ? screen.url : undefined}
                  barHeight={screen.wide ? 28 : 26}
                  dotSize={8}
                  domainSize={11}
                  radiusClass="rounded-[10px]"
                  shadowClass="border border-[#D8E0DC] shadow-[0_24px_48px_-28px_rgba(11,59,48,0.35)]"
                  sizes={screen.wide ? "(max-width: 1024px) 100vw, 1056px" : "(max-width: 1024px) 100vw, 480px"}
                  className="bg-white"
                />
                <figcaption className="mt-3 text-sm text-[#5A675F]">{screen.caption[locale]}</figcaption>
              </figure>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
