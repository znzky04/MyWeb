"use client";

type SearchInputProps = {
  value: string;
  onChange: (value: string) => void;
};

export function SearchInput({ value, onChange }: SearchInputProps) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-ink-soft">按标题检索</span>
      <input
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="输入标题关键词"
        className="w-full rounded-full border border-line-strong bg-white/85 px-4 py-3 text-sm text-ink outline-none transition focus:border-accent"
      />
    </label>
  );
}
