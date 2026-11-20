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
    <div className="mb-10 max-w-2xl md:mb-12">
      <p className="text-sm tracking-[0.16em] text-stone-400 uppercase dark:text-stone-500">
        {eyebrow}
      </p>
      <h2 className="mt-3 text-2xl font-medium tracking-tight text-stone-900 md:text-3xl dark:text-stone-100">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-stone-600 dark:text-stone-400">
          {description}
        </p>
      ) : null}
    </div>
  );
}
