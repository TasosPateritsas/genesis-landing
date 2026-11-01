"use client";

import { ContactHero } from "@/components/ContactHero";
import { ContactHowWeWork } from "@/components/ContactHowWeWork";
import { ContactReviews } from "@/components/ContactReviews";
import { ContactStats } from "@/components/ContactStats";
import { ContactWays } from "@/components/ContactWays";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export function ContactPage() {
  return (
    <>
      <Header variant="dark" />
      <main>
        <ContactHero />
        <ContactWays />
        <ContactHowWeWork />
        <ContactReviews />
        <ContactStats />
      </main>
      <Footer variant="dark" />
    </>
  );
}
