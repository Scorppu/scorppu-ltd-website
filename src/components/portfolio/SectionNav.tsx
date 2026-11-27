"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "featured", label: "Featured" },
  { id: "interests", label: "Interests" },
  { id: "contact", label: "Contact" },
] as const;

function cssLengthToPx(value: string) {
  const trimmed = value.trim();
  const rootFont =
    parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
  if (trimmed.endsWith("rem")) return parseFloat(trimmed) * rootFont;
  if (trimmed.endsWith("px")) return parseFloat(trimmed);
  const asNumber = parseFloat(trimmed);
  return Number.isFinite(asNumber) ? asNumber : 0;
}

function siteHeaderHeight() {
  const raw = getComputedStyle(document.documentElement)
    .getPropertyValue("--site-header-h")
    .trim();
  return cssLengthToPx(raw || "4.25rem") || 68;
}

export default function SectionNav() {
  const [activeId, setActiveId] = useState<string>(links[0].id);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (!sections.length) return;

    const jumpOffset = (id: string) => {
      const header = siteHeaderHeight();
      // Extra slack so the prior section doesn’t peek above the sticky bars.
      const slack = 28;
      // About sits above this sticky nav in document order.
      if (id === "about") return header + slack;
      const nav = navRef.current?.offsetHeight ?? 48;
      return header + nav + slack;
    };

    const scrollToSection = (id: string) => {
      const el = document.getElementById(id);
      if (!el) return;
      const top =
        el.getBoundingClientRect().top + window.scrollY - jumpOffset(id);
      window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
      history.replaceState(null, "", `#${id}`);
      setActiveId(id);
    };

    const pickActive = () => {
      const scrollBottom = window.scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (docHeight - scrollBottom < 160) {
        setActiveId("contact");
        return;
      }

      const spyY = window.scrollY + jumpOffset("experience") + 12;
      let current = sections[0].id;

      for (const section of sections) {
        if (section.offsetTop <= spyY) {
          current = section.id;
        }
      }

      setActiveId(current);
    };

    const onClick = (event: Event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a[href^='#']");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      if (!navRef.current?.contains(anchor)) return;

      const id = anchor.hash.replace(/^#/, "");
      if (!links.some((link) => link.id === id)) return;

      event.preventDefault();
      scrollToSection(id);
    };

    const hash = window.location.hash.replace(/^#/, "");
    if (hash && links.some((link) => link.id === hash)) {
      requestAnimationFrame(() => scrollToSection(hash));
    } else {
      pickActive();
    }

    const nav = navRef.current;
    nav?.addEventListener("click", onClick);
    window.addEventListener("scroll", pickActive, { passive: true });
    window.addEventListener("resize", pickActive);
    return () => {
      nav?.removeEventListener("click", onClick);
      window.removeEventListener("scroll", pickActive);
      window.removeEventListener("resize", pickActive);
    };
  }, []);

  return (
    <nav
      ref={navRef}
      aria-label="On this page"
      className="sticky top-[var(--site-header-h)] z-20 h-[var(--section-nav-h)] border-b border-[var(--line)]/80 bg-[var(--background)]/90 backdrop-blur-md"
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-center gap-1 overflow-x-auto px-5 [-ms-overflow-style:none] [scrollbar-width:none] md:gap-2 md:px-8 [&::-webkit-scrollbar]:hidden">
        {links.map((link) => {
          const active = activeId === link.id;
          return (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`inline-flex h-full shrink-0 items-center border-b-2 px-2.5 text-sm tracking-wide transition-colors duration-300 md:px-3 md:text-base ${
                active
                  ? "border-[var(--accent)] text-[var(--accent)]"
                  : "border-transparent text-[var(--muted)] hover:text-[var(--accent)]"
              }`}
            >
              {link.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
