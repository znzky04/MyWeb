import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/layout/section-heading";
import { SiteShell } from "@/components/layout/site-shell";
import { profileContent } from "@/content/profile";

export default function AboutPage() {
  return (
    <SiteShell>
      <Container className="space-y-8 py-10 sm:py-14">
        <section className="section-shell rounded-[32px] px-6 py-10 sm:px-10">
          <SectionHeading
            eyebrow="About"
            title="想把网站做成长期作品，也想把它变成自己能一直回来的地方。"
            description="这一页会比首页更像完整的自我介绍，可以慢慢替换成真正属于你的成长故事、偏好和表达方式。"
          />
          <div className="mt-8 grid gap-5">
            {profileContent.longBio.map((paragraph) => (
              <p key={paragraph} className="text-base leading-8 text-ink-soft">
                {paragraph}
              </p>
            ))}
          </div>
        </section>
      </Container>
    </SiteShell>
  );
}
