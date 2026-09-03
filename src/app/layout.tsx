import type { Metadata } from "next";
import { Figtree, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const title = "Genesis — We build your product, start to finish";
const description =
  "A 3-person Athens studio delivering apps, websites and eshops for startups and small businesses — no technical team required.";

export const metadata: Metadata = {
  metadataBase: new URL("https://genesis.studio"),
  title,
  description,
  applicationName: "Genesis",
  keywords: [
    "Athens tech agency",
    "startup development",
    "web apps",
    "eshop",
    "Next.js studio",
    "product development Greece",
  ],
  authors: [{ name: "Genesis" }],
  creator: "Genesis",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://genesis.studio",
    siteName: "Genesis",
    title,
    description,
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Genesis — Athens tech studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${syne.variable} ${figtree.variable} h-full`}>
      <body className="min-h-full font-sans antialiased">{children}</body>
    </html>
  );
}
