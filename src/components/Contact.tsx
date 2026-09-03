"use client";

import { FormEvent, useState } from "react";
import { site } from "@/data/content";
import { FadeIn } from "./FadeIn";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    const subject = encodeURIComponent(`Project inquiry from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
    form.reset();
  }

  return (
    <section
      id="contact"
      className="border-t border-border bg-bg-elevated py-20 md:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="section-pad container-narrow">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <FadeIn>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-accent">
              Contact
            </p>
            <h2
              id="contact-heading"
              className="mt-3 font-display text-3xl font-semibold tracking-[-0.02em] text-ink md:text-4xl"
            >
              Tell us what you want to build.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-muted md:text-lg">
              Share a short brief — idea stage is fine. We usually reply within
              one business day with next steps and a realistic timeline.
            </p>

            <div className="mt-8 space-y-4 text-sm text-ink-muted">
              <p>
                <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-ink">
                  Email
                </span>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-1 inline-block text-base font-medium text-accent hover:text-accent-hover"
                >
                  {site.email}
                </a>
              </p>
              <p>
                <span className="block text-xs font-semibold uppercase tracking-[0.12em] text-ink">
                  Based in
                </span>
                <span className="mt-1 block text-base text-ink-muted">
                  {site.location}
                </span>
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={1}>
            <form
              onSubmit={onSubmit}
              className="border border-border bg-bg p-6 md:p-8"
              noValidate
            >
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-ink">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="mt-2 h-11 w-full border border-border bg-bg-elevated px-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-muted/70 focus:border-accent"
                    placeholder="Alex Morgan"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-ink">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="mt-2 h-11 w-full border border-border bg-bg-elevated px-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-muted/70 focus:border-accent"
                    placeholder="alex@startup.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-ink">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="mt-2 w-full resize-y border border-border bg-bg-elevated px-3 py-2.5 text-sm text-ink outline-none transition-colors placeholder:text-ink-muted/70 focus:border-accent"
                    placeholder="What are you building, and when do you need it live?"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-md bg-accent text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                Send message
              </button>

              {status === "sent" ? (
                <p className="mt-3 text-sm text-accent" role="status">
                  Opening your email client — if nothing appears, write us at{" "}
                  {site.email}.
                </p>
              ) : (
                <p className="mt-3 text-xs leading-relaxed text-ink-muted">
                  Prefer email? Reach us directly at{" "}
                  <a href={`mailto:${site.email}`} className="underline underline-offset-2">
                    {site.email}
                  </a>
                  .
                </p>
              )}
            </form>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
