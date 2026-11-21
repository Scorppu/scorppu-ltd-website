import { portfolio } from "@/data/portfolio";
import PhotoFrame from "@/components/PhotoFrame";
import Reveal from "@/components/Reveal";

type EditorialPhotoProps = {
  photoId: string;
  elevated?: boolean;
};

export default function EditorialPhoto({
  photoId,
  elevated = false,
}: EditorialPhotoProps) {
  const photo = portfolio.photos.find((entry) => entry.id === photoId);
  if (!photo) return null;

  return (
    <section
      className={`border-b border-[var(--line)] ${
        elevated ? "paper-grid" : "paper-grid-soft"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:px-8 md:py-24">
        <Reveal>
          <PhotoFrame
            photo={photo}
            className="w-full"
            objectPosition="center 35%"
          />
        </Reveal>
      </div>
    </section>
  );
}
