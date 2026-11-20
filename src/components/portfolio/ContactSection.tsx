import { portfolio } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch"
          description="Open to conversations about software, tooling, and interesting problems."
        />

        <div className="flex flex-col gap-4 text-base text-stone-600 dark:text-stone-300">
          <a
            href={`mailto:${portfolio.email}`}
            className="w-fit transition-opacity hover:opacity-70"
          >
            {portfolio.email}
          </a>
          <p className="text-sm text-stone-500 dark:text-stone-400">
            scorppu.ltd · {portfolio.location}
          </p>
        </div>
      </div>
    </section>
  );
}
