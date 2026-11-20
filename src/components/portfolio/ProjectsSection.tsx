import { portfolio } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function ProjectsSection() {
  return (
    <section className="border-b border-stone-200 dark:border-stone-800">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="A few things I've built across systems, software, and this site."
        />

        <div className="divide-y divide-stone-200 dark:divide-stone-800">
          {portfolio.projects.map((project) => {
            const meta = [project.year, project.status].filter(Boolean).join(" · ");

            return (
              <article key={project.name} className="py-8 first:pt-0 last:pb-0">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-lg font-medium text-stone-900 dark:text-stone-100">
                    {project.name}
                  </h3>
                  {meta ? (
                    <span className="text-sm text-stone-400 dark:text-stone-500">
                      {meta}
                    </span>
                  ) : null}
                </div>
                <p className="mt-3 max-w-3xl text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                  {project.description}
                </p>
                {project.githubURL ? (
                  <a
                    href={project.githubURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-block text-sm text-stone-500 transition-opacity hover:opacity-70 dark:text-stone-400"
                  >
                    View on GitHub
                  </a>
                ) : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
