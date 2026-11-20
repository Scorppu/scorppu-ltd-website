import Image from "next/image";
import Link from "next/link";
import { portfolio } from "@/data/portfolio";

export default function HomeAbout() {
  return (
    <section className="border-t border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-950">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center md:gap-16 md:px-8 md:py-28">
        <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden bg-stone-100 dark:bg-stone-900">
          <Image
            src={portfolio.portraitURL}
            alt={`Portrait of ${portfolio.name}`}
            fill
            sizes="(max-width: 768px) 100vw, 420px"
            className="object-cover"
          />
        </div>

        <div className="max-w-xl">
          <p className="text-sm tracking-[0.16em] text-stone-400 uppercase dark:text-stone-500">
            About
          </p>
          <h2 className="mt-3 text-2xl font-medium tracking-tight text-stone-900 md:text-3xl dark:text-stone-100">
            Software with care for craft and clarity.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-stone-600 dark:text-stone-400">
            {portfolio.about}
          </p>
          <p className="mt-4 text-sm text-stone-500 dark:text-stone-500">
            Based in {portfolio.location}.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/scorppu"
              className="inline-flex items-center border border-stone-900 px-5 py-2.5 text-sm font-medium text-stone-900 transition-colors hover:bg-stone-900 hover:text-white dark:border-stone-100 dark:text-stone-100 dark:hover:bg-stone-100 dark:hover:text-stone-900"
            >
              Full profile
            </Link>
            <a
              href={`mailto:${portfolio.email}`}
              className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-stone-600 transition-opacity hover:opacity-70 dark:text-stone-300"
            >
              {portfolio.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
