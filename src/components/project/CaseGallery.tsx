"use client";

import Image from "next/image";
import { CaseDivider, caseRevealMargin } from "@/components/project/CaseDivider";
import { caseCopy } from "@/data/projectCopy";
import type { Project, Shot } from "@/data/projectTypes";
import { useLocale } from "@/i18n/LocaleProvider";
import { stagger, useReveal } from "@/lib/reveal";

function Frame({ shot, ratio }: { shot: Shot; ratio: "wide" | "row" }) {
  const { locale } = useLocale();
  return (
    <figure className={`case-shot case-${ratio}`}>
      <div className="case-shot-frame">
        <Image
          src={shot.image[locale]}
          alt={shot.alt[locale]}
          fill
          sizes={ratio === "wide" ? "(min-width: 1024px) 1216px, 100vw" : "(min-width: 1024px) 380px, 100vw"}
          className="case-zoom"
        />
      </div>
      <figcaption className="case-caption">
        <h3>{shot.title[locale]}</h3>
        <p>{shot.text[locale]}</p>
      </figcaption>
    </figure>
  );
}

export function CaseGallery({ project }: { project: Project }) {
  const { locale } = useLocale();
  const copy = caseCopy(locale);
  const gallery = project.gallery;
  const [wideRef, wideOn] = useReveal<HTMLDivElement>(0.15, caseRevealMargin);
  const [rowRef, rowOn] = useReveal<HTMLDivElement>(0.15, caseRevealMargin);
  const [bandRef, bandOn] = useReveal<HTMLElement>(0.15, caseRevealMargin);
  if (!gallery) return null;

  return (
    <section className="case-inside">
      <CaseDivider label={copy.inside} />
      <div className="case-l1 case-gallery">
        <div ref={wideRef} className={wideOn ? "is-revealed" : undefined}>
          <div className="gx-up">
            <Frame shot={gallery.wide} ratio="wide" />
          </div>
        </div>
        <div ref={rowRef} className={rowOn ? "case-row is-revealed" : "case-row"}>
          {gallery.row.map((shot, index) => (
            <div key={shot.image.en} className="gx-up" style={stagger(index)}>
              <Frame shot={shot} ratio="row" />
            </div>
          ))}
        </div>
        <figure ref={bandRef} className={bandOn ? "case-band gx-up is-revealed" : "case-band gx-up"}>
          <div className="case-phones">
            {gallery.mobile.images.map((image, index) => (
              <div key={image.en} className="case-device">
                <div className="case-device-screen">
                  <Image src={image[locale]} alt={gallery.mobile.alts[index][locale]} fill sizes="240px" />
                </div>
              </div>
            ))}
          </div>
          <figcaption className="case-phone-caption">
            <h3>{gallery.mobile.title[locale]}</h3>
            <p>{gallery.mobile.text[locale]}</p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
