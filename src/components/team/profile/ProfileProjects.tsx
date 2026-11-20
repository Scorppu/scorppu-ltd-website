import { FaGithub } from "react-icons/fa";
import type { Project } from "@/types/team";

export default function ProfileProjects({ projects }: { projects: Project[] }) {
  if (projects.length === 0) return null;

  return (
    <div className="flex flex-col items-left px-6 md:px-20">
      <h2 className="text-2xl font-medium mb-6">{"Projects"}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {projects.map(({ name, description, githubURL }) => (
          <div
            key={name}
            className="bg-stone-50 dark:bg-stone-800 rounded-lg border border-stone-200 dark:border-stone-700 p-6 flex flex-col"
          >
            <h3 className="text-lg font-semibold mb-2">{name}</h3>
            <p className="text-sm text-stone-500 dark:text-stone-400 leading-relaxed flex-grow">
              {description}
            </p>
            {githubURL && (
              <a
                href={githubURL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center gap-2 text-sm font-medium text-stone-700 dark:text-stone-300 hover:text-stone-900 dark:hover:text-stone-100 transition-colors duration-200"
              >
                <FaGithub size={18} />
                View on GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
