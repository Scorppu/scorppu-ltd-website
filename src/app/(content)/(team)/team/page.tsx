import { getCloudflareContext } from '@opennextjs/cloudflare';
import { getAllMembers } from '@/lib/db';
import TeamMemberCard from '@/components/team/TeamMemberCard';

export default async function Team() {
  const { env } = await getCloudflareContext({ async: true });
  const members = await getAllMembers(env.DB);

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      {/* Hero banner */}
      <div className="w-full bg-stone-900 text-white py-20 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-wide mb-4">
            Meet the Team
          </h1>
          <p className="text-stone-300 text-lg md:text-xl font-light">
            The people behind Scorppu Ltd
          </p>
        </div>
      </div>

      {/* Intro blurb */}
      <div className="py-10 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-stone-600 leading-relaxed">
            A small group of builders, engineers, and creators who share a passion
            for making things — from software to Minecraft structures.
          </p>
        </div>
      </div>

      {/* Cards */}
      <div className="px-4 md:px-8 pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6">
            {members.map((member) => (
              <TeamMemberCard
                key={member.slug}
                name={member.name}
                imageURL={member.imageURL}
                url={`/${member.slug}`}
                role={member.role}
                description={member.shortBio}
                linkedinURL={member.socials.linkedin}
                githubURL={member.socials.github}
                youtubeURL={member.socials.youtube}
                twitterURL={member.socials.twitter}
                instagramURL={member.socials.instagram}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
