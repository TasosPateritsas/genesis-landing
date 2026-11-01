"use client";

import Image from "next/image";
import type { GalleryShot } from "@/data/projectModel";
import type { Project } from "@/data/projectModel";
import { projectChrome } from "@/data/projectChrome";
import { CaseDivider } from "@/components/work/CaseDivider";
import { useLocale } from "@/i18n/LocaleProvider";
import { stagger, useReveal } from "@/lib/reveal";

function Shot({
  shot,
  locale,
  ratio,
  delay,
}: {
  shot: GalleryShot;
  locale: "en" | "el";
  ratio: "wide" | "row";
  delay: number;
}) {
  return (
    <figure className={`case-figure gx-up is-${ratio}`} style={stagger(delay)}>
      <div className={`case-shot is-${ratio}`}>
        <Image src={shot.image[locale]} alt={shot.alt[locale]} fill sizes={ratio === "wide" ? "1216px" : "400px"} />
      </div>
      <figcaption>
        <p className="case-caption-title">{shot.title[locale]}</p>
        <p className="case-caption-text">{shot.text[locale]}</p>
      </figcaption>
    </figure>
  );
}

export function CaseGallery({ project }: { project: Project }) {
  const { locale } = useLocale();
  const copy = projectChrome(locale);
  const gallery = project.gallery;
  const [ref, on] = useReveal<HTMLElement>(0.15, "0px 0px -8% 0px");

  return (
    <section ref={ref} className={on ? "case-gallery is-revealed" : "case-gallery"}>
      <CaseDivider label={copy.inside} />
      <div className="work-measure">
        <Shot shot={gallery.wide} locale={locale} ratio="wide" delay={0} />
        <div className="case-row">
          {gallery.row.map((shot, index) => (
            <Shot key={shot.image.en} shot={shot} locale={locale} ratio="row" delay={index} />
          ))}
        </div>
        <figure className="case-band gx-up" style={stagger(2)}>
          <div className="case-phones">
            {gallery.mobile.images.map((image, index) => (
              <div key={image.en} className="case-band-phone">
                <div className="case-band-screen">
                  <Image
                    src={image[locale]}
                    alt={gallery.mobile.alts[index][locale]}
                    fill
                    sizes="240px"
                  />
                </div>
              </div>
            ))}
          </div>
          <figcaption>
            <p className="case-caption-title">{gallery.mobile.title[locale]}</p>
            <p className="case-caption-text">{gallery.mobile.text[locale]}</p>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
