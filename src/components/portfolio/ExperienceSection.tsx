import { portfolio } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import SectionHeading from "./SectionHeading";

export default function ExperienceSection() {
  return (
    <section id="experience" className="paper-grid-soft section-anchor border-b border-[var(--line)]">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <SectionHeading eyebrow="Experience" title="Selected roles" />
        </Reveal>

        <div className="flex flex-col gap-10 md:gap-14">
          {portfolio.experience.map((entry, index) => (
            <Reveal
              key={`${entry.company}-${entry.title}-${entry.startDate}`}
              delay={(Math.min(index, 2) + 1) as 1 | 2 | 3}
            >
              <article className="grid gap-5 border-t border-[var(--line)] pt-10 first:border-t-0 first:pt-0 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] md:gap-12">
                <div>
                  <p className="text-base text-[var(--muted)] md:text-lg">
                    {entry.startDate} – {entry.endDate}
                  </p>
                  <p className="mt-1 text-base text-[var(--muted)]/80 md:text-lg">
                    {entry.employmentType}
                    {entry.location ? ` · ${entry.location}` : ""}
                    {entry.workMode ? ` · ${entry.workMode}` : ""}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-medium text-[var(--foreground)] md:text-2xl">
                    {entry.title}
                  </h3>
                  <p className="mt-1 text-base text-[var(--accent)] md:text-lg">
                    {entry.company}
                  </p>
                  <ul className="mt-5 space-y-3 text-base leading-relaxed text-[var(--muted)] md:text-lg">
                    {entry.description.map((item) => (
                      <li
                        key={item}
                        className="relative pl-5 before:absolute before:left-0 before:top-[0.7em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[var(--accent)]"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
