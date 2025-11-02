"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface GalleryItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/minecraftScreenshots/2025-10-13_00.34.01.png",
    alt: "ScorppuLTD 2025 Halloween",
    title: "2025 Halloween",
    description: "Market Decorations",
  },
  {
    id: 2,
    src: "/minecraftScreenshots/2025-10-19_23.33.35.png",
    alt: "Lake View",
    title: "W lake",
    description: "view of the old town",
  },
  {
    id: 3,
    src: "/minecraftScreenshots/2025-10-26_01.46.54.png",
    alt: "church",
    title: "Scorppuism Church",
    description: "Not a cult",
  },
  {
    id: 4,
    src: "/minecraftScreenshots/2025-10-24_23.00.19.png",
    alt: "hourglass",
    title: "Cindy's hourglass",
    description: "20+ hours spent",
  },
];

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedImage]);
  
  return (
    <>
      {/* Gallery Grid */}
      <section className="w-full py-20 px-8">
        <div className="w-full mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item) => (
              <div
                key={item.id}
                className="cursor-pointer group"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative w-full h-64 mb-4 overflow-hidden rounded-lg">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-black text-lg">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/gallery" className="px-8 py-3 border-2 border-black text-black hover:bg-black hover:text-white transition-colors duration-300">
              VIEW MORE
            </Link>
          </div>
        </div>
      </section>

      {/* Modal Overlay */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          {/* Modal Content */}
          <div
            className="relative w-full max-w-4xl bg-white flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white text-4xl font-light hover:opacity-75 transition-opacity z-10"
            >
              ×
            </button>

            {/* Image */}
            <div className="relative w-full aspect-video bg-black">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                className="object-contain"
              />
            </div>

            {/* Image Info */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2 text-black">{selectedImage.title}</h3>
              <p className="text-gray-700">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

    </>
  );
}
