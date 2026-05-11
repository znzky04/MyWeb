import { TimelineItem as TimelineItemType } from "@/lib/types";

export function TimelineItem({ item }: { item: TimelineItemType }) {
  return (
    <div className="relative pl-8">
      <div className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full bg-accent shadow-[0_0_0_6px_rgba(102,166,255,0.12)]" />
      <p className="text-sm font-medium tracking-wide text-ink-soft">{item.year}</p>
      <h3 className="mt-2 text-lg font-bold text-ink">{item.title}</h3>
      <p className="mt-2 text-sm leading-7 text-ink-soft">{item.description}</p>
    </div>
  );
}
