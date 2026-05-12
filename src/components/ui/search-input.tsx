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
    <label className="notes-panel hud-frame block rounded-[28px] px-5 py-4 text-white">
      <span className="mb-3 flex items-center justify-between gap-4">
        <span className="text-sm font-medium text-white/70">按标题检索</span>
        {category ? (
          <span className="rounded-full border border-white/12 bg-white/8 px-3 py-1 text-xs font-semibold tracking-[0.16em] text-white/54 uppercase">
            {category.signal}
          </span>
        ) : null}
      </span>
      <span className="flex items-center gap-3 rounded-full border border-white/12 bg-white/8 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
        <Search className="h-4 w-4 text-white/56" strokeWidth={1.8} />
        <input
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="输入标题关键词"
          className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/38"
        />
      </span>
    </label>
  );
}
