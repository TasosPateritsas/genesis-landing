import { services } from "@/data/content";
import { FadeIn } from "./FadeIn";

function ServiceIcon({ type }: { type: "app" | "web" | "shop" }) {
  const common = "h-5 w-5 text-white";

  if (type === "app") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="6" y="3" width="12" height="18" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="12" cy="17.5" r="1" fill="currentColor" />
      </svg>
    );
  }

  if (type === "web") {
    return (
      <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 9h18" stroke="currentColor" strokeWidth="1.8" />
        <circle cx="6.5" cy="7" r="0.8" fill="currentColor" />
        <circle cx="9" cy="7" r="0.8" fill="currentColor" />
      </svg>
    );
  }

  return (
    <svg className={common} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 8h16l-1.2 10.2A2 2 0 0 1 16.81 20H7.19a2 2 0 0 1-1.99-1.8L4 8Z"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path d="M8 8V6.5A4 4 0 0 1 16 6.5V8" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

export function WhatWeBuild() {
  return (
    <section
      id="services"
      className="section-pad container-narrow py-20 md:py-28"
      aria-labelledby="services-heading"
    >
      <FadeIn>
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
          What we build
        </p>
        <h2
          id="services-heading"
          className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-[-0.02em] text-ink md:text-4xl"
        >
          Full development, end to end.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
          Bring the idea. We design, build, and ship a complete digital product —
          so you never need an in-house technical team to get to market.
        </p>
      </FadeIn>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
        {services.map((service, index) => (
          <FadeIn key={service.title} delay={(index + 1) as 1 | 2 | 3}>
            <article className="h-full border border-border bg-bg-elevated p-6 md:p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-md bg-accent">
                <ServiceIcon type={service.icon} />
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-ink">
                {service.title}
              </h3>
              <p className="mt-2 text-base font-medium text-accent">
                {service.description}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                {service.detail}
              </p>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
