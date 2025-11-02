import Image from "next/image";
import WorkExperience from "@/components/team/WorkExperience";
import { FaTwitter, FaYoutube, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Korbi() {
  return (
    <div>
      <div className="flex flex-col items-center px-8 flex-grow">
        <h1 className="text-6xl font-bold mb-7">Korbi</h1>
      </div>

      <div className="flex flex-col md:flex-row items-center px-20 mb-8">
        <div className="w-40 h-40 min-w-[160px] rounded-full overflow-hidden md:mr-8">
          <Image
            src="/profilePics/korbi.jpg"
            alt="profile thumbnail"
            width={160}
            height={160}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row items-center">
            <h2 className="text-4xl mb-1 md:mr-4">Eddie Wong</h2>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={22} />
              </a>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <FaGithub size={22} />
              </a>
              <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer">
                <FaYoutube size={22} />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                <FaTwitter size={22} />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                <FaInstagram size={22} />
              </a>
            </div>
          </div>
          <p className="text-lg italic mb-2">Civil Engineer</p>
          <p>Brief bio or description paragraph 1.</p>
          <p>Brief bio or description paragraph 2.</p>
          <p>Brief bio or description paragraph 3.</p>
        </div>
      </div>

      <div className="flex px-20 mb-8">
        <div className="w-full h-[1px] bg-stone-200" />
      </div>

      <div className="flex flex-col items-left px-20">
        <h2 className="text-2xl font-medium">
          {"Working Experience:"}
        </h2>
        <WorkExperience
          startDate={"Start Date"}
          endDate={"End Date"}
          role={"Role / Position"}
          description={"Description of responsibilities and achievements."}
        />
        <WorkExperience
          startDate={"Start Date"}
          endDate={"End Date"}
          role={"Role / Position"}
          description={"Description of responsibilities and achievements."}
        />
        <WorkExperience
          startDate={"Start Date"}
          endDate={"End Date"}
          role={"Role / Position"}
          description={"Description of responsibilities and achievements."}
        />
      </div>
    </div>
  );
}
