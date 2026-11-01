"use client";

import {
  Building2,
  CreditCard,
  FileText,
  Globe,
  Grid3x3,
  LayoutGrid,
  Mail,
  Map,
  MessageCircle,
  Route,
  Sailboat,
  Search,
  SlidersHorizontal,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { FeatureIcon, Project } from "@/data/projectModel";
import { projectChrome } from "@/data/projectChrome";
import { useLocale } from "@/i18n/LocaleProvider";
import { stagger, useReveal } from "@/lib/reveal";

const icons: Record<FeatureIcon, LucideIcon> = {
  sailboat: Sailboat,
  route: Route,
  map: Map,
  message: MessageCircle,
  search: Search,
  spark: Sparkles,
  layout: LayoutGrid,
  grid: Grid3x3,
  document: FileText,
  building: Building2,
  envelope: Mail,
  globe: Globe,
  filter: SlidersHorizontal,
  card: CreditCard,
};

export function CaseStudy({ project }: { project: Project }) {
  const { locale } = useLocale();
  const copy = projectChrome(locale);
  const study = project.project;
  const [ref, on] = useReveal<HTMLElement>(0.15, "0px 0px -8% 0px");

  return (
    <section ref={ref} className={on ? "case-study is-revealed" : "case-study"}>
      <div className="case-measure">
        <div className="case-study-head">
          <div className="gx-up" style={stagger(0)}>
            <p className="case-eyebrow">{copy.project}</p>
            <h2 className="case-h2">{study.title[locale]}</h2>
            <p className="case-sub">{study.subtitle[locale]}</p>
          </div>
          <div className="gx-up" style={stagger(1)}>
            <p className="case-eyebrow">{copy.brief}</p>
            <p className="case-brief">{study.brief[locale]}</p>
          </div>
        </div>
        <p className="case-eyebrow case-built gx-up" style={stagger(2)}>
          {copy.built}
        </p>
        <ul className="case-features">
          {study.features.map((item, index) => {
            const Icon = icons[item.icon];
            return (
              <li key={item.title.en} className="case-feature gx-up" style={stagger(index % 3)}>
                <span className="case-feature-icon">
                  <Icon size={18} strokeWidth={1.8} aria-hidden />
                </span>
                <h3>{item.title[locale]}</h3>
                <p>{item.text[locale]}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
