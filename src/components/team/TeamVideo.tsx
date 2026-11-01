"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import { site } from "@/config/site";
import { formatChapterTime, teamVideoCopy, teamVideoSources } from "@/data/teamPage";
import { useLocale } from "@/i18n/LocaleProvider";

function PlayIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden>
      <path d="M9 7.2v9.6l8.2-4.8L9 7.2Z" fill="currentColor" />
    </svg>
  );
}

export function TeamVideo() {
  const { locale } = useLocale();
  const frameRef = useRef<HTMLDivElement>(null);
  const playRef = useRef<HTMLSpanElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const playingRef = useRef(false);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const [playing, setPlaying] = useState(false);
  const sources = teamVideoSources();
  const poster = site.video.poster;

  useEffect(() => {
    playingRef.current = playing;
  }, [playing]);

  useEffect(() => {
    const fineQuery = window.matchMedia("(pointer: fine)");
    const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let alive = true;

    const tick = () => {
      if (!alive) return;
      frame = window.requestAnimationFrame(tick);
      const button = playRef.current;
      if (!button || playingRef.current) return;

      const locked = !fineQuery.matches || reduceQuery.matches;
      if (locked) {
        current.current.x = 0;
        current.current.y = 0;
        target.current.x = 0;
        target.current.y = 0;
        button.style.translate = "-50% -50%";
        return;
      }

      current.current.x += (target.current.x - current.current.x) * 0.12;
      current.current.y += (target.current.y - current.current.y) * 0.12;
      button.style.translate = `calc(-50% + ${current.current.x}px) calc(-50% + ${current.current.y}px)`;
    };

    frame = window.requestAnimationFrame(tick);
    return () => {
      alive = false;
      window.cancelAnimationFrame(frame);
    };
  }, []);

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    if (playingRef.current) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce || event.pointerType !== "mouse") return;
    const frameEl = frameRef.current;
    if (!frameEl) return;
    const rect = frameEl.getBoundingClientRect();
    target.current.x = event.clientX - (rect.left + rect.width / 2);
    target.current.y = event.clientY - (rect.top + rect.height / 2);
  }

  function onPointerLeave() {
    target.current.x = 0;
    target.current.y = 0;
  }

  function start(seconds: number) {
    const video = videoRef.current;
    if (!video || sources.length === 0) return;
    setPlaying(true);
    const begin = () => {
      if (Math.abs(video.currentTime - seconds) > 0.25) video.currentTime = seconds;
      video.play().catch(() => {});
    };
    if (video.readyState >= 1) begin();
    else {
      video.addEventListener("loadeddata", begin, { once: true });
      video.load();
    }
  }

  return (
    <section className="team-video" aria-labelledby="team-video-heading">
      <h2 id="team-video-heading" className="sr-only">
        {teamVideoCopy.line1[locale]}. {teamVideoCopy.line2[locale]}
      </h2>
      <div
        ref={frameRef}
        className={playing ? "team-video-frame is-playing" : "team-video-frame"}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
      >
        {poster ? (
          <Image src={poster} alt="" fill priority={false} sizes="100vw" className="team-video-media object-cover" />
        ) : null}
        <div className="team-video-shade" />
        <video
          ref={videoRef}
          className="team-video-player"
          poster={poster || undefined}
          preload="none"
          playsInline
          controls={playing}
        >
          {sources.map((source) => (
            <source key={source.src} src={source.src} type="video/mp4" media={source.media} />
          ))}
          {site.video.captions.en ? (
            <track
              kind="subtitles"
              srcLang="en"
              label="English"
              src={site.video.captions.en}
              default={locale === "en"}
            />
          ) : null}
          {site.video.captions.el ? (
            <track
              kind="subtitles"
              srcLang="el"
              label="Ελληνικά"
              src={site.video.captions.el}
              default={locale === "el"}
            />
          ) : null}
        </video>
        <div className="team-video-copy">
          <p className="team-video-badge">{teamVideoCopy.badge[locale]}</p>
          <p className="team-video-title">{teamVideoCopy.line1[locale]}</p>
          <p className="team-video-line2">{teamVideoCopy.line2[locale]}</p>
        </div>
        <button type="button" className="team-video-hit" aria-label={teamVideoCopy.play[locale]} onClick={() => start(0)} />
        <span ref={playRef} className="team-video-play" aria-hidden>
          <PlayIcon />
        </span>
      </div>
      <div className="wrap-content">
        <div className="team-video-chapters">
          {site.video.chapters.map((chapter) => (
            <button key={chapter.seconds} type="button" className="team-video-chapter" onClick={() => start(chapter.seconds)}>
              <span className="team-video-time">{formatChapterTime(chapter.seconds)}</span>
              {chapter.label[locale]}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
