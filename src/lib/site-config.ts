import { NavItem, NotesCategory } from "@/lib/types";

export const navItems: NavItem[] = [
  { label: "首页", href: "/" },
  { label: "项目", href: "/projects" },
  { label: "关于", href: "/about" },
  { label: "记录空间", href: "/notes" },
];

export const notesCategories: NotesCategory[] = [
  {
    key: "life",
    slug: "life",
    title: "日记随笔",
    subtitle: "Daily writing",
    description: "记录生活里的小念头、临时心情和一些值得留住的时刻。",
    accent: "from-accent-pink/30 to-accent-yellow/20",
  },
  {
    key: "study",
    slug: "study",
    title: "学习笔记",
    subtitle: "Study notes",
    description: "整理前端、开发、工具和学习过程中的重点收获。",
    accent: "from-accent/30 to-accent-mint/20",
  },
  {
    key: "games",
    slug: "games",
    title: "游戏笔记",
    subtitle: "Game notes",
    description: "存放游玩感受、剧情记录、系统体验和想回头再看的片段。",
    accent: "from-accent-mint/35 to-accent/20",
  },
  {
    key: "anime",
    slug: "anime",
    title: "追番感受",
    subtitle: "Anime impressions",
    description: "写下角色印象、剧情感想和那些会反复回味的瞬间。",
    accent: "from-accent-pink/26 to-accent/18",
  },
];

export const siteAssets = {
  heroImage: "/images/hero-illustration.png",
  notesBanner: "/images/notes-banner.png",
  musicFile: "/audio/site-theme.mp3",
  musicEnabled: false,
};
