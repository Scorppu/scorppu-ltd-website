import Image from "next/image";
import { portfolio } from "@/data/portfolio";

type SignatureMarkProps = {
  /** Larger mark for the welcome intro */
  size?: "intro" | "footer";
  className?: string;
  /** Force light-on-dark contrast in the welcome overlay */
  inverted?: boolean;
};

/**
 * Eugene’s signature mark — raster (JPG source with white keyed to
 * transparent PNG for clean placement on paper and the dark welcome panel).
 * Sized as a small signature mark, not a large graphic.
 */
export default function SignatureMark({
  size = "footer",
  className = "",
  inverted = false,
}: SignatureMarkProps) {
  // Keep the mark small — signature, not a hero graphic.
  // Source aspect ≈ 2084×951 (~2.19:1).
  const width = size === "intro" ? 148 : 96;
  const height = size === "intro" ? 68 : 44;

  return (
    <div className={`inline-flex flex-col items-start ${className}`.trim()}>
      <Image
        src={portfolio.signature.src}
        alt={portfolio.signature.alt}
        width={width}
        height={height}
        className={`h-auto max-w-full ${inverted ? "brightness-0 invert" : ""}`}
        style={{ width, height: "auto" }}
        unoptimized
        priority={size === "intro"}
      />
    </div>
  );
}
