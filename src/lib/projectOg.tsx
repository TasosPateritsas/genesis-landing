import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import type { Locale } from "@/data/content";
import type { Project } from "@/data/projects";
import { ogContentType, ogSize } from "@/lib/ogCard";

export { ogContentType, ogSize };

export function shareLine(metaTitle: string) {
  const detail = metaTitle.split(": ").slice(1).join(": ");
  if (!detail) return metaTitle;
  const [lead, ...rest] = detail.split(", ");
  const sentence = `${lead.charAt(0)}${lead.slice(1).toLowerCase()}`;
  return [sentence, ...rest].join(", ");
}

export function projectOgAlt(project: Project, locale: Locale) {
  const line = shareLine(project.metaTitle[locale]);
  return locale === "el"
    ? `${project.name.el} — ${line}, από τη Genesis`
    : `${project.name.en} — ${line} by Genesis`;
}

async function imageSrc(publicPath: string) {
  const file = path.join(process.cwd(), "public", publicPath.replace(/^\//, ""));
  const data = await readFile(file);
  const ext = path.extname(file).toLowerCase();
  const mime = ext === ".png" ? "image/png" : "image/jpeg";
  return `data:${mime};base64,${data.toString("base64")}`;
}

export async function renderProjectOg(project: Project, locale: Locale) {
  const font = await readFile(path.join(process.cwd(), "src/fonts/Inter-SemiBold.ttf"));
  const desktop = await imageSrc(project.showcase.desktop[locale]);
  const mobile = await imageSrc(project.showcase.mobile[locale]);
  const line = shareLine(project.metaTitle[locale]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#F4FAF7",
          backgroundImage:
            "linear-gradient(135deg, rgba(120,196,170,0.55) 0%, rgba(244,250,247,0) 42%), linear-gradient(315deg, rgba(15,110,86,0.14) 0%, rgba(244,250,247,0) 46%)",
          padding: "36px 48px 32px",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", height: 430 }}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: 860,
              height: 400,
              backgroundColor: "#ffffff",
              borderRadius: 18,
              overflow: "hidden",
              border: "1px solid rgba(0,0,0,0.08)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: 34,
                backgroundColor: "#F2F5F4",
                paddingLeft: 14,
              }}
            >
              <div style={{ width: 10, height: 10, borderRadius: 10, backgroundColor: "#C5CDC8", marginRight: 6 }} />
              <div style={{ width: 10, height: 10, borderRadius: 10, backgroundColor: "#C5CDC8", marginRight: 6 }} />
              <div style={{ width: 10, height: 10, borderRadius: 10, backgroundColor: "#C5CDC8" }} />
            </div>
            <img src={desktop} width={860} height={366} style={{ objectFit: "cover", objectPosition: "top" }} />
          </div>
          <div
            style={{
              display: "flex",
              width: 196,
              height: 390,
              marginLeft: -70,
              marginTop: 28,
              backgroundColor: "#0E1413",
              borderRadius: 28,
              padding: 7,
            }}
          >
            <img
              src={mobile}
              width={182}
              height={376}
              style={{ objectFit: "cover", objectPosition: "top", borderRadius: 22 }}
            />
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginTop: 8 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 42, color: "#14181A", letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              {project.name[locale]}
            </div>
            <div style={{ display: "flex", marginTop: 8, fontSize: 24, color: "#0F6E56", lineHeight: 1.2 }}>
              {line}
            </div>
          </div>
          <div style={{ display: "flex", fontSize: 40, color: "#0F6E56", letterSpacing: "-0.04em" }}>G.</div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [{ name: "Inter", data: font, style: "normal", weight: 600 }],
    },
  );
}
