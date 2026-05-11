import { ProjectItem } from "@/lib/types";

export const projectsContent: ProjectItem[] = [
  {
    name: "MyWeb",
    summary: "当前正在搭建的个人网站，目标是把自我介绍、项目展示和日常记录合成一个长期可维护的空间。",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    highlight: "主站清新明亮，记录空间更有个性与情绪感。",
    href: "https://github.com/znzky04/MyWeb",
    status: "进行中",
  },
  {
    name: "Future Project Slot",
    summary: "预留给后续最能代表自己的项目，可以替换成游戏、工具站、前端练习或课程项目。",
    stack: ["TBD"],
    highlight: "这里建议放一个最能体现你风格或技术成长的作品。",
    status: "待填充",
  },
  {
    name: "Notebook Ideas",
    summary: "用于承接将来拆分出来的小型作品、视觉实验或内容整理项目。",
    stack: ["React", "UI", "Content"],
    highlight: "把小想法留在自己的空间里，后面再慢慢长成真正的项目。",
    status: "概念中",
  },
];
