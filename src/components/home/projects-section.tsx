import { projectsContent } from "@/content/projects";
import { SectionHeading } from "@/components/layout/section-heading";
import { ProjectCard } from "@/components/ui/project-card";

export function ProjectsSection() {
  return (
    <section className="space-y-8">
      <SectionHeading
        eyebrow="Selected projects"
        title="先展示最能代表自己的几块内容。"
        description="这一版先把项目展示成清晰、轻盈、可继续扩展的结构，后面你可以慢慢把真正重要的作品填进来。"
      />

      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr_0.9fr]">
        {projectsContent.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  );
}
