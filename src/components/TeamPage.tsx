"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { TeamCta } from "@/components/team/TeamCta";
import { TeamFaq } from "@/components/team/TeamFaq";
import { TeamHero } from "@/components/team/TeamHero";
import { TeamProfiles } from "@/components/team/TeamProfiles";
import { TeamPromises } from "@/components/team/TeamPromises";
import { TeamStory } from "@/components/team/TeamStory";
import { TeamVideo } from "@/components/team/TeamVideo";

export function TeamPage() {
  return (
    <>
      <Header />
      <main id="main">
        <TeamHero />
        <TeamProfiles />
        <TeamVideo />
        <TeamStory />
        <TeamPromises />
        <TeamFaq />
        <TeamCta />
      </main>
      <Footer variant="mint" />
    </>
  );
}
