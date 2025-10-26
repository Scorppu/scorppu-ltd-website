import Link from "next/link";
import Image from "next/image";

type TeamMemberProps = {
  name: string;
  imageURL: string;
  url: string;
};

const softwareEngineers = [
  {
    name: "Brian (Prince) Wong",
    imageURL: "/profilePics/prince.jpg",
    url: "/team/princebw30",
  },
  {
    name: "Dawn (Edgeman) Chan",
    imageURL: "/profilePics/edgeman.jpg",
    url: "/team/edgeman475",
  },
];

const doctors = [
  {
    name: "Kevin (Chua) Chua",
    imageURL: "/profilePics/chua.jpg",
    url: "/team/chua",
  },
  {
    name: "Reyes (Ball) Lee",
    imageURL: "/profilePics/ball.jpg",
    url: "/team/ball",
  },
];

const civilEngineers = [
  {
    name: "Eddie (Korbi) Wong",
    imageURL: "/profilePics/korbi.jpg",
    url: "/team/korbi",
  },
];

const journalists = [
  {
    name: "Cindy (AresHunter) Lee",
    imageURL: "/profilePics/ares.jpg",
    url: "/team/areshunterqy",
  },
];

export function TeamMember({ name, imageURL, url }: TeamMemberProps) {
  return (
    <Link href={url} passHref className="flex flex-col items-center px-8 flex-grow hover:underline">
      <div className="w-40 h-40 rounded-full overflow-hidden">
        <Image
          src={imageURL}
          alt="team member thumbnail"
          width={100}
          height={100}
          style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
          priority
        />d
      </div>
      <h2 className="text-2xl mt-4">{name}</h2>
    </Link>
  );
}

export function SubTeam({ title, members }: { title: string; members: TeamMemberProps[] }) {
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


export default function Team() {
  return (
    <div className="flex flex-col items-center px-8 flex-grow">
      <h1 className="text-8xl font-bold mb-10">Meet our team</h1>

      <div className="mb-10 flex flex-col items-center">
        <h2 className="text-2xl font-bold mb-6"> {"Founder & CEO"} </h2>
        <TeamMember
          name="Eugene (Scorppu) Chan"
          imageURL="/profilePics/scorppu.jpg"
          url="/team/scorppu"
        />
      </div>
      <SubTeam title="Software Engineers" members={softwareEngineers} />
      <SubTeam title="Civil Engineers" members={civilEngineers} />
      <SubTeam title="Doctors" members={doctors} />
      <SubTeam title="Journalists" members={journalists} />
    </div>
  );
}