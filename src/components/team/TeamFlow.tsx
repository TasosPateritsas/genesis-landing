"use client";

import { projectFlowCopy, projectSteps } from "@/data/teamFlow";
import { teamMembers, type TeamMemberId } from "@/data/team";
import { useLocale } from "@/i18n/LocaleProvider";
import { TeamAvatar } from "@/components/team/TeamAvatar";

function memberById(id: TeamMemberId) {
  const member = teamMembers.find((item) => item.id === id);
  if (!member) throw new Error(`Unknown team member: ${id}`);
  return member;
}

export function TeamFlow() {
  const { locale } = useLocale();

  return (
    <section className="team-flow" aria-labelledby="team-flow-heading">
      <div className="section-pad container-narrow">
        <div className="team-flow-header">
          <p className="service-kicker">{projectFlowCopy.kicker[locale]}</p>
          <h2 id="team-flow-heading" className="team-flow-title">
            {projectFlowCopy.heading[locale]}
          </h2>
          <p className="team-flow-subtext">{projectFlowCopy.subtext[locale]}</p>
        </div>

        <div className="team-flow-grid">
          {projectSteps.map((step) => {
            const members = step.memberIds.map(memberById);
            const stacked = members.length > 1;
            const name =
              step.name?.[locale] ?? members.map((member) => member.shortName[locale]).join(", ");

            return (
              <article key={step.number} className="team-flow-card">
                <div className="team-flow-top">
                  <span className="team-flow-number">{step.number}</span>
                  <span className="team-flow-mark" aria-hidden>
                    {stacked ? "✓" : "→"}
                  </span>
                </div>
                <div className={stacked ? "team-flow-identity is-stack" : "team-flow-identity"}>
                  <div className="flex">
                    {members.map((member, index) => (
                      <TeamAvatar
                        key={member.id}
                        member={member}
                        size={36}
                        className={index > 0 ? "-ml-2.5" : ""}
                      />
                    ))}
                  </div>
                  <div>
                    <p className="team-flow-step">{step.title[locale]}</p>
                    <p className="team-flow-name">{name}</p>
                  </div>
                </div>
                <p className="team-flow-text">{step.text[locale]}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
