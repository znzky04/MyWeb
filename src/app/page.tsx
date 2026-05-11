import { ContactSection } from "@/components/home/contact-section";
import { HeroSection } from "@/components/home/hero-section";
import { IntroSection } from "@/components/home/intro-section";
import { NotesEntrySection } from "@/components/home/notes-entry-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { TimelineSection } from "@/components/home/timeline-section";
import { Container } from "@/components/layout/container";
import { SiteShell } from "@/components/layout/site-shell";

export default function HomePage() {
  return (
    <SiteShell>
      <Container className="space-y-12 py-10 sm:py-14">
        <HeroSection />
        <IntroSection />
        <ProjectsSection />
        <TimelineSection />
        <NotesEntrySection />
        <ContactSection />
      </Container>
    </SiteShell>
  );
}
