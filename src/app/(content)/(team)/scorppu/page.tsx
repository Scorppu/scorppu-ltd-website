import Image from "next/image";
import WorkExperience from "@/components/team/WorkExperience";
import {
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

export default function Scorppu() {
  return (
    <div className="pt-10">
      <div className="flex flex-col items-center px-8 flex-grow">
        <h1 className="text-6xl font-bold mb-7">Scorppu</h1>
      </div>

      <div className="flex flex-col md:flex-row items-center px-20 mb-8">
        <div className="w-40 h-40 min-w-[160px] rounded-full overflow-hidden md:mr-8">
          <Image
            src="/profilePics/scorppu.jpg"
            alt="team member thumbnail"
            width={160}
            height={160}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row items-center">
            <h2 className="text-4xl mb-1 md:mr-4">Eugene Chan</h2>
            <div className="flex space-x-4 mb-4 md:mb-0">
              <a
                href="https://www.linkedin.com/in/eugenechan111/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="https://github.com/Scorppu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://youtube.com/@scorppu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube size={22} />
              </a>
              <a
                href="https://twitter.com/scorppu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={22} />
              </a>
              <a
                href="https://instagram.com/eugenechan0_o"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={22} />
              </a>
            </div>
          </div>
          <p className="text-lg italic mb-2">Founder & CEO</p>
          <p>
            {" "}
            {
              "Final year Computer Engineering student in the Chinese University of Hong Kong."
            }{" "}
          </p>
          <p> {"Passionate weightlifter, Minecraft and CS player."} </p>
          <p>
            {" "}
            {
              "Currently working as a part-time software engineer at Efinix Inc."
            }{" "}
          </p>
        </div>
      </div>

      <div className="flex px-20 mb-8">
        <div className="w-full h-[1px] bg-stone-200" />
      </div>

      <div className="flex flex-col items-left px-20">
        <h2 className="text-2xl font-medium">{"Working Experience:"}</h2>
        <WorkExperience
          startDate={"Sep 2025"}
          endDate={"Present"}
          role={"Part-time Software Engineer at Efinix, Inc."}
          description={[
            "Continued cross-platform app development in Python and Flutter alongside core engineering team",
            "Collaborated closely with fellow engineers to design, review, and iterate on features, gaining exposure to productionlevel engineering practices and code standards",
          ]}
        />
        <WorkExperience
          startDate={"Jun 2025"}
          endDate={"Aug 2025"}
          role={"Software Engineer Intern at Efinix, Inc."}
          description={[
            "Developed cross-platform Windows/Linux desktop applications using Python and Flutter",
            " Independently designed and shipped major features that significantly improved end-user experience and workflow efficiency",
          ]}
        />
        <WorkExperience
          startDate={"May 2024"}
          endDate={"Jun 2024"}
          role={"Programming Intern at Media Explorer Limited"}
          description={[
            "Aided in updating e-Commerce solution using JSP and HTML",
            "Developed new features for clubhouse management system using SpringBoot",
          ]}
        />
      </div>
    </div>
  );
}
