import { ProfileContent } from "@/lib/types";

export const profileContent: ProfileContent = {
  name: "znzky04",
  identity: "前端学习者 / 个人站建设中 / 喜欢把灵感留住",
  intro:
    "想做一个既能好好介绍自己、也能留下日常痕迹的个人网站。它会像作品集，也会像一个可以慢慢长出个性的私人空间。",
  detail:
    "这里会放我的项目、成长轨迹和一片可以随手写日记、学习笔记、游戏感受、追番感受的小区域。",
  keywords: ["清新感", "前端", "个人项目", "记录欲", "游戏与动画"],
  longBio: [
    "我想把这个网站做成一个既耐看又实用的长期空间，不只是简历页，也不只是博客。",
    "主页负责清楚地介绍我自己和我的项目，记录空间则负责留下更私人、更随性的内容。",
    "整体风格希望明亮、舒服、有一点青春感和幻想感，同时保留后续自行替换配图与音乐的自由度。",
  ],
  socialLinks: [
    { label: "GitHub", href: "https://github.com/znzky04" },
    { label: "Email", href: "mailto:2092115380@qq.com" },
  ],
  timeline: [
    {
      year: "现在",
      title: "搭建自己的长期个人站",
      description: "把项目展示、成长记录和私人 notes 统一放进一个能长期维护的空间。",
    },
    {
      year: "近期",
      title: "持续学习前端与页面设计",
      description: "希望把视觉表现、交互体验和实际可维护性一起练起来。",
    },
    {
      year: "进行中",
      title: "记录游戏、追番和学习中的触发点",
      description: "把零散的感受变成可回头翻看的个人痕迹。",
    },
  ],
};
