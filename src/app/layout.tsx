import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { headers } from "next/headers";
import { CursorFollower } from "@/components/CursorFollower";
import { SITE_URL } from "@/lib/routes";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin", "greek"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Genesis",
  authors: [{ name: "Genesis" }],
  creator: "Genesis",
};

export default async function RootLayout({ children }: LayoutProps<"/">) {
  const headerStore = await headers();
  const locale = headerStore.get("x-locale") === "el" ? "el" : "en";

  return (
    <html
      lang={locale}
      className={`${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full`}
    >
      <body className="min-h-full font-sans antialiased">
        {children}
        <CursorFollower />
      </body>
    </html>
  );
}
