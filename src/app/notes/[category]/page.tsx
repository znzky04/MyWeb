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
        <section className="notes-panel hud-frame notes-cosmos vn-stars relative overflow-hidden rounded-[36px] px-6 py-8 sm:px-8 sm:py-10">
          <div className="notes-grid absolute inset-0 opacity-28" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.2),transparent_28%),linear-gradient(180deg,transparent,rgba(236,241,255,0.24)_72%,rgba(220,228,246,0.42)_100%)]" />
          <div className="relative grid gap-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/46 bg-white/56 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-ink-soft uppercase">
                chapter menu / {categoryInfo.signal}
              </p>
              <h1 className="mt-5 font-heading text-[clamp(2.7rem,5.6vw,4.7rem)] font-extrabold leading-[0.98] tracking-[-0.05em] text-ink">
                {categoryInfo.title}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-8 text-ink-soft sm:text-lg">{categoryInfo.atmosphere}</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className={`vn-ribbon rounded-[26px] bg-gradient-to-br ${categoryInfo.accent} p-5 text-[#10172a]`}>
                <p className="text-xs font-semibold tracking-[0.18em] text-[#34425f]/70 uppercase">Channel profile</p>
                <p className="mt-3 font-heading text-2xl font-bold text-[#10172a]">{categoryInfo.subtitle}</p>
                <p className="mt-3 text-sm leading-7 text-[#34425f]">{categoryInfo.description}</p>
              </div>
              <div className="vn-ribbon rounded-[26px] px-5 py-5 text-ink">
                <p className="text-xs font-semibold tracking-[0.18em] text-ink-soft uppercase">Story count</p>
                <p className="mt-3 font-heading text-4xl font-extrabold text-ink">{notes.length}</p>
                <p className="mt-3 text-sm leading-7 text-ink-soft">这里的记录会更像章节和存档列表，而不是普通博客流。</p>
              </div>
            </div>
          </div>
        </section>

        <NotesList notes={notes} category={categoryInfo} />
      </Container>
    </SiteShell>
  );
}
