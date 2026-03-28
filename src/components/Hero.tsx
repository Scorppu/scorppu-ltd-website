"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="relative w-full h-screen">
      <Image
        src="/scorppultd.png"
        alt="Scorppu Hero"
        fill
        priority
        className="object-cover"
      />
      {/* Optional overlay content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30 gap-8">
        <h1 className="text-white text-4xl md:text-6xl lg:text-8xl font-light tracking-wide text-center px-4">
          where dreams become reality
        </h1>
        {/* <button
          onClick={() => document.getElementById("content")?.scrollIntoView({ behavior: "smooth" })}
          className="text-white border border-white px-8 py-3 text-sm tracking-widest hover:bg-white hover:text-black transition-colors duration-300"
        >
          EXPLORE
        </button> */}
      </div>
    </div>
  );
}
