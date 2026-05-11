import Link from "next/link";

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
      ? "bg-ink text-white shadow-[0_16px_34px_rgba(66,133,244,0.24)] hover:-translate-y-0.5 hover:bg-ink/90"
      : "border border-line-strong bg-white/70 text-ink hover:-translate-y-0.5 hover:bg-white";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition ${classes}`}
    >
      {label}
    </Link>
  );
}
