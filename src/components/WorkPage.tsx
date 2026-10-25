"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WorkHero } from "@/components/work/WorkHero";

export function WorkPage() {
  return (
    <>
      <Header />
      <main>
        <WorkHero />
      </main>
      <Footer />
    </>
  );
}
