import { portfolio } from "@/data/portfolio";
import SectionHeading from "./SectionHeading";

export default function ExperienceSection() {
  return (
    <section className="border-b border-stone-200 dark:border-stone-800">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <SectionHeading eyebrow="Experience" title="Selected roles" />

        <div className="divide-y divide-stone-200 dark:divide-stone-800">
          {portfolio.experience.map((entry) => (
            <article
              key={`${entry.company}-${entry.title}-${entry.startDate}`}
              className="grid gap-4 py-8 first:pt-0 last:pb-0 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] md:gap-10"
            >
              <div>
                <p className="text-sm text-stone-500 dark:text-stone-400">
                  {entry.startDate} – {entry.endDate}
                </p>
                <p className="mt-1 text-sm text-stone-400 dark:text-stone-500">
                  {entry.employmentType}
                  {entry.location ? ` · ${entry.location}` : ""}
                  {entry.workMode ? ` · ${entry.workMode}` : ""}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-stone-900 dark:text-stone-100">
                  {entry.title}
                </h3>
                <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
                  {entry.company}
                </p>
                <ul className="mt-4 space-y-2 text-sm leading-relaxed text-stone-600 dark:text-stone-400">
                  {entry.description.map((item) => (
                    <li key={item} className="pl-4 relative before:absolute before:left-0 before:top-[0.55em] before:h-1 before:w-1 before:rounded-full before:bg-stone-300 dark:before:bg-stone-600">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
