import { notFound } from "next/navigation";
import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
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
        <section className="section-shell rounded-[32px] px-6 py-10 sm:px-10">
          <SectionHeading
            eyebrow={categoryInfo.subtitle}
            title={categoryInfo.title}
            description={categoryInfo.description}
          />
        </section>
        <NotesList notes={notes} />
      </Container>
    </SiteShell>
  );
}
