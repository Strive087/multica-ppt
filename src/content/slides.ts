import type { SlideDefinition } from "@/types/slides";

const D = "https://multica.ai/docs/zh";

export const slides: readonly SlideDefinition[] = [
  {
    id: "cover",
    section: "intro",
    title: "Multica：把 Agent 放进协作工作台",
    kicker: "内部分享 · 基于官方文档整理",
    summary:
      "Multica 不是一个更大的聊天框，而是让人、issue、agent 与 task 在同一个 workspace 里协作。",
    bulletPoints: [
      "像给同事派活一样给 Agent 派活",
      "上下文跟着 issue 和 task 流转",
      "结果回到协作线，而不是散落在聊天记录里",
    ],
    visualType: "hero",
    sourceLinks: [{ label: "Multica Docs", href: D }],
  },
  {
    id: "chat-to-workspace",
    section: "intro",
    title: "从“和 AI 聊天”到“给 Agent 派活”",
    kicker: "Mindset shift",
    summary:
      "传统聊天靠人复制上下文；Multica 把目标、讨论、负责人、执行状态和结果放进同一个工作对象。",
    bulletPoints: [
      "issue 承载目标和验收标准",
      "comment 承载协作过程",
      "task 记录每次 Agent 执行",
    ],
    visualType: "chat-vs-workspace",
    sourceLinks: [
      { label: "Issues", href: `${D}/issues` },
      { label: "Tasks", href: `${D}/tasks` },
      { label: "Comments", href: `${D}/comments` },
    ],
  },
  {
    id: "runtime-model",
    section: "official",
    title: "核心架构：Server / Daemon / AI Coding Tool",
    kicker: "How Multica works",
    summary:
      "三段式运行模型：服务端编排状态，daemon 在本机调度任务，AI coding tool 在本机真正执行。",
    bulletPoints: [
      "Server 管 workspace、issue、agent 定义与任务队列",
      "Daemon 每 3 秒拉取任务、每 15 秒发心跳",
      "代码目录、API 密钥和授权工具留在本机",
    ],
    visualType: "runtime-diagram",
    sourceLinks: [{ label: "How Multica works", href: `${D}/how-multica-works` }],
  },
  {
    id: "special-capabilities",
    section: "official",
    title: "特殊能力：Agent 像团队成员一样被管理",
    kicker: "Beyond task execution",
    summary:
      "Multica 的亮点不只是让 Agent 接任务，而是把知识、编组、工具、可见性和项目上下文都纳入团队协作模型。",
    bulletPoints: [
      "Skills 注入团队知识和操作规范",
      "Squads 让 leader agent 路由多 Agent 协作",
      "多 AI coding tools 接入同一协作接口",
    ],
    visualType: "feature-map",
    sourceLinks: [
      { label: "Skills", href: `${D}/skills` },
      { label: "Squads", href: `${D}/squads` },
      { label: "Providers", href: `${D}/providers` },
      { label: "Project resources", href: `${D}/project-resources` },
    ],
  },
  {
    id: "task-lifecycle",
    section: "official",
    title: "一个任务从创建到完成会经历什么",
    kicker: "Task lifecycle",
    summary:
      "分配 issue 会创建 task；daemon 认领后进入本地执行；执行结果再回写到 Multica，并通过实时更新呈现。",
    bulletPoints: [
      "queued → dispatched → running",
      "最终进入 completed / failed / cancelled",
      "可重试错误会自动重排队",
    ],
    visualType: "workflow",
    sourceLinks: [
      { label: "How Multica works", href: `${D}/how-multica-works` },
      { label: "Tasks", href: `${D}/tasks` },
    ],
  },
  {
    id: "triggers",
    section: "official",
    title: "让 Agent 开工的四种方式",
    kicker: "Four entry points",
    summary:
      "同一个 Agent 可以被正式指派、在评论里被点名、通过私聊探索，或由 Autopilot 定时/事件触发。",
    bulletPoints: [
      "Assign issue：正式接手 issue",
      "@ mention：插入讨论，不改负责人",
      "Chat / Autopilot：探索或持续自动执行",
    ],
    visualType: "trigger-map",
    sourceLinks: [
      { label: "Assigning issues", href: `${D}/assigning-issues` },
      { label: "Mentioning agents", href: `${D}/mentioning-agents` },
      { label: "Chat", href: `${D}/chat` },
      { label: "Autopilots", href: `${D}/autopilots` },
    ],
  },
  {
    id: "runtime-matrix",
    section: "official",
    title: "Runtime：一台机器可以注册多个能力入口",
    kicker: "Daemon × AI coding tool",
    summary:
      "runtime 是 daemon 和一款 AI coding tool 的组合；同一台机器加入多个 workspace、安装多个工具，就会注册多个 runtime。",
    bulletPoints: [
      "一个 daemon 可以服务多个 workspace",
      "每个 AI coding tool 形成独立 runtime",
      "并发和心跳由 daemon / agent 配置共同约束",
    ],
    visualType: "runtime-matrix",
    sourceLinks: [
      { label: "Daemon and runtimes", href: `${D}/daemon-runtimes` },
      { label: "AI coding tools", href: `${D}/providers` },
    ],
  },
  {
    id: "practice-fit",
    section: "practice",
    title: "实践：什么任务适合交给 Agent",
    kicker: "Personal practice",
    summary:
      "高重复、强上下文、可分解、可验收的任务最容易见效；报表迁移、批量改写、回归检查都属于这类。",
    bulletPoints: [
      "先按模块拆 issue，写清输入、输出和验收点",
      "用 skill 固化仓库规则和迁移口径",
      "用 autopilot 做巡检、回归和例行总结",
    ],
    visualType: "practice-workflow",
    sourceLinks: [
      { label: "Skills", href: `${D}/skills` },
      { label: "Autopilots", href: `${D}/autopilots` },
      { label: "Tasks", href: `${D}/tasks` },
    ],
    callout: "本页是个人落地建议，不冒充官方最佳实践。",
  },
  {
    id: "closing",
    section: "closing",
    title: "总结：从一个小任务开始",
    kicker: "Start small",
    summary:
      "先把一个重复任务跑通，再沉淀 skill、扩大到 autopilot 和 squad；把 Agent 当成员管理，而不是当聊天框使用。",
    bulletPoints: [
      "选一个高重复、边界清楚的任务",
      "写清 issue，再让 Agent 执行和回写",
      "复盘结果，把经验沉淀成 skill",
    ],
    visualType: "summary",
    sourceLinks: [{ label: "Multica Docs", href: D }],
  },
];
