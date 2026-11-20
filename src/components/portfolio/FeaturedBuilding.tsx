import Image from "next/image";
import { portfolio } from "@/data/portfolio";
import Reveal from "@/components/Reveal";

export default function FeaturedBuilding() {
  return (
    <section className="border-b border-[var(--line)]">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-base tracking-[0.18em] text-[var(--accent)] uppercase md:text-lg">
                Featured
              </p>
              <h2 className="mt-3 text-3xl font-medium tracking-tight text-[var(--foreground)] md:text-4xl">
                Scorppu Ltd
              </h2>
            </div>
            <p className="hidden text-base text-[var(--muted)] md:block md:text-lg">
              {portfolio.featuredBuilding.caption}
            </p>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--accent-soft)]">
            <Image
              src={portfolio.featuredBuilding.src}
              alt={portfolio.featuredBuilding.alt}
              fill
              sizes="(max-width: 768px) 100vw, 1152px"
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.02]"
            />
          </div>
          <p className="mt-3 text-base text-[var(--muted)] md:hidden md:text-lg">
            {portfolio.featuredBuilding.caption}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
