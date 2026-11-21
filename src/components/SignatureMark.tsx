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
 */
export default function SignatureMark({
  size = "footer",
  className = "",
  inverted = false,
}: SignatureMarkProps) {
  const width = size === "intro" ? 360 : 220;
  const height = size === "intro" ? 164 : 100;

  return (
    <div className={`inline-flex flex-col items-start ${className}`.trim()}>
      <Image
        src={portfolio.signature.src}
        alt={portfolio.signature.alt}
        width={width}
        height={height}
        className={`h-auto w-auto max-w-full ${
          inverted ? "brightness-0 invert" : ""
        }`}
        unoptimized
        priority={size === "intro"}
      />
    </div>
  );
}
