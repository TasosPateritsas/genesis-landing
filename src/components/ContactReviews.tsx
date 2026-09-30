"use client";

import { ChevronLeft, ChevronRight, ExternalLink, Star } from "lucide-react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  AVERAGE_RATING,
  GOOGLE_PROFILE_URL,
  GOOGLE_REVIEW_URL,
  TOTAL_REVIEWS,
  reviews,
  type Review,
} from "@/data/reviews";
import { useLocale } from "@/i18n/LocaleProvider";
import { paginationItems, reviewPages } from "@/lib/reviewSlider";

function fill(template: string, values: Record<string, string | number>) {
  return Object.entries(values).reduce(
    (text, [key, value]) => text.replace(`{${key}}`, String(value)),
    template,
  );
}

function initial(name: string) {
  const cleaned = name.replace(/^\[Mock\]\s*/, "");
  return Array.from(cleaned)[0]?.toUpperCase() ?? "?";
}

function GoogleMark() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#4285F4"
        d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h6.5c-.3 1.5-1.1 2.8-2.4 3.6v3h3.9c2.3-2.1 3.5-5.2 3.5-8.7z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.9-3c-1.1.7-2.4 1.2-4 1.2-3.1 0-5.7-2.1-6.6-4.9H1.4v3.1C3.4 21.3 7.4 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.4 14.4c-.2-.7-.4-1.4-.4-2.4s.1-1.7.4-2.4V6.5H1.4C.5 8.3 0 10.1 0 12s.5 3.7 1.4 5.5l4-3.1z"
      />
      <path
        fill="#EA4335"
        d="M12 4.8c1.7 0 3.3.6 4.5 1.8l3.4-3.4C17.9 1.1 15.2 0 12 0 7.4 0 3.4 2.7 1.4 6.5l4 3.1C6.3 6.8 8.9 4.8 12 4.8z"
      />
    </svg>
  );
}

function QuietLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: ReactNode;
}) {
  if (!href) {
    return (
      <button type="button" className={className}>
        {children}
      </button>
    );
  }

  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

function ReviewCard({ review, ratedLabel, sourceLabel }: { review: Review; ratedLabel: string; sourceLabel: string }) {
  return (
    <article className="review-card">
      <div className="flex items-center gap-3">
        <span className="review-avatar" aria-hidden>
          {initial(review.name)}
        </span>
        <div className="min-w-0">
          <p className="text-sm font-medium text-ink">{review.name}</p>
          <p className="text-xs text-ink-muted">{review.date}</p>
        </div>
      </div>
      <p className="mt-3 flex gap-0.5" aria-label={ratedLabel}>
        {Array.from({ length: 5 }, (_, star) => (
          <Star
            key={star}
            className={`h-4 w-4 ${star < review.rating ? "fill-[#F5B301] text-[#F5B301]" : "fill-none text-[#F5B301]"}`}
            strokeWidth={1.75}
            aria-hidden
          />
        ))}
      </p>
      <p className="mt-3 mb-4 text-[14px] leading-[1.6] text-ink">{review.text}</p>
      <div className="review-card-footer">
        <GoogleMark />
        <span>{sourceLabel}</span>
      </div>
    </article>
  );
}

export function ContactReviews() {
  const { locale, t } = useLocale();
  const copy = t.reviews;
  const showCards = reviews.length >= 3;
  const useSlider = reviews.length > 3;
  const [pageSize, setPageSize] = useState(3);
  const [page, setPage] = useState(0);
  const touchX = useRef<number | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const apply = () => {
      setPageSize(media.matches ? 3 : 1);
      setPage(0);
    };
    apply();
    media.addEventListener("change", apply);
    return () => media.removeEventListener("change", apply);
  }, []);

  const pages = reviewPages(reviews, useSlider ? pageSize : reviews.length);
  const pageCount = pages.length;
  const safePage = Math.min(page, Math.max(0, pageCount - 1));
  const ratingText = new Intl.NumberFormat(locale === "el" ? "el-GR" : "en-US", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  }).format(AVERAGE_RATING);

  function goTo(next: number) {
    setPage(Math.max(0, Math.min(pageCount - 1, next)));
  }

  return (
    <section className="contact-reviews" aria-labelledby={showCards ? "reviews-heading" : undefined}>
      <div className="container-narrow">
        {showCards ? (
          <header className="text-center">
            <p className="service-kicker">{copy.kicker}</p>
            <h2
              id="reviews-heading"
              className="mt-3 text-[clamp(1.75rem,3vw,2.25rem)] font-semibold tracking-[-0.02em] text-ink"
            >
              {copy.heading}
            </h2>
            <p className="mt-3 flex flex-wrap items-center justify-center gap-x-1.5 text-[13px] text-ink-muted">
              <span className="inline-flex gap-0.5" aria-hidden>
                {Array.from({ length: 5 }, (_, star) => (
                  <Star key={star} className="h-3.5 w-3.5 fill-[#F5B301] text-[#F5B301]" strokeWidth={1.75} />
                ))}
              </span>
              <span className="font-medium text-ink">{ratingText}</span>
              <span>· {fill(copy.reviewsOnGoogle, { count: TOTAL_REVIEWS })}</span>
            </p>
          </header>
        ) : null}

        {showCards && !useSlider ? (
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {reviews.map((review) => (
              <ReviewCard
                key={`${review.name}-${review.date}`}
                review={review}
                ratedLabel={fill(copy.rated, { rating: review.rating })}
                sourceLabel={copy.cardSource}
              />
            ))}
          </div>
        ) : null}

        {useSlider ? (
          <>
            <div
              className="mt-10 overflow-hidden"
              onTouchStart={(event) => {
                touchX.current = event.touches[0]?.clientX ?? null;
              }}
              onTouchEnd={(event) => {
                if (touchX.current == null) return;
                const endX = event.changedTouches[0]?.clientX ?? touchX.current;
                const delta = endX - touchX.current;
                touchX.current = null;
                if (delta <= -48) goTo(safePage + 1);
                if (delta >= 48) goTo(safePage - 1);
              }}
            >
              <div className="reviews-track flex" style={{ transform: `translateX(-${safePage * 100}%)` }}>
                {pages.map((group, groupIndex) => (
                  <div key={groupIndex} className="grid w-full shrink-0 grid-cols-1 gap-4 md:grid-cols-3">
                    {group.map((review) => (
                      <ReviewCard
                        key={`${review.name}-${review.date}`}
                        review={review}
                        ratedLabel={fill(copy.rated, { rating: review.rating })}
                        sourceLabel={copy.cardSource}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <nav className="mt-8 flex items-center justify-center gap-2" aria-label={copy.pagesLabel}>
              <button
                type="button"
                className="review-page-arrow"
                aria-label={copy.previous}
                disabled={safePage === 0}
                onClick={() => goTo(safePage - 1)}
              >
                <ChevronLeft className="h-4 w-4" aria-hidden />
              </button>
              {paginationItems(safePage + 1, pageCount).map((item, itemIndex) =>
                item === "ellipsis" ? (
                  <span key={`ellipsis-${itemIndex}`} className="px-1 text-sm text-[#0B4F40]" aria-hidden>
                    …
                  </span>
                ) : (
                  <button
                    key={item}
                    type="button"
                    className="review-page-button"
                    aria-label={fill(copy.pageLabel, { page: item })}
                    aria-current={item === safePage + 1 ? "page" : undefined}
                    onClick={() => goTo(item - 1)}
                  >
                    {item}
                  </button>
                ),
              )}
              <button
                type="button"
                className="review-page-arrow"
                aria-label={copy.next}
                disabled={safePage >= pageCount - 1}
                onClick={() => goTo(safePage + 1)}
              >
                <ChevronRight className="h-4 w-4" aria-hidden />
              </button>
            </nav>
          </>
        ) : null}

        <div className={`text-center ${showCards ? "mt-12" : ""}`}>
          <p className="text-base text-ink">{copy.ctaPrompt}</p>
          <QuietLink href={GOOGLE_REVIEW_URL} className="review-leave-cta">
            <Star className="h-4 w-4" strokeWidth={1.75} aria-hidden />
            {copy.cta}
            <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.75} aria-hidden />
          </QuietLink>
          {reviews.length >= 3 ? (
            <div>
              <QuietLink href={GOOGLE_PROFILE_URL} className="review-see-all">
                {copy.seeAll}
              </QuietLink>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
