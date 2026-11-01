"use client";

import Link from "next/link";
import { BrowserFrame, PhoneFrame } from "./work/DeviceFrames";
import { useLocale, useLocalizedPath } from "@/i18n/LocaleProvider";
import { stagger, useReveal } from "@/lib/reveal";
import { projectLabel, selectedProjects, type Project } from "@/data/projects";

const homeStage: Record<string, string> = {
  "salty-boat-trips": "#D9E8E2",
  "dr-baumann": "#EFE7DA",
  techne: "#F1E3E1",
};

const homePhone: Record<string, "bottom-left" | "right" | "left"> = {
  "salty-boat-trips": "bottom-left",
  "dr-baumann": "right",
  techne: "left",
};

/** Homepage frames use the shared @2x captures. Project pages keep their own shots. */
const homeShots: Record<string, { desktop: { en: string; el: string }; mobile: string }> = {
  "salty-boat-trips": {
    desktop: {
      en: "/projects/salty-boat-trips-desktop.jpg",
      el: "/projects/salty-boat-trips-desktop.jpg",
    },
    mobile: "/projects/salty-boat-trips-mobile.jpg",
  },
  "dr-baumann": {
    desktop: { en: "/projects/dr-baumann-desktop.jpg", el: "/projects/dr-baumann-desktop.jpg" },
    mobile: "/projects/dr-baumann-mobile.jpg",
  },
  techne: {
    desktop: { en: "/projects/techne-desktop-en.jpg", el: "/projects/techne-desktop-el.jpg" },
    mobile: "/projects/techne-mobile.jpg",
  },
};

function SelectedCard({ project, size }: { project: Project; size: "large" | "small" }) {
  const { locale } = useLocale();
  const hrefFor = useLocalizedPath();
  const large = size === "large";
  const phone = homePhone[project.slug] ?? "right";
  const name = project.name[locale];
  const shots = homeShots[project.slug];
  const desktopAlt =
    locale === "el" ? `Ο ιστότοπος ${name} σε υπολογιστή` : `${name} website on desktop`;
  const mobileAlt =
    locale === "el" ? `Ο ιστότοπος ${name} σε κινητό` : `${name} website on mobile`;

  return (
    <Link href={hrefFor(`/work/${project.slug}`)} className={`home-work-card ${large ? "is-large" : "is-small"}`}>
      <div className="home-work-media" style={{ backgroundColor: homeStage[project.slug] ?? "#E7F0EC" }}>
        <div className={`home-work-browser is-${phone}`}>
          <BrowserFrame
            image={shots?.desktop[locale] ?? project.image[locale]}
            alt={desktopAlt}
            domain={project.domain}
            barHeight={large ? 22 : 16}
            dotSize={large ? 7 : 6}
            domainSize={11}
            radiusClass="rounded-tl-xl"
            className="home-work-browser-frame"
            sizes={large ? "(max-width: 1024px) 92vw, 58vw" : "(max-width: 1024px) 92vw, 42vw"}
            barColor="#ffffff"
          />
        </div>
        <PhoneFrame
          image={shots?.mobile ?? project.mobileImage}
          alt={mobileAlt}
          border={large ? 7 : 5}
          radius={large ? 26 : 20}
          sizes={large ? "24vw" : "30vw"}
          className={`home-work-phone is-${phone}`}
        />
      </div>
      <div className="home-work-body">
        <div className="min-w-0">
          <p className="home-work-kicker">{projectLabel(project, locale)}</p>
          <h3 className="home-work-title">{name}</h3>
          <p className="home-work-desc">{project.description[locale]}</p>
        </div>
        <span className="home-work-arrow" aria-hidden>
          →
        </span>
      </div>
    </Link>
  );
}

export function Work() {
  const { t } = useLocale();
  const hrefFor = useLocalizedPath();
  const [lead, ...rest] = selectedProjects;
  const [ref, revealed] = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="work" className={revealed ? "is-revealed" : ""} aria-labelledby="work-heading">
      <div className="work-grid-bg" aria-hidden />
      <div className="offer-section container-narrow home-work-inner">
        <div className="gx-up">
          <p className="home-section-eyebrow">{t.work.label}</p>
          <h2 id="work-heading" className="home-section-title">
            {t.work.heading}
          </h2>
          <p className="home-section-intro home-work-intro">{t.work.intro}</p>
        </div>

        <div className="home-work-grid">
          <div className="gx-up" style={stagger(0)}>
            <SelectedCard project={lead} size="large" />
          </div>
          <div className="home-work-stack">
            {rest.map((project, index) => (
              <div key={project.slug} className="gx-up" style={stagger(index + 1)}>
                <SelectedCard project={project} size="small" />
              </div>
            ))}
          </div>
        </div>

        <div className="home-work-more">
          <p>{t.work.more}</p>
          <Link href={hrefFor("/work")} className="btn-primary home-work-more-cta">
            {t.work.seeAll}
            <span className="cta-arrow" aria-hidden>
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
