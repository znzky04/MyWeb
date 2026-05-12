import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { SiteShell } from "@/components/layout/site-shell";
import { NotesList } from "@/components/notes/notes-list";
import { getNotesByCategory } from "@/lib/notes";
import { notesCategories } from "@/lib/site-config";
import { NotesCategoryKey } from "@/lib/types";

type CategoryPageProps = {
  params: Promise<{ category: string }>;
};

export async function generateStaticParams() {
  return notesCategories.map((category) => ({ category: category.slug }));
}

export default async function NotesCategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryInfo = notesCategories.find((item) => item.slug === category);

  if (!categoryInfo) {
    notFound();
  }

  const notes = await getNotesByCategory(category as NotesCategoryKey);

  return (
    <SiteShell>
      <Container className="space-y-8 py-10 sm:py-14">
        <section className="notes-panel hud-frame notes-cosmos relative overflow-hidden rounded-[36px] px-6 py-8 text-white sm:px-8 sm:py-10">
          <div className="notes-grid absolute inset-0 opacity-30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_28%),linear-gradient(180deg,transparent,rgba(5,8,18,0.18)_72%,rgba(5,8,18,0.4)_100%)]" />
          <div className="relative grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/8 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-white/64 uppercase">
                {categoryInfo.signal}
              </p>
              <h1 className="mt-5 font-heading text-[clamp(2.7rem,5.6vw,4.7rem)] font-extrabold leading-[0.98] tracking-[-0.05em] text-white">
                {categoryInfo.title}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-white/72 sm:text-lg">{categoryInfo.atmosphere}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className={`liquid-glass rounded-[26px] border border-white/10 bg-gradient-to-br ${categoryInfo.accent} p-5 text-[#10172a]`}>
                <p className="text-xs font-semibold tracking-[0.18em] text-[#34425f]/70 uppercase">Channel profile</p>
                <p className="mt-3 font-heading text-2xl font-bold text-[#10172a]">{categoryInfo.subtitle}</p>
                <p className="mt-3 text-sm leading-7 text-[#34425f]">{categoryInfo.description}</p>
              </div>
              <div className="liquid-glass rounded-[26px] border border-white/10 bg-white/7 px-5 py-5 text-white">
                <p className="text-xs font-semibold tracking-[0.18em] text-white/50 uppercase">Archive count</p>
                <p className="mt-3 font-heading text-4xl font-extrabold text-white">{notes.length}</p>
                <p className="mt-3 text-sm leading-7 text-white/68">这里的记录会被排成更像档案卡和可翻阅章节的列表，而不是普通博客流。</p>
              </div>
            </div>
          </div>
        </section>

        <NotesList notes={notes} category={categoryInfo} />
      </Container>
    </SiteShell>
  );
}
