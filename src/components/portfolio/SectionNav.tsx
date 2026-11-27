"use client";

import { useEffect, useState } from "react";

const links = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "featured", label: "Featured" },
  { id: "interests", label: "Interests" },
  { id: "contact", label: "Contact" },
] as const;

export default function SectionNav() {
  const [activeId, setActiveId] = useState<string>(links[0].id);

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        // Account for sticky header + subnav so the “current” section matches the viewport.
        rootMargin: "-28% 0px -55% 0px",
        threshold: [0, 0.2, 0.45, 0.7, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="On this page"
      className="sticky top-[4.25rem] z-20 border-b border-[var(--line)]/80 bg-[var(--background)]/90 backdrop-blur-md md:top-[4.75rem]"
    >
      <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-5 py-2.5 [-ms-overflow-style:none] [scrollbar-width:none] md:gap-2 md:px-8 [&::-webkit-scrollbar]:hidden">
        {links.map((link) => {
          const active = activeId === link.id;
          return (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`shrink-0 border-b-2 px-2.5 py-1.5 text-sm tracking-wide transition-colors duration-300 md:px-3 md:text-base ${
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
