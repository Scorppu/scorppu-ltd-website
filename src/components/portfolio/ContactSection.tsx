import { portfolio } from "@/data/portfolio";
import PhotoFrame from "@/components/PhotoFrame";
import Reveal from "@/components/Reveal";
import SectionHeading from "./SectionHeading";

export default function ContactSection() {
  const aside = portfolio.photos.find((photo) => photo.id === "aside-profile");

  return (
    <section id="contact" className="scroll-mt-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] md:items-end md:gap-14 md:px-8 md:py-24">
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
              <p className="text-base md:text-lg">
                scorppu.ltd · {portfolio.location}
              </p>
            </div>
          </Reveal>
        </div>

        {aside ? (
          <Reveal delay={2}>
            <PhotoFrame photo={aside} className="max-w-sm md:justify-self-end" />
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
