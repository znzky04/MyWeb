export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl">
      <p className="mb-3 text-sm font-medium tracking-[0.18em] text-ink-soft uppercase">{eyebrow}</p>
      <h2 className="font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-8 text-ink-soft sm:text-lg">{description}</p>
    </div>
  );
}
