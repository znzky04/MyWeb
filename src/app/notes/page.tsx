import { Container } from "@/components/layout/container";
import { SiteShell } from "@/components/layout/site-shell";
import { NotesHub } from "@/components/notes/notes-hub";

export default function NotesPage() {
  return (
    <SiteShell>
      <Container className="space-y-8 py-10 sm:py-14">
        <section className="notes-panel hud-frame notes-cosmos relative overflow-hidden rounded-[36px] px-6 py-8 text-white sm:px-8 sm:py-10">
          <div className="notes-grid absolute inset-0 opacity-30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_32%),linear-gradient(180deg,transparent,rgba(5,8,18,0.18)_72%,rgba(5,8,18,0.4)_100%)]" />
          <div className="relative grid gap-6 xl:grid-cols-[1.15fr_0.85fr] xl:items-end">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/8 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-white/68 uppercase backdrop-blur-md">
                record space / archive online
              </p>
              <h1 className="mt-5 font-heading text-[clamp(2.9rem,6vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.05em] text-white">
                这里是你的私人基地，
                <br />
                四个房间分别存放不同的心情和兴趣。
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                记录空间会比主页更像一段世界观入口。背景、插画和氛围负责把你带进来，房间入口、检索和档案卡负责把内容收得实用、顺手、能长期积累。
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
              <div className="liquid-glass rounded-[24px] border border-white/10 bg-white/7 px-5 py-4 text-white">
                <p className="text-xs font-semibold tracking-[0.18em] text-white/50 uppercase">Base status</p>
                <p className="mt-3 font-heading text-2xl font-bold text-white">4 channels online</p>
                <p className="mt-2 text-sm leading-7 text-white/68">日记、学习、游戏、追番会分别带着不同气质，但不会直白写成房间编号。</p>
              </div>
              <div className="liquid-glass rounded-[24px] border border-white/10 bg-white/7 px-5 py-4 text-white">
                <p className="text-xs font-semibold tracking-[0.18em] text-white/50 uppercase">Visual mix</p>
                <p className="mt-3 font-heading text-2xl font-bold text-white">Anime + sci-fi HUD</p>
                <p className="mt-2 text-sm leading-7 text-white/68">主色会转成更偏夜色的全息蓝紫，但保留柔和高光和轻幻想感。</p>
              </div>
              <div className="liquid-glass rounded-[24px] border border-white/10 bg-white/7 px-5 py-4 text-white">
                <p className="text-xs font-semibold tracking-[0.18em] text-white/50 uppercase">Usage</p>
                <p className="mt-3 font-heading text-2xl font-bold text-white">Title + body</p>
                <p className="mt-2 text-sm leading-7 text-white/68">写的时候仍然简单，视觉层只负责把它变成一个更像二次元基地的空间。</p>
              </div>
            </div>
          </div>
        </section>

        <NotesHub />
      </Container>
    </SiteShell>
  );
}
