"use client";

import TeamMemberCard from "@/components/team/TeamMemberCard";

const members = [
  {
    name: "Eugene (Scorppu) Chan",
    imageURL: "/profilePics/scorppu.jpg",
    url: "/scorppu",
    role: "Founder & CEO",
    description:
      "Computer Engineer with hands-on experience in full-stack development, systems programming, and GPU acceleration.",
    linkedinURL: "https://www.linkedin.com/in/eugenechan111/",
    githubURL: "https://github.com/Scorppu",
    youtubeURL: "https://youtube.com/@scorppu",
    twitterURL: "https://twitter.com/scorppu",
    instagramURL: "https://instagram.com/eugenechan0_o",
  },
  {
    name: "Brian (Prince) Wong",
    imageURL: "/profilePics/prince.jpg",
    url: "/princebw30",
    role: "Software Engineer",
    descripton: "Graphics Engineering Expert",
    githubURL: "https://github.com/Princebw225"
  },
  {
    name: "Dawn (Edgeman) Chan",
    imageURL: "/profilePics/edgeman.jpg",
    url: "/edgeman475",
    role: "Software Engineer",
    description:
      "Computer Engineer with strong background in both software and hardware applications",
    githubURL: "https://github.com/din-dawn"
  },
  {
    name: "Eddie (Korbi) Wong",
    imageURL: "/profilePics/korbi.jpg",
    url: "/korbi",
    role: "Civil Engineer",
    githubURL: "https://github.com/korbiwong"
  },
  // {
  //   name: "Kevin (Chua) Chua",
  //   imageURL: "/profilePics/chua.jpg",
  //   // url: "/chua",
  // },
  // {
  //   name: "Reyes (Ball) Lee",
  //   imageURL: "/profilePics/ball.jpg",
  //   // url: "/ball",
  // },
  // {
  //   name: "Cindy Lee",
  //   imageURL: "/profilePics/cindy.jpg",
  //   url: "/cindylee",
  //   role: "Journalist",
  //   description: "Passionate writer",
  // },
];

export default function Team() {
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
              <TeamMemberCard key={member.imageURL} {...member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
