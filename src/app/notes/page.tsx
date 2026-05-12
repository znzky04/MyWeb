import { Container } from "@/components/layout/container";
import { SiteShell } from "@/components/layout/site-shell";
import { NotesHub } from "@/components/notes/notes-hub";

export default function NotesPage() {
  return (
    <SiteShell>
      <Container className="space-y-8 py-10 sm:py-14">
        <section className="section-shell hud-frame notes-orbit scanline-soft relative overflow-hidden rounded-[34px] px-6 py-8 sm:px-8 sm:py-10">
          <div className="absolute inset-0 soft-grid opacity-20" />
          <div className="relative grid gap-6 xl:grid-cols-[1.15fr_0.85fr] xl:items-end">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/45 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-ink-soft uppercase backdrop-blur-md">
                Record base / archive online
              </p>
              <h1 className="mt-5 font-heading text-[clamp(2.9rem,6vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.05em] text-ink">
                这里是你的私人基地，
                <br />
                四个房间分别存放不同的心情和兴趣。
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-ink-soft sm:text-lg">
                记录空间会比主页更像一段世界观入口。背景、插画和氛围负责把你带进来，房间入口、检索和档案卡负责把内容收得实用、顺手、能长期积累。
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
              <div className="liquid-glass rounded-[24px] px-5 py-4">
                <p className="text-xs font-semibold tracking-[0.18em] text-ink-soft uppercase">Base status</p>
                <p className="mt-3 font-heading text-2xl font-bold text-ink">4 rooms online</p>
                <p className="mt-2 text-sm leading-7 text-ink-soft">日记、学习、游戏、追番四个频道会被做成四个不同气质的小房间。</p>
              </div>
              <div className="liquid-glass rounded-[24px] px-5 py-4">
                <p className="text-xs font-semibold tracking-[0.18em] text-ink-soft uppercase">Visual mix</p>
                <p className="mt-3 font-heading text-2xl font-bold text-ink">Anime + sci-fi HUD</p>
                <p className="mt-2 text-sm leading-7 text-ink-soft">会保持亮色、轻玻璃和章节感，不走压抑赛博风。</p>
              </div>
              <div className="liquid-glass rounded-[24px] px-5 py-4">
                <p className="text-xs font-semibold tracking-[0.18em] text-ink-soft uppercase">Usage</p>
                <p className="mt-3 font-heading text-2xl font-bold text-ink">Title + body</p>
                <p className="mt-2 text-sm leading-7 text-ink-soft">写的时候仍然简单，视觉层只负责让它更像你的空间。</p>
              </div>
            </div>
          </div>
        </section>

        <NotesHub />
      </Container>
    </SiteShell>
  );
}
