import Image from "next/image";
import Link from "next/link";
import { portfolio } from "@/data/portfolio";

export default function HomeHero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      <Image
        src={portfolio.featuredBuilding.src}
        alt={portfolio.featuredBuilding.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover animate-hero-settle"
      />
      {/* Soft bottom/left wash — keeps type readable while letting cyan sky and gold windows show. */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-deep)]/55 via-[var(--ink-deep)]/18 to-[var(--ink-deep)]/5" />
      <div className="absolute inset-0 bg-gradient-to-tr from-[var(--ink-deep)]/35 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-24">
        <div className="max-w-2xl animate-fade-up">
          <p className="mb-4 text-base tracking-[0.2em] text-white/80 uppercase md:text-lg">
            {portfolio.handle}
          </p>
          <h1 className="text-5xl font-medium tracking-tight text-white sm:text-6xl md:text-7xl">
            {portfolio.name}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/95 md:text-xl">
            {portfolio.role} at {portfolio.company}. {portfolio.shortIntro}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/scorppu"
              className="inline-flex items-center bg-[var(--background)] px-6 py-3 text-base font-medium text-[var(--foreground)] transition-colors duration-300 hover:bg-[var(--accent-soft)] hover:text-[var(--accent)] md:text-lg"
            >
              View work
            </Link>
            <a
              href={`mailto:${portfolio.email}`}
              className="inline-flex items-center border border-white/70 px-6 py-3 text-base font-medium text-white transition-colors duration-300 hover:border-[var(--accent-soft)] hover:bg-[var(--accent)]/25 md:text-lg"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
