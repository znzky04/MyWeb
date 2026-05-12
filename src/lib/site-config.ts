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
    description: "记录生活里的小念头、临时心情和一些值得留下来的时刻。",
    accent: "from-[#ffd4e7]/75 via-[#ffeec8]/70 to-[#c9f0f2]/75",
    roomLabel: "晨光房间",
    roomCode: "ROOM-01",
    signal: "soft archive",
    atmosphere: "适合存放日常情绪、碎碎念和会让你以后想回头看的微小片段。",
  },
  {
    key: "study",
    slug: "study",
    title: "学习笔记",
    subtitle: "Study notes",
    description: "整理前端、开发、工具和学习过程中得到的重点收获。",
    accent: "from-[#cde3ff]/80 via-[#d4fff1]/70 to-[#f7fbff]/85",
    roomLabel: "练习终端",
    roomCode: "ROOM-02",
    signal: "logic console",
    atmosphere: "更像一个亮色控制台，把知识点、思路和实验记录成能随时翻查的档案。",
  },
  {
    key: "games",
    slug: "games",
    title: "游戏笔记",
    subtitle: "Game notes",
    description: "存放游玩感受、剧情记录、系统体验和想回头再看的片段。",
    accent: "from-[#b8fff2]/70 via-[#d2deff]/78 to-[#f3f7ff]/80",
    roomLabel: "游玩舱室",
    roomCode: "ROOM-03",
    signal: "mission feed",
    atmosphere: "让游戏记录更像关卡档案和任务面板，既有趣味感，也方便以后回顾。",
  },
  {
    key: "anime",
    slug: "anime",
    title: "追番感受",
    subtitle: "Anime impressions",
    description: "写下角色印象、剧情感想和那些会反复回味的瞬间。",
    accent: "from-[#ffd3f4]/72 via-[#e6dcff]/75 to-[#d7f4ff]/75",
    roomLabel: "映像收藏室",
    roomCode: "ROOM-04",
    signal: "story channel",
    atmosphere: "更偏章节感和收藏感，适合放角色印象、追番笔记和那些会反复回味的瞬间。",
  },
];

export const siteAssets = {
  heroImage: "/images/hero-illustration.png",
  notesBanner: "/images/notes-banner.png",
  musicFile: "/audio/site-theme.mp3",
  musicEnabled: false,
};
