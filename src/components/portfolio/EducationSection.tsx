import { portfolio } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function EducationSection() {
  return (
    <section className="border-b border-stone-200 dark:border-stone-800">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <SectionHeading eyebrow="Education" title="Academic background" />

        <div className="space-y-8">
          {portfolio.education.map((entry) => (
            <article
              key={`${entry.institution}-${entry.credential}`}
              className="grid gap-2 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] md:gap-10"
            >
              <p className="text-sm text-stone-500 dark:text-stone-400">
                {entry.startDate} – {entry.endDate}
              </p>
              <div>
                <h3 className="text-lg font-medium text-stone-900 dark:text-stone-100">
                  {entry.institution}
                </h3>
                <p className="mt-1 text-sm text-stone-600 dark:text-stone-400">
                  {entry.credential}
                </p>
                {entry.highlights?.length ? (
                  <ul className="mt-3 space-y-1 text-sm text-stone-500 dark:text-stone-400">
                    {entry.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
