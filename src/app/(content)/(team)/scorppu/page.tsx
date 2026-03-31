import { getCloudflareContext } from '@opennextjs/cloudflare';
import { getMember } from '@/lib/db';
import ProfileHero from '@/components/team/profile/ProfileHero';
import ProfileWorkExperience from '@/components/team/profile/ProfileWorkExperience';
import ProfileProjects from '@/components/team/profile/ProfileProjects';
import ProfileHobbies from '@/components/team/profile/ProfileHobbies';
import ProfileCVDownload from '@/components/team/profile/ProfileCVDownload';
import ProfileDivider from '@/components/team/profile/ProfileDivider';
import { notFound } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function Scorppu() {
  const { env } = await getCloudflareContext({ async: true });
  const member = await getMember(env.DB, 'scorppu');
  if (!member) notFound();

  return (
    <div className="pt-10 pb-10">
      <ProfileHero member={member} />

      {member.workExperience.length > 0 && <><ProfileDivider /><ProfileWorkExperience entries={member.workExperience} /></>}
      {member.projects.length > 0 && <><ProfileDivider /><ProfileProjects projects={member.projects} /></>}
      {member.hobbies.length > 0 && <><ProfileDivider /><ProfileHobbies hobbies={member.hobbies} /></>}
      {member.cvURL && member.cvFilename && <><ProfileDivider /><ProfileCVDownload cvURL={member.cvURL} cvFilename={member.cvFilename} /></>}
    </div>
  );
}
