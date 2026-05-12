import { HomeLocale, homeContent } from "@/content/home-content";
import { SectionHeading } from "@/components/layout/section-heading";
import { ProjectCard } from "@/components/ui/project-card";

export function ProjectsSection({ copy }: { copy: (typeof homeContent)[HomeLocale] }) {
  return (
    <section className="space-y-8">
      <SectionHeading
        eyebrow={copy.projects.eyebrow}
        title={copy.projects.title}
        description={copy.projects.description}
      />

      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
        {copy.projects.items.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
