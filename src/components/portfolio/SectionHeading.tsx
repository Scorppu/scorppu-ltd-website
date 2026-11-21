type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="mb-10 max-w-2xl md:mb-14">
      <p className="text-base tracking-[0.18em] text-[var(--accent)] uppercase md:text-lg">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-3xl font-medium tracking-tight text-[var(--foreground)] md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-[var(--muted)] md:text-xl">
          {description}
        </p>
      ) : null}
    </div>
  );
}
