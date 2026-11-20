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
        elevated ? "bg-[var(--elevated)]" : "bg-[var(--background)]"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <Reveal>
          <PhotoFrame photo={photo} />
        </Reveal>
      </div>
    </section>
  );
}
