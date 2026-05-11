import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { SiteShell } from "@/components/layout/site-shell";
import { NoteDetail } from "@/components/notes/note-detail";
import { getCategorySlugs, getNoteBySlug } from "@/lib/notes";
import { notesCategories } from "@/lib/site-config";
import { NotesCategoryKey } from "@/lib/types";

type NoteDetailPageProps = {
  params: Promise<{ category: string; slug: string }>;
};

export async function generateStaticParams() {
  const allParams = notesCategories.flatMap((category) =>
    getCategorySlugs(category.key).map((slug) => ({ category: category.slug, slug })),
  );
  return allParams;
}

export default async function NoteDetailPage({ params }: NoteDetailPageProps) {
  const { category, slug } = await params;
  const categoryInfo = notesCategories.find((item) => item.slug === category);

  if (!categoryInfo) {
    notFound();
  }

  const note = await getNoteBySlug(category as NotesCategoryKey, slug);

  return (
    <SiteShell>
      <Container className="py-10 sm:py-14">
        <NoteDetail note={note} categoryTitle={categoryInfo.title} />
      </Container>
    </SiteShell>
  );
}
