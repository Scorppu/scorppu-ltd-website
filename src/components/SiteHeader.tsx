"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

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
            : "border-stone-200/80 bg-white/90 backdrop-blur-md dark:border-stone-800 dark:bg-stone-950/90"
        }`}
      />

      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 md:h-[4.5rem] md:px-8">
        <Link
          href="/"
          className={`text-[0.95rem] font-medium tracking-[0.04em] transition-opacity hover:opacity-70 md:text-base ${
            inverted ? "text-white" : "text-stone-900 dark:text-stone-100"
          }`}
        >
          Eugene Chan
        </Link>

        <button
          type="button"
          className={`md:hidden ${inverted ? "text-white" : "text-stone-900 dark:text-stone-100"}`}
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 7h16M4 12h16M4 17h16"}
            />
          </svg>
        </button>

        <div
          className={`hidden items-center gap-8 text-sm tracking-wide md:flex ${
            inverted ? "text-white/90" : "text-stone-600 dark:text-stone-300"
          }`}
        >
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition-opacity hover:opacity-70">
              {link.label}
            </Link>
          ))}
          <ThemeToggle
            className={
              inverted
                ? "text-white dark:text-white"
                : "text-stone-700 dark:text-stone-200"
            }
          />
        </div>
      </nav>

      <div
        className={`overflow-hidden border-b border-stone-200 bg-white transition-all duration-300 ease-out md:hidden dark:border-stone-800 dark:bg-stone-950 ${
          isMenuOpen ? "max-h-56 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-4 px-5 py-5 text-sm text-stone-700 dark:text-stone-200">
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
          <ThemeToggle className="text-stone-700 dark:text-stone-200" />
        </div>
      </div>
    </header>
  );
}
