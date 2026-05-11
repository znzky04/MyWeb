import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { SiteShell } from "@/components/layout/site-shell";
import { NotesHub } from "@/components/notes/notes-hub";

export default function NotesPage() {
  return (
    <SiteShell>
      <Container className="space-y-8 py-10 sm:py-14">
        <section className="section-shell grid-ambient rounded-[32px] px-6 py-10 sm:px-10">
          <SectionHeading
            eyebrow="Notes space"
            title="这里是更偏私人一点的四个记录房间。"
            description="不用先写再分类，而是直接进入对应分区去记东西。这样会更接近你真实使用网站的方式。"
          />
        </section>
        <NotesHub />
      </Container>
    </SiteShell>
  );
}
