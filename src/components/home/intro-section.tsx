import { profileContent } from "@/content/profile";
import { SectionHeading } from "@/components/layout/section-heading";

export function IntroSection() {
  return (
    <section className="section-shell rounded-[32px] px-6 py-10 sm:px-10">
      <SectionHeading
        eyebrow="About me"
        title="一个既想认真做作品，也想把喜欢的东西留在网上的人。"
        description="主页会更清楚地介绍我的项目和成长过程，记录空间则会保留更多私人感和兴趣感。"
      />
      <div className="mt-8 grid gap-5 md:grid-cols-3">
        {profileContent.longBio.map((paragraph) => (
          <div key={paragraph} className="rounded-[24px] bg-white/76 p-5 text-sm leading-7 text-ink-soft shadow-[var(--shadow-md)]">
            {paragraph}
          </div>
        ))}
      </div>
    </section>
  );
}
