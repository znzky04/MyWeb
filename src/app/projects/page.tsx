import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { SiteShell } from "@/components/layout/site-shell";
import { ProjectCard } from "@/components/ui/project-card";
import { projectsContent } from "@/content/projects";

export default function ProjectsPage() {
  return (
    <SiteShell>
      <Container className="space-y-8 py-10 sm:py-14">
        <SectionHeading
          eyebrow="Projects"
          title="把最值得代表自己的东西，认真地放出来。"
          description="这里会比首页展示得更完整一些。之后你可以把课程项目、个人练习、小游戏、工具站等内容持续补进来。"
        />
        <div className="grid gap-5 lg:grid-cols-2">
          {projectsContent.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </Container>
    </SiteShell>
  );
}
