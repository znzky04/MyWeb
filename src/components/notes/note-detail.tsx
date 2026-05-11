import Link from "next/link";
import { NoteMeta } from "@/lib/types";

export function NoteDetail({
  note,
  categoryTitle,
}: {
  note: NoteMeta;
  categoryTitle: string;
}) {
  return (
    <article className="section-shell rounded-[32px] px-6 py-8 sm:px-10 sm:py-10">
      <Link href={`/notes/${note.category}`} className="text-sm font-semibold text-accent-strong">
        返回 {categoryTitle}
      </Link>
      <h1 className="mt-5 font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">{note.title}</h1>
      {note.updatedAt ? (
        <p className="mt-3 text-sm text-ink-soft">
          最近更新时间 {new Intl.DateTimeFormat("zh-CN").format(new Date(note.updatedAt))}
        </p>
      ) : null}
      <div className="note-body mt-8" dangerouslySetInnerHTML={{ __html: note.html }} />
    </article>
  );
}
