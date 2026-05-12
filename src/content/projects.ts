import { ProjectItem } from "@/lib/types";

export const projectsContent: ProjectItem[] = [
  {
    name: "语音驱动的 3D 虚拟角色面部动画",
    summary:
      "这是我的毕业设计项目，目标是为 3D 卡通角色构建从语音到口型、表情和头部动作的实时驱动流程，让角色能更自然地说话与表达情绪。",
    stack: ["Unity", "C#", "Blender", "LLM", "TTS"],
    highlight: "项目结合了口型驱动、Blendshape 设计、Unity 实时动画，以及基于大模型的情绪分析与语音生成。",
    status: "进行中",
  },
  {
    name: "基于 LLM 与 TTS 的专家对话音频生成系统",
    summary:
      "项目把论文、杂志等文章内容转化成更像专家访谈的多角色对话，再通过 TTS 生成多音色、自然表达的音频输出。",
    stack: ["Python", "GPT-4o", "Prompt Engineering", "ElevenLabs TTS"],
    highlight: "我主要负责从原始文本到对话音频的整体流程设计，包括预处理、提示词设计、对话生成与音频质量检查。",
    status: "研究项目",
  },
  {
    name: "教育视频场景下的 LLM 工作流搭建",
    summary:
      "在苏州百智通实习期间，我参与设计并落地多个基于 Dify 的教育内容工作流，帮助中小学视频内容变得更易用、可导航、可总结。",
    stack: ["Dify", "LLM Workflow", "Prompt Design", "Education Tech"],
    highlight: "包括字幕切分、笔记生成、适龄总结、知识点映射、内容推荐和视频内导航等功能，并接入实际平台使用。",
    status: "实习项目",
  },
  {
    name: "Indie Game Jam 独立游戏项目",
    summary:
      "在 2024 年 itch.io Game Jam 中参与完整游戏开发流程，负责叙事框架、事件系统、UI 设计以及音乐音效落地，最终进入创新类别前 9%。",
    stack: ["Game Design", "UI", "Narrative", "Audio", "Systems"],
    highlight: "这段经历让我真正经历了一次从概念、玩法、叙事到实现的完整闭环，也让我更明确自己对交互和游戏体验设计的兴趣。",
    href: "https://itch.io/jam/brackeys-12/rate/2973702",
    status: "已完成",
  },
];
