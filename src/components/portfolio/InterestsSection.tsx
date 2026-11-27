import { portfolio } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import SectionHeading from "./SectionHeading";

export default function InterestsSection() {
  return (
    <section className="field-beige border-b border-[var(--line)]">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <SectionHeading eyebrow="Interests" title="Away from the keyboard" />
        </Reveal>

        <div className="grid gap-10 md:grid-cols-2">
          {portfolio.interests.map((interest, index) => (
            <Reveal key={interest.name} delay={(index + 1) as 1 | 2}>
              <article>
                <h3 className="text-xl font-medium text-[var(--foreground)] md:text-2xl">
                  {interest.name}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                  {interest.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
