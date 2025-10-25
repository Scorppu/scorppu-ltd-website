import Image from "next/image";
import Link from "next/link";


export default function About() {
  return (
    <main className="flex flex-col items-center px-5 flex-grow">
      {/* 74px = 64px (h-16 nav) + 10px (partition+spacing); Adjust as needed */}
      {/* Large Centered Title */}
      <h1 className="text-9xl font-serif tracking-tight mb-8 text-center">
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
  );
}
