"use client";

import { useState } from "react";
import { ContactSection } from "@/components/home/contact-section";
import { HeroSection } from "@/components/home/hero-section";
import { IntroSection } from "@/components/home/intro-section";
import { NotesEntrySection } from "@/components/home/notes-entry-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { TimelineSection } from "@/components/home/timeline-section";
import { homeContent, HomeLocale } from "@/content/home-content";

const STORAGE_KEY = "home-locale";

function getInitialLocale(): HomeLocale {
  if (typeof window === "undefined") {
    return "zh";
  }

  const saved = window.localStorage.getItem(STORAGE_KEY);
  return saved === "en" ? "en" : "zh";
}

export function HomePageClient() {
  const [locale, setLocale] = useState<HomeLocale>(getInitialLocale);
  const copy = homeContent[locale];

  const switchLocale = (nextLocale: HomeLocale) => {
    setLocale(nextLocale);
    window.localStorage.setItem(STORAGE_KEY, nextLocale);
    window.dispatchEvent(new Event("home-locale-change"));
  };

  return (
    <div className="space-y-16 py-6 sm:py-8">
      <div className="flex justify-end">
        <div className="liquid-glass inline-flex rounded-full border border-white/60 p-1 shadow-[var(--shadow-md)]">
          {(["zh", "en"] as const).map((item) => {
            const active = item === locale;
            return (
              <button
                key={item}
                type="button"
                onClick={() => switchLocale(item)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  active ? "bg-[#121b2f] text-white shadow-[0_10px_24px_rgba(17,23,38,0.18)]" : "text-ink-soft hover:bg-white/45 hover:text-ink"
                }`}
              >
                {item === "zh" ? "中文" : "English"}
              </button>
            );
          })}
        </div>
      </div>

      <HeroSection locale={locale} copy={copy} />
      <IntroSection copy={copy} />
      <ProjectsSection copy={copy} />
      <TimelineSection copy={copy} />
      <NotesEntrySection locale={locale} copy={copy} />
      <ContactSection copy={copy} />
    </div>
  );
}
