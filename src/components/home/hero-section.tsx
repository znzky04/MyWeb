import { Music4, Sparkles, Star } from "lucide-react";
import { profileContent } from "@/content/profile";
import { siteAssets } from "@/lib/site-config";
import { ButtonLink } from "@/components/ui/button-link";
import { Tag } from "@/components/ui/tag";

const heroVideo =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260424_064411_9e9d7f84-9277-41f4-ab10-59172d89e6be.mp4";

export function HeroSection() {
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
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(250,251,255,0.2),rgba(248,249,255,0.5)_40%,rgba(237,239,246,0.82)_100%)]" />
      </div>

      <div className="relative px-5 pb-8 pt-8 sm:px-8 sm:pb-10 sm:pt-10 lg:min-h-[calc(100vh-132px)] lg:px-10 lg:pb-12 lg:pt-12">
        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="max-w-3xl">
            <div className="liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-[0.18em] text-ink-soft uppercase">
              <Sparkles className="h-3.5 w-3.5" strokeWidth={1.5} />
              Personal stage / version one
            </div>

            <h1 className="mt-6 font-heading text-[clamp(3.25rem,8vw,6.35rem)] font-extrabold leading-[0.94] tracking-[-0.05em] text-ink">
              {profileContent.name}
            </h1>

            <p className="mt-5 max-w-2xl text-[clamp(1.05rem,2.3vw,1.4rem)] font-medium leading-8 text-ink">
              {profileContent.identity}
            </p>

            <p className="mt-6 max-w-2xl text-base leading-8 text-ink-soft sm:text-lg">{profileContent.intro}</p>

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
            <div className="liquid-glass video-sheen relative rounded-[32px] border border-white/55 p-4">
              <div className="absolute inset-x-5 top-5 flex items-center justify-between text-xs font-semibold tracking-[0.18em] text-white/84 uppercase">
                <span className="inline-flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5" strokeWidth={1.5} />
                  Hero visual slot
                </span>
                <span className="rounded-full bg-white/14 px-3 py-1 backdrop-blur-md">{siteAssets.heroImage}</span>
              </div>

              <div className="relative h-[24rem] overflow-hidden rounded-[28px] bg-[#0d1321] sm:h-[28rem]">
                <video className="absolute inset-0 h-full w-full object-cover" autoPlay loop muted playsInline preload="auto">
                  <source src={heroVideo} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,12,24,0.08),rgba(8,12,24,0.38)_55%,rgba(8,12,24,0.75)_100%)]" />

                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="liquid-glass rounded-[24px] px-5 py-4 text-white/88">
                    <p className="text-xs font-semibold tracking-[0.18em] uppercase text-white/60">Mood capsule</p>
                    <p className="mt-2 text-lg font-semibold">清新主站里保留一点舞台感和情绪感。</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="liquid-glass float-drift absolute -bottom-4 -left-2 hidden rounded-[26px] px-4 py-4 lg:block">
              <p className="text-xs font-semibold tracking-[0.18em] text-ink-soft uppercase">Mood</p>
              <p className="mt-2 font-heading text-lg font-bold text-ink">明亮 / 青春 / 可持续更新</p>
            </div>

            <div className="liquid-glass absolute -right-2 top-10 hidden rounded-[26px] px-4 py-4 lg:block">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/68 text-ink">
                  <Music4 className="h-4 w-4" strokeWidth={1.8} />
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-[0.18em] text-ink-soft uppercase">Music slot</p>
                  <p className="mt-1 text-sm font-semibold text-ink">/{siteAssets.musicFile.split("/").pop()}</p>
                </div>
              </div>
            </div>

            <div className="liquid-glass absolute left-8 top-10 hidden rounded-[24px] px-4 py-3 lg:block">
              <div className="flex items-center gap-2 text-ink-soft">
                <Star className="h-3.5 w-3.5" strokeWidth={1.7} />
                <span className="text-xs font-semibold tracking-[0.18em] uppercase">Replace later</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
