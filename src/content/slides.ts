import type { SlideDefinition } from "@/types/slides";

export const slides: readonly SlideDefinition[] = [
  {
    id: "cover",
    section: "intro",
    title: "Multica：让 AI Agent 真正进入工程协作流",
    kicker: "内部分享 / Web PPT",
    summary:
      "先讲清 Multica 是什么、怎么工作，再落到我如何把它用在报表迁移任务中。",
    bulletPoints: [
      "不是聊天窗口，而是任务协作平台",
      "人和 agent 在同一 workspace 里协作",
    ],
    visualType: "hero",
    sourceLinks: [{ label: "Welcome", href: "https://multica.ai/docs" }],
  },
  {
    id: "why-multica",
    section: "official",
    title: "为什么值得关注 Multica",
    kicker: "产品定位",
    summary:
      "Multica 的关键不是单次对话，而是把任务、执行、上下文和责任对象放进同一个系统里。",
    bulletPoints: [
      "以 issue 为中心组织协作",
      "以 agent 为一等成员参与工作",
      "以 task 追踪每次执行过程",
    ],
    visualType: "summary",
    sourceLinks: [{ label: "Welcome", href: "https://multica.ai/docs" }],
  },
  {
    id: "runtime-model",
    section: "official",
    title: "核心心智模型：Server / Daemon / AI Coding Tool",
    kicker: "How Multica works",
    summary:
      "Multica 的关键在于三段式运行模型：服务端编排协作状态，daemon 负责运行衔接，真正干活的是接入的 AI coding tool。",
    bulletPoints: [
      "server 管协作状态",
      "daemon 负责调度运行",
      "coding tool 负责实际执行",
    ],
    visualType: "runtime-diagram",
    sourceLinks: [
      {
        label: "How Multica works",
        href: "https://multica.ai/docs/how-multica-works",
      },
    ],
  },
  {
    id: "core-objects",
    section: "official",
    title: "核心对象怎么协作",
    kicker: "Workspace / Project / Issue / Agent / Task",
    summary:
      "Multica 通过共享的工作对象，把人、任务和执行过程统一在一个可追踪的协作平面里。",
    bulletPoints: [
      "issue 是核心工作单元",
      "agent 可以像成员一样被分配工作",
      "task 记录每次 agent 执行",
    ],
    visualType: "object-map",
    sourceLinks: [
      {
        label: "Issues and projects",
        href: "https://multica.ai/docs/issues",
      },
    ],
  },
  {
    id: "agent-capabilities",
    section: "official",
    title: "Agent 不只是被动回答问题",
    kicker: "Agents / Skills / Autopilots",
    summary:
      "在 Multica 里，agent 可以接 issue、被 @、携带 skill，还能通过 autopilot 自动启动工作。",
    bulletPoints: [
      "可被分配和评论协作",
      "skills 注入知识与流程",
      "autopilots 触发自动执行",
    ],
    visualType: "capability-grid",
    sourceLinks: [
      { label: "Agents", href: "https://multica.ai/docs/agents" },
      { label: "Skills", href: "https://multica.ai/docs/skills" },
      {
        label: "Autopilots",
        href: "https://multica.ai/docs/autopilots",
      },
    ],
  },
  {
    id: "usage-surfaces",
    section: "official",
    title: "日常入口：Desktop、CLI、Cloud / Self-host",
    kicker: "How teams actually use it",
    summary:
      "Desktop 更适合快速上手，CLI 更适合自动化，而 Cloud / Self-host 决定后端部署方式。",
    bulletPoints: [
      "Desktop 上手成本最低",
      "CLI 适合脚本化和批处理",
      "Cloud 与自托管决定基础设施边界",
    ],
    visualType: "summary",
    sourceLinks: [
      {
        label: "Desktop app",
        href: "https://multica.ai/docs/desktop-app",
      },
      { label: "CLI", href: "https://multica.ai/docs/cli" },
    ],
  },
  {
    id: "engineering-fit",
    section: "official",
    title: "为什么它更像工程协作系统",
    kicker: "不是一次性 prompt 工具",
    summary:
      "Multica 强调可分配、可复用、可追踪、可重试，这比单纯的聊天式 AI 更接近工程团队的真实协作流。",
    bulletPoints: [
      "共享任务上下文",
      "执行状态明确可追踪",
      "知识可沉淀为 skills",
    ],
    visualType: "summary",
    sourceLinks: [
      { label: "Tasks", href: "https://multica.ai/docs/tasks" },
      { label: "Agents", href: "https://multica.ai/docs/agents" },
    ],
  },
  {
    id: "migration-practice",
    section: "practice",
    title: "我如何把 Multica 用到报表迁移里",
    kicker: "个人实践",
    summary:
      "把迁移拆成 issue，把规则沉淀成 skill，再把复查和回归变成可重复执行的 task 流，这是我目前最看重的落地方式。",
    bulletPoints: [
      "先拆迁移批次和核对点",
      "用 skill 固化 repo 规则和检查方法",
      "保留人工 review 作为最终质量关",
    ],
    visualType: "workflow",
    sourceLinks: [{ label: "Multica Docs", href: "https://multica.ai/docs" }],
    callout: "这一页明确标注为个人使用方式，不冒充官方最佳实践。",
  },
  {
    id: "closing",
    section: "closing",
    title: "总结：适合什么任务，下一步怎么试",
    kicker: "落地建议",
    summary:
      "从高重复、强上下文、可分解的任务开始试点，最容易看见 Multica 在工程协作里的真实价值。",
    bulletPoints: [
      "先试高重复协作任务",
      "先积累 skills 再扩大范围",
      "把 agent 当作成员来管理",
    ],
    visualType: "summary",
    sourceLinks: [{ label: "Welcome", href: "https://multica.ai/docs" }],
  },
];
