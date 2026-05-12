import { ReactNode } from "react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { HomeLocale } from "@/content/home-content";

export function SiteShell({
  children,
  homeLocale,
}: {
  children: ReactNode;
  homeLocale?: HomeLocale;
}) {
  return (
    <div className="min-h-screen">
      <SiteHeader homeLocale={homeLocale} />
      <main className="pt-20 sm:pt-24">{children}</main>
      <SiteFooter />
    </div>
  );
}
