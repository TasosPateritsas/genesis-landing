import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Team } from "@/components/Team";
import { WhatWeBuild } from "@/components/WhatWeBuild";
import { Work } from "@/components/Work";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatWeBuild />
        <Work />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
