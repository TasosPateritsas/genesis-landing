import Image from "next/image";
import { projects } from "@/data/content";
import { FadeIn } from "./FadeIn";

const mockups: Record<string, string> = {
  fintra: "/projects/fintra.svg",
  "levante-goods": "/projects/levante.svg",
  orbit: "/projects/orbit.svg",
};

export function Work() {
  return (
    <section
      id="work"
      className="border-y border-border bg-bg-elevated py-20 md:py-28"
      aria-labelledby="work-heading"
    >
      <div className="section-pad container-narrow">
        <FadeIn>
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
            Selected work
          </p>
          <h2
            id="work-heading"
            className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-[-0.02em] text-ink md:text-5xl"
          >
            Products we&apos;ve shipped for startups and small teams.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
            Real briefs, tight timelines, working software. Each project below
            shows the problem we walked into and the result we left behind.
          </p>
        </FadeIn>

        <div className="mt-14 grid gap-10 md:gap-14">
          {projects.map((project, index) => (
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
                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-ink-muted">
                    {project.summary}
                  </p>

                  <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies used">
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
                      View project
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
