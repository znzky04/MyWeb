import { Music4, Sparkles, Star } from "lucide-react";
import { HomeLocale, homeContent } from "@/content/home-content";
import { siteAssets } from "@/lib/site-config";
import { ButtonLink } from "@/components/ui/button-link";
import { Tag } from "@/components/ui/tag";

const skyVideo =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260424_064411_9e9d7f84-9277-41f4-ab10-59172d89e6be.mp4";
const meadowVideo =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_150203_44a5bd32-516a-47ce-a077-8acbf9aa8991.mp4";

export function HeroSection({
  locale,
  copy,
}: {
  locale: HomeLocale;
  copy: (typeof homeContent)[HomeLocale];
}) {
  const { profile, hero } = copy;

  return (
    <section className="relative overflow-hidden rounded-[40px] border border-white/45 bg-[#d9d9d9] shadow-[var(--shadow-lg)]">
      <div className="absolute inset-0 ambient-mask">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          disableRemotePlayback
          poster="https://images.unsplash.com/photo-1557683316-973673baf926?w=1600&q=60"
        >
          <source src={skyVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(252,253,255,0.14),rgba(244,248,255,0.42)_38%,rgba(239,242,248,0.9)_100%)]" />
      </div>

      <div className="absolute inset-0">
        <div className="absolute -left-12 top-24 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(160,211,255,0.42),transparent_68%)] blur-2xl" />
        <div className="absolute -right-10 top-12 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,189,203,0.32),transparent_70%)] blur-2xl" />
        <div className="absolute bottom-0 left-[10%] h-56 w-[36rem] rounded-full bg-[radial-gradient(circle,rgba(246,231,161,0.24),transparent_70%)] blur-3xl" />
      </div>

      <div className="relative px-5 pb-6 pt-8 sm:px-8 sm:pb-8 sm:pt-10 lg:min-h-[calc(100vh-132px)] lg:px-10 lg:pb-10 lg:pt-12">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_520px] xl:items-center">
          <div className="max-w-3xl xl:pr-4">
            <div className="liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-[0.18em] text-ink-soft uppercase">
              <Sparkles className="h-3.5 w-3.5" strokeWidth={1.5} />
              {hero.badge}
            </div>

            <h1 className="mt-6 font-heading text-[clamp(3.25rem,8vw,6.35rem)] font-extrabold leading-[0.94] tracking-[-0.05em] text-ink">
              {profile.name}
            </h1>

            <p className="mt-5 max-w-2xl text-[clamp(1.05rem,2.3vw,1.4rem)] font-medium leading-8 text-ink">{profile.identity}</p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-ink-soft sm:text-lg">{profile.intro}</p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-ink-soft sm:text-base">{profile.detail}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href="/projects" label={hero.primaryCta} />
              <ButtonLink href="/notes" label={hero.secondaryCta} tone="secondary" />
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {profile.keywords.map((keyword) => (
                <Tag key={keyword}>{keyword}</Tag>
              ))}
            </div>
          </div>

          <div className="space-y-4 xl:pl-2">
            <div className="liquid-glass video-sheen relative rounded-[32px] border border-white/55 p-4">
              <div className="absolute inset-x-5 top-5 z-10 flex flex-wrap items-center justify-between gap-3 text-xs font-semibold tracking-[0.18em] text-white/84 uppercase">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/12 px-3 py-1.5 backdrop-blur-md">
                  <Sparkles className="h-3.5 w-3.5" strokeWidth={1.5} />
                  {hero.visualLabel}
                </span>
                <span className="rounded-full bg-white/14 px-3 py-1.5 backdrop-blur-md">{siteAssets.heroImage}</span>
              </div>

              <div className="relative h-[24rem] overflow-hidden rounded-[28px] bg-[#0d1321] sm:h-[27rem]">
                <video className="absolute inset-0 h-full w-full object-cover" autoPlay loop muted playsInline preload="auto">
                  <source src={meadowVideo} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,12,24,0.06),rgba(8,12,24,0.28)_52%,rgba(8,12,24,0.78)_100%)]" />

                <div className="absolute right-4 top-16 z-10 flex max-w-[16rem] flex-col gap-3 sm:right-5">
                  <div className="liquid-glass rounded-[20px] px-4 py-3 text-white">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/68 text-ink">
                        <Music4 className="h-4 w-4" strokeWidth={1.8} />
                      </span>
                      <div>
                        <p className="text-[11px] font-semibold tracking-[0.18em] text-white/68 uppercase">{hero.musicLabel}</p>
                        <p className="mt-1 text-sm font-semibold text-white">/{siteAssets.musicFile.split("/").pop()}</p>
                      </div>
                    </div>
                  </div>

                  <div className="liquid-glass rounded-[18px] px-4 py-3 text-white/92">
                    <div className="flex items-center gap-2 text-white/78">
                      <Star className="h-3.5 w-3.5" strokeWidth={1.7} />
                      <span className="text-[11px] font-semibold tracking-[0.18em] uppercase">{hero.replaceLabel}</span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-white/84">{hero.replaceText}</p>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="liquid-glass rounded-[24px] px-5 py-4 text-white/88">
                    <p className="text-xs font-semibold tracking-[0.18em] uppercase text-white/60">{hero.moodLabel}</p>
                    <p className="mt-2 text-lg font-semibold">{hero.moodText}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
              <div className="liquid-glass relative overflow-hidden rounded-[28px] p-4">
                <div className="absolute inset-0">
                  <video className="absolute inset-0 h-full w-full object-cover opacity-72" autoPlay loop muted playsInline preload="auto">
                    <source src={skyVideo} type="video/mp4" />
                  </video>
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(244,249,255,0.2),rgba(236,243,252,0.4)_46%,rgba(225,234,247,0.74)_100%)]" />
                </div>
                <div className="relative min-h-[11rem]">
                  <p className="text-xs font-semibold tracking-[0.18em] text-ink-soft uppercase">{hero.sceneLabel}</p>
                  <h3 className="mt-3 font-heading text-2xl font-bold tracking-[-0.03em] text-ink">{hero.sceneTitle}</h3>
                  <p className="mt-3 max-w-sm text-sm leading-7 text-ink-soft">{hero.sceneText}</p>
                </div>
              </div>

              <div className="liquid-glass float-drift rounded-[28px] px-5 py-4">
                <p className="text-xs font-semibold tracking-[0.18em] text-ink-soft uppercase">{locale === "zh" ? "氛围" : "Mood"}</p>
                <p className="mt-3 font-heading text-2xl font-bold leading-tight text-ink">{hero.sideMood}</p>
                <p className="mt-3 text-sm leading-7 text-ink-soft">{hero.sideText}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
