import { Sparkles } from "lucide-react";
import { profileContent } from "@/content/profile";

export function IntroSection() {
  return (
    <section className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
      <div className="section-shell rounded-[34px] px-6 py-8 sm:px-8">
        <p className="text-sm font-semibold tracking-[0.18em] text-ink-soft uppercase">About me</p>
        <h2 className="mt-4 font-heading text-[clamp(2.4rem,5vw,4.2rem)] font-extrabold leading-[1.02] tracking-[-0.04em] text-ink">
          一个既想认真做作品，也想把喜欢的东西留在网上的人。
        </h2>
        <p className="mt-5 max-w-xl text-base leading-8 text-ink-soft sm:text-lg">
          主页会更清楚地介绍我的项目和成长过程，记录空间则会保留更多私人感和兴趣感。
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {profileContent.longBio.map((paragraph, index) => (
          <div
            key={paragraph}
            className={`liquid-glass rounded-[30px] p-5 ${
              index === 1 ? "bg-[linear-gradient(160deg,rgba(111,137,255,0.12),rgba(255,255,255,0.52))]" : ""
            }`}
          >
            <div className="flex items-center justify-between">
              <p className="text-xs font-semibold tracking-[0.18em] text-ink-soft uppercase">0{index + 1}</p>
              <Sparkles className="h-3.5 w-3.5 text-ink-soft" strokeWidth={1.5} />
            </div>
            <p className="mt-6 text-sm leading-7 text-ink-soft">{paragraph}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
