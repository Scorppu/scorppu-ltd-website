import TeamMember from "./TeamMember";

type TeamMemberProps = {
  name: string;
  imageURL: string;
  url: string;
};

export default function SubTeam({ title, members }: { title: string; members: TeamMemberProps[] }) {
  return (
    <div className="mb-10 flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-6"> {title} </h2>
      <div className="flex flex-row space-x-8">
        {members.map((member) => (
          <TeamMember
            key={member.name} // Use a unique key, e.g., member id or name
            name={member.name}
            imageURL={member.imageURL}
            url={member.url}
          />
        ))}
      </div>
    </div>
  );
}
