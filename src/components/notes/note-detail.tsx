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
    <article className="notes-panel hud-frame notes-cosmos relative overflow-hidden rounded-[34px] px-6 py-8 text-white sm:px-10 sm:py-10">
      <div className="notes-grid absolute inset-0 opacity-24" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_24%),linear-gradient(180deg,transparent,rgba(4,7,18,0.18)_76%,rgba(4,7,18,0.42)_100%)]" />
      <div className="relative">
        <Link href={`/notes/${note.category}`} className="inline-flex items-center gap-2 text-sm font-semibold text-[#a9c8ff]">
          <ArrowLeft className="h-4 w-4" strokeWidth={1.8} />
          返回 {categoryInfo.title}
        </Link>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_18rem]">
          <div>
            <p className="text-xs font-semibold tracking-[0.18em] text-white/48 uppercase">
              {categoryInfo.signal}
            </p>
            <h1 className="mt-4 font-heading text-3xl font-extrabold tracking-[-0.04em] text-white sm:text-5xl">{note.title}</h1>
            {note.updatedAt ? (
              <p className="mt-4 text-sm text-white/56">
                最近更新时间：{new Intl.DateTimeFormat("zh-CN").format(new Date(note.updatedAt))}
              </p>
            ) : null}
          </div>

          <div className={`liquid-glass rounded-[28px] border border-white/12 bg-gradient-to-br ${categoryInfo.accent} px-5 py-5 text-[#10172a]`}>
            <p className="text-xs font-semibold tracking-[0.18em] text-[#34425f]/70 uppercase">{categoryInfo.subtitle}</p>
            <p className="mt-3 font-heading text-2xl font-bold text-[#10172a]">{categoryInfo.title}</p>
            <p className="mt-3 text-sm leading-7 text-[#34425f]">{categoryInfo.description}</p>
          </div>
        </div>

        <div className="note-body relative mt-8 rounded-[28px] border border-white/12 bg-[#0d1325]/76 px-5 py-6 shadow-[0_18px_44px_rgba(0,0,0,0.22)] sm:px-7">
          <div dangerouslySetInnerHTML={{ __html: note.html }} />
        </div>
      </div>
    </article>
  );
}
