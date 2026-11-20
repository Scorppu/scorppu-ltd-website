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
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/20" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-end px-5 pb-16 pt-28 md:px-8 md:pb-20">
        <div className="max-w-2xl animate-fade-up">
          <p className="mb-4 text-sm tracking-[0.18em] text-white/70 uppercase">
            {portfolio.handle}
          </p>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl md:text-6xl">
            {portfolio.name}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
            {portfolio.role} at {portfolio.company}. {portfolio.shortIntro}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/scorppu"
              className="inline-flex items-center bg-white px-5 py-2.5 text-sm font-medium text-stone-900 transition-opacity hover:opacity-85"
            >
              View work
            </Link>
            <a
              href={`mailto:${portfolio.email}`}
              className="inline-flex items-center border border-white/50 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
