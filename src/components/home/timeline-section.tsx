import { HomeLocale, homeContent } from "@/content/home-content";
import { SectionHeading } from "@/components/layout/section-heading";
import { TimelineItem } from "@/components/ui/timeline-item";

export function TimelineSection({ copy }: { copy: (typeof homeContent)[HomeLocale] }) {
  return (
    <section className="section-shell rounded-[34px] px-6 py-10 sm:px-8">
      <SectionHeading
        eyebrow={copy.timeline.eyebrow}
        title={copy.timeline.title}
        description={copy.timeline.description}
      />

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {copy.profile.timeline.map((item) => (
          <div key={`${item.year}-${item.title}`} className="liquid-glass rounded-[28px] p-5">
            <TimelineItem item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
