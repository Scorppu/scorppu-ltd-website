import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black">
      
      {/* Fixed top nav and partition wrapper */}
      <div className="fixed w-full top-0 left-0 z-20">
        {/* Nav bar */}
        <nav className="w-full h-25 flex items-center justify-between px-8 bg-white">
          <span className="text-3xl font-serif">SCORPPU LTD</span>
          <div className="flex gap-8 items-center font-semibold text-base">
            <Link href="/gallery" className="hover:opacity-75">GALLERY</Link>
            <Link href="/about" className="hover:opacity-75">ABOUT</Link>
            <Link href="/contact" className="hover:opacity-75">CONTACT</Link>
          </div>
        </nav>
        {/* Black partition under nav */}
        <div className="flex px-8">
          <div className="w-full h-[1px] bg-black" />
        </div>      
      </div>
      
      {/* Content below fixed nav/partition */}
      <main className="flex flex-col items-center pt-[74px] px-5">
        {/* 74px = 64px (h-16 nav) + 10px (partition+spacing); Adjust as needed */}
        {/* Large Centered Title */}
        <h1 className="text-[6vw] font-serif tracking-tight mt-8 mb-8 text-center">
          SCORPPU LTD
        </h1>
        
        {/* Rounded Hero Image (replace src with your own image) */}
        <div className="w-9/10 max-w-8xl rounded-[60px] overflow-hidden shadow-md bg-white">
          <Image
            src="/scorppultd.png" // Update with your hero image
            alt="scorppultd thumbnail"
            width={1200}
            height={700}
            style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
            priority
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-yellow-950 text-white mt-20 py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-2 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-lg font-semibold mb-4">ABOUT</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="hover:opacity-75">
                    Our Story
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
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
          
          {/* Copyright */}
          <div className="mt-16 pt-8 border-t border-gray-700">
            <p className="text-sm text-gray-300">
              © {new Date().getFullYear()} Scorppu Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
