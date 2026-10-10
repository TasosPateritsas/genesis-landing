import type { Locale } from "@/data/content";

export type TeamVideoChapter = {
  seconds: number;
  label: Record<Locale, string>;
};

/** Single source for the team video. Leave src empty until hosting is chosen. */
export const teamVideo = {
  src: "",
  poster: "/team/video-poster.jpg",
  captions: {
    en: "",
    el: "",
  } as Record<Locale, string>,
  badge: "VIDEO · 3 MIN",
  title: {
    en: "Three engineers, four questions. Meet us before you meet us.",
    el: "Τρεις μηχανικοί, τέσσερις ερωτήσεις. Γνωρίστε μας πριν μας γνωρίσετε.",
  } as Record<Locale, string>,
  playLabel: {
    en: "Play video",
    el: "Αναπαραγωγή βίντεο",
  } as Record<Locale, string>,
  chapters: [
    { seconds: 0, label: { en: "Who are we?", el: "Ποιοι είμαστε;" } },
    {
      seconds: 45,
      label: { en: "Why did we start Genesis?", el: "Γιατί ξεκινήσαμε τη Genesis;" },
    },
    {
      seconds: 90,
      label: {
        en: "What is it like to work with us?",
        el: "Πώς είναι να δουλεύει κανείς μαζί μας;",
      },
    },
    {
      seconds: 135,
      label: {
        en: "What kind of projects do we love?",
        el: "Τι projects αγαπάμε;",
      },
    },
  ] as const satisfies readonly TeamVideoChapter[],
};

export type ResolvedTeamVideo =
  | { kind: "none" }
  | { kind: "file"; src: string }
  | { kind: "youtube"; id: string }
  | { kind: "vimeo"; id: string };

/** Empty and non-URL placeholders resolve to none so play and chapters no-op. */
export function resolveTeamVideo(src: string): ResolvedTeamVideo {
  const value = src.trim();
  if (!value || value === "placeholder") return { kind: "none" };

  let url: URL;
  try {
    url = new URL(value, "https://genesis.studio");
  } catch {
    return { kind: "none" };
  }

  if (url.protocol !== "http:" && url.protocol !== "https:") return { kind: "none" };

  const host = url.hostname.replace(/^www\./, "");
  if (host === "youtu.be") {
    const id = url.pathname.split("/").filter(Boolean)[0] ?? "";
    return id ? { kind: "youtube", id } : { kind: "none" };
  }
  if (host === "youtube.com" || host === "youtube-nocookie.com") {
    const fromQuery = url.searchParams.get("v");
    const fromPath = url.pathname.startsWith("/embed/")
      ? url.pathname.split("/")[2]
      : url.pathname.startsWith("/shorts/")
        ? url.pathname.split("/")[2]
        : "";
    const id = fromQuery || fromPath || "";
    return id ? { kind: "youtube", id } : { kind: "none" };
  }
  if (host === "vimeo.com" || host === "player.vimeo.com") {
    const id = [...url.pathname.split("/").filter(Boolean)].reverse().find((part) => /^\d+$/.test(part));
    return id ? { kind: "vimeo", id } : { kind: "none" };
  }

  if (value.startsWith("/") || host.length > 0) {
    return { kind: "file", src: value };
  }

  return { kind: "none" };
}

export function formatChapterTime(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const rest = Math.floor(seconds % 60);
  return `${minutes}:${rest.toString().padStart(2, "0")}`;
}
