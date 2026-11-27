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

    const pickActive = () => {
      const scrollBottom = window.scrollY + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Short final sections never fill the IO band — pin Contact near page end.
      if (docHeight - scrollBottom < 160) {
        setActiveId("contact");
        return;
      }

      // Spy line under the sticky header + subnav.
      const spyY = window.scrollY + window.innerHeight * 0.32;
      let current = sections[0].id;

      for (const section of sections) {
        if (section.offsetTop <= spyY) {
          current = section.id;
        }
      }

      setActiveId(current);
    };

    pickActive();
    window.addEventListener("scroll", pickActive, { passive: true });
    window.addEventListener("resize", pickActive);
    return () => {
      window.removeEventListener("scroll", pickActive);
      window.removeEventListener("resize", pickActive);
    };
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
