import Link from "next/link";
import { portfolio } from "@/data/portfolio";

export default function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-white dark:border-stone-800 dark:bg-stone-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="text-sm font-medium tracking-wide text-stone-900 dark:text-stone-100">
            {portfolio.name}
          </p>
          <p className="mt-1 text-sm text-stone-500 dark:text-stone-400">
            {portfolio.location}
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone-500 dark:text-stone-400">
          <Link href="/scorppu" className="transition-opacity hover:opacity-70">
            Work
          </Link>
          <a
            href={`mailto:${portfolio.email}`}
            className="transition-opacity hover:opacity-70"
          >
            {portfolio.email}
          </a>
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
        </div>
      </div>
    </footer>
  );
}
