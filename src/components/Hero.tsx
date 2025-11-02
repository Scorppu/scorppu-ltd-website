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
      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
        <h1 className="text-white text-8xl text-center">
          where dreams become reality
        </h1>
      </div>
    </div>
  );
}
