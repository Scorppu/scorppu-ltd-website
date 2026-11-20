import Link from "next/link";
import { portfolio } from "@/data/portfolio";
import PhotoFrame from "@/components/PhotoFrame";
import Reveal from "@/components/Reveal";

export default function HomeAbout() {
  const portrait =
    portfolio.photos.find((photo) => photo.id === "portrait") ??
    ({
      id: "portrait",
      label: "Portrait",
      alt: `Portrait of ${portfolio.name}`,
      src: portfolio.portraitURL,
      aspect: "4/5" as const,
    });

  return (
    <section className="border-t border-[var(--line)] bg-[var(--background)]">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center md:gap-16 md:px-8 md:py-28">
        <Reveal>
          <PhotoFrame photo={portrait} />
        </Reveal>

        <Reveal delay={1}>
          <div className="max-w-xl">
            <p className="text-base tracking-[0.18em] text-[var(--accent)] uppercase md:text-lg">
              About
            </p>
            <h2 className="mt-3 text-3xl font-medium tracking-tight text-[var(--foreground)] md:text-4xl">
              Software with care for craft and clarity.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
              {portfolio.about}
            </p>
            <p className="mt-4 text-base text-[var(--muted)] md:text-lg">
              Based in {portfolio.location}.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/scorppu"
                className="inline-flex items-center border border-[var(--foreground)] px-6 py-3 text-base font-medium text-[var(--foreground)] transition-colors duration-300 hover:bg-[var(--foreground)] hover:text-[var(--background)] md:text-lg"
              >
                Full profile
              </Link>
              <a
                href={`mailto:${portfolio.email}`}
                className="link-underline inline-flex items-center px-2 py-3 text-base font-medium text-[var(--muted)] md:text-lg"
              >
                {portfolio.email}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
