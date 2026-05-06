import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GallerySection from "@/components/GallerySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />

      {/* Regular content below hero */}
      <main id="content" className="flex flex-col flex-grow pt-20 px-4 md:px-8 pb-16 items-center bg-white dark:bg-stone-950">
        <h2 className="text-2xl md:text-4xl font-light text-black dark:text-stone-100">{"We build, you watch (or don't)"}</h2>
        <div className="flex-row w-full">
          <GallerySection />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
