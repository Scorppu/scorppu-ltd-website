import TeamMember from "@/components/team/TeamMember";
import SubTeam from "@/components/team/SubTeam";

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
      <SubTeam title="Doctors (NO PAGES YET)" members={doctors} />
      <SubTeam title="Journalists" members={journalists} />
    </div>
  );
}