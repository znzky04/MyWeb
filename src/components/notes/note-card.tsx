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
    <article className="section-shell hud-frame relative overflow-hidden rounded-[28px] px-5 py-5 transition hover:-translate-y-1">
      <div className="absolute inset-0 notes-orbit opacity-80" />
      <div className="relative grid gap-5 md:grid-cols-[auto_1fr_auto] md:items-start">
        <div className={`h-20 w-20 rounded-[24px] bg-gradient-to-br ${category?.accent ?? "from-white/70 to-white/30"} p-[1px]`}>
          <div className="flex h-full w-full items-end rounded-[23px] bg-white/68 px-3 py-2">
            <span className="font-heading text-xl font-extrabold tracking-[-0.04em] text-ink">0{index + 1}</span>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-[0.18em] text-ink-soft uppercase">
            {category?.roomCode ?? note.category} / archive log
          </p>
          <h3 className="mt-3 text-[1.45rem] font-bold tracking-[-0.03em] text-ink">
            <Link href={`/notes/${note.category}/${note.slug}`}>{note.title}</Link>
          </h3>
          {note.updatedAt ? (
            <p className="mt-2 text-xs text-ink-soft">{new Intl.DateTimeFormat("zh-CN").format(new Date(note.updatedAt))}</p>
          ) : null}
          <p className="mt-4 max-w-2xl text-sm leading-7 text-ink-soft">
            {note.content.replace(/\s+/g, " ").slice(0, 120)}
            {note.content.length > 120 ? "..." : ""}
          </p>
        </div>

        <Link
          href={`/notes/${note.category}/${note.slug}`}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/72 text-ink shadow-[0_10px_24px_rgba(50,67,102,0.12)] transition hover:-translate-y-0.5"
          aria-label={`查看 ${note.title}`}
        >
          <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
        </Link>
      </div>
    </article>
  );
}
