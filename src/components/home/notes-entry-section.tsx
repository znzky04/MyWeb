import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { notesCategories, siteAssets } from "@/lib/site-config";

const chipRow = ["日记随笔", "学习笔记", "游戏笔记", "追番感受", "碎碎念", "截图感想"];

export function NotesEntrySection() {
  return (
    <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
      <div className="section-shell relative overflow-hidden rounded-[36px] px-6 py-10 sm:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(241,161,183,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(128,222,207,0.16),transparent_30%)]" />
        <div className="relative">
          <p className="text-sm font-semibold tracking-[0.18em] text-ink-soft uppercase">Record space</p>
          <h2 className="mt-4 font-heading text-[clamp(2.3rem,4.6vw,4rem)] font-extrabold leading-[1.04] tracking-[-0.04em] text-ink">
            这不是普通博客，而是我自己的四个记录房间。
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-ink-soft sm:text-lg">
            主页负责介绍我是谁、做过什么；进入记录空间之后，就可以按日记随笔、学习笔记、游戏笔记、追番感受四个方向慢慢积累自己的痕迹。
          </p>

          <div className="mt-8 edge-fade overflow-hidden">
            <div className="flex min-w-max animate-marquee-left gap-3">
              {[...chipRow, ...chipRow].map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="liquid-glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-ink"
                >
                  <Sparkles className="h-3.5 w-3.5 text-ink-soft" strokeWidth={1.5} />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {notesCategories.map((category) => (
              <div key={category.key} className="liquid-glass rounded-[24px] p-4 transition hover:-translate-y-0.5">
                <p className="text-xs font-semibold tracking-[0.18em] text-ink-soft uppercase">{category.subtitle}</p>
                <p className="mt-2 font-heading text-xl font-bold text-ink">{category.title}</p>
                <p className="mt-2 text-sm leading-7 text-ink-soft">{category.description}</p>
              </div>
            ))}
          </div>

          <Link
            href="/notes"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#121b2f] pl-6 pr-2 py-2 text-sm font-semibold text-white shadow-[0_18px_36px_rgba(17,23,38,0.28)] transition hover:-translate-y-0.5"
          >
            <span>打开记录空间</span>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/14">
              <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
            </span>
          </Link>
        </div>
      </div>

      <div className="relative overflow-hidden rounded-[36px] border border-white/45 bg-[#121822] p-5 shadow-[var(--shadow-lg)]">
        <div className="absolute inset-0 soft-grid opacity-25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(111,137,255,0.28),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(128,222,207,0.22),transparent_24%)]" />

        <div className="relative h-full rounded-[30px] border border-white/10 bg-white/6 p-5 backdrop-blur-sm">
          <div className="mb-5 flex items-center justify-between text-white/80">
            <div>
              <p className="text-xs font-semibold tracking-[0.18em] uppercase">Notes banner slot</p>
              <p className="mt-2 text-sm text-white/62">这里可以替换成你以后自己挑的主题图或插画。</p>
            </div>
            <span className="liquid-glass rounded-full px-3 py-1 text-xs text-white/80">{siteAssets.notesBanner}</span>
          </div>

          <div className="grid gap-4 sm:grid-rows-[1.1fr_0.9fr]">
            <div className="video-sheen relative overflow-hidden rounded-[26px] border border-white/10 bg-[#0c1220]">
              <video className="absolute inset-0 h-full w-full object-cover opacity-80" autoPlay loop muted playsInline preload="auto">
                <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_150203_44a5bd32-516a-47ce-a077-8acbf9aa8991.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,12,24,0.12),rgba(8,12,24,0.46)_60%,rgba(8,12,24,0.72)_100%)]" />
              <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-white/62">Second world preview</p>
                <p className="mt-2 font-heading text-2xl font-extrabold tracking-tight">记录空间会比主页更私人，也更有氛围。</p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="liquid-glass rounded-[24px] p-4 text-white">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-white/58">Visual note</p>
                <p className="mt-3 text-sm leading-7 text-white/78">风格和主页拉开，但依然保持明亮、清楚、能长期使用。</p>
              </div>
              <div className="liquid-glass rounded-[24px] p-4 text-white">
                <p className="text-xs font-semibold tracking-[0.18em] uppercase text-white/58">Editable later</p>
                <p className="mt-3 text-sm leading-7 text-white/78">后面你可以自己替换背景图、插画和音乐资源，不需要改整体布局。</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
