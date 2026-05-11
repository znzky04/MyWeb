import Link from "next/link";
import { navItems } from "@/lib/site-config";
import { Container } from "@/components/layout/container";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/72 backdrop-blur-xl">
      <Container className="flex items-center justify-between py-4">
        <Link href="/" className="font-heading text-xl font-extrabold tracking-tight text-ink">
          MyWeb
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium text-ink-soft md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-ink">
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </header>
  );
}
