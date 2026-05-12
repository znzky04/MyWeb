import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { NotesCategory } from "@/lib/types";

export function CategoryCard({ category }: { category: NotesCategory }) {
  return (
    <Link
      href={`/notes/${category.slug}`}
      className="group section-shell hud-frame notes-orbit relative overflow-hidden rounded-[32px] p-6 transition hover:-translate-y-1"
    >
      <div className={`relative mb-6 overflow-hidden rounded-[24px] bg-gradient-to-br ${category.accent} p-[1px]`}>
        <div className="scanline-soft rounded-[23px] bg-white/42 px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-ink-soft uppercase">{category.roomCode}</p>
              <p className="mt-2 font-heading text-2xl font-bold tracking-[-0.03em] text-ink">{category.roomLabel}</p>
            </div>
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/68 text-ink shadow-[0_12px_24px_rgba(50,67,102,0.1)]">
              <Sparkles className="h-4 w-4" strokeWidth={1.7} />
            </div>
          </div>
        </div>
      </div>

      <p className="text-sm font-medium tracking-[0.16em] text-ink-soft uppercase">{category.subtitle}</p>
      <h3 className="mt-3 font-heading text-3xl font-extrabold tracking-[-0.04em] text-ink">{category.title}</h3>
      <p className="mt-3 text-sm leading-7 text-ink-soft">{category.atmosphere}</p>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm font-semibold text-accent-strong">{category.signal}</span>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/70 px-4 py-2 text-sm font-semibold text-ink transition group-hover:-translate-y-0.5">
          进入房间
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
        </span>
      </div>
    </Link>
  );
}
