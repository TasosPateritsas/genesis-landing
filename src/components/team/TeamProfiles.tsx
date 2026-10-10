"use client";

import Image from "next/image";
import { useState, type PointerEvent } from "react";
import { teamWhoCopy } from "@/data/teamWho";
import { socialLabel, teamMembers, type TeamMember } from "@/data/team";
import { useLocale } from "@/i18n/LocaleProvider";

function GitHubIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.477 2 2 6.586 2 12.253c0 4.53 2.865 8.37 6.839 9.723.5.094.683-.222.683-.492 0-.243-.01-1.048-.014-1.9-2.782.618-3.369-1.366-3.369-1.366-.454-1.18-1.11-1.494-1.11-1.494-.908-.636.069-.623.069-.623 1.004.072 1.532 1.055 1.532 1.055.892 1.566 2.341 1.114 2.91.852.091-.662.35-1.114.636-1.37-2.22-.258-4.555-1.138-4.555-5.066 0-1.119.39-2.034 1.029-2.751-.103-.259-.446-1.3.098-2.71 0 0 .84-.275 2.75 1.05A9.35 9.35 0 0 1 12 7.14a9.35 9.35 0 0 1 2.504.345c1.909-1.325 2.748-1.05 2.748-1.05.546 1.41.203 2.451.1 2.71.64.717 1.028 1.632 1.028 2.751 0 3.939-2.339 4.805-4.566 5.058.359.317.679.943.679 1.902 0 1.372-.012 2.477-.012 2.814 0 .273.18.59.688.49A10.27 10.27 0 0 0 22 12.253C22 6.586 17.523 2 12 2Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zm7.5 0h3.84v1.98h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.14V23h-4v-6.63c0-1.58-.03-3.61-2.2-3.61-2.2 0-2.54 1.72-2.54 3.5V23h-4V8.5z" />
    </svg>
  );
}

function canHoverSwap(event: PointerEvent<HTMLDivElement>) {
  if (event.pointerType !== "mouse") return false;
  return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
}

function ProfilePhoto({ member, caption }: { member: TeamMember; caption: string }) {
  const [casual, setCasual] = useState(false);
  const canSwap = Boolean(member.photo && member.photoCasual);

  return (
    <div
      className="team-profile-photo"
      onPointerEnter={(event) => {
        if (canSwap && canHoverSwap(event)) setCasual(true);
      }}
      onPointerLeave={() => setCasual(false)}
    >
      {member.photo ? (
        <>
          <Image
            src={member.photo}
            alt={member.name}
            fill
            sizes="380px"
            className="team-profile-shot object-cover"
          />
          {member.photoCasual ? (
            <Image
              src={member.photoCasual}
              alt=""
              fill
              sizes="380px"
              className={`team-profile-shot team-profile-shot-casual object-cover${casual ? " is-on" : ""}`}
            />
          ) : null}
        </>
      ) : (
        <>
          <span className="team-profile-initials">{member.initials}</span>
          <span className="team-home-photo-caption">{caption}</span>
        </>
      )}
    </div>
  );
}

export function TeamProfiles() {
  const { locale, t } = useLocale();

  return (
    <section className="team-who" aria-labelledby="team-who-heading">
      <div className="section-pad container-narrow">
        <div className="team-who-header">
          <h2 id="team-who-heading" className="team-who-title">
            {teamWhoCopy.titleLead[locale]}
            <span className="team-who-accent">{teamWhoCopy.titleAccent[locale]}</span>
          </h2>
          <p className="team-who-subtext">{teamWhoCopy.subtext[locale]}</p>
        </div>

        <div className="team-who-list">
          {teamMembers.map((member, index) => (
            <article
              key={member.id}
              className={index % 2 === 1 ? "team-profile is-reverse" : "team-profile"}
            >
              <ProfilePhoto member={member} caption={t.team.photoSoon} />
              <div>
                <p className="team-profile-role">{member.role}</p>
                <h3 className="team-profile-name">{member.name}</h3>
                <p className="team-profile-education">{member.education[locale]}</p>
                <p className="team-profile-bio">{member.bio[locale]}</p>
                <p className="team-profile-on">{teamWhoCopy.onProject[locale]}</p>
                <ul className="team-profile-bullets">
                  {member.onProject[locale].map((item) => (
                    <li key={item}>
                      <span className="team-profile-arrow" aria-hidden>
                        →
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="team-profile-ask">
                  <strong>{teamWhoCopy.ask[locale]} </strong>
                  {member.askAbout[locale]}
                </p>
                <ul className="team-profile-chips">
                  {member.chips[locale].map((chip) => (
                    <li key={chip} className="team-chip">
                      {chip}
                    </li>
                  ))}
                </ul>
                <div className="team-profile-socials">
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-social"
                    aria-label={socialLabel(member.name, "GitHub", locale)}
                  >
                    <GitHubIcon />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-social"
                    aria-label={socialLabel(member.name, "LinkedIn", locale)}
                  >
                    <LinkedInIcon />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
