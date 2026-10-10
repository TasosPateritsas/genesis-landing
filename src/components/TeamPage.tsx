"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { TeamAvatar } from "@/components/team/TeamAvatar";
import { TeamVideo } from "@/components/team/TeamVideo";
import { useLocale } from "@/i18n/LocaleProvider";
import { teamMembers } from "@/data/team";

export function TeamPage() {
  const { t } = useLocale();
  const page = t.teamPage;

  return (
    <>
      <Header />
      <main>
        <section className="team-hero" aria-labelledby="team-hero-heading">
          <div className="team-hero-inner container-narrow pt-16 md:pt-[4.25rem]">
            <div className="pt-8 md:pt-10">
              <p className="services-breadcrumb">{page.breadcrumb}</p>
              <h1 id="team-hero-heading" className="team-hero-title">
                {page.titleLead}
                <span className="text-[#0F6E56]">{page.titleAccent}</span>
              </h1>
              <p className="team-hero-subtext">{page.subtext}</p>
              <div className="team-hero-people">
                <div className="flex">
                  {teamMembers.map((member, index) => (
                    <TeamAvatar
                      key={member.id}
                      member={member}
                      size={44}
                      fontSize={14}
                      className={index > 0 ? "-ml-2.5" : ""}
                    />
                  ))}
                </div>
                <p>{page.people}</p>
              </div>
            </div>
          </div>
        </section>
        <TeamVideo />
      </main>
      <Footer />
    </>
  );
}
