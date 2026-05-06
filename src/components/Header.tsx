"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const activeStyle = isScrolled || isMenuOpen;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed w-full top-0 left-0 z-20">
      {/* Background layer — fades in/out independently */}
      <div
        className={`absolute inset-0 -z-10 transition-opacity duration-300 bg-white dark:bg-stone-950 shadow-md dark:shadow-none border-b ${
          activeStyle
            ? "opacity-100 border-transparent dark:border-stone-800"
            : "opacity-0 border-transparent"
        }`}
      />
      <nav className="w-full h-20 flex items-center justify-between px-4 md:px-8">
        <div
          className={` ${
            activeStyle ? "text-black dark:text-stone-100" : "text-white"
          }`}
        >
          <Link href="/" className="text-2xl md:text-3xl">
            {"SCORPPU LTD"}
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className={`md:hidden ${activeStyle ? "text-black dark:text-stone-100" : "text-white"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        <div
          className={`hidden md:flex gap-8 items-center font-medium text-base ${
            activeStyle ? "text-black dark:text-stone-100" : "text-white"
          }`}
        >
          {/* <Link href="/gallery" className="hover:opacity-75">
            {"GALLERY"}
          </Link> */}
          <Link href="/team" className="hover:opacity-75">
            {"TEAM"}
          </Link>
          <Link href="/about" className="hover:opacity-75">
            {"ABOUT"}
          </Link>
          <Link href="/contact" className="hover:opacity-75">
            {"CONTACT"}
          </Link>
          <ThemeToggle
            className={
              activeStyle
                ? "text-black dark:text-stone-100"
                : "text-white dark:text-white"
            }
          />
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`absolute top-20 left-0 w-full bg-white dark:bg-stone-950 border-t border-b dark:border-stone-700 md:hidden z-30 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-96 opacity-100 translate-y-0 shadow-md dark:shadow-none"
            : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-4 p-4">
          <Link
            href="/team"
            className="hover:opacity-75 font-medium text-black dark:text-stone-100"
          >
            TEAM
          </Link>
          <Link
            href="/about"
            className="hover:opacity-75 font-medium text-black dark:text-stone-100"
          >
            ABOUT
          </Link>
          <Link
            href="/contact"
            className="hover:opacity-75 font-medium text-black dark:text-stone-100"
          >
            CONTACT
          </Link>
          <ThemeToggle className="text-black dark:text-stone-100" />
        </div>
      </div>
    </header>
  );
}
