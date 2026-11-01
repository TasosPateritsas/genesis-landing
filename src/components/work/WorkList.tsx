"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { liveCards, upcomingCards, type WorkCard } from "@/data/workCards";
import { useLocale, useLocalizedPath } from "@/i18n/LocaleProvider";
import { paginationItems } from "@/lib/reviewSlider";
import { useReducedMotion, useReveal, stagger } from "@/lib/reveal";
import { pageCount, pageSize, pageSlice, rowsOf, type WorkKind } from "@/lib/workPages";

function useWorkFrame() {
  const [frame, setFrame] = useState({ stacked: false, columns: 3 });

  useLayoutEffect(() => {
    const stackedQuery = window.matchMedia("(max-width: 639px)");
    const wideQuery = window.matchMedia("(min-width: 1024px)");
    const sync = () => {
      const stacked = stackedQuery.matches;
      setFrame({ stacked, columns: wideQuery.matches ? 3 : stacked ? 1 : 2 });
    };
    sync();
    stackedQuery.addEventListener("change", sync);
    wideQuery.addEventListener("change", sync);
    return () => {
      stackedQuery.removeEventListener("change", sync);
      wideQuery.removeEventListener("change", sync);
    };
  }, []);

  return frame;
}

function WorkDivider({ id, label }: { id: string; label: string }) {
  const [ref, on] = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={on ? "work-divider is-revealed" : "work-divider"}>
      <span className="work-divider-line is-left" aria-hidden />
      <h2 id={id} className="work-divider-label">
        {label}
      </h2>
      <span className="work-divider-line is-right" aria-hidden />
    </div>
  );
}

function ProjectCard({
  card,
  layout,
  badge,
}: {
  card: WorkCard;
  layout: "grid" | "row";
  badge?: string;
}) {
  const { locale, t } = useLocale();
  const hrefFor = useLocalizedPath();

  return (
    <Link
      href={hrefFor(`/work/${card.slug}`)}
      className={layout === "row" ? "work-card is-row" : "work-card"}
    >
      <div className="work-card-media">
        {badge ? <span className="work-card-badge">{badge}</span> : null}
        <Image
          src={card.image[locale]}
          alt={card.imageAlt[locale]}
          fill
          sizes={
            layout === "row"
              ? "(min-width: 1024px) 640px, 100vw"
              : "(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
          }
          className="work-card-shot"
        />
      </div>
      <div className="work-card-body">
        <p className="work-card-meta">{card.meta[locale]}</p>
        <h3 className="work-card-title">{card.title[locale]}</h3>
        <p className="work-card-text">{card.description[locale]}</p>
        <span className="work-card-link">
          <span className="work-card-link-text">{t.workPage.viewProject}</span>
          <span className="work-card-arrow" aria-hidden>
            →
          </span>
        </span>
      </div>
    </Link>
  );
}

function WorkRow({ cards, layout, badge }: { cards: WorkCard[]; layout: "grid" | "row"; badge?: string }) {
  const [ref, on] = useReveal<HTMLLIElement>();
  return cards.map((card, index) => (
    <li
      key={card.slug}
      ref={index === 0 ? ref : undefined}
      className={on ? "gx-up is-revealed" : "gx-up"}
      style={stagger(index)}
    >
      <ProjectCard card={card} layout={layout} badge={badge} />
    </li>
  ));
}

function WorkPager({
  page,
  count,
  onPage,
}: {
  page: number;
  count: number;
  onPage: (page: number) => void;
}) {
  const { t } = useLocale();
  if (count < 2) return null;
  const current = page + 1;

  return (
    <nav className="work-pages" aria-label={t.workPage.pagesLabel}>
      <button
        type="button"
        className="work-page-arrow"
        aria-label={t.workPage.previousPage}
        disabled={page <= 0}
        onClick={() => onPage(page - 1)}
      >
        ‹
      </button>
      {paginationItems(current, count).map((item, index) =>
        item === "ellipsis" ? (
          <span key={`gap-${index}`} className="work-page-gap" aria-hidden>
            …
          </span>
        ) : (
          <button
            key={item}
            type="button"
            className="work-page-num"
            aria-current={item === current ? "page" : undefined}
            onClick={() => onPage(item - 1)}
          >
            {item}
          </button>
        ),
      )}
      <button
        type="button"
        className="work-page-arrow"
        aria-label={t.workPage.nextPage}
        disabled={page >= count - 1}
        onClick={() => onPage(page + 1)}
      >
        ›
      </button>
    </nav>
  );
}

export function WorkList({ kind, headingId }: { kind: WorkKind; headingId: string }) {
  const { t } = useLocale();
  const reduced = useReducedMotion();
  const { stacked, columns } = useWorkFrame();
  const items = kind === "live" ? liveCards() : upcomingCards;
  const size = pageSize(kind, stacked);
  const count = pageCount(items.length, size);
  const [page, setPage] = useState(0);
  const [replay, setReplay] = useState(0);
  const safePage = Math.min(page, count - 1);
  const visible = pageSlice(items, safePage, size);
  const rows = rowsOf(visible, kind === "upcoming" ? 1 : columns);
  const anchorRef = useRef<HTMLDivElement>(null);
  const pendingScroll = useRef(false);
  const layout = kind === "live" ? "grid" : "row";
  const badge = kind === "upcoming" ? t.workPage.comingSoon : undefined;
  const label = kind === "live" ? t.workPage.liveDivider : t.workPage.upcomingDivider;

  useEffect(() => {
    if (!pendingScroll.current) return;
    pendingScroll.current = false;
    anchorRef.current?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  }, [page, reduced]);

  function go(next: number) {
    const target = Math.min(Math.max(next, 0), count - 1);
    if (target === safePage) return;
    pendingScroll.current = true;
    setPage(target);
    setReplay((value) => value + 1);
  }

  if (items.length === 0) return null;

  return (
    <section className={kind === "live" ? "work-live" : "work-upcoming"} aria-labelledby={headingId}>
      <WorkDivider id={headingId} label={label} />
      <div className="work-measure">
        <div ref={anchorRef} className="work-list-anchor">
          <ul key={replay} className={kind === "live" ? "work-live-grid" : "work-upcoming-list"}>
            {rows.map((row) => (
              <WorkRow key={row[0]?.slug} cards={row} layout={layout} badge={badge} />
            ))}
          </ul>
        </div>
        <WorkPager page={safePage} count={count} onPage={go} />
      </div>
    </section>
  );
}
