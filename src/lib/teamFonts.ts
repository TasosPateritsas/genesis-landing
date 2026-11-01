import { Ubuntu, Ubuntu_Mono } from "next/font/google";

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-ubuntu",
  display: "swap",
});

const ubuntuMono = Ubuntu_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ubuntu-mono",
  display: "swap",
});

export const teamFonts = `${ubuntu.variable} ${ubuntuMono.variable}`;
