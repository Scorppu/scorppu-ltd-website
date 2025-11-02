import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Link from "next/link";
import GallerySection from "@/components/GallerySection";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

      {/* Regular content below hero */}
      <main className="flex flex-col flex-grow pt-20 px-8 pb-16 items-center bg-white">
        <h2 className="text-4xl text-black">{"We build, you watch (or don't)"}</h2>
        <div className="flex-row w-full">
          <GallerySection />
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-stone-800 text-white py-16">
        <div className="mx-auto px-8">
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
    </>
  );
}
