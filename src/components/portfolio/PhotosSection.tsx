import { portfolio } from "@/data/portfolio";
import PhotoFrame from "@/components/PhotoFrame";
import Reveal from "@/components/Reveal";
import SectionHeading from "./SectionHeading";

export default function PhotosSection() {
  const gallery = portfolio.photos.filter((photo) => photo.id !== "portrait");

  return (
    <section className="border-b border-[var(--line)] bg-[var(--elevated)]">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <Reveal>
          <SectionHeading
            eyebrow="Photos"
            title="Graduation gallery"
            description="Swap-ready frames for graduation photos. Add files under /public/photos/ and set src in src/data/portfolio.ts."
          />
        </Reveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((photo, index) => (
            <Reveal key={photo.id} delay={(index % 3) + 1 as 1 | 2 | 3}>
              <PhotoFrame photo={photo} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
