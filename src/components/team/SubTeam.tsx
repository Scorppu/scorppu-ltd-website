import TeamMember from "./TeamMember";

type TeamMemberProps = {
  name: string;
  imageURL: string;
  url: string;
  role?: string;
};

export default function SubTeam({ title, members }: { title: string; members: TeamMemberProps[] }) {
  return (
    <div className="mb-14">
      <h2 className="text-xs font-semibold tracking-widest text-stone-400 uppercase mb-6">{title}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {members.map((member) => (
          <TeamMember
            key={member.name}
            name={member.name}
            imageURL={member.imageURL}
            url={member.url}
            role={member.role}
          />
        ))}
      </div>
    </div>
  );
}
