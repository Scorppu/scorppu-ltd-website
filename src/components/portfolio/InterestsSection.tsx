import { portfolio } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function InterestsSection() {
  return (
    <section className="border-b border-stone-200 dark:border-stone-800">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <SectionHeading eyebrow="Interests" title="Away from the keyboard" />

        <div className="grid gap-10 md:grid-cols-2">
          {portfolio.interests.map((interest) => (
            <article key={interest.name}>
              <h3 className="text-lg font-medium text-stone-900 dark:text-stone-100">
                {interest.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                {interest.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
