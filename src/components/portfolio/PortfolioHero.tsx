import Image from "next/image";
import { portfolio } from "@/data/portfolio";

export default function PortfolioHero() {
  return (
    <section className="border-b border-stone-200 dark:border-stone-800">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 pb-16 pt-28 md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] md:items-end md:gap-14 md:px-8 md:pb-20 md:pt-32">
        <div className="animate-fade-up">
          <p className="text-sm tracking-[0.16em] text-stone-400 uppercase dark:text-stone-500">
            {portfolio.handle} · {portfolio.location}
          </p>
          <h1 className="mt-4 text-4xl font-medium tracking-tight text-stone-900 sm:text-5xl dark:text-stone-100">
            {portfolio.name}
          </h1>
          <p className="mt-3 text-base text-stone-600 md:text-lg dark:text-stone-300">
            {portfolio.role} at {portfolio.company}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-stone-600 dark:text-stone-400">
            {portfolio.about}
          </p>

          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-stone-500 dark:text-stone-400">
            {portfolio.socials.linkedin && (
              <a
                href={portfolio.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-70"
              >
                LinkedIn
              </a>
            )}
            {portfolio.socials.github && (
              <a
                href={portfolio.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-opacity hover:opacity-70"
              >
                GitHub
              </a>
            )}
            {portfolio.cvURL && (
              <a
                href={portfolio.cvURL}
                download={portfolio.cvFilename ?? undefined}
                className="transition-opacity hover:opacity-70"
              >
                Download CV
              </a>
            )}
          </div>
        </div>

        <div className="relative aspect-[4/5] w-full max-w-md justify-self-end overflow-hidden bg-stone-100 dark:bg-stone-900 md:max-w-none">
          <Image
            src={portfolio.portraitURL}
            alt={`Portrait of ${portfolio.name}`}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 420px"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
