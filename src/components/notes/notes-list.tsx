"use client";

import { useMemo, useState } from "react";
import { NoteMeta } from "@/lib/types";
import { SearchInput } from "@/components/ui/search-input";
import { NoteCard } from "@/components/notes/note-card";

export function NotesList({
  notes,
  enableSearch = true,
}: {
  notes: NoteMeta[];
  enableSearch?: boolean;
}) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    if (!enableSearch || !query.trim()) return notes;
    return notes.filter((note) => note.title.toLowerCase().includes(query.trim().toLowerCase()));
  }, [enableSearch, notes, query]);

  return (
    <div className="space-y-6">
      {enableSearch ? <SearchInput value={query} onChange={setQuery} /> : null}
      <div className="grid gap-4">
        {filtered.map((note) => (
          <NoteCard key={`${note.category}-${note.slug}`} note={note} />
        ))}
        {filtered.length === 0 ? (
          <div className="rounded-[24px] border border-dashed border-line-strong bg-white/70 px-5 py-10 text-center text-sm text-ink-soft">
            当前没有匹配的标题，可以换个关键词试试。
          </div>
        ) : null}
      </div>
    </div>
  );
}
