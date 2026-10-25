"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BrowserFrame, PhoneFrame } from "@/components/work/DeviceFrames";
import { useLocale, useLocalizedPath } from "@/i18n/LocaleProvider";
import { projectLabel, type Project } from "@/data/projects";

export function ProjectHero({ project }: { project: Project }) {
  const { locale, t } = useLocale();
  const hrefFor = useLocalizedPath();
  const page = t.workPage;

  return (
    <div className="work-hero" data-cursor="dark">
      <div className="work-hero-grid" aria-hidden />
      <div className="section-pad container-narrow relative pb-0 pt-[calc(4rem+40px)] md:pt-[calc(4.25rem+40px)]">
        <p className="text-xs font-medium text-[#7FCDB2]">
          <Link href={hrefFor("/")} className="hover:text-white">
            Genesis
          </Link>
          <span aria-hidden> › </span>
          <Link href={hrefFor("/work")} className="hover:text-white">
            {page.breadcrumb}
          </Link>
          <span aria-hidden> › </span>
          <span>{project.name}</span>
        </p>
        <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="min-w-0">
            <p className="text-sm font-medium text-[#7FCDB2]">{projectLabel(project, locale)}</p>
            <h1 className="mt-3 max-w-4xl text-[clamp(40px,5.6vw,72px)] font-semibold leading-[1.02] tracking-[-0.035em] text-white">
              {project.name}
            </h1>
            <p className="mt-4 max-w-[620px] text-[19px] leading-relaxed text-white/80">
              {project.intro[locale]}
            </p>
          </div>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener"
            className="inline-flex h-12 shrink-0 items-center gap-2 rounded-md bg-white px-5 text-sm font-semibold text-[#0B3B30]"
          >
            {page.visitLive}
            <ArrowUpRight className="size-4" strokeWidth={1.75} aria-hidden />
          </a>
        </div>
        <dl className="mt-12 grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-6 border-t border-white/[0.14] py-8">
          {[
            [page.metaClient, project.client],
            [page.metaDid, project.services[locale]],
            [page.metaStack, project.stack],
            [page.metaYear, project.year],
          ].map(([label, value]) => (
            <div key={label}>
              <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-white/55">{label}</dt>
              <dd className="mt-2 text-[15px] text-white">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}

export function ProjectShowcase({ project }: { project: Project }) {
  return (
    <section className="work-showcase" aria-label={project.name}>
      <div className="section-pad container-narrow">
        <div
          className="work-showcase-stage relative"
          style={{ backgroundColor: project.stage }}
        >
          <div className="mx-auto w-[88%]">
            <BrowserFrame
              image={project.desktopImage}
              alt=""
              domain={project.domain}
              barHeight={32}
              dotSize={8}
              domainSize={12}
              radiusClass="rounded-[10px]"
              shadowClass="shadow-[0_30px_60px_-24px_rgba(0,0,0,0.6)]"
              sizes="(max-width: 1024px) 88vw, 720px"
            />
          </div>
          <PhoneFrame
            image={project.mobileImage}
            alt=""
            border={7}
            radius={30}
            sizes="160px"
            className="absolute right-[clamp(20px,5vw,72px)] bottom-[clamp(24px,4vw,56px)] w-[20%]"
          />
        </div>
      </div>
    </section>
  );
}
