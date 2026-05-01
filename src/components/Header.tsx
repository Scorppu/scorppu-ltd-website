"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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
    <header
      className={`fixed w-full top-0 left-0 z-20 transition-all duration-300 ${
        activeStyle ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="w-full h-20 flex items-center justify-between px-4 md:px-8">
        <div
          className={`transition-colors duration-300 ${
            activeStyle ? "text-black" : "text-white"
          }`}
        >
          <Link href="/" className="text-2xl md:text-3xl">
            {"SCORPPU LTD"}
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className={`md:hidden ${activeStyle ? "text-black" : "text-white"}`}
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
          className={`hidden md:flex gap-8 items-center font-medium text-base transition-colors duration-300 ${
            activeStyle ? "text-black" : "text-white"
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
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`absolute top-20 left-0 w-full bg-white border-t md:hidden z-30 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen
            ? "max-h-96 opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-4 p-4">
          <Link
            href="/team"
            className="hover:opacity-75 font-medium text-black"
          >
            TEAM
          </Link>
          <Link
            href="/about"
            className="hover:opacity-75 font-medium text-black"
          >
            ABOUT
          </Link>
          <Link
            href="/contact"
            className="hover:opacity-75 font-medium text-black"
          >
            CONTACT
          </Link>
        </div>
      </div>
    </header>
  );
}
