import Link from "next/link";
import { portfolio } from "@/data/portfolio";
import BrandLink from "@/components/BrandLink";
import SignatureMark from "@/components/SignatureMark";

/**
 * Letterhead-style footer lockup: small signature snug above the name,
 * location under it, then a rule and work/contact links — inspired by
 * Eugene’s layout reference without copying it pixel-for-pixel.
 */
export default function SiteFooter() {
  return (
    <footer className="paper-grid border-t border-[var(--line)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-12 md:flex-row md:items-stretch md:gap-0 md:px-8 md:py-14">
        <div className="flex flex-col items-start md:pr-10">
          <SignatureMark size="footer" />
          <p className="mt-1.5 text-2xl font-medium tracking-tight text-[var(--foreground)] md:text-[1.65rem]">
            {portfolio.name}
          </p>
          <p className="mt-0.5 text-base text-[var(--muted)] md:text-lg">
            {portfolio.location}
          </p>
        </div>

        <div className="flex flex-col justify-center gap-3 border-t border-[var(--line)] pt-8 text-base text-[var(--muted)] md:border-t-0 md:border-l md:pt-0 md:pl-10 md:text-lg">
          <Link
            href="/scorppu"
            className="link-underline w-fit text-sm font-medium tracking-[0.16em] text-[var(--foreground)] uppercase"
          >
            Work
          </Link>
          <a
            href={`mailto:${portfolio.email}`}
            className="link-underline w-fit"
          >
            {portfolio.email}
          </a>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {portfolio.socials.linkedin && (
              <BrandLink href={portfolio.socials.linkedin} site="linkedin">
                LinkedIn
              </BrandLink>
            )}
            {portfolio.socials.github && (
              <BrandLink href={portfolio.socials.github} site="github">
                GitHub
              </BrandLink>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
