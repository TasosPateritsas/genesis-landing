import Image from "next/image";
import type { TeamMember } from "@/data/team";

export function TeamAvatar({
  member,
  size,
  fontSize,
  className = "",
}: {
  member: Pick<TeamMember, "initials" | "photo" | "avatarBg">;
  size: number;
  fontSize?: number;
  className?: string;
}) {
  return (
    <span
      className={`team-avatar ${className}`.trim()}
      style={{
        width: size,
        height: size,
        background: member.avatarBg,
        fontSize: fontSize ?? (size <= 36 ? 12 : 14),
      }}
    >
      {member.photo ? (
        <Image src={member.photo} alt="" fill sizes={`${size}px`} className="object-cover" />
      ) : (
        member.initials
      )}
    </span>
  );
}
