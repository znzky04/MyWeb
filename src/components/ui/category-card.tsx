import Link from "next/link";
import { NotesCategory } from "@/lib/types";

export function CategoryCard({ category }: { category: NotesCategory }) {
  return (
    <Link
      href={`/notes/${category.slug}`}
      className={`group section-shell grid-ambient rounded-[30px] p-6 transition hover:-translate-y-1`}
    >
      <div className={`mb-6 h-28 rounded-[22px] bg-gradient-to-br ${category.accent}`} />
      <p className="text-sm font-medium tracking-[0.16em] text-ink-soft uppercase">{category.subtitle}</p>
      <h3 className="mt-3 font-heading text-2xl font-extrabold text-ink">{category.title}</h3>
      <p className="mt-3 text-sm leading-7 text-ink-soft">{category.description}</p>
      <span className="mt-6 inline-flex text-sm font-semibold text-accent-strong">进入分区</span>
    </Link>
  );
}
