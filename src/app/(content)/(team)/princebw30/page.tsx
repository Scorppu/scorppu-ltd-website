import teamData from "@/../public/team.json";
import type { TeamMember } from "@/types/team";
import ProfileHero from "@/components/team/profile/ProfileHero";
import ProfileWorkExperience from "@/components/team/profile/ProfileWorkExperience";
import ProfileProjects from "@/components/team/profile/ProfileProjects";
import ProfileHobbies from "@/components/team/profile/ProfileHobbies";
import ProfileDivider from "@/components/team/profile/ProfileDivider";

export default function Prince() {
  const member = teamData.members.find((m) => m.slug === "princebw30") as TeamMember;

  return (
    <div className="pt-10 pb-10">
      <ProfileHero member={member} />

      {member.workExperience.length > 0 && <><ProfileDivider /><ProfileWorkExperience entries={member.workExperience} /></>}
      {member.projects.length > 0 && <><ProfileDivider /><ProfileProjects projects={member.projects} /></>}
      {member.hobbies.length > 0 && <><ProfileDivider /><ProfileHobbies hobbies={member.hobbies} /></>}
    </div>
  );
}
