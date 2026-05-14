import { ProjectItem, SocialLink, TimelineItem } from "@/lib/types";

export type HomeLocale = "zh" | "en";

type HomeCopy = {
  profile: {
    name: string;
    identity: string;
    intro: string;
    detail: string;
    keywords: string[];
    longBio: string[];
    socialLinks: SocialLink[];
    timeline: TimelineItem[];
  };
  hero: {
    badge: string;
    primaryCta: string;
    secondaryCta: string;
    visualLabel: string;
    musicLabel: string;
    replaceLabel: string;
    replaceText: string;
    moodLabel: string;
    moodText: string;
    sceneLabel: string;
    sceneTitle: string;
    sceneText: string;
    sideMood: string;
    sideText: string;
  };
  intro: {
    eyebrow: string;
    title: string;
    description: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    description: string;
    items: ProjectItem[];
  };
  timeline: {
    eyebrow: string;
    title: string;
    description: string;
  };
  notesTeaser: {
    eyebrow: string;
    title: string;
    description: string;
    openLabel: string;
    chips: string[];
    bannerLabel: string;
    bannerText: string;
    previewLabel: string;
    previewTitle: string;
    visualNoteLabel: string;
    visualNoteText: string;
    editableLabel: string;
    editableText: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
  };
};

export const homeContent: Record<HomeLocale, HomeCopy> = {
  zh: {
    profile: {
      name: "周恩泽",
      identity: "信息与计算科学专业学生 / 关注游戏、音频与 AI 的实践表达",
      intro:
        "我目前就读于西交利物浦大学信息与计算科学专业，主要关注游戏开发、音频相关内容，以及人工智能在创作和交互体验中的实际应用。",
      detail:
        "这个网站会用来整理我的项目、研究经历和成长轨迹，也会留出一块记录日常灵感、学习笔记，以及对动漫和游戏的一些感受与想法的空间。",
      keywords: ["游戏开发", "音频表达", "AI 应用", "交互体验", "内容创作"],
      longBio: [
        "我希望把技术能力和创作表达结合起来，做出既有实现深度，也有体验感的作品，而不只是把功能拼起来。",
        "目前我更关注游戏、声音、角色表现和 AI 相关尝试，也会自然地被动漫、游戏和小说里的叙事氛围吸引。",
        "除了项目和研究，我也想把那些平时零散积累下来的兴趣、感受和灵感慢慢收进来，让这个网站变成一个可以长期继续长大的个人空间。",
      ],
      socialLinks: [
        { label: "GitHub", href: "https://github.com/znzky04" },
        { label: "Email", href: "mailto:19962171153@163.com" },
      ],
      timeline: [
        {
          year: "2025 - 至今",
          title: "毕业设计：语音驱动的 3D 虚拟角色面部动画",
          description:
            "围绕 3D 卡通角色的口型、表情与情绪表现，搭建从文本、语音到实时面部动画的完整流程，使用 Blender、Unity、C# 与大模型能力辅助角色表达。",
        },
        {
          year: "2025",
          title: "苏州百智通信息科技有限公司实习",
          description:
            "参与 LLM 工作流设计与落地，使用 Dify 构建字幕切分、笔记生成、内容总结与知识整理等功能，积累了把 AI 能力接入真实产品的实践经验。",
        },
        {
          year: "2024 - 2025",
          title: "从科研与 Game Jam 中持续积累项目经验",
          description:
            "做过基于深度学习的音频源分离研究，也参加过 itch.io Game Jam，负责叙事、事件系统、UI 以及音乐音效实现，逐步把兴趣变成真正可展示的作品。",
        },
      ],
    },
    hero: {
      badge: "个人主页 / 中文",
      primaryCta: "查看项目",
      secondaryCta: "进入记录空间",
      visualLabel: "首页主视觉",
      musicLabel: "背景音乐",
      replaceLabel: "后续可替换",
      replaceText: "这里之后可以替换成你喜欢的插画、角色图，或者更贴近你个人风格的首页主视觉。",
      moodLabel: "当前氛围",
      moodText: "希望主页保持明亮、轻盈，同时也带一点属于自己的舞台感。",
      sceneLabel: "兴趣坐标",
      sceneTitle: "这里会慢慢收进我真正长期在意的内容和方向。",
      sceneText:
        "游戏开发、音频相关尝试、AI 项目，以及平时从动漫、游戏和小说里得到的灵感，之后都会一点点被整理进来。它不只是简历主页，也会慢慢变成更完整的个人作品空间。",
      sideMood: "游戏 / 音频 / AI / 持续更新",
      sideText:
        "我希望这里既能放比较正式的项目和经历，也能保留一点故事感、角色感和声音氛围，让它看起来更像我自己。",
    },
    intro: {
      eyebrow: "关于我",
      title: "一个想把技术、创意和兴趣慢慢做成作品的人。",
      description: "主页会更清楚地介绍我的研究、项目和成长轨迹，记录空间则会保留更多私人感和兴趣感。",
    },
    projects: {
      eyebrow: "代表项目",
      title: "先把最能代表我现在阶段的几段经历放出来。",
      description: "这一版优先展示和简历最一致、也最能体现当前方向的项目内容，后面再继续补充更完整的作品。",
      items: [
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
          name: "基于 LLM 的内容工作流搭建",
          summary:
            "在苏州百智通实习期间，我参与设计并落地多个基于 Dify 的内容工作流，围绕字幕整理、知识提炼和内容分析等方向进行实践。",
          stack: ["Dify", "LLM Workflow", "Prompt Design", "Content Systems"],
          highlight: "这段经历让我更熟悉如何把大模型能力和真实使用场景结合起来，而不只是停留在演示层面。",
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
      ],
    },
    timeline: {
      eyebrow: "成长轨迹",
      title: "比简历更轻一点，但能看见我现在真正往哪走。",
      description: "这里挑出最关键的几段经历，用来说明我目前更稳定在积累的方向：游戏、声音、AI 应用，以及交互体验设计。",
    },
    notesTeaser: {
      eyebrow: "记录空间",
      title: "这里不是普通博客，而是我用来长期记录日常灵感的地方。",
      description: "主页负责介绍我是谁、做过什么；进入记录空间之后，就可以按日记随笔、学习笔记、游戏笔记、追番感受四个方向慢慢积累自己的痕迹。",
      openLabel: "打开记录空间",
      chips: ["日记随笔", "学习笔记", "游戏笔记", "追番感受", "碎碎念", "截图感想"],
      bannerLabel: "记录区主视觉",
      bannerText: "这里可以换成你以后自己挑的主题图或插画。",
      previewLabel: "第二空间预览",
      previewTitle: "记录空间会比主页更私人，也更有氛围。",
      visualNoteLabel: "视觉说明",
      visualNoteText: "风格会和主页稍微拉开一点，但依然保持明亮、清楚、能长期使用。",
      editableLabel: "后续可替换",
      editableText: "后面你可以自己替换背景图、插画和音乐资源，不需要改整体布局。",
    },
    contact: {
      eyebrow: "链接",
      title: "如果你想继续了解我，可以从这些入口过去。",
      description: "这里先保持简洁，后面如果需要，我可以再补充更多平台、作品链接或者更完整的联系方式。",
    },
  },
  en: {
    profile: {
      name: "Enze Zhou",
      identity: "Information and Computing Science Student / Focused on Games, Audio, and Applied AI",
      intro:
        "I am currently studying Information and Computing Science at Xi'an Jiaotong-Liverpool University. My main interests are game development, audio-related work, and practical applications of AI in creative and interactive experiences.",
      detail:
        "This website is where I organize my projects, research experiences, and growth over time, while also keeping a more personal space for ideas, study notes, and occasional thoughts inspired by anime and games.",
      keywords: ["Game Development", "Audio", "Applied AI", "Interaction Design", "Creative Work"],
      longBio: [
        "I want to combine technical depth with creative expression and build work that feels thoughtful, polished, and enjoyable to experience.",
        "Right now, I am especially drawn to games, sound, character expression, and hands-on AI experiments, along with the kinds of atmosphere and storytelling I absorb from animation, games, and fiction.",
        "Beyond formal projects and research, I also want this site to grow into a long-term personal space that can hold scattered interests, notes, and ideas in a more complete way.",
      ],
      socialLinks: [
        { label: "GitHub", href: "https://github.com/znzky04" },
        { label: "Email", href: "mailto:19962171153@163.com" },
      ],
      timeline: [
        {
          year: "2025 - Present",
          title: "Final Year Project: Speech-Driven 3D Virtual Character Facial Animation",
          description:
            "Building a full pipeline from text and speech to real-time facial animation for stylized 3D characters, using Blender, Unity, C#, and LLM-assisted emotional expression.",
        },
        {
          year: "2025",
          title: "Internship at Suzhou Baizhitong Information Technology",
          description:
            "Worked on LLM workflow design and deployment, using Dify to build features for subtitle structuring, note generation, content summarization, and knowledge organization.",
        },
        {
          year: "2024 - 2025",
          title: "Growing Through Research and Game Jam Projects",
          description:
            "From deep learning-based audio source separation research to a ranked indie game jam project, I have been building experience through hands-on systems, storytelling, UI, and sound-related work.",
        },
      ],
    },
    hero: {
      badge: "Personal homepage / English",
      primaryCta: "View projects",
      secondaryCta: "Open notes space",
      visualLabel: "Homepage visual",
      musicLabel: "Background music",
      replaceLabel: "Replace later",
      replaceText: "This area can later be replaced with your own illustration, character art, or a homepage visual that feels more personal.",
      moodLabel: "Current mood",
      moodText: "I want the homepage to stay bright, light, and still carry a bit of personal stage presence.",
      sceneLabel: "Interest map",
      sceneTitle: "This space will gradually gather the things I care about most over time.",
      sceneText:
        "Game development, audio experiments, AI projects, and the inspiration I pick up from animation, games, and fiction will all slowly find a place here. It is more than a resume page. I want it to grow into a fuller personal body of work.",
      sideMood: "Games / Audio / AI / Ongoing updates",
      sideText:
        "I want this site to hold more formal projects and experiences while still keeping a bit of story, character, and sonic atmosphere so it feels recognizably mine.",
    },
    intro: {
      eyebrow: "About me",
      title: "Someone who wants to turn technology, creativity, and personal interests into meaningful work.",
      description: "The homepage focuses on my research, projects, and growth, while the notes space keeps a more personal and interest-driven side of me.",
    },
    projects: {
      eyebrow: "Selected work",
      title: "A few experiences that best represent where I am right now.",
      description: "This version prioritizes the experiences that align most closely with my resume and current direction, with more complete work to be added later.",
      items: [
        {
          name: "Speech-Driven 3D Virtual Character Facial Animation",
          summary:
            "This is my final year project, focused on building a real-time pipeline that drives lip-sync, facial expressions, and head motion for stylized 3D characters from speech input.",
          stack: ["Unity", "C#", "Blender", "LLM", "TTS"],
          highlight: "The project combines phoneme-to-viseme animation, blendshape design, real-time Unity animation, and LLM-based emotional analysis with speech generation.",
          status: "In progress",
        },
        {
          name: "LLM and TTS-Based Expert Dialogue Audio Generation System",
          summary:
            "This project transforms articles such as papers or magazines into expert-style multi-speaker dialogue, then generates expressive multi-voice audio with TTS.",
          stack: ["Python", "GPT-4o", "Prompt Engineering", "ElevenLabs TTS"],
          highlight: "My role focused on designing the end-to-end flow from raw text to dialogue audio, including preprocessing, prompt structure, dialogue generation, and quality checks.",
          status: "Research project",
        },
        {
          name: "LLM-Based Content Workflow Design",
          summary:
            "During my internship at Suzhou Baizhitong, I helped design and implement several Dify-based content workflows focused on subtitle structuring, knowledge extraction, and content analysis.",
          stack: ["Dify", "LLM Workflow", "Prompt Design", "Content Systems"],
          highlight: "This experience helped me understand how to turn model capabilities into workflows that are actually useful in real product contexts.",
          status: "Internship project",
        },
        {
          name: "Indie Game Jam Project",
          summary:
            "In the 2024 itch.io Game Jam, I participated in the full development cycle and worked on narrative structure, event systems, UI design, and music and sound implementation, finishing in the top 9% for innovation.",
          stack: ["Game Design", "UI", "Narrative", "Audio", "Systems"],
          highlight: "This project gave me a full concept-to-implementation experience and helped confirm my long-term interest in interaction and game experience design.",
          href: "https://itch.io/jam/brackeys-12/rate/2973702",
          status: "Completed",
        },
      ],
    },
    timeline: {
      eyebrow: "Growth timeline",
      title: "Lighter than a resume, but clearer about the direction I am actually moving toward.",
      description: "These moments highlight the areas I keep returning to most: games, sound, applied AI, and interaction design.",
    },
    notesTeaser: {
      eyebrow: "Notes space",
      title: "This is not just a blog. It is where I keep a longer, more personal record of ideas and interests.",
      description: "The homepage explains who I am and what I work on. The notes space is where I keep building a personal archive through daily writing, study notes, game notes, and anime impressions.",
      openLabel: "Open notes space",
      chips: ["Daily writing", "Study notes", "Game notes", "Anime impressions", "Loose thoughts", "Screenshot notes"],
      bannerLabel: "Notes key visual",
      bannerText: "This area can later be replaced with your own chosen illustration or themed banner.",
      previewLabel: "Second world preview",
      previewTitle: "The notes space is more personal, more intimate, and more atmospheric than the homepage.",
      visualNoteLabel: "Visual note",
      visualNoteText: "It stays visually distinct from the homepage while still remaining bright, readable, and practical over time.",
      editableLabel: "Editable later",
      editableText: "You can later swap the background image, illustration, and music resources without changing the layout.",
    },
    contact: {
      eyebrow: "Links",
      title: "If you want to know more about me, these are the easiest places to start.",
      description: "I am keeping this section simple for now, and can expand it later with more platforms, portfolio links, or a fuller contact setup.",
    },
  },
};
