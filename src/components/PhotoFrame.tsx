import Image from "next/image";
import type { PhotoSlot } from "@/types/portfolio";

type PhotoFrameProps = {
  photo: PhotoSlot;
  priority?: boolean;
  className?: string;
};

const aspectClass: Record<PhotoSlot["aspect"], string> = {
  "4/5": "aspect-[4/5]",
  "3/4": "aspect-[3/4]",
  "1/1": "aspect-square",
  "16/9": "aspect-[16/9]",
};

/**
 * Swap-ready photo frame. Set `photo.src` in `src/data/portfolio.ts`
 * (or drop a file at `photo.pathHint`) to replace a placeholder.
 */
export default function PhotoFrame({
  photo,
  priority = false,
  className = "",
}: PhotoFrameProps) {
  return (
    <figure className={`group ${className}`.trim()}>
      <div
        className={`relative w-full overflow-hidden bg-[var(--accent-soft)] ${aspectClass[photo.aspect]}`}
      >
        {photo.src ? (
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 420px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 border border-dashed border-[var(--line)] px-4 text-center">
            <span className="text-base font-medium tracking-wide text-[var(--muted)] md:text-lg">
              Photo placeholder
            </span>
            <span className="max-w-[16rem] text-base leading-snug text-[var(--muted)]/80">
              {photo.label}
            </span>
            {photo.pathHint ? (
              <code className="mt-1 rounded bg-[var(--elevated)] px-2 py-1 text-sm text-[var(--foreground)]">
                {photo.pathHint}
              </code>
            ) : null}
          </div>
        )}
      </div>
      <figcaption className="mt-3 text-base text-[var(--muted)]">
        {photo.label}
        {!photo.src ? (
          <span className="ml-2 text-[var(--accent)]">· awaiting file</span>
        ) : null}
      </figcaption>
    </figure>
  );
}
