import Image from "next/image";
import { portfolio } from "@/data/portfolio";

export default function FeaturedBuilding() {
  return (
    <section className="border-b border-stone-200 dark:border-stone-800">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm tracking-[0.16em] text-stone-400 uppercase dark:text-stone-500">
              Featured
            </p>
            <h2 className="mt-3 text-2xl font-medium tracking-tight text-stone-900 md:text-3xl dark:text-stone-100">
              Scorppu Ltd
            </h2>
          </div>
          <p className="hidden text-sm text-stone-500 md:block dark:text-stone-400">
            {portfolio.featuredBuilding.caption}
          </p>
        </div>

        <div className="relative aspect-[16/9] w-full overflow-hidden bg-stone-100 dark:bg-stone-900">
          <Image
            src={portfolio.featuredBuilding.src}
            alt={portfolio.featuredBuilding.alt}
            fill
            sizes="(max-width: 768px) 100vw, 1152px"
            className="object-cover"
          />
        </div>
        <p className="mt-3 text-sm text-stone-500 md:hidden dark:text-stone-400">
          {portfolio.featuredBuilding.caption}
        </p>
      </div>
    </section>
  );
}
