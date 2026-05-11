import Link from "next/link";
import { NoteMeta } from "@/lib/types";

export function NoteCard({ note }: { note: NoteMeta }) {
  return (
    <article className="section-shell rounded-[24px] p-5 transition hover:-translate-y-1">
      <p className="text-xs font-semibold tracking-[0.18em] text-ink-soft uppercase">{note.category}</p>
      <h3 className="mt-3 text-xl font-bold text-ink">
        <Link href={`/notes/${note.category}/${note.slug}`}>{note.title}</Link>
      </h3>
      {note.updatedAt ? (
        <p className="mt-2 text-xs text-ink-soft">{new Intl.DateTimeFormat("zh-CN").format(new Date(note.updatedAt))}</p>
      ) : null}
      <p className="mt-4 text-sm leading-7 text-ink-soft">
        {note.content.replace(/\s+/g, " ").slice(0, 110)}
        {note.content.length > 110 ? "..." : ""}
      </p>
    </article>
  );
}
