import Image from "next/image";
import WorkExperience from "@/components/team/WorkExperience";
import {
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { YouTubeEmbed } from "@next/third-parties/google";
import Link from "next/link";

export default function Scorppu() {
  return (
    <div className="pt-10 pb-10">
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
                className="hover:text-stone-500"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="https://github.com/Scorppu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-stone-500"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://youtube.com/@scorppu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-stone-500"
              >
                <FaYoutube size={22} />
              </a>
              <a
                href="https://twitter.com/scorppu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-stone-500"
              >
                <FaTwitter size={22} />
              </a>
              <a
                href="https://instagram.com/eugenechan0_o"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-stone-500"
              >
                <FaInstagram size={22} />
              </a>
            </div>
          </div>
          <p className="text-lg italic mb-2">Founder & CEO</p>
          <p>
            {
              "Final-year Computer Engineering student at CUHK and part-time Software Engineer at Efinix, building cross-platform apps with Python and Flutter. Passionate about systems programming, GPU acceleration, and — when away from the keyboard — lifting weights and gaming on Minecraft and CS."
            }
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

      <div className="flex px-20 mb-8">
        <div className="w-full h-[1px] bg-stone-200" />
      </div>

      <div className="flex flex-col items-left px-20">
        <h2 className="text-2xl font-medium mb-6">{"Projects"}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {[
            {
              name: "GPU Accelerated FX/FXCH (ongoing)",
              description: "Optimized the FXCH module in ABC (UC Berkeley's sequential synthesis & verification system) by parallelizing subcube comparisons using CUDA, achieving significant performance gains on medium-to-large logic designs.",
              githubURL: null,
            },
            {
              name: "BlackEye Valkyrie System (2025)",
              description: "Architected a lightweight web-based Clinical Management System for hospital management in remote areas, built with Spring Boot, MongoDB, Java, and JavaScript.",
              githubURL: "https://github.com/Scorppu/BlackEyeValkyrieSystem_ScorppuLtd",
            },
            {
              name: "Motion Controlled Laser Turret (2024)",
              description: "Engineered a gyroscope-operated laser turret on the Tiva C Launchpad with wireless controller-turret communication over Bluetooth via UART, programmed entirely in C.",
              githubURL: "https://github.com/Scorppu/Motion_Controlled_Laser_Turret",
            },
            {
              name: "Scorppu LTD Website",
              description: "This website!",
              githubURL: "https://github.com/Scorppu/scorppu-ltd-website"
            }
          ].map(({ name, description, githubURL }) => (
            <div key={name} className="bg-stone-50 rounded-lg border border-stone-200 p-6 flex flex-col">
              <h3 className="text-lg font-semibold mb-2">{name}</h3>
              <p className="text-sm text-stone-500 leading-relaxed flex-grow">{description}</p>
              {githubURL && (
                <a
                  href={githubURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 flex items-center gap-2 text-sm font-medium text-stone-700 hover:text-stone-900 transition-colors duration-200"
                >
                  <FaGithub size={18} />
                  View on GitHub
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex px-20 mb-8">
        <div className="w-full h-[1px] bg-stone-200" />
      </div>

      <div className="flex flex-col items-center px-20">
        <h2 className="text-2xl font-medium mb-6 self-start">{"Interests And Hobbies"}</h2>

        <div className="bg-stone-50 rounded-lg border border-stone-200 overflow-hidden mb-6 w-full max-w-3xl">
          <div className="px-6 pt-6 pb-4">
            <h3 className="text-lg font-semibold mb-1">Counter-Strike</h3>
            <p className="text-sm text-stone-500">
              Competing and grinding ranked matches — one of the games that sharpened my strategic thinking and reaction time.
            </p>
          </div>
          <div className="px-6 pb-6">
            <YouTubeEmbed
              videoid="pxiPG_ZMFuY"
              width={720}
              height={405}
              params="controls=1&start=0"
            />
          </div>
        </div>

        <div className="bg-stone-50 rounded-lg border border-stone-200 overflow-hidden mb-6 w-full max-w-3xl">
          <div className="px-6 pt-6 pb-4">
            <h3 className="text-lg font-semibold mb-1">Minecraft</h3>
            <p className="text-sm text-stone-500">
              Building ambitious structures and running a private server with friends — creativity without limits.
            </p>
          </div>
          <div className="px-6 pb-6">
            <YouTubeEmbed
              videoid="c8gX7ucFitk"
              width={720}
              height={405}
              params="controls=1&start=0"
            />
          </div>
        </div>
      </div>

      <div className="flex px-20 mb-8">
        <div className="w-full h-[1px] bg-stone-200" />
      </div>

      <div className="flex flex-col items-center flex-grow">
        <Link
          href="/cvs/ChanEugeneCV.pdf"
          download="ChanEugeneCV"
          className="px-8 py-3 border-2 border-stone-600 text-stone-600 hover:bg-stone-600 hover:text-white transition-colors duration-300 inline-block"
        >
          Download My CV Here
        </Link>
      </div>
    </div>
  );
}
