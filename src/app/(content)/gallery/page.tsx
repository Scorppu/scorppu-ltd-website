import GallerySection from "@/components/GallerySection";

export default function Gallery() {
  return (
    <div className="flex flex-col">
      <div className="w-full px-4 md:px-8 pt-10 pb-2">
        <h1 className="text-4xl md:text-5xl font-semibold mb-2">Gallery</h1>
        <p className="text-stone-500">A look at what we&apos;ve been building.</p>
      </div>
      <GallerySection />
    </div>
  );
}
