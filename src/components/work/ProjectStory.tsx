"use client";

import {
  Building2,
  Calendar,
  CreditCard,
  FileText,
  Heart,
  Home,
  Landmark,
  Languages,
  LayoutGrid,
  ListFilter,
  MapPin,
  MessageCircle,
  Phone,
  Route,
  Sailboat,
  Search,
  Star,
  Utensils,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { useLocale } from "@/i18n/LocaleProvider";
import type { Project } from "@/data/projects";

const icons: Record<string, LucideIcon> = {
  sailboat: Sailboat,
  route: Route,
  "layout-grid": LayoutGrid,
  "message-circle": MessageCircle,
  search: Search,
  star: Star,
  heart: Heart,
  "list-filter": ListFilter,
  "credit-card": CreditCard,
  "file-text": FileText,
  "building-2": Building2,
  "map-pin": MapPin,
  languages: Languages,
  utensils: Utensils,
  home: Home,
  landmark: Landmark,
  calendar: Calendar,
  phone: Phone,
  wrench: Wrench,
};

export function ProjectStory({ project }: { project: Project }) {
  const { locale, t } = useLocale();
  const page = t.workPage;

  return (
    <section className="bg-white py-[clamp(64px,8vw,112px)]">
      <div className="section-pad container-narrow grid items-start gap-[clamp(32px,6vw,96px)] lg:grid-cols-3">
        <div>
          <h2 className="text-[clamp(28px,3vw,40px)] font-semibold leading-tight tracking-[-0.02em] text-[#15201C]">
            {project.storyTitle[locale]}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#5A675F]">
            {project.storySubtitle[locale]}
          </p>
        </div>
        <div className="lg:col-span-2">
          <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-[#085041]">
            {page.briefHeading}
          </h3>
          <p className="mt-3 text-lg leading-[1.7] text-[#15201C]">{project.brief[locale]}</p>
          <h3 className="mt-12 text-sm font-semibold uppercase tracking-[0.12em] text-[#085041]">
            {page.builtHeading}
          </h3>
          <ul className="mt-5 grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-x-8 gap-y-7">
            {project.built.map((item) => {
              const Icon = icons[item.icon] ?? LayoutGrid;
              return (
                <li key={item.title.en} className="flex gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-[#E1F5EE] text-[#0F6E56]">
                    <Icon className="size-[18px]" strokeWidth={1.8} aria-hidden />
                  </span>
                  <span>
                    <span className="block text-base font-semibold text-[#15201C]">
                      {item.title[locale]}
                    </span>
                    <span className="mt-1.5 block text-[15px] leading-relaxed text-[#5A675F]">
                      {item.text[locale]}
                    </span>
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
