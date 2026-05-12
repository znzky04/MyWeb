import { Container } from "@/components/layout/container";
import { SiteShell } from "@/components/layout/site-shell";
import { NotesHub } from "@/components/notes/notes-hub";

export default function NotesPage() {
  return (
    <SiteShell>
      <Container className="space-y-8 py-10 sm:py-14">
        <section className="notes-panel hud-frame notes-cosmos vn-stars relative overflow-hidden rounded-[36px] px-6 py-8 sm:px-8 sm:py-10">
          <div className="notes-grid absolute inset-0 opacity-30" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.24),transparent_32%),linear-gradient(180deg,transparent,rgba(236,241,255,0.28)_72%,rgba(220,228,246,0.42)_100%)]" />
          <div className="relative grid gap-6 xl:grid-cols-[1.15fr_0.85fr] xl:items-end">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/46 bg-white/54 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-ink-soft uppercase backdrop-blur-md">
                notes menu / opening scene
              </p>
              <h1 className="mt-5 font-heading text-[clamp(2.9rem,6vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.05em] text-ink">
                这里是你的私人基地，
                <br />
                四个房间分别存放不同的心情和兴趣。
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-ink-soft sm:text-lg">
                我把这里收成了更像视觉小说主菜单的空间。你会先看到氛围，再看到章节入口和记录列表，让它更像在翻自己的私人故事，而不是在看一页普通博客。
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 xl:grid-cols-1">
              <div className="vn-ribbon rounded-[24px] px-5 py-4 text-ink">
                <p className="text-xs font-semibold tracking-[0.18em] text-ink-soft uppercase">Menu mood</p>
                <p className="mt-3 font-heading text-2xl font-bold text-ink">chapter select</p>
                <p className="mt-2 text-sm leading-7 text-ink-soft">会更像章节选择页和分支入口，而不是功能面板。</p>
              </div>
              <div className="vn-ribbon rounded-[24px] px-5 py-4 text-ink">
                <p className="text-xs font-semibold tracking-[0.18em] text-ink-soft uppercase">Visual mix</p>
                <p className="mt-3 font-heading text-2xl font-bold text-ink">anime + holo accents</p>
                <p className="mt-2 text-sm leading-7 text-ink-soft">保留一点蓝紫光和界面边框，但不再走压抑的终端感。</p>
              </div>
              <div className="vn-ribbon rounded-[24px] px-5 py-4 text-ink">
                <p className="text-xs font-semibold tracking-[0.18em] text-ink-soft uppercase">Writing</p>
                <p className="mt-3 font-heading text-2xl font-bold text-ink">still simple</p>
                <p className="mt-2 text-sm leading-7 text-ink-soft">你还是只写标题和正文，视觉会负责把它包成更像故事菜单的空间。</p>
              </div>
            </div>
          </div>
        </section>

        <NotesHub />
      </Container>
    </SiteShell>
  );
}
