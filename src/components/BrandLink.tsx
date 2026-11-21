import type { ReactNode } from "react";
import {
  SiGithub,
  SiInstagram,
  SiLinkedin,
  SiYoutube,
} from "react-icons/si";
import { HiOutlineGlobeAlt } from "react-icons/hi2";
import { RiTwitterXLine } from "react-icons/ri";

export type BrandSite =
  | "github"
  | "linkedin"
  | "youtube"
  | "x"
  | "instagram"
  | "product"
  | "external";

type BrandLinkProps = {
  href: string;
  children: ReactNode;
  /** Override auto-detection from the URL hostname. */
  site?: BrandSite;
  className?: string;
  download?: string | boolean;
};

function detectSite(href: string): BrandSite {
  try {
    const host = new URL(href).hostname.replace(/^www\./, "").toLowerCase();
    if (host === "github.com" || host.endsWith(".github.com")) return "github";
    if (host === "linkedin.com" || host.endsWith(".linkedin.com")) return "linkedin";
    if (
      host === "youtube.com" ||
      host.endsWith(".youtube.com") ||
      host === "youtu.be"
    ) {
      return "youtube";
    }
    if (host === "twitter.com" || host === "x.com" || host.endsWith(".x.com")) {
      return "x";
    }
    if (host === "instagram.com" || host.endsWith(".instagram.com")) {
      return "instagram";
    }
  } catch {
    // mailto:, hash placeholders, relative paths
  }
  return "external";
}

function BrandIcon({ site }: { site: BrandSite }) {
  const className = "size-[0.95em] shrink-0 opacity-70";
  const ariaHidden = true;

  switch (site) {
    case "github":
      return <SiGithub className={className} aria-hidden={ariaHidden} />;
    case "linkedin":
      return <SiLinkedin className={className} aria-hidden={ariaHidden} />;
    case "youtube":
      return <SiYoutube className={className} aria-hidden={ariaHidden} />;
    case "x":
      return <RiTwitterXLine className={className} aria-hidden={ariaHidden} />;
    case "instagram":
      return <SiInstagram className={className} aria-hidden={ariaHidden} />;
    case "product":
    case "external":
    default:
      return <HiOutlineGlobeAlt className={className} aria-hidden={ariaHidden} />;
  }
}

/**
 * Inline text link with a small site logo — editorial, not a social-icon row.
 */
export default function BrandLink({
  href,
  children,
  site,
  className = "",
  download,
}: BrandLinkProps) {
  const resolved = site ?? detectSite(href);
  const isExternal = /^https?:\/\//i.test(href);

  return (
    <a
      href={href}
      {...(isExternal
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
      {...(download !== undefined ? { download } : {})}
      className={`link-underline inline-flex items-center gap-2 ${className}`.trim()}
    >
      <BrandIcon site={resolved} />
      <span>{children}</span>
    </a>
  );
}

/** Static mark for placeholder product slots (no live href yet). */
export function BrandMark({
  site = "product",
  children,
  className = "",
}: {
  site?: BrandSite;
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`.trim()}>
      <BrandIcon site={site} />
      <span>{children}</span>
    </span>
  );
}
