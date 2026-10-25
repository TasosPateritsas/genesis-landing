"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WorkGrid } from "@/components/work/WorkGrid";
import { WorkHero } from "@/components/work/WorkHero";

export function WorkPage() {
  return (
    <>
      <Header />
      <main>
        <WorkHero />
        <WorkGrid />
      </main>
      <Footer />
    </>
  );
}
