import { portfolio } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import SectionHeading from "./SectionHeading";

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-28">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
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
    </section>
  );
}
