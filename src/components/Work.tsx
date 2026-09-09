"use client";

import Image from "next/image";
import { FadeIn } from "./FadeIn";
import { useLocale } from "@/i18n/LocaleProvider";

const mockups: Record<string, string> = {
  fintra: "/projects/fintra.svg",
  "levante-goods": "/projects/levante.svg",
  orbit: "/projects/orbit.svg",
};

export function Work() {
  const { t } = useLocale();

  return (
    <section
      id="work"
      className="border-y border-border bg-bg-elevated py-20 md:py-28"
      aria-labelledby="work-heading"
    >
      <div className="section-pad container-narrow">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            {t.work.label}
          </p>
          <h2
            id="work-heading"
            className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.02em] text-ink md:text-5xl"
          >
            {t.work.heading}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
            {t.work.intro}
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-10 md:gap-14">
          {t.work.projects.map((project, index) => (
            <FadeIn key={project.slug} delay={(Math.min(index + 1, 3) as 1 | 2 | 3)}>
              <article className="grid max-w-full items-stretch gap-6 overflow-hidden border border-border lg:grid-cols-2 lg:gap-0">
                <div
                  className={`relative min-h-[220px] w-full overflow-hidden md:min-h-[280px] lg:min-h-[320px] ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                  style={{ backgroundColor: project.accent }}
                >
                  <Image
                    src={mockups[project.slug]}
                    alt={`${project.title} product mockup`}
                    fill
                    className="object-cover object-left-top"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>

                <div
                  className={`flex flex-col justify-center bg-bg p-6 md:p-10 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <p className="text-sm font-medium text-accent">{project.category}</p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-ink-muted">
                    {project.summary}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2" aria-label={t.work.techLabel}>
                    {project.tech.map((item) => (
                      <li
                        key={item}
                        className="border border-border bg-bg-elevated px-2.5 py-1 text-xs font-medium text-ink-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  {project.href ? (
                    <a
                      href={project.href}
                      className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
                    >
                      {t.work.viewProject}
                      <span aria-hidden>→</span>
                    </a>
                  ) : null}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
