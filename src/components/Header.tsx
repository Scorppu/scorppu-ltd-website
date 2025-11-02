
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full top-0 left-0 z-20 transition-all duration-300 ${isScrolled ? "bg-white" : "bg-transparent"
        }`}
    >
      <nav className="w-full h-20 flex items-center justify-between px-8">
        <div
          className={`transition-colors duration-300 ${isScrolled ? "text-black" : "text-white"
            }`}
        >
          <Link href="/" className="text-3xl font-serif">
            {"SCORPPU LTD"}
          </Link>
        </div>
        <div
          className={`flex gap-8 items-center font-semibold text-base transition-colors duration-300 ${isScrolled ? "text-black" : "text-white"
            }`}
        >
          <Link href="/gallery" className="hover:opacity-75">
            {"GALLERY"}
          </Link>
          <Link href="/about" className="hover:opacity-75">
            {"ABOUT"}
          </Link>
          <Link href="/contact" className="hover:opacity-75">
            {"CONTACT"}
          </Link>
        </div>
      </nav>
      <div
        className={`flex px-8 transition-opacity duration-300 ${isScrolled ? "opacity-100" : "opacity-0"
          }`}
      >
        <div className="w-full h-[1px] bg-black" />
      </div>
    </div>
  );
}
