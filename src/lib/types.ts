export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

export type ProjectItem = {
  name: string;
  summary: string;
  stack: string[];
  highlight: string;
  href?: string;
  status: string;
};

export type NotesCategoryKey = "life" | "study" | "games" | "anime";

export type NotesCategory = {
  key: NotesCategoryKey;
  slug: NotesCategoryKey;
  title: string;
  subtitle: string;
  description: string;
  accent: string;
};

export type ProfileContent = {
  name: string;
  identity: string;
  intro: string;
  detail: string;
  keywords: string[];
  longBio: string[];
  socialLinks: SocialLink[];
  timeline: TimelineItem[];
};

export type NoteMeta = {
  slug: string;
  category: NotesCategoryKey;
  title: string;
  content: string;
  html: string;
  updatedAt?: string;
};
