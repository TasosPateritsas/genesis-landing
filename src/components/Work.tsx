"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FadeIn } from "./FadeIn";
import { BrowserFrame, PhoneFrame } from "./work/DeviceFrames";
import { useLocale, useLocalizedPath } from "@/i18n/LocaleProvider";
import { projectLabel, selectedProjects, type Project } from "@/data/projects";

function SelectedCard({ project, size }: { project: Project; size: "large" | "small" }) {
  const { locale } = useLocale();
  const hrefFor = useLocalizedPath();
  const large = size === "large";

  return (
    <Link
      href={hrefFor(`/work/${project.slug}`)}
      className="work-selected-card group flex h-full flex-col border border-[#D8E0DC] bg-white"
    >
      <div className="relative min-h-[210px] flex-1" style={{ backgroundColor: project.stage }}>
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={`absolute left-1/2 -translate-x-1/2 ${
              large ? "top-1/2 w-[86%] -translate-y-1/2" : "bottom-0 w-[80%]"
            }`}
          >
            <div className="work-selected-frame">
              <BrowserFrame
                image={project.desktopImage}
                alt=""
                domain={project.domain}
                barHeight={large ? 30 : 24}
                dotSize={8}
                domainSize={11}
                radiusClass={large ? "rounded-lg" : "rounded-t-lg"}
                shadowClass="shadow-[0_30px_60px_-24px_rgba(0,0,0,0.6)]"
                sizes={large ? "(max-width: 1024px) 86vw, 40vw" : "(max-width: 1024px) 80vw, 22vw"}
              />
            </div>
          </div>
        </div>
        <PhoneFrame
          image={project.mobileImage}
          alt=""
          border={6}
          radius={large ? 26 : 20}
          sizes="120px"
          className={`absolute ${
            large ? "right-[5%] bottom-[9%] w-[20%]" : "right-[6%] -bottom-9 w-[19%]"
          }`}
        />
      </div>

      <div className={`flex items-center gap-4 ${large ? "px-6 py-6" : "px-5 pb-5 pt-8"}`}>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium text-[#085041]">{projectLabel(project, locale)}</p>
          <h3
            className={`mt-1.5 font-semibold tracking-tight text-[#15201C] ${
              large ? "text-[30px] leading-tight" : "text-[22px] leading-snug"
            }`}
          >
            {project.name}
          </h3>
          <p className={`mt-2 leading-relaxed text-[#5A675F] ${large ? "text-base" : "text-[15px]"}`}>
            {project.description[locale]}
          </p>
        </div>
        <span className="flex size-12 shrink-0 items-center justify-center border border-[#D8E0DC] text-[#15201C]">
          <ArrowUpRight
            className="work-selected-arrow size-5"
            strokeWidth={1.75}
            aria-hidden
          />
        </span>
      </div>
    </Link>
  );
}

export function Work() {
  const { t } = useLocale();
  const hrefFor = useLocalizedPath();
  const [lead, ...rest] = selectedProjects;

  return (
    <section id="work" aria-labelledby="work-heading">
      <div className="work-grid-bg" aria-hidden />
      <div className="container section-pad container-narrow relative py-20 md:py-28">
        <FadeIn>
          <p className="service-kicker">{t.work.label}</p>
          <h2
            id="work-heading"
            className="mt-3 max-w-3xl text-3xl font-semibold tracking-[-0.02em] text-ink md:text-5xl"
          >
            {t.work.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
            {t.work.intro}
          </p>
        </FadeIn>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-12">
          <FadeIn className="h-full lg:col-span-7">
            <SelectedCard project={lead} size="large" />
          </FadeIn>
          <div className="flex h-full flex-col gap-6 lg:col-span-5">
            {rest.map((project, index) => (
              <FadeIn key={project.slug} className="min-h-0 flex-1" delay={(index + 1) as 1 | 2}>
                <SelectedCard project={project} size="small" />
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-[#D8E0DC] pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-base text-[#5A675F]">{t.work.more}</p>
          <Link
            href={hrefFor("/work")}
            className="btn-primary inline-flex h-12 shrink-0 items-center justify-center rounded-md px-6 text-sm font-semibold"
          >
            {t.work.seeAll}
          </Link>
        </div>
      </div>
    </section>
  );
}
