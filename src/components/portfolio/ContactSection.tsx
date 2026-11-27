import { portfolio } from "@/data/portfolio";
import BrandLink from "@/components/BrandLink";
import PhotoFrame from "@/components/PhotoFrame";
import Reveal from "@/components/Reveal";
import SectionHeading from "./SectionHeading";

export default function ContactSection() {
  const aside = portfolio.photos.find((photo) => photo.id === "aside-profile");

  return (
    <section id="contact" className="paper-grid section-anchor border-t border-[var(--line)]">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:items-end md:gap-14 md:px-8 md:py-24">
        <div>
          <Reveal>
            <SectionHeading
              eyebrow="Contact"
              title="Get in touch"
              description="Open to conversations about software, tooling, and interesting problems."
            />
          </Reveal>

          <Reveal delay={1}>
            <div className="flex flex-col gap-4 text-lg text-[var(--muted)] md:text-xl">
              <a
                href={`mailto:${portfolio.email}`}
                className="link-underline w-fit text-[var(--foreground)]"
              >
                {portfolio.email}
              </a>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-base md:text-lg">
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
              </div>
              <p className="text-base md:text-lg">
                scorppu.ltd · {portfolio.location}
              </p>
            </div>
          </Reveal>
        </div>

        {aside ? (
          <Reveal delay={2}>
            <PhotoFrame
              photo={aside}
              className="w-full max-w-xl md:max-w-none md:justify-self-end"
              objectPosition="center center"
            />
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
