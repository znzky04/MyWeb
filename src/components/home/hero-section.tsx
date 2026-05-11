import { profileContent } from "@/content/profile";
import { siteAssets } from "@/lib/site-config";
import { ButtonLink } from "@/components/ui/button-link";
import { Tag } from "@/components/ui/tag";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[36px] border border-line bg-white/75 px-6 py-10 shadow-[var(--shadow-lg)] sm:px-10 sm:py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(140,225,197,0.2),transparent_26%),radial-gradient(circle_at_left_center,rgba(102,166,255,0.12),transparent_34%)]" />
      <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] text-ink-soft uppercase">Personal site / first edition</p>
          <h1 className="mt-5 font-heading text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {profileContent.name}
          </h1>
          <p className="mt-4 text-lg font-medium leading-8 text-ink">{profileContent.identity}</p>
          <p className="mt-6 max-w-2xl text-base leading-8 text-ink-soft sm:text-lg">{profileContent.intro}</p>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-ink-soft sm:text-base">{profileContent.detail}</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <ButtonLink href="/projects" label="看项目" />
            <ButtonLink href="/notes" label="进入记录空间" tone="secondary" />
          </div>
          <div className="mt-7 flex flex-wrap gap-2">
            {profileContent.keywords.map((keyword) => (
              <Tag key={keyword}>{keyword}</Tag>
            ))}
          </div>
        </div>
        <div className="section-shell rounded-[32px] p-4">
          <div className="relative overflow-hidden rounded-[26px] bg-gradient-to-br from-accent/14 via-white to-accent-pink/18 p-6">
            <div className="absolute right-5 top-5 rounded-full bg-white/70 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-ink-soft uppercase">
              Replaceable visual
            </div>
            <div className="mt-12 rounded-[24px] border border-white/60 bg-white/68 p-6 shadow-[var(--shadow-md)]">
              <div className="h-64 rounded-[22px] border border-dashed border-line-strong bg-[linear-gradient(135deg,rgba(102,166,255,0.14),rgba(255,157,179,0.1))] p-6">
                <div className="flex h-full flex-col justify-between">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.18em] text-ink-soft uppercase">Hero art slot</p>
                    <p className="mt-3 max-w-xs text-sm leading-7 text-ink-soft">
                      将来你可以把这里替换成自己喜欢的二次元插画、游戏主视觉或更贴近个人风格的图片。
                    </p>
                  </div>
                  <p className="text-xs text-ink-soft">{siteAssets.heroImage}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
