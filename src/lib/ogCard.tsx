import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import type { Locale } from "@/data/content";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const lines: Record<Locale, [string, string]> = {
  en: ["Three engineers. One agency.", "You talk to the builders."],
  el: ["Τρεις μηχανικοί. Ένα agency.", "Μιλάτε με αυτούς που χτίζουν."],
};

export function ogAlt(locale: Locale) {
  return locale === "el"
    ? "Genesis — Κατασκευή ιστοσελίδων, εφαρμογών και AI στην Αθήνα"
    : "Genesis — Software agency in Athens";
}

export async function renderOgImage(locale: Locale) {
  const font = await readFile(path.join(process.cwd(), "src/fonts/Inter-SemiBold.ttf"));
  const [line1, line2] = lines[locale];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#F4FAF7",
          backgroundImage:
            "linear-gradient(135deg, rgba(120,196,170,0.55) 0%, rgba(244,250,247,0) 42%), linear-gradient(315deg, rgba(15,110,86,0.14) 0%, rgba(244,250,247,0) 46%)",
          padding: "84px",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 84,
            color: "#0F6E56",
            letterSpacing: "-0.04em",
            lineHeight: 1,
          }}
        >
          Genesis.
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 40,
            fontSize: 52,
            color: "#14181A",
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
          }}
        >
          {line1}
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 52,
            color: "#0F6E56",
            letterSpacing: "-0.03em",
            lineHeight: 1.15,
          }}
        >
          {line2}
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [{ name: "Inter", data: font, style: "normal", weight: 600 }],
    },
  );
}
