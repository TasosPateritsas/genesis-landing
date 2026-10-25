"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WorkClosingCta } from "@/components/work/WorkClosingCta";
import { WorkComingSoon } from "@/components/work/WorkComingSoon";
import { WorkGrid } from "@/components/work/WorkGrid";
import { WorkHero } from "@/components/work/WorkHero";

export function WorkPage() {
  return (
    <>
      <Header />
      <main>
        <WorkHero />
        <WorkGrid />
        <WorkComingSoon />
        <WorkClosingCta />
      </main>
      <Footer />
    </>
  );
}
