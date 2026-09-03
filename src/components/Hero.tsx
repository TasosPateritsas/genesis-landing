import Image from "next/image";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] overflow-hidden pt-16 md:pt-[4.25rem]"
      aria-labelledby="hero-brand"
    >
      <div className="absolute inset-0">
        <Image
          src="/hero-athens.svg"
          alt=""
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/70 via-bg/55 to-bg" />
      </div>

      <div className="section-pad container-narrow relative flex min-h-[calc(100svh-4rem)] flex-col justify-end pb-14 pt-24 md:min-h-[calc(100svh-4.25rem)] md:pb-24 md:pt-28">
        <p
          id="hero-brand"
          className="font-display animate-hero-brand text-[clamp(3.75rem,14vw,8.5rem)] font-bold leading-[0.88] tracking-[-0.04em] text-ink"
        >
          Genesis
        </p>

        <div className="mt-6 max-w-2xl animate-hero-copy md:mt-10">
          <h1 className="font-display text-[clamp(1.65rem,4.2vw,3rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-ink">
            We build your product, start to finish.
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
            A 3-person Athens studio delivering apps, websites and eshops for
            startups — no technical team required.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center rounded-md bg-accent px-6 text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Let&apos;s talk
            </a>
            <a
              href="#work"
              className="inline-flex h-12 items-center justify-center rounded-md border border-border-strong bg-bg-elevated/80 px-6 text-sm font-semibold text-ink backdrop-blur-sm transition-colors hover:border-accent hover:text-accent"
            >
              See our work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
