"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type PointerEvent } from "react";
import {
  formatChapterTime,
  resolveTeamVideo,
  teamVideo,
  type ResolvedTeamVideo,
} from "@/data/teamVideo";
import { useLocale } from "@/i18n/LocaleProvider";

type Playback = {
  media: Exclude<ResolvedTeamVideo, { kind: "none" }>;
  seconds: number;
};

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
  const buttonRef = useRef<HTMLButtonElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const following = useRef(false);
  const [playback, setPlayback] = useState<Playback | null>(null);

  useEffect(() => {
    const fineQuery = window.matchMedia("(pointer: fine)");
    const reduceQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let alive = true;

    const tick = () => {
      if (!alive) return;
      frame = window.requestAnimationFrame(tick);
      const button = buttonRef.current;
      if (!button) return;

      const locked = !fineQuery.matches || reduceQuery.matches;
      if (locked) {
        current.current.x = 0;
        current.current.y = 0;
        target.current.x = 0;
        target.current.y = 0;
        button.style.transform = "translate(-50%, -50%)";
        button.dataset.follow = "false";
        return;
      }

      current.current.x += (target.current.x - current.current.x) * 0.12;
      current.current.y += (target.current.y - current.current.y) * 0.12;
      button.style.transform = `translate(-50%, -50%) translate(${current.current.x}px, ${current.current.y}px)`;
    };

    frame = window.requestAnimationFrame(tick);
    return () => {
      alive = false;
      window.cancelAnimationFrame(frame);
    };
  }, []);

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce || event.pointerType !== "mouse") return;
    const frameEl = frameRef.current;
    const button = buttonRef.current;
    if (!frameEl || !button) return;
    const rect = frameEl.getBoundingClientRect();
    target.current.x = event.clientX - (rect.left + rect.width / 2);
    target.current.y = event.clientY - (rect.top + rect.height / 2);
    following.current = true;
    button.dataset.follow = "true";
  }

  function onPointerLeave() {
    target.current.x = 0;
    target.current.y = 0;
    following.current = false;
    if (buttonRef.current) buttonRef.current.dataset.follow = "false";
  }

  function start(seconds: number) {
    const media = resolveTeamVideo(teamVideo.src);
    if (media.kind === "none") return;

    if (playback?.media.kind === "file" && media.kind === "file" && videoRef.current) {
      const video = videoRef.current;
      video.currentTime = seconds;
      video.play().catch(() => {});
      return;
    }

    setPlayback({ media, seconds });
  }

  return (
    <section className="team-video" aria-labelledby="team-video-heading">
      <h2 id="team-video-heading" className="sr-only">
        {teamVideo.title[locale]}
      </h2>
      <div className="section-pad container-narrow">
        <div
          ref={frameRef}
          className="team-video-frame"
          onClick={() => start(0)}
          onPointerMove={onPointerMove}
          onPointerLeave={onPointerLeave}
        >
          <Image
            src={teamVideo.poster}
            alt=""
            fill
            sizes="(min-width: 1152px) 1152px, 100vw"
            className="object-cover"
          />
          <div className="team-video-shade" />
          {playback?.media.kind === "file" ? (
            <video
              ref={videoRef}
              className="team-video-player"
              src={playback.media.src}
              poster={teamVideo.poster}
              controls
              playsInline
              onLoadedMetadata={(event) => {
                const video = event.currentTarget;
                video.currentTime = playback.seconds;
                video.play().catch(() => {});
              }}
              onError={() => {}}
            >
              {teamVideo.captions.en ? (
                <track kind="captions" srcLang="en" label="English" src={teamVideo.captions.en} />
              ) : null}
              {teamVideo.captions.el ? (
                <track kind="captions" srcLang="el" label="Ελληνικά" src={teamVideo.captions.el} />
              ) : null}
            </video>
          ) : null}
          {playback?.media.kind === "youtube" ? (
            <iframe
              className="team-video-player"
              title={teamVideo.title[locale]}
              src={`https://www.youtube-nocookie.com/embed/${playback.media.id}?autoplay=1&start=${Math.floor(playback.seconds)}&rel=0`}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : null}
          {playback?.media.kind === "vimeo" ? (
            <iframe
              className="team-video-player"
              title={teamVideo.title[locale]}
              src={`https://player.vimeo.com/video/${playback.media.id}?autoplay=1#t=${Math.floor(playback.seconds)}s`}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          ) : null}
          {playback ? null : (
            <>
              <span className="team-video-badge">{teamVideo.badge}</span>
              <p className="team-video-title">
                {teamVideo.title[locale]}
              </p>
              <button
                ref={buttonRef}
                type="button"
                className="team-video-play"
                aria-label={teamVideo.playLabel[locale]}
              >
                <PlayIcon />
              </button>
            </>
          )}
        </div>

        <div className="team-video-chapters">
          {teamVideo.chapters.map((chapter) => (
            <button
              key={chapter.seconds}
              type="button"
              className="team-video-chapter"
              onClick={() => start(chapter.seconds)}
            >
              <span className="team-video-time">{formatChapterTime(chapter.seconds)}</span>
              {chapter.label[locale]}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
