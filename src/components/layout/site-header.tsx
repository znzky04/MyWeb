"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, Sparkles, X } from "lucide-react";
import { navItems } from "@/lib/site-config";
import { Container } from "@/components/layout/container";
import { HomeLocale } from "@/content/home-content";

export function SiteHeader({ homeLocale = "zh" }: { homeLocale?: HomeLocale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const currentNavItems = useMemo(() => {
    if (!isHome || homeLocale === "zh") {
      return navItems;
    }

    return [
      { label: "Home", href: "/" },
      { label: "Projects", href: "/projects" },
      { label: "About", href: "/about" },
      { label: "Notes", href: "/notes" },
    ];
  }, [homeLocale, isHome]);

  const notesButtonLabel = isHome && homeLocale === "en" ? "Open notes space" : "进入记录空间";

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-4 sm:pt-5">
      <Container className="relative">
        <div className="liquid-glass mx-auto flex max-w-5xl items-center rounded-full border border-white/55 px-2.5 py-2.5 text-sm text-ink shadow-[var(--shadow-lg)]">
          <Link href={isHome && homeLocale === "en" ? "/?lang=en" : "/"} className="shrink-0 rounded-full bg-white/72 px-4 py-2 font-heading text-lg font-extrabold tracking-tight text-ink">
            MyWeb
          </Link>

          <nav className="ml-4 hidden items-center gap-5 md:flex">
            {currentNavItems.map((item, index) => (
              <Link key={item.href} href={item.href} className="flex items-center gap-2 rounded-full px-3 py-2 font-medium text-ink-soft transition hover:bg-white/45 hover:text-ink">
                {index === 0 ? <Sparkles className="h-3.5 w-3.5" strokeWidth={1.5} /> : null}
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <Link
              href="/notes"
              className="hidden rounded-full bg-[#121b2f] px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_28px_rgba(17,23,38,0.28)] transition hover:-translate-y-0.5 sm:inline-flex"
            >
              {notesButtonLabel}
            </Link>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/60 bg-white/68 text-ink md:hidden"
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" strokeWidth={1.7} /> : <Menu className="h-5 w-5" strokeWidth={1.7} />}
            </button>
          </div>
        </div>

        {open ? (
          <div className="liquid-glass absolute left-5 right-5 top-[calc(100%+10px)] rounded-[28px] border border-white/55 p-3 shadow-[var(--shadow-lg)] md:hidden">
            <div className="grid gap-2">
              {currentNavItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-[20px] bg-white/64 px-4 py-3 font-medium text-ink transition hover:bg-white/82"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
