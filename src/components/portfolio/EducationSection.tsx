import { portfolio } from "@/data/portfolio";
import Reveal from "@/components/Reveal";
import SectionHeading from "./SectionHeading";

export default function EducationSection() {
  return (
    <section id="education" className="paper-grid scroll-mt-36 border-b border-[var(--line)] md:scroll-mt-40">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <SectionHeading eyebrow="Education" title="Academic background" />
        </Reveal>

        <div className="space-y-10">
          {portfolio.education.map((entry, index) => (
            <Reveal key={`${entry.institution}-${entry.credential}`} delay={(index + 1) as 1 | 2}>
              <article className="grid gap-2 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] md:gap-10">
                <p className="text-base text-[var(--muted)] md:text-lg">
                  {entry.startDate} – {entry.endDate}
                </p>
                <div>
                  <h3 className="text-xl font-medium text-[var(--foreground)] md:text-2xl">
                    {entry.institution}
                  </h3>
                  <p className="mt-1 text-base text-[var(--muted)] md:text-lg">
                    {entry.credential}
                  </p>
                  {entry.highlights?.length ? (
                    <ul className="mt-3 space-y-1 text-base text-[var(--accent)] md:text-lg">
                      {entry.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
