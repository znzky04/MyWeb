import Link from "next/link";
import { notesCategories, siteAssets } from "@/lib/site-config";

export function NotesEntrySection() {
  return (
    <section className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
      <div className="section-shell relative overflow-hidden rounded-[34px] px-6 py-10 sm:px-10">
        <div className="absolute inset-x-0 top-0 h-32 bg-[radial-gradient(circle_at_top,rgba(255,157,179,0.16),transparent_60%)]" />

        <p className="text-sm font-medium tracking-[0.18em] text-ink-soft uppercase">Record space</p>
        <h2 className="mt-4 font-heading text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
          这不是普通博客，而是我自己的四个记录房间。
        </h2>
        <p className="mt-5 max-w-2xl text-base leading-8 text-ink-soft">
          主页负责介绍我是谁、做过什么；进入记录空间之后，就可以按日记随笔、学习笔记、游戏笔记、追番感受四个方向慢慢积累自己的痕迹。
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {notesCategories.map((category) => (
            <div key={category.key} className="rounded-[24px] border border-line bg-white/74 px-4 py-4 transition hover:-translate-y-0.5">
              <p className="text-xs font-semibold tracking-[0.18em] text-ink-soft uppercase">{category.subtitle}</p>
              <p className="mt-2 font-heading text-xl font-bold text-ink">{category.title}</p>
              <p className="mt-2 text-sm leading-7 text-ink-soft">{category.description}</p>
            </div>
          ))}
        </div>

        <Link
          href="/notes"
          className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-[0_14px_30px_rgba(66,133,244,0.28)] transition hover:-translate-y-0.5"
        >
          打开记录空间
        </Link>
      </div>

      <div className="section-shell grid-ambient rounded-[34px] p-5">
        <div className="rounded-[28px] border border-white/70 bg-white/78 p-6 shadow-[var(--shadow-md)]">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] text-ink-soft uppercase">Notes banner slot</p>
              <p className="mt-2 text-sm text-ink-soft">这里可以换成你之后自己挑的主题背景图。</p>
            </div>
            <span className="rounded-full bg-background-soft px-3 py-1 text-xs font-medium text-ink-soft">asset</span>
          </div>

          <div className="h-72 rounded-[24px] bg-gradient-to-br from-accent-mint/20 via-white to-accent-pink/16 p-5">
            <div className="flex h-full flex-col justify-between rounded-[20px] border border-white/70 bg-white/66 p-5">
              <div className="space-y-3">
                <div className="flex items-center justify-between rounded-[18px] bg-white/70 px-4 py-3">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.18em] text-ink-soft uppercase">Channel hub</p>
                    <p className="mt-1 text-sm font-semibold text-ink">日记 / 学习 / 游戏 / 追番</p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <span className="h-2.5 w-10 rounded-full bg-accent/20" />
                    <span className="h-2.5 w-10 rounded-full bg-accent-mint/30" />
                    <span className="h-2.5 w-10 rounded-full bg-accent-pink/20" />
                    <span className="h-2.5 w-10 rounded-full bg-accent-yellow/26" />
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[16px] bg-white/68 px-4 py-4">
                    <p className="text-xs font-semibold tracking-[0.16em] text-ink-soft uppercase">Visual note</p>
                    <p className="mt-2 text-sm leading-7 text-ink-soft">让记录空间的风格和主页拉开，但依然保持明亮和可读。</p>
                  </div>
                  <div className="rounded-[16px] bg-white/68 px-4 py-4">
                    <p className="text-xs font-semibold tracking-[0.16em] text-ink-soft uppercase">Editable later</p>
                    <p className="mt-2 text-sm leading-7 text-ink-soft">后面你可以自己替换背景图、插画和音乐资源，不需要改整体布局。</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-ink">可替换资源路径</p>
                <p className="mt-2 break-all text-xs leading-6 text-ink-soft">{siteAssets.notesBanner}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
