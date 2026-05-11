import { ProjectItem } from "@/lib/types";
import { Tag } from "@/components/ui/tag";

export function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <article className="section-shell rounded-[28px] p-6 transition hover:-translate-y-1">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-medium text-ink-soft">{project.status}</p>
          <h3 className="mt-2 font-heading text-2xl font-extrabold text-ink">{project.name}</h3>
        </div>
        {project.href ? (
          <a href={project.href} target="_blank" rel="noreferrer" className="text-sm font-semibold text-accent-strong">
            查看
          </a>
        ) : null}
      </div>
      <p className="mt-4 text-sm leading-7 text-ink-soft">{project.summary}</p>
      <p className="mt-4 rounded-2xl bg-background-soft px-4 py-3 text-sm leading-7 text-ink">{project.highlight}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </div>
    </article>
  );
}
