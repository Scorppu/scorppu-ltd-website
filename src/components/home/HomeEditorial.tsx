import { portfolio } from "@/data/portfolio";
import PhotoFrame from "@/components/PhotoFrame";
import Reveal from "@/components/Reveal";

export default function HomeEditorial() {
  const photo = portfolio.photos.find((entry) => entry.id === "editorial-home");
  if (!photo) return null;

  return (
    <section className="border-t border-[var(--line)] bg-[var(--elevated)]">
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <Reveal>
          <PhotoFrame photo={photo} />
        </Reveal>
      </div>
    </section>
  );
}
