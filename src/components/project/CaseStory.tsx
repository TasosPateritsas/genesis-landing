"use client";

import { FeatureIcon } from "@/components/project/FeatureIcon";
import { caseCopy } from "@/data/projectCopy";
import type { Project } from "@/data/projectTypes";
import { useLocale } from "@/i18n/LocaleProvider";
import { stagger, useReveal } from "@/lib/reveal";
import { caseRevealMargin } from "@/components/project/CaseDivider";

export function CaseStory({ project }: { project: Project }) {
  const { locale } = useLocale();
  const copy = caseCopy(locale);
  const [headRef, headOn] = useReveal<HTMLDivElement>(0.15, caseRevealMargin);
  const [gridRef, gridOn] = useReveal<HTMLDivElement>(0.15, caseRevealMargin);

  return (
    <section className="case-story">
      <div className="case-l2">
        <div ref={headRef} className={headOn ? "case-story-head is-revealed" : "case-story-head"}>
          <div className="gx-up">
            <p className="case-eyebrow">{copy.eyebrowProject}</p>
            <h2 className="case-h2">{project.storyTitle[locale]}</h2>
            <p className="case-sub">{project.storySubtitle[locale]}</p>
          </div>
          <div className="gx-up" style={stagger(1)}>
            <p className="case-eyebrow">{copy.eyebrowBrief}</p>
            <p className="case-brief">{project.brief[locale]}</p>
          </div>
        </div>
        <div ref={gridRef} className={gridOn ? "is-revealed" : undefined}>
          <p className="case-eyebrow case-built-label gx-up">{copy.eyebrowBuilt}</p>
          <div className="case-features">
            {project.built.map((item, index) => (
              <article key={item.title.en} className="case-feature gx-up" style={stagger(index % 3)}>
                <FeatureIcon name={item.icon} />
                <h3>{item.title[locale]}</h3>
                <p>{item.text[locale]}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
