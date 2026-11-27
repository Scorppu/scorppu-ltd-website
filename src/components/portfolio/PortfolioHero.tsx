import { portfolio } from "@/data/portfolio";
import BrandLink from "@/components/BrandLink";
import PhotoFrame from "@/components/PhotoFrame";
import Reveal from "@/components/Reveal";

export default function PortfolioHero() {
  const portrait =
    portfolio.photos.find((photo) => photo.id === "portrait") ??
    ({
      id: "portrait",
      label: "Portrait",
      alt: `Portrait of ${portfolio.name}`,
      src: portfolio.portraitURL,
      aspect: "4/5" as const,
    });

  return (
    <section id="about" className="section-anchor border-b border-[var(--line)]">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-16 pt-28 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:items-end md:gap-12 md:px-8 md:pb-24 md:pt-36">
        <Reveal>
          <div>
            <p className="text-base tracking-[0.18em] text-[var(--accent)] uppercase md:text-lg">
              {portfolio.handle} · {portfolio.location}
            </p>
            <h1 className="mt-4 text-5xl font-medium tracking-tight text-[var(--foreground)] sm:text-6xl">
              {portfolio.name}
            </h1>
            <p className="mt-4 text-lg text-[var(--muted)] md:text-xl">
              {portfolio.role} at {portfolio.company}
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              {portfolio.about}
            </p>

            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-base text-[var(--muted)] md:text-lg">
              {portfolio.socials.linkedin && (
                <BrandLink href={portfolio.socials.linkedin} site="linkedin">
                  LinkedIn
                </BrandLink>
              )}
              {portfolio.socials.github && (
                <BrandLink href={portfolio.socials.github} site="github">
                  GitHub
                </BrandLink>
              )}
              {portfolio.cvURL && (
                <a
                  href={portfolio.cvURL}
                  download={portfolio.cvFilename ?? undefined}
                  className="link-underline"
                >
                  Download CV
                </a>
              )}
            </div>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <PhotoFrame
            photo={portrait}
            priority
            className="w-full justify-self-stretch"
            objectPosition="center 18%"
          />
        </Reveal>
      </div>
    </section>
  );
}
