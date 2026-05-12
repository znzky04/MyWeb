import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { NotesCategory } from "@/lib/types";

export function CategoryCard({ category }: { category: NotesCategory }) {
  return (
    <Link
      href={`/notes/${category.slug}`}
      className="group notes-panel hud-frame notes-cosmos vn-stars relative overflow-hidden rounded-[32px] p-6 text-ink transition hover:-translate-y-1"
    >
      <div className="notes-grid absolute inset-0 opacity-25" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.26),transparent_24%),linear-gradient(180deg,transparent,rgba(236,241,255,0.26)_76%,rgba(220,228,246,0.42)_100%)]" />
      <div className={`relative mb-6 overflow-hidden rounded-[24px] bg-gradient-to-br ${category.accent} p-[1px]`}>
        <div className="scanline-soft rounded-[23px] bg-white/48 px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-ink-soft uppercase">{category.signal}</p>
              <p className="mt-2 font-heading text-2xl font-bold tracking-[-0.03em] text-ink">{category.subtitle}</p>
            </div>
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/72 text-ink shadow-[0_12px_24px_rgba(95,113,152,0.12)]">
              <Sparkles className="h-4 w-4" strokeWidth={1.7} />
            </div>
          </div>
        </div>
      </div>

      <p className="relative text-sm font-medium tracking-[0.16em] text-ink-soft uppercase">chapter route</p>
      <h3 className="relative mt-3 font-heading text-3xl font-extrabold tracking-[-0.04em] text-ink">{category.title}</h3>
      <p className="relative mt-3 text-sm leading-7 text-ink-soft">{category.atmosphere}</p>

      <div className="relative mt-6 flex items-center justify-between">
        <span className="holo-line text-sm font-semibold text-[#a9c8ff]">{category.description}</span>
        <span className="vn-ribbon inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-ink transition group-hover:-translate-y-0.5">
          进入章节
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
        </span>
      </div>
    </Link>
  );
}
