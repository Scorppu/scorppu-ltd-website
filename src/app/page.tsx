import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Link from "next/link";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

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
      <Footer />
    </>
  );
}
