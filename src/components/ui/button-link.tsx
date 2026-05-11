import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function ButtonLink({
  href,
  label,
  tone = "primary",
}: {
  href: string;
  label: string;
  tone?: "primary" | "secondary";
}) {
  const classes =
    tone === "primary"
      ? "bg-[#121b2f] text-white shadow-[0_18px_36px_rgba(17,23,38,0.28)] hover:-translate-y-0.5 hover:bg-[#18233d]"
      : "liquid-glass border border-white/60 bg-white/52 text-ink hover:-translate-y-0.5 hover:bg-white/74";

  const bubble =
    tone === "primary"
      ? "bg-white/14 text-white"
      : "bg-white/82 text-ink";

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-3 rounded-full pl-6 pr-2 py-2 text-sm font-semibold transition ${classes}`}
    >
      <span>{label}</span>
      <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full ${bubble}`}>
        <ArrowUpRight className="h-4 w-4" strokeWidth={1.8} />
      </span>
    </Link>
  );
}
