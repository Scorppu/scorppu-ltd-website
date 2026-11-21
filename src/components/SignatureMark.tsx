import Image from "next/image";
import { portfolio } from "@/data/portfolio";

type SignatureMarkProps = {
  /** Larger mark for the welcome intro; modest for footer letterhead */
  size?: "intro" | "footer";
  className?: string;
  /** Force light-on-dark contrast in the welcome overlay */
  inverted?: boolean;
};

/**
 * Eugene’s signature mark — trimmed transparent PNG from his delivered JPG.
 * Footer stays modest inside the letterhead lockup; intro can be larger.
 */
export default function SignatureMark({
  size = "footer",
  className = "",
  inverted = false,
}: SignatureMarkProps) {
  // Trimmed source ≈ 1375×865 (~1.59:1).
  const width = size === "intro" ? 240 : 100;
  const height = size === "intro" ? 151 : 63;

  return (
    <div className={`inline-flex items-start leading-none ${className}`.trim()}>
      <Image
        src={portfolio.signature.src}
        alt={portfolio.signature.alt}
        width={width}
        height={height}
        className={`block h-auto max-w-full ${
          inverted ? "brightness-0 invert" : ""
        }`}
        style={{ width, height: "auto" }}
        unoptimized
        priority={size === "intro"}
      />
    </div>
  );
}
