import { profileContent } from "@/content/profile";
import { SectionHeading } from "@/components/layout/section-heading";
import { TimelineItem } from "@/components/ui/timeline-item";

export function TimelineSection() {
  return (
    <section className="section-shell rounded-[34px] px-6 py-10 sm:px-10">
      <SectionHeading
        eyebrow="Growth timeline"
        title="比简历更轻一点，但能看见方向和轨迹。"
        description="这里适合用来放学习阶段、项目节点、比赛经历，或者那些你觉得真的让自己往前走了一步的时刻。"
      />

      <div className="relative mt-10 grid gap-8 before:absolute before:left-[6px] before:top-2 before:h-[calc(100%-12px)] before:w-px before:bg-line-strong md:grid-cols-3 md:before:hidden">
        {profileContent.timeline.map((item) => (
          <TimelineItem key={`${item.year}-${item.title}`} item={item} />
        ))}
      </div>
    </section>
  );
}
