"use client";

import { useMemo, useState } from "react";
import { NoteMeta, NotesCategory } from "@/lib/types";
import { SearchInput } from "@/components/ui/search-input";
import { NoteCard } from "@/components/notes/note-card";

export function NotesList({
  notes,
  category,
  enableSearch = true,
}: {
  notes: NoteMeta[];
  category?: NotesCategory;
  enableSearch?: boolean;
}) {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    if (!enableSearch || !query.trim()) return notes;
    return notes.filter((note) => note.title.toLowerCase().includes(query.trim().toLowerCase()));
  }, [enableSearch, notes, query]);

  return (
    <div className="space-y-6">
      {enableSearch ? <SearchInput value={query} onChange={setQuery} category={category} /> : null}
      <div className="grid gap-4">
        {filtered.map((note, index) => (
          <NoteCard key={`${note.category}-${note.slug}`} note={note} index={index} category={category} />
        ))}
        {filtered.length === 0 ? (
          <div className="section-shell hud-frame rounded-[28px] px-5 py-12 text-center text-sm leading-7 text-ink-soft">
            当前没有匹配的标题，可以换个关键词试试。
          </div>
        ) : null}
      </div>
    </div>
  );
}
