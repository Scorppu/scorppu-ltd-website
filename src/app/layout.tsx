import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Scorppu Ltd",
  description: "Scorppu Ltd Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-white text-black flex flex-col">
          {/* Fixed top nav and partition wrapper */}
          <div className="fixed w-full top-0 left-0 z-20 bg-white">
            <nav className="w-full h-20 flex items-center justify-between px-8">
              <Link href="/" className="text-3xl font-serif">SCORPPU LTD</Link>
              <div className="flex gap-8 items-center font-semibold text-base">
                <Link href="/gallery" className="hover:opacity-75">GALLERY</Link>
                <Link href="/about" className="hover:opacity-75">ABOUT</Link>
                <Link href="/contact" className="hover:opacity-75">CONTACT</Link>
              </div>
            </nav>
            <div className="flex px-8">
              <div className="w-full h-[1px] bg-black" />
            </div>
          </div>

          {/* Main content */}
          <main className="flex-grow pt-[81px] mt-8">
            {children}
          </main>

          {/* Footer */}
          <footer className="w-full bg-stone-800 text-white py-16 mt-8">
            <div className="max-w-7xl mx-auto px-8">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">ABOUT</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/about" className="hover:opacity-75">
                        Our Story
                      </Link>
                    </li>
                    <li>
                      <Link href="/team" className="hover:opacity-75">
                        Team
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-4">CONTACT</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/contact" className="hover:opacity-75">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-16 pt-8 border-t border-stone-700">
                <p className="text-sm text-stone-300">
                  {`© ${new Date().getFullYear()} Scorppu Ltd. All rights reserved.`}
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}


  