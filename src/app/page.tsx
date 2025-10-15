import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black"> {/* White background, black text */}
      {/* Navigation */}
      <nav className="fixed w-full p-4 flex justify-end gap-8 text-sm bg-white z-10">
        <Link href="/gallery" className="hover:opacity-75">GALLERY</Link>
        <Link href="/about" className="hover:opacity-75">ABOUT</Link>
        <Link href="/contact" className="hover:opacity-75">CONTACT</Link>
      </nav>

      {/* Main Content */}
      <main className="relative min-h-screen flex flex-col items-center">
        {/* Logo */}
        <h1 className="text-7xl font-serif mt-16 mb-8">Scorppu Ltd®</h1>

        {/* Hero Image Container with Rounded Padding */}
        <div className="relative w-full max-w-5xl h-[calc(100vh-220px)] p-6 rounded-3xl bg-white shadow-lg">
          <div className="relative w-full h-full rounded-3xl overflow-hidden">
            <Image
              src="/scorppultd.png"
              alt="scorppultd logo"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </div>
      </main>
    </div>
  );
}
