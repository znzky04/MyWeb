import { profileContent } from "@/content/profile";
import { SectionHeading } from "@/components/layout/section-heading";
import { TimelineItem } from "@/components/ui/timeline-item";

export function TimelineSection() {
  return (
    <section className="section-shell rounded-[34px] px-6 py-10 sm:px-8">
      <SectionHeading
        eyebrow="Growth timeline"
        title="比简历更轻一点，但能看见方向和轨迹。"
        description="这里适合用来放学习阶段、项目节点、比赛经历，或者那些你觉得真的让自己往前走了一步的时刻。"
      />

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {profileContent.timeline.map((item) => (
          <div key={`${item.year}-${item.title}`} className="liquid-glass rounded-[28px] p-5">
            <TimelineItem item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
