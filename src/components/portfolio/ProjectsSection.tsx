import Image from "next/image";
import { portfolio } from "@/data/portfolio";
import BrandLink, { BrandMark } from "@/components/BrandLink";
import Reveal from "@/components/Reveal";
import SectionHeading from "./SectionHeading";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="field-beige scroll-mt-36 border-b border-[var(--line)] md:scroll-mt-40"
    >
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
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                    {project.logo ? (
                      <Image
                        src={project.logo}
                        alt={project.logoAlt ?? `${project.name} logo`}
                        width={36}
                        height={36}
                        className="size-8 shrink-0 md:size-9"
                      />
                    ) : null}
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
                        <BrandMark
                          site="product"
                          className="text-[var(--muted)]"
                        >
                          Product page ·{" "}
                          <code className="text-[var(--accent)]">
                            {project.productURL}
                          </code>{" "}
                          <span className="text-[var(--accent)]">(swap when public)</span>
                        </BrandMark>
                      ) : (
                        <BrandLink
                          href={project.productURL}
                          site="product"
                          className="text-[var(--muted)]"
                        >
                          Visit product
                        </BrandLink>
                      )
                    ) : null}
                    {project.githubURL ? (
                      <BrandLink
                        href={project.githubURL}
                        site="github"
                        className="text-[var(--muted)]"
                      >
                        View on GitHub
                      </BrandLink>
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
