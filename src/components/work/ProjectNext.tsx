"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { BrowserFrame } from "@/components/work/DeviceFrames";
import { useLocale, useLocalizedPath } from "@/i18n/LocaleProvider";
import { nextProject, projectLabel, type Project } from "@/data/projects";

export function ProjectNext({ project }: { project: Project }) {
  const { locale, t } = useLocale();
  const hrefFor = useLocalizedPath();
  const next = nextProject(project);

  return (
    <section className="border-t border-[#D8E0DC] bg-white py-[clamp(56px,7vw,96px)]">
      <div className="section-pad container-narrow">
        <div className="flex items-center justify-between gap-4">
          <Link
            href={hrefFor("/work")}
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#5A675F]"
          >
            <ArrowLeft className="size-4" strokeWidth={1.75} aria-hidden />
            <span className="link-underline">{t.workPage.allWork}</span>
          </Link>
          <Link
            href={hrefFor(`/work/${next.slug}`)}
            className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-[#5A675F]"
          >
            <span className="link-underline">{t.workPage.nextProject}</span>
            <ArrowRight className="size-4" strokeWidth={1.75} aria-hidden />
          </Link>
        </div>

        <Link
          href={hrefFor(`/work/${next.slug}`)}
          className="work-next-card group mt-5 flex flex-col overflow-hidden rounded-xl border border-[#D8E0DC] md:flex-row"
        >
          <div className="flex flex-1 flex-col justify-center px-[clamp(24px,3.5vw,48px)] py-8">
            <p className="text-sm font-medium text-[#085041]">{projectLabel(next, locale)}</p>
            <p className="mt-2 text-[clamp(28px,3.4vw,44px)] font-semibold leading-tight tracking-[-0.025em] text-[#15201C]">
              {next.name}
            </p>
          </div>
          <div
            className="relative min-h-[260px] flex-1 overflow-hidden px-8 pt-8"
            style={{ backgroundColor: next.stage }}
          >
            <div className="work-next-frame absolute inset-x-[7%] bottom-0">
              <BrowserFrame
                image={next.desktopImage}
                alt=""
                domain={next.domain}
                barHeight={24}
                dotSize={8}
                domainSize={11}
                radiusClass="rounded-t-lg"
                sizes="(max-width: 768px) 86vw, 420px"
              />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
