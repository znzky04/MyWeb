import { notesCategories } from "@/lib/site-config";
import { CategoryCard } from "@/components/ui/category-card";

export function NotesHub() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      {notesCategories.map((category) => (
        <CategoryCard key={category.key} category={category} />
      ))}
    </div>
  );
}
