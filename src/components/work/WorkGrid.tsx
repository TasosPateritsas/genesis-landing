"use client";

import Link from "next/link";
import { BrowserFrame, PhoneFrame } from "@/components/work/DeviceFrames";
import { useLocale, useLocalizedPath } from "@/i18n/LocaleProvider";
import { projectLabel, projects } from "@/data/projects";

export function WorkGrid() {
  const { locale, t } = useLocale();
  const hrefFor = useLocalizedPath();

  return (
    <section className="bg-white pt-14 pb-16 md:pt-24 md:pb-28" aria-label={t.nav.work}>
      <div className="section-pad container-narrow">
        <ul className="work-project-grid">
          {projects.map((project) => (
            <li key={project.slug} className="min-w-0">
              <Link
                href={hrefFor(`/work/${project.slug}`)}
                className="work-grid-card group flex h-full flex-col overflow-hidden rounded-xl border border-[#D8E0DC] bg-white"
              >
                <div className="relative h-[270px]" style={{ backgroundColor: project.stage }}>
                  <div className="absolute inset-x-7 top-7 bottom-0 overflow-hidden">
                    <div className="absolute inset-x-[9%] bottom-0">
                      <div className="work-grid-frame">
                        <BrowserFrame
                          image={project.desktopImage}
                          alt=""
                          domain={project.domain}
                          barHeight={24}
                          dotSize={7}
                          domainSize={10}
                          radiusClass="rounded-t-[7px]"
                          sizes="(max-width: 768px) 80vw, 320px"
                        />
                      </div>
                    </div>
                  </div>
                  <PhoneFrame
                    image={project.mobileImage}
                    alt=""
                    border={5}
                    radius={20}
                    sizes="90px"
                    className="absolute right-[6%] -bottom-9 w-[18%]"
                  />
                </div>
                <div className="flex flex-1 flex-col px-6 pt-[22px] pb-[26px]">
                  <p className="text-[13px] font-medium text-[#085041]">
                    {projectLabel(project, locale)}
                  </p>
                  <h2 className="mt-1.5 text-[22px] font-semibold leading-snug text-[#15201C]">
                    {project.name}
                  </h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#5A675F]">
                    {project.description[locale]}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-[#085041]">
                    {t.workPage.viewProject}
                    <span className="work-grid-arrow" aria-hidden>
                      {" "}
                      →
                    </span>
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
