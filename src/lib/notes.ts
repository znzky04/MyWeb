import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { markdownToHtml } from "@/lib/markdown";
import { NoteMeta, NotesCategoryKey } from "@/lib/types";

const notesRoot = path.join(process.cwd(), "src", "content", "notes");

export function getCategoryDirectory(category: NotesCategoryKey) {
  return path.join(notesRoot, category);
}

export function getCategorySlugs(category: NotesCategoryKey) {
  return fs
    .readdirSync(getCategoryDirectory(category))
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export async function getNotesByCategory(category: NotesCategoryKey) {
  const slugs = getCategorySlugs(category);
  const notes = await Promise.all(slugs.map((slug) => getNoteBySlug(category, slug)));
  return notes.sort((a, b) => (a.updatedAt && b.updatedAt ? b.updatedAt.localeCompare(a.updatedAt) : 0));
}

export async function getAllNotes() {
  const categories: NotesCategoryKey[] = ["life", "study", "games", "anime"];
  const nested = await Promise.all(categories.map((category) => getNotesByCategory(category)));
  return nested.flat();
}

export async function getNoteBySlug(category: NotesCategoryKey, slug: string): Promise<NoteMeta> {
  const fullPath = path.join(getCategoryDirectory(category), `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const stats = fs.statSync(fullPath);
  const { data, content } = matter(fileContents);
  const html = await markdownToHtml(content);

  return {
    slug,
    category,
    title: typeof data.title === "string" ? data.title : slug,
    content,
    html,
    updatedAt: stats.mtime.toISOString(),
  };
}

export function filterNotesByTitle(notes: NoteMeta[], query: string) {
  if (!query.trim()) return notes;
  const normalized = query.trim().toLowerCase();
  return notes.filter((note) => note.title.toLowerCase().includes(normalized));
}
