"use client";

import { Search } from "lucide-react";
import { NotesCategory } from "@/lib/types";

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
  category?: NotesCategory;
};

export function SearchInput({ value, onChange, category }: SearchInputProps) {
  return (
    <label className="section-shell hud-frame block rounded-[28px] px-5 py-4">
      <span className="mb-3 flex items-center justify-between gap-4">
        <span className="text-sm font-medium text-ink-soft">按标题检索</span>
        {category ? (
          <span className="rounded-full border border-white/60 bg-white/70 px-3 py-1 text-xs font-semibold tracking-[0.16em] text-ink-soft uppercase">
            {category.roomCode}
          </span>
        ) : null}
      </span>
      <span className="flex items-center gap-3 rounded-full border border-line-strong bg-white/82 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]">
        <Search className="h-4 w-4 text-ink-soft" strokeWidth={1.8} />
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="输入标题关键词"
          className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink-soft/70"
        />
      </span>
    </label>
  );
}
