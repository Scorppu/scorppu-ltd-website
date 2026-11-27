import Image from "next/image";
import { portfolio } from "@/data/portfolio";
import BrandLink, { BrandMark } from "@/components/BrandLink";
import Reveal from "@/components/Reveal";
import SectionHeading from "./SectionHeading";

export default function ProjectsSection() {
  return (
    <section className="field-beige border-b border-[var(--line)]">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Selected work"
            description="A few things I've built across systems, software, and this site."
          />
        </Reveal>

        <div className="flex flex-col gap-14 md:gap-20">
          {portfolio.projects.map((project, index) => {
            const meta = [project.year, project.status].filter(Boolean).join(" · ");
            const featured = Boolean(project.image);

            return (
              <Reveal key={project.name} delay={(Math.min(index, 2) + 1) as 1 | 2 | 3}>
                <article
                  className={
                    featured
                      ? "border-t border-[var(--line)] pt-12 first:border-t-0 first:pt-0"
                      : "border-t border-[var(--line)] pt-10 first:border-t-0 first:pt-0"
                  }
                >
                  {featured && project.image ? (
                    <div className="relative mb-8 aspect-[16/9] w-full overflow-hidden bg-[var(--elevated)] md:mb-10">
                      <Image
                        src={project.image}
                        alt={project.imageAlt ?? `${project.name} still`}
                        fill
                        sizes="(max-width: 768px) 100vw, 1152px"
                        className="object-cover object-top transition-transform duration-700 ease-out hover:scale-[1.015]"
                      />
                    </div>
                  ) : null}

                  <div
                    className={
                      featured
                        ? "grid gap-6 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:items-end md:gap-12"
                        : undefined
                    }
                  >
                    <div>
                      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                        <h3
                          className={
                            featured
                              ? "text-2xl font-medium text-[var(--foreground)] md:text-3xl"
                              : "text-xl font-medium text-[var(--foreground)] md:text-2xl"
                          }
                        >
                          {project.name}
                        </h3>
                        {meta ? (
                          <span className="text-base text-[var(--accent)] md:text-lg">
                            {meta}
                          </span>
                        ) : null}
                      </div>
                      <p
                        className={
                          featured
                            ? "mt-4 max-w-2xl text-base leading-relaxed text-[var(--muted)] md:text-lg"
                            : "mt-4 max-w-3xl text-base leading-relaxed text-[var(--muted)] md:text-lg"
                        }
                      >
                        {project.description}
                      </p>
                    </div>

                    <div
                      className={`flex flex-wrap gap-x-6 gap-y-2 text-base md:text-lg ${
                        featured ? "mt-5 md:mt-0 md:justify-end" : "mt-5"
                      }`}
                    >
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
