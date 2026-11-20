import Image from "next/image";
import {
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import type { TeamMember } from "@/types/team";

const socialIcons = [
  { key: "linkedin" as const, icon: FaLinkedin },
  { key: "github" as const, icon: FaGithub },
  { key: "youtube" as const, icon: FaYoutube },
  { key: "twitter" as const, icon: FaTwitter },
  { key: "instagram" as const, icon: FaInstagram },
];

export default function ProfileHero({ member }: { member: TeamMember }) {
  return (
    <>
      {member.bannerURL ? (
        <div className="flex flex-col items-center px-6 md:px-8 flex-grow mb-8">
          <Image
            src={member.bannerURL}
            alt="Banner"
            width={1490}
            height={0}
            className="banner-image"
          />
        </div>
      ) : (
        <div className="flex flex-col items-center px-6 md:px-8 flex-grow">
          <h1 className="text-6xl font-bold mb-7">{member.handle}</h1>
        </div>
      )}

      <div className="flex flex-col md:flex-row items-center px-6 md:px-20 mb-8">
        <div className="w-40 h-40 min-w-[160px] rounded-full overflow-hidden md:mr-8">
          <Image
            src={member.imageURL}
            alt="team member thumbnail"
            width={160}
            height={160}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row items-center">
            <h2 className="text-4xl mb-1 md:mr-4">{member.name}</h2>
            <div className="flex space-x-4 mb-4 md:mb-0">
              {socialIcons
                .filter(({ key }) => !!member.socials[key])
                .map(({ key, icon: Icon }) => (
                  <a
                    key={key}
                    href={member.socials[key]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-stone-500"
                  >
                    <Icon size={22} />
                  </a>
                ))}
            </div>
          </div>
          <p className="text-lg italic mb-2">{member.role}</p>
          {member.bio && <p>{member.bio}</p>}
        </div>
      </div>
    </>
  );
}
