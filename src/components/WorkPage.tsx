"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { WorkClosingCta } from "@/components/work/WorkClosingCta";
import { WorkHero } from "@/components/work/WorkHero";
import { WorkList } from "@/components/work/WorkList";

export function WorkPage() {
  return (
    <>
      <Header variant="dark" />
      <main id="main" className="work-page">
        <WorkHero />
        <WorkList kind="live" headingId="live-projects-heading" />
        <WorkList kind="upcoming" headingId="upcoming-projects-heading" />
        <WorkClosingCta tone="dark" />
      </main>
      <Footer variant="dark" />
    </>
  );
}
