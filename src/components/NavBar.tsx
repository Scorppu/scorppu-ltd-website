'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full h-20 flex items-center justify-between px-4 md:px-8">
      <Link href="/" className="text-2xl md:text-3xl font-serif">SCORPPU LTD</Link>
      
      {/* Mobile menu button */}
      <button 
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Desktop menu */}
      <div className="hidden md:flex gap-8 items-center font-semibold text-base">
        <Link href="/gallery" className="hover:opacity-75">GALLERY</Link>
        <Link href="/about" className="hover:opacity-75">ABOUT</Link>
        <Link href="/contact" className="hover:opacity-75">CONTACT</Link>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white border-t md:hidden">
          <div className="flex flex-col gap-4 p-4">
            <Link href="/gallery" className="hover:opacity-75">GALLERY</Link>
            <Link href="/about" className="hover:opacity-75">ABOUT</Link>
            <Link href="/contact" className="hover:opacity-75">CONTACT</Link>
          </div>
        </div>
      )}
    </nav>
  );
}
