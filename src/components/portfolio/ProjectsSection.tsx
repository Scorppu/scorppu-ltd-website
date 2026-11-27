import Image from "next/image";
import { portfolio } from "@/data/portfolio";
import BrandLink, { BrandMark } from "@/components/BrandLink";
import Reveal from "@/components/Reveal";
import SectionHeading from "./SectionHeading";

export default function ProjectsSection() {
  const featured = portfolio.projects.find(
    (project) => project.featured && project.image && project.productURL,
  );
  const listed = portfolio.projects.filter((project) => !project.featured);

  return (
    <section id="projects" className="field-beige scroll-mt-36 border-b border-[var(--line)] md:scroll-mt-40">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Selected work"
            description="A few things I've built across systems, software, and this site."
          />
        </Reveal>

        {featured && featured.image && featured.productURL ? (
          <Reveal delay={1}>
            <div className="mt-10 md:mt-12">
              <p className="text-base tracking-[0.18em] text-[var(--accent)] uppercase md:text-lg">
                Featured project
              </p>
              <a
                href={featured.productURL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${featured.name} — open product page`}
                className="group relative mt-5 block aspect-[16/9] w-full overflow-hidden bg-[var(--ink-deep)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
              >
                {/* Scale a wrapper (not the Next Image / filter) so zoom eases cleanly. */}
                <div className="featured-project-still absolute inset-0">
                  <Image
                    src={featured.image}
                    alt={featured.imageAlt ?? `${featured.name} still`}
                    fill
                    sizes="(max-width: 768px) 100vw, 1152px"
                    className="object-cover object-top"
                  />
                </div>
                <div className="featured-project-veil absolute inset-0" />

                <div className="featured-project-copy absolute inset-0 flex flex-col items-center justify-center px-6 text-center md:px-12">
                  <span className="text-3xl font-medium tracking-tight text-white sm:text-4xl md:text-5xl">
                    {featured.name}
                  </span>
                  <p className="featured-project-desc mt-4 max-w-xl text-base leading-relaxed text-white/90 md:text-lg">
                    {featured.description}
                  </p>
                </div>
              </a>
            </div>
          </Reveal>
        ) : null}

        <div className="mt-14 flex flex-col gap-10 md:mt-16 md:gap-14">
          {listed.map((project, index) => {
            const meta = [project.year, project.status].filter(Boolean).join(" · ");

            return (
              <Reveal key={project.name} delay={(Math.min(index, 2) + 1) as 1 | 2 | 3}>
                <article className="border-t border-[var(--line)] pt-10">
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
