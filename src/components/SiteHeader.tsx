"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

type SiteHeaderProps = {
  variant?: "overlay" | "solid";
};

const navLinks = [
  { href: "/scorppu", label: "Work" },
  { href: "/scorppu#contact", label: "Contact" },
];

export default function SiteHeader({ variant = "solid" }: SiteHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const overlay = variant === "overlay";
  const inverted = overlay && !isScrolled && !isMenuOpen;

  useEffect(() => {
    if (!overlay) return;

    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [overlay]);

  return (
    <header className="fixed inset-x-0 top-0 z-30">
      <div
        className={`absolute inset-0 -z-10 border-b transition-colors duration-300 ${
          inverted
            ? "border-transparent bg-transparent"
            : "border-[var(--line)]/80 bg-[var(--background)]/90 backdrop-blur-md"
        }`}
      />

      <nav className="mx-auto flex h-[4.25rem] max-w-6xl items-center justify-between px-5 md:h-[4.75rem] md:px-8">
        <Link
          href="/"
          className={`text-lg font-medium tracking-[0.03em] transition-opacity hover:opacity-70 md:text-xl ${
            inverted ? "text-white" : "text-[var(--foreground)]"
          }`}
        >
          Eugene Chan
        </Link>

        <button
          type="button"
          className={`md:hidden ${inverted ? "text-white" : "text-[var(--foreground)]"}`}
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 7h16M4 12h16M4 17h16"}
            />
          </svg>
        </button>

        <div
          className={`hidden items-center gap-8 text-base tracking-wide md:flex md:text-lg ${
            inverted ? "text-white/90" : "text-[var(--muted)]"
          }`}
        >
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="link-underline">
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      <div
        className={`overflow-hidden border-b border-[var(--line)] bg-[var(--background)] transition-all duration-300 ease-out md:hidden ${
          isMenuOpen ? "max-h-56 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-5 py-5 text-lg text-[var(--muted)]">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-opacity hover:opacity-70"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
