import { team } from "@/data/content";
import { FadeIn } from "./FadeIn";

function GitHubIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.586 2 12.253c0 4.53 2.865 8.37 6.839 9.723.5.094.683-.222.683-.492 0-.243-.01-1.048-.014-1.9-2.782.618-3.369-1.366-3.369-1.366-.454-1.18-1.11-1.494-1.11-1.494-.908-.636.069-.623.069-.623 1.004.072 1.532 1.055 1.532 1.055.892 1.566 2.341 1.114 2.91.852.091-.662.35-1.114.636-1.37-2.22-.258-4.555-1.138-4.555-5.066 0-1.119.39-2.034 1.029-2.751-.103-.259-.446-1.3.098-2.71 0 0 .84-.275 2.75 1.05A9.35 9.35 0 0 1 12 7.14a9.35 9.35 0 0 1 2.504.345c1.909-1.325 2.748-1.05 2.748-1.05.546 1.41.203 2.451.1 2.71.64.717 1.028 1.632 1.028 2.751 0 3.939-2.339 4.805-4.566 5.058.359.317.679.943.679 1.902 0 1.372-.012 2.477-.012 2.814 0 .273.18.59.688.49A10.27 10.27 0 0 0 22 12.253C22 6.586 17.523 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zm7.5 0h3.84v1.98h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.14V23h-4v-6.63c0-1.58-.03-3.61-2.2-3.61-2.2 0-2.54 1.72-2.54 3.5V23h-4V8.5z" />
    </svg>
  );
}

export function Team() {
  return (
    <section
      id="team"
      className="section-pad container-narrow py-20 md:py-28"
      aria-labelledby="team-heading"
    >
      <FadeIn>
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
          The team
        </p>
        <h2
          id="team-heading"
          className="mt-3 max-w-2xl font-display text-3xl font-semibold tracking-[-0.02em] text-ink md:text-4xl"
        >
          Three engineers. One studio. You talk to the builders.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted md:text-lg">
          We&apos;re a newly founded team in Athens — small enough to move fast,
          senior enough to own the full stack from brief to launch.
        </p>
      </FadeIn>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member, index) => (
          <FadeIn key={member.name} delay={(index + 1) as 1 | 2 | 3}>
            <article className="h-full border border-border bg-bg-elevated p-6">
              <div
                className="flex aspect-[4/5] items-end bg-accent-soft p-5"
                aria-hidden
              >
                <div className="flex h-full w-full flex-col justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-md bg-accent font-display text-xl font-bold text-white">
                    {member.initials}
                  </div>
                  <p className="font-display text-4xl font-bold leading-none tracking-tight text-accent/25">
                    {member.initials}
                  </p>
                </div>
              </div>

              <h3 className="mt-5 font-display text-xl font-semibold tracking-tight text-ink">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-accent">{member.role}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-muted">{member.bio}</p>

              <div className="mt-5 flex gap-3">
                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-ink-muted transition-colors hover:border-accent hover:text-accent"
                  aria-label={`${member.name} on GitHub`}
                >
                  <GitHubIcon />
                </a>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border text-ink-muted transition-colors hover:border-accent hover:text-accent"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <LinkedInIcon />
                </a>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
