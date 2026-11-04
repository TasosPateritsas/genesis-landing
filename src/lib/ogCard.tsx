import { readFileSync } from "node:fs";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import type { Locale } from "@/data/content";
import type { Project } from "@/data/projects";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const latin = readFileSync(join(process.cwd(), "src/fonts/inter-latin-600.woff"));
const greek = readFileSync(join(process.cwd(), "src/fonts/inter-greek-600.woff"));

function fontData(file: Buffer) {
  return file.buffer.slice(file.byteOffset, file.byteOffset + file.byteLength) as ArrayBuffer;
}

const fonts = [
  { name: "Inter", data: fontData(latin), weight: 600 as const, style: "normal" as const },
  { name: "Inter", data: fontData(greek), weight: 600 as const, style: "normal" as const },
];

const background = {
  backgroundImage:
    "radial-gradient(70% 55% at 88% 18%, rgba(120,196,170,.38), transparent 60%), radial-gradient(55% 45% at 12% 88%, rgba(15,110,86,.10), transparent 55%), radial-gradient(40% 35% at 70% 75%, rgba(180,220,205,.35), transparent 50%), linear-gradient(#F4FAF7 0%, #F7FAF8 45%, #F5F8F6 100%)",
} as const;

function dataUrl(publicPath: string) {
  const file = join(process.cwd(), "public", publicPath.replace(/^\//, ""));
  const bytes = readFileSync(file);
  const kind = file.endsWith(".png") ? "png" : "jpeg";
  return `data:image/${kind};base64,${bytes.toString("base64")}`;
}

export function projectShareAlt(project: Project, locale: Locale) {
  const share = project.meta?.share[locale];
  const name = project.slug === "techne" ? "Techne" : project.name[locale];
  if (!share) return `${name} — Genesis`;
  return locale === "el" ? `${name} — ${share}, από τη Genesis` : `${name} — ${share} by Genesis`;
}

export function siteOgImage(line1: string, line2: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          ...background,
        }}
      >
        <div style={{ fontSize: 84, fontWeight: 600, color: "#0F6E56", letterSpacing: -1 }}>Genesis.</div>
        <div style={{ fontSize: 54, fontWeight: 600, color: "#14181A", marginTop: 28, letterSpacing: -1 }}>{line1}</div>
        <div style={{ fontSize: 54, fontWeight: 600, color: "#0F6E56", letterSpacing: -1 }}>{line2}</div>
      </div>
    ),
    { ...ogSize, fonts },
  );
}

export function projectOgImage(project: Project, locale: Locale) {
  const share = project.meta?.share[locale];
  // Weddingflow's share image and copy are package 9.6. Until then, use the site card.
  if (!share) {
    return locale === "el"
      ? siteOgImage("Τρεις μηχανικοί. Ένα agency.", "Μιλάτε με αυτούς που χτίζουν.")
      : siteOgImage("Three engineers. One agency.", "You talk to the builders.");
  }

  const desktop = dataUrl(project.showcase.desktop[locale]);
  const mobile = dataUrl(project.showcase.mobile[locale]);
  const name = project.slug === "techne" ? "Techne" : project.name[locale];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "36px 40px 32px",
          ...background,
        }}
      >
        <div style={{ display: "flex", position: "relative", height: 390 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 760,
              height: 390,
              background: "#ffffff",
              borderRadius: 16,
              overflow: "hidden",
              border: "1px solid rgba(0,0,0,.08)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", height: 28, padding: "0 12px", gap: 6 }}>
              <div style={{ width: 8, height: 8, borderRadius: 8, background: "#C5CDC8" }} />
              <div style={{ width: 8, height: 8, borderRadius: 8, background: "#C5CDC8" }} />
              <div style={{ width: 8, height: 8, borderRadius: 8, background: "#C5CDC8" }} />
            </div>
            <img src={desktop} alt="" width={760} height={362} style={{ objectFit: "cover", objectPosition: "top" }} />
          </div>
          <div
            style={{
              display: "flex",
              position: "absolute",
              right: 24,
              top: 36,
              width: 168,
              height: 340,
              background: "#0E1413",
              borderRadius: 22,
              padding: 7,
            }}
          >
            <img
              src={mobile}
              alt=""
              width={154}
              height={326}
              style={{ objectFit: "cover", objectPosition: "top", borderRadius: 16 }}
            />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginTop: 22 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 40, fontWeight: 600, color: "#14181A" }}>{name}</div>
            <div style={{ fontSize: 22, color: "#0F6E56", marginTop: 4 }}>{share}</div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 64,
              height: 64,
              borderRadius: 16,
              background: "#0F6E56",
              color: "#ffffff",
              fontSize: 32,
              fontWeight: 600,
            }}
          >
            G.
          </div>
        </div>
      </div>
    ),
    { ...ogSize, fonts },
  );
}
