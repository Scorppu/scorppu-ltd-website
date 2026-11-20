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
 * Swap-ready signature slot. Replace the file at `portfolio.signature.src`
 * (default `/signatures/eugene-signature.svg`) with Eugene’s real signature.
 * The checked-in SVG is an explicit placeholder, not a handwritten signature.
 */
export default function SignatureMark({
  size = "footer",
  className = "",
  inverted = false,
}: SignatureMarkProps) {
  const width = size === "intro" ? 280 : 180;
  const height = size === "intro" ? 84 : 54;

  return (
    <div className={`inline-flex flex-col items-center gap-2 ${className}`.trim()}>
      <Image
        src={portfolio.signature.src}
        alt={portfolio.signature.alt}
        width={width}
        height={height}
        className={`h-auto w-auto max-w-full ${inverted ? "brightness-110 contrast-125" : ""}`}
        unoptimized
      />
      {portfolio.signature.isPlaceholder ? (
        <span
          className={`text-sm tracking-wide ${
            inverted ? "text-white/55" : "text-[var(--muted)]"
          }`}
        >
          Swap file · {portfolio.signature.src}
        </span>
      ) : null}
    </div>
  );
}
