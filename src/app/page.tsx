import Link from "next/link";
import { ContactSection } from "@/components/home/contact-section";
import { HeroSection } from "@/components/home/hero-section";
import { IntroSection } from "@/components/home/intro-section";
import { NotesEntrySection } from "@/components/home/notes-entry-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { TimelineSection } from "@/components/home/timeline-section";
import { Container } from "@/components/layout/container";
import { SiteShell } from "@/components/layout/site-shell";
import { homeContent, HomeLocale } from "@/content/home-content";

type HomePageProps = {
  searchParams: Promise<{ lang?: string }>;
};

export default async function HomePage({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const locale: HomeLocale = params.lang === "en" ? "en" : "zh";
  const copy = homeContent[locale];

  return (
    <SiteShell homeLocale={locale}>
      <Container className="space-y-16 py-6 sm:py-8">
        <div className="flex justify-end">
          <div className="liquid-glass inline-flex rounded-full border border-white/60 p-1 shadow-[var(--shadow-md)]">
            <Link
              href="/?lang=zh"
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                locale === "zh" ? "bg-[#121b2f] text-white shadow-[0_10px_24px_rgba(17,23,38,0.18)]" : "text-ink-soft hover:bg-white/45 hover:text-ink"
              }`}
            >
              中文
            </Link>
            <Link
              href="/?lang=en"
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                locale === "en" ? "bg-[#121b2f] text-white shadow-[0_10px_24px_rgba(17,23,38,0.18)]" : "text-ink-soft hover:bg-white/45 hover:text-ink"
              }`}
            >
              English
            </Link>
          </div>
        </div>

        <HeroSection locale={locale} copy={copy} />
        <IntroSection copy={copy} />
        <ProjectsSection copy={copy} />
        <TimelineSection copy={copy} />
        <NotesEntrySection locale={locale} copy={copy} />
        <ContactSection copy={copy} />
      </Container>
    </SiteShell>
  );
}
