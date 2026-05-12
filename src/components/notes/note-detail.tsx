import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { NoteMeta, NotesCategory } from "@/lib/types";

export function NoteDetail({
  note,
  categoryInfo,
}: {
  note: NoteMeta;
  categoryInfo: NotesCategory;
}) {
  return (
    <article className="section-shell hud-frame notes-orbit relative overflow-hidden rounded-[34px] px-6 py-8 sm:px-10 sm:py-10">
      <div className="absolute inset-0 soft-grid opacity-20" />
      <div className="relative">
        <Link href={`/notes/${note.category}`} className="inline-flex items-center gap-2 text-sm font-semibold text-accent-strong">
          <ArrowLeft className="h-4 w-4" strokeWidth={1.8} />
          返回 {categoryInfo.title}
        </Link>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_18rem]">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-ink-soft uppercase">
              {categoryInfo.roomCode} / {categoryInfo.signal}
            </p>
            <h1 className="mt-4 font-heading text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-5xl">{note.title}</h1>
            {note.updatedAt ? (
              <p className="mt-4 text-sm text-ink-soft">
                最近更新时间：{new Intl.DateTimeFormat("zh-CN").format(new Date(note.updatedAt))}
              </p>
            ) : null}
          </div>

          <div className={`liquid-glass rounded-[28px] bg-gradient-to-br ${categoryInfo.accent} px-5 py-5`}>
            <p className="text-xs font-semibold tracking-[0.18em] text-ink-soft uppercase">{categoryInfo.roomLabel}</p>
            <p className="mt-3 font-heading text-2xl font-bold text-ink">{categoryInfo.subtitle}</p>
            <p className="mt-3 text-sm leading-7 text-ink-soft">{categoryInfo.atmosphere}</p>
          </div>
        </div>

        <div className="note-body relative mt-8 rounded-[28px] border border-white/50 bg-white/68 px-5 py-6 shadow-[0_12px_36px_rgba(50,67,102,0.1)] sm:px-7">
          <div dangerouslySetInnerHTML={{ __html: note.html }} />
        </div>
      </div>
    </article>
  );
}
