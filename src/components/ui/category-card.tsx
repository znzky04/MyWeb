import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { NotesCategory } from "@/lib/types";

export function CategoryCard({ category }: { category: NotesCategory }) {
  return (
    <Link
      href={`/notes/${category.slug}`}
      className="group notes-panel hud-frame notes-cosmos relative overflow-hidden rounded-[32px] p-6 text-white transition hover:-translate-y-1"
    >
      <div className="notes-grid absolute inset-0 opacity-25" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_24%),linear-gradient(180deg,transparent,rgba(4,7,18,0.22)_76%,rgba(4,7,18,0.4)_100%)]" />
      <div className={`relative mb-6 overflow-hidden rounded-[24px] bg-gradient-to-br ${category.accent} p-[1px]`}>
        <div className="scanline-soft rounded-[23px] bg-[#0d1325]/65 px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-white/54 uppercase">{category.signal}</p>
              <p className="mt-2 font-heading text-2xl font-bold tracking-[-0.03em] text-white">{category.subtitle}</p>
            </div>
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white shadow-[0_12px_24px_rgba(0,0,0,0.18)]">
              <Sparkles className="h-4 w-4" strokeWidth={1.7} />
            </div>
          </div>
        </div>
      </div>

      <p className="relative text-sm font-medium tracking-[0.16em] text-white/52 uppercase">archive channel</p>
      <h3 className="relative mt-3 font-heading text-3xl font-extrabold tracking-[-0.04em] text-white">{category.title}</h3>
      <p className="relative mt-3 text-sm leading-7 text-white/72">{category.atmosphere}</p>

      <div className="relative mt-6 flex items-center justify-between">
        <span className="holo-line text-sm font-semibold text-[#a9c8ff]">{category.description}</span>
        <span className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/8 px-4 py-2 text-sm font-semibold text-white transition group-hover:-translate-y-0.5">
          进入房间
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
        </span>
      </div>
    </Link>
  );
}
