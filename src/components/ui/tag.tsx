import type { ReactNode } from "react";

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-line bg-white/75 px-3 py-1 text-xs font-medium tracking-wide text-ink-soft">
      {children}
    </span>
  );
}
