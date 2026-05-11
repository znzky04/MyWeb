import { profileContent } from "@/content/profile";
import { siteAssets } from "@/lib/site-config";
import { ButtonLink } from "@/components/ui/button-link";
import { Tag } from "@/components/ui/tag";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-[42px] border border-line bg-white/78 px-6 py-10 shadow-[var(--shadow-lg)] sm:px-10 sm:py-14 lg:px-12 lg:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(140,225,197,0.24),transparent_26%),radial-gradient(circle_at_left_center,rgba(102,166,255,0.14),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.24),transparent)]" />
      <div className="absolute -left-14 top-12 h-36 w-36 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-48 w-48 rounded-full bg-accent-pink/12 blur-3xl" />

      <div className="relative grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/74 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-ink-soft uppercase shadow-[var(--shadow-md)]">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Personal site / first edition
          </div>

          <h1 className="mt-6 max-w-3xl font-heading text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            {profileContent.name}
          </h1>

          <p className="mt-4 max-w-2xl text-lg font-medium leading-8 text-ink">{profileContent.identity}</p>

          <p className="mt-7 max-w-2xl text-base leading-8 text-ink-soft sm:text-lg">{profileContent.intro}</p>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-ink-soft sm:text-base">{profileContent.detail}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/projects" label="看项目" />
            <ButtonLink href="/notes" label="进入记录空间" tone="secondary" />
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {profileContent.keywords.map((keyword) => (
              <Tag key={keyword}>{keyword}</Tag>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="section-shell rounded-[34px] p-4">
            <div className="relative overflow-hidden rounded-[28px] bg-gradient-to-br from-accent/16 via-white to-accent-pink/18 p-6">
              <div className="absolute right-5 top-5 rounded-full bg-white/74 px-3 py-1 text-xs font-semibold tracking-[0.18em] text-ink-soft uppercase">
                Replaceable visual
              </div>

              <div className="mt-12 rounded-[26px] border border-white/60 bg-white/72 p-6 shadow-[var(--shadow-md)]">
                <div className="h-72 rounded-[24px] border border-dashed border-line-strong bg-[linear-gradient(135deg,rgba(102,166,255,0.16),rgba(255,157,179,0.12))] p-6">
                  <div className="flex h-full flex-col justify-between">
                    <div>
                      <p className="text-xs font-semibold tracking-[0.18em] text-ink-soft uppercase">Hero art slot</p>
                      <p className="mt-3 max-w-xs text-sm leading-7 text-ink-soft">
                        之后你可以把这里替换成自己喜欢的二次元插画、游戏主视觉，或者更贴近个人风格的图片。
                      </p>
                    </div>
                    <p className="text-xs text-ink-soft">{siteAssets.heroImage}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -bottom-5 -left-2 hidden rounded-[26px] border border-white/70 bg-white/76 p-4 shadow-[var(--shadow-md)] lg:block">
            <p className="text-xs font-semibold tracking-[0.18em] text-ink-soft uppercase">Mood</p>
            <p className="mt-2 font-heading text-lg font-bold text-ink">明亮 / 青春 / 可持续更新</p>
          </div>

          <div className="absolute -right-2 top-12 hidden rounded-[24px] border border-white/70 bg-white/76 px-4 py-3 shadow-[var(--shadow-md)] lg:block">
            <p className="text-xs text-ink-soft">Future music slot</p>
            <p className="mt-1 text-sm font-semibold text-ink">/{siteAssets.musicFile.split("/").pop()}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
