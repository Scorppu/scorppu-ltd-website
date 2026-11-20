import Link from "next/link";
import { portfolio } from "@/data/portfolio";

export default function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--elevated)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-12 md:flex-row md:items-end md:justify-between md:px-8">
        <div>
          <p className="text-lg font-medium tracking-wide text-[var(--foreground)] md:text-xl">
            {portfolio.name}
          </p>
          <p className="mt-1 text-base text-[var(--muted)] md:text-lg">
            {portfolio.location}
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-base text-[var(--muted)] md:text-lg">
          <Link href="/scorppu" className="link-underline">
            Work
          </Link>
          <a href={`mailto:${portfolio.email}`} className="link-underline">
            {portfolio.email}
          </a>
          {portfolio.socials.linkedin && (
            <a
              href={portfolio.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
            >
              LinkedIn
            </a>
          )}
          {portfolio.socials.github && (
            <a
              href={portfolio.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </footer>
  );
}
