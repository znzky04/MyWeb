import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { NoteMeta, NotesCategory } from "@/lib/types";

export function NoteCard({
  note,
  index = 0,
  category,
}: {
  note: NoteMeta;
  index?: number;
  category?: NotesCategory;
}) {
  return (
    <article className="notes-panel hud-frame notes-cosmos relative overflow-hidden rounded-[28px] px-5 py-5 text-white transition hover:-translate-y-1">
      <div className="notes-grid absolute inset-0 opacity-24" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_24%),linear-gradient(180deg,transparent,rgba(4,7,18,0.22)_76%,rgba(4,7,18,0.4)_100%)]" />
      <div className="relative grid gap-5 md:grid-cols-[auto_1fr_auto] md:items-start">
        <div className={`h-20 w-20 rounded-[24px] bg-gradient-to-br ${category?.accent ?? "from-white/30 to-white/10"} p-[1px]`}>
          <div className="flex h-full w-full items-end rounded-[23px] bg-[#0d1325]/72 px-3 py-2">
            <span className="font-heading text-xl font-extrabold tracking-[-0.04em] text-white">0{index + 1}</span>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-white/48 uppercase">
            archive log / {category?.signal ?? note.category}
          </p>
          <h3 className="mt-3 text-[1.45rem] font-bold tracking-[-0.03em] text-white">
            <Link href={`/notes/${note.category}/${note.slug}`}>{note.title}</Link>
          </h3>
          {note.updatedAt ? (
            <p className="mt-2 text-xs text-white/46">{new Intl.DateTimeFormat("zh-CN").format(new Date(note.updatedAt))}</p>
          ) : null}
          <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72">
            {note.content.replace(/\s+/g, " ").slice(0, 120)}
            {note.content.length > 120 ? "..." : ""}
          </p>
        </div>

        <Link
          href={`/notes/${note.category}/${note.slug}`}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/14 bg-white/8 text-white shadow-[0_10px_24px_rgba(0,0,0,0.18)] transition hover:-translate-y-0.5"
          aria-label={`查看 ${note.title}`}
        >
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
        </Link>
      </div>
    </article>
  );
}
