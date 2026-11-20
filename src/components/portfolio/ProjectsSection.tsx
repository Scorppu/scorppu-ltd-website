import { portfolio } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import SectionHeading from "./SectionHeading";

export default function ProjectsSection() {
  return (
    <section className="border-b border-[var(--line)]">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Selected work"
            description="A few things I've built across systems, software, and this site."
          />
        </Reveal>

        <div className="flex flex-col gap-10 md:gap-14">
          {portfolio.projects.map((project, index) => {
            const meta = [project.year, project.status].filter(Boolean).join(" · ");

            return (
              <Reveal key={project.name} delay={(Math.min(index, 2) + 1) as 1 | 2 | 3}>
                <article className="border-t border-[var(--line)] pt-10 first:border-t-0 first:pt-0">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-xl font-medium text-[var(--foreground)] md:text-2xl">
                      {project.name}
                    </h3>
                    {meta ? (
                      <span className="text-base text-[var(--accent)] md:text-lg">
                        {meta}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-4 max-w-3xl text-base leading-relaxed text-[var(--muted)] md:text-lg">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-base md:text-lg">
                    {project.productURL ? (
                      project.productURLIsPlaceholder ? (
                        <span className="text-[var(--muted)]">
                          Product page ·{" "}
                          <code className="text-[var(--accent)]">
                            {project.productURL}
                          </code>{" "}
                          <span className="text-[var(--accent)]">(swap when public)</span>
                        </span>
                      ) : (
                        <a
                          href={project.productURL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-underline text-[var(--muted)]"
                        >
                          Visit product
                        </a>
                      )
                    ) : null}
                    {project.githubURL ? (
                      <a
                        href={project.githubURL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-underline text-[var(--muted)]"
                      >
                        View on GitHub
                      </a>
                    ) : null}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
