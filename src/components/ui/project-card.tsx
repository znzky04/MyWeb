import { ArrowUpRight, Sparkles } from "lucide-react";
import { ProjectItem } from "@/lib/types";
import { Tag } from "@/components/ui/tag";

export function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <article className="liquid-glass group rounded-[30px] border border-white/55 p-6 transition hover:-translate-y-1 hover:shadow-[var(--shadow-lg)]">
      <div className="mb-5 flex items-start justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white/62 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-ink-soft uppercase">
            <Sparkles className="h-3.5 w-3.5" strokeWidth={1.5} />
            {project.status}
          </div>
          <h3 className="mt-4 font-heading text-2xl font-extrabold tracking-tight text-ink">{project.name}</h3>
        </div>
        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#121b2f] text-white transition group-hover:-translate-y-0.5"
          >
            <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
          </a>
        ) : null}
      </div>

      <p className="text-sm leading-7 text-ink-soft">{project.summary}</p>

      <div className="mt-5 rounded-[22px] bg-[linear-gradient(135deg,rgba(111,137,255,0.14),rgba(241,161,183,0.12))] p-4">
        <p className="text-sm leading-7 text-ink">{project.highlight}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <Tag key={item}>{item}</Tag>
        ))}
      </div>
    </article>
  );
}
