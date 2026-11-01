import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { headers } from "next/headers";
import type { CSSProperties } from "react";
import { CursorFollower } from "@/components/CursorFollower";
import { site } from "@/config/site";
import { SITE_URL } from "@/lib/routes";
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
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const headerStore = await headers();
  const locale = headerStore.get("x-locale") === "el" ? "el" : "en";

  return (
    <html lang={locale} className={`${inter.variable} h-full`} style={colorTokens}>
      <body className="min-h-full font-sans antialiased">
        {children}
        <CursorFollower />
      </body>
    </html>
  );
}
