import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import type { CSSProperties } from "react";
import { CursorFollower } from "@/components/CursorFollower";
import { ScrollReset } from "@/components/ScrollReset";
import { site } from "@/config/site";
import { SITE_URL } from "@/lib/routes";
import { indexingRobots } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "greek"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const colorTokens = {
  "--g-dark": site.colors.dark,
  "--g-brand": site.colors.brand,
  "--g-mint": site.colors.mint,
  "--g-light": site.colors.light,
} as CSSProperties;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Genesis",
    template: "%s | Genesis",
  },
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  robots: indexingRobots(),
};

function structuredData(isHome: boolean) {
  const organization = {
    "@type": "ProfessionalService",
    name: site.name,
    url: SITE_URL,
    description: "Software agency in Athens building websites, eshops, apps, AI agents and AI workflows.",
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Athens",
      addressCountry: "GR",
    },
    areaServed: "Worldwide",
    knowsAbout: ["Web development", "Eshops", "App development", "AI agents", "AI workflows"],
    founder: site.founders.map((name) => ({ "@type": "Person", name })),
  };
  const graph = isHome
    ? [{ "@type": "WebSite", name: "Genesis", url: SITE_URL }, organization]
    : [organization];
  return { "@context": "https://schema.org", "@graph": graph };
}

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const headerStore = await headers();
  const locale = headerStore.get("x-locale") === "el" ? "el" : "en";
  const pathname = headerStore.get("x-pathname") ?? "/";
  const isHome = pathname === "/" || pathname === "/el";

  return (
    <html lang={locale} className={`${inter.variable} h-full`} style={colorTokens} data-scroll-behavior="smooth">
      <body className="min-h-full font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData(isHome)) }}
        />
        {children}
        <ScrollReset />
        <CursorFollower />
      </body>
    </html>
  );
}
