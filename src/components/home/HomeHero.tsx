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
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink-deep)]/80 via-[var(--ink-deep)]/40 to-[var(--ink-deep)]/25" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-24">
        <div className="max-w-2xl animate-fade-up">
          <p className="mb-4 text-base tracking-[0.2em] text-white/75 uppercase md:text-lg">
            {portfolio.handle}
          </p>
          <h1 className="text-5xl font-medium tracking-tight text-white sm:text-6xl md:text-7xl">
            {portfolio.name}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/90 md:text-xl">
            {portfolio.role} at {portfolio.company}. {portfolio.shortIntro}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              href="/scorppu"
              className="inline-flex items-center bg-[var(--background)] px-6 py-3 text-base font-medium text-[var(--foreground)] transition-transform duration-300 hover:-translate-y-0.5 md:text-lg"
            >
              View work
            </Link>
            <a
              href={`mailto:${portfolio.email}`}
              className="inline-flex items-center border border-white/55 px-6 py-3 text-base font-medium text-white transition-colors duration-300 hover:bg-white/10 md:text-lg"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
