import { profileContent } from "@/content/profile";
import { SectionHeading } from "@/components/layout/section-heading";

export function ContactSection() {
  return (
    <section className="section-shell rounded-[32px] px-6 py-10 sm:px-10">
      <SectionHeading
        eyebrow="Links"
        title="想继续了解我，可以从这些入口过去。"
        description="这里先保持简洁，后面你可以再补充常用平台、友链页或其他你想公开的链接。"
      />
      <div className="mt-8 flex flex-wrap gap-3">
        {profileContent.socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-line-strong bg-white/82 px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5"
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
}
