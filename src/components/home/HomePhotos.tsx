import { portfolio } from "@/data/portfolio";
import PhotoFrame from "@/components/PhotoFrame";
import Reveal from "@/components/Reveal";

export default function HomePhotos() {
  const gallery = portfolio.photos.filter((photo) => photo.id !== "portrait");

  return (
    <section className="border-t border-[var(--line)] bg-[var(--elevated)]">
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <p className="text-base tracking-[0.18em] text-[var(--accent)] uppercase md:text-lg">
              Photos
            </p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-[var(--foreground)] md:text-4xl">
              Graduation &amp; portraits
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              Placeholders are ready for graduation photos. Drop files into{" "}
              <code className="text-[var(--foreground)]">/public/photos/</code> and
              set each <code className="text-[var(--foreground)]">src</code> in{" "}
              <code className="text-[var(--foreground)]">src/data/portfolio.ts</code>.
            </p>
          </div>
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
