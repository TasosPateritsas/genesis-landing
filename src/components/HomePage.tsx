import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { StatsStrip } from "@/components/StatsStrip";
import { Team } from "@/components/Team";
import { WhatWeBuild } from "@/components/WhatWeBuild";
import { Work } from "@/components/Work";

export function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StatsStrip />
        <WhatWeBuild />
        <Work />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
