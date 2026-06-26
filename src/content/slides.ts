import type { SlideDefinition } from "@/types/slides";

const D = "https://multica.ai/docs";

export const slides: readonly SlideDefinition[] = [
  {
    id: "cover",
    section: "intro",
    title: "Multica：让人与 AI Agent 在同一工作台协作",
    kicker: "内部分享 · 基于官方文档整理",
    summary:
      "Multica 是一个任务协作平台——人和 AI agent 在同一个 workspace 里工作，而不是隔着一个聊天窗口。本页及后续内容整理自 multica.ai/docs。",
    bulletPoints: [
      "agent 不跑在 Multica 服务器上，而在你本机",
      "像给同事派活一样，把 issue 分给 agent",
      "平台只编排状态，密钥与代码留在你的机器",
    ],
    visualType: "hero",
    sourceLinks: [{ label: "Welcome", href: D }],
  },
  {
    id: "what-is-multica",
    section: "official",
    title: "三种方式开始用 Multica",
    kicker: "Welcome · 三种入口",
    summary:
      "两种后端选择 + 一种客户端选择。桌面 App 内建 CLI 并在启动时拉起 daemon，零命令上手。",
    bulletPoints: [
      "Multica Cloud：托管后端，装 CLI、跑 daemon、连官方服务器",
      "Self-host：Docker Compose 自托管，数据库与服务都在自己基础设施",
      "Desktop App：内建 CLI，开机即起 daemon，连 Cloud 或自托管后端",
    ],
    visualType: "summary",
    sourceLinks: [
      { label: "Cloud quickstart", href: `${D}/cloud-quickstart` },
      { label: "Self-host quickstart", href: `${D}/self-host-quickstart` },
      { label: "Desktop app", href: `${D}/desktop-app` },
    ],
  },
  {
    id: "workspace",
    section: "official",
    title: "Workspace：协作的基本单位",
    kicker: "Workspaces · 成员与 Issue",
    summary:
      "每个 issue、成员、评论和 agent 都从属于一个 workspace；切换 workspace 即替换整个视图。",
    bulletPoints: [
      "创建时定名称、slug、issue 前缀（如 MUL-123 的 MUL）",
      "issue 编号在 workspace 内顺序唯一，删除不回收",
      "删除 workspace 不可逆：连同 issue 与 agent 配置一并清除",
    ],
    visualType: "object-map",
    sourceLinks: [
      { label: "Workspaces", href: `${D}/workspaces` },
      { label: "Members and roles", href: `${D}/members-roles` },
    ],
  },
  {
    id: "agent-first-class",
    section: "official",
    title: "Agent 是 workspace 的一等成员",
    kicker: "Agents · 与人的异同",
    summary:
      "与人类成员共用同一套成员接口，UI 几乎不区分；本质区别是：分到任务即自动开工，且不收通知。",
    bulletPoints: [
      "可被分配 issue、被 @、在评论里发言",
      "可当 project lead，运行中也能自行开 issue",
      "绑定一个 runtime（daemon × 一个 AI coding tool）",
      "可见性可设 workspace / private；不用了可归档",
    ],
    visualType: "capability-grid",
    sourceLinks: [
      { label: "Agents", href: `${D}/agents` },
      { label: "Members and roles", href: `${D}/members-roles` },
    ],
  },
  {
    id: "create-agent",
    section: "official",
    title: "创建与配置一个 Agent",
    kicker: "Create & configure",
    summary:
      "最小只需两个字段：名字 + 选一个 AI coding tool（runtime）。其余皆可后调，先跑起来再调参。",
    bulletPoints: [
      "system instructions：每轮任务前置的角色与规则",
      "custom_env / custom_args：注入环境变量与 CLI 参数",
      "max_concurrent_tasks：默认并发 6，叠加 daemon 上限 20",
      "可挂载 Skills 知识包；归档即取消其未完成任务",
    ],
    visualType: "summary",
    sourceLinks: [
      { label: "Create and configure an agent", href: `${D}/agents-create` },
      { label: "AI coding tools matrix", href: `${D}/providers` },
    ],
  },
  {
    id: "triggers",
    section: "official",
    title: "四种触发方式让 Agent 开工",
    kicker: "Assign / @-mention / Chat / Autopilots",
    summary:
      "不只是“分配 issue”——四种协作姿势对应四种触发路径，各有上下文与优先级语义。",
    bulletPoints: [
      "Assign：最常用，作为正式指派人接管 issue",
      "@-mention：不改指派人/状态，在评论里点名请它看一眼",
      "Chat：一对一独立对话，脱离 issue、完全私有",
      "Autopilots：cron / webhook 定时触发，“常态指令”式工作",
    ],
    visualType: "capability-grid",
    sourceLinks: [
      { label: "Assigning issues", href: `${D}/assigning-issues` },
      { label: "Mentioning agents", href: `${D}/mentioning-agents` },
      { label: "Chat", href: `${D}/chat` },
      { label: "Autopilots", href: `${D}/autopilots` },
    ],
  },
  {
    id: "runtime-model",
    section: "official",
    title: "核心心智模型：Server / Daemon / AI Coding Tool",
    kicker: "How Multica works",
    summary:
      "三段式运行模型：服务端编排状态、daemon 调度运行、AI coding tool 真正写代码——这是它与 Linear/Jira 最大的不同。",
    bulletPoints: [
      "server 管 workspace · issue · agent 定义 · 任务队列，不跑 AI",
      "daemon 在本机每 3 秒拉取任务、每 15 秒发心跳",
      "coding tool 在本机执行：密钥、代码、CPU 都不出本机",
    ],
    visualType: "runtime-diagram",
    sourceLinks: [{ label: "How Multica works", href: `${D}/how-multica-works` }],
  },
  {
    id: "daemon-runtimes",
    section: "official",
    title: "Daemon 与 Runtimes：本机多 runtime",
    kicker: "Daemon & runtimes",
    summary:
      "runtime = daemon × 一个 AI coding tool。一台装了 2 个工具、加入 2 个 workspace 的机器，注册 4 个独立 runtime。",
    bulletPoints: [
      "心跳 15s；45s 无心跳标记 missing，7 天无关联自动删除",
      "两层并发：daemon 默认 20、agent 默认 6，取更紧者生效",
      "崩溃重启会回收在途任务并标记 failed（runtime_recovery）",
      "桌面 App 自带 daemon，无需手动 multica daemon start",
    ],
    visualType: "summary",
    sourceLinks: [
      { label: "Daemon and runtimes", href: `${D}/daemon-runtimes` },
      { label: "Install an agent runtime", href: `${D}/install-agent-runtime` },
    ],
  },
  {
    id: "task-lifecycle",
    section: "official",
    title: "Task：每次 Agent 执行的生命周期",
    kicker: "Tasks · 状态机与重试",
    summary:
      "task 是 agent 每次执行的工作单元。分配、@、chat、autopilot 都产生 task；issue 与 task 是两个对象。",
    bulletPoints: [
      "queued → dispatched → running → completed/failed/cancelled",
      "dispatched 5 分钟未起、running 超 2.5 小时即超时",
      "runtime_offline / timeout 自动重试，最多 2 次；agent_error 不重试",
      "手动 rerun 开新会话；自动重试继承上一会话",
    ],
    visualType: "workflow",
    sourceLinks: [{ label: "Tasks", href: `${D}/tasks` }],
  },
  {
    id: "skills",
    section: "official",
    title: "Skills：给 Agent 挂载知识包",
    kicker: "Skills · 知识 vs 工具",
    summary:
      "Skill 是结构化知识包（SKILL.md + 配套文件），告诉 agent 遇到某类任务该怎么想、怎么做；兼容 Anthropic Agent Skills 开放标准。",
    bulletPoints: [
      "workspace skill 团队共享，local skill 本机扫描导入",
      "各工具的 skill 注入路径不同（.claude/skills/ 等）",
      "Skill 是“知识”，MCP 是“工具通道”，二者互补",
      "第三方 skill 需自查：Multica 不签名 / 审计 / 沙箱",
    ],
    visualType: "capability-grid",
    sourceLinks: [
      { label: "Skills", href: `${D}/skills` },
      { label: "AI coding tools matrix", href: `${D}/providers` },
    ],
  },
  {
    id: "squads",
    section: "official",
    title: "Squads：编组协同与按主题路由",
    kicker: "Squads · leader 决定谁接活",
    summary:
      "squad 是带 leader agent 的 agent 组。把 issue 分给 squad，leader 读题后 @ 最合适的成员——团队变大了，路由不变。",
    bulletPoints: [
      "leader 必须是 agent，成员可为 agent 或人",
      "squad 是一等指派对象，出现在指派人 / @ 选择器里",
      "归档时已指派 issue 转给 leader agent，不让活儿落空",
      "squad 加的是“路由”，不是“能力”",
    ],
    visualType: "summary",
    sourceLinks: [{ label: "Squads", href: `${D}/squads` }],
  },
  {
    id: "tools-matrix",
    section: "official",
    title: "13 个 AI Coding Tools：同接口，能力各异",
    kicker: "Providers matrix",
    summary:
      "它们实现同一套接口（排队 / 调度 / 执行 / 回写），但会话续接、MCP、skill 路径、模型选择差异显著。",
    bulletPoints: [
      "Claude Code：首选，功能最全，会话续接 + MCP",
      "Codex / Cursor / Copilot / Gemini 等 13 个内置",
      "10 个消费 mcp_config；3 个收字段但忽略",
      "会话续接除 Gemini 外均支持；Pi 的 session 是文件路径",
    ],
    visualType: "capability-grid",
    sourceLinks: [{ label: "AI coding tools matrix", href: `${D}/providers` }],
  },
  {
    id: "migration-setup",
    section: "practice",
    title: "实践：把 Multica 用到报表迁移",
    kicker: "个人实践 · 落地路径",
    summary:
      "拆 issue、沉 skill、复查回归——一套可重复的 task 流。以下为个人使用方式，非官方最佳实践。",
    bulletPoints: [
      "先按表 / 模块拆迁移批次，issue 写清核对点",
      "用 skill 固化 repo 约束与命名规则，批量下发 agent",
      "autopilot 做夜间巡检与回归比对",
      "人工 review 作最终质量关，决定是否合入",
    ],
    visualType: "workflow",
    sourceLinks: [{ label: "Multica Docs", href: D }],
    callout: "本页为个人使用方式，不冒充官方最佳实践。",
  },
  {
    id: "migration-lessons",
    section: "practice",
    title: "实践心得：哪些活儿适合交给 Agent",
    kicker: "个人实践 · 经验",
    summary:
      "高重复、强上下文、可分解的任务最易见效；需要主观判断或跨系统对齐的留给自己。",
    bulletPoints: [
      "迁移 / 重命名 / 批量改写：最适合，贴 skill 即可重复",
      "回归比对与巡检：用 autopilot 定时跑，结果入 inbox",
      "把 agent 当成员管理：归档、改名、调并发都顺手",
      "凭据用最小权限并定期轮换；勿放高价值 secret 于 custom_env",
    ],
    visualType: "summary",
    sourceLinks: [
      { label: "Create and configure an agent", href: `${D}/agents-create` },
      { label: "Autopilots", href: `${D}/autopilots` },
      { label: "Environment variables", href: `${D}/environment-variables` },
    ],
    callout: "落地先小步：一个高重复任务 + 一份 skill 跑通，再扩大。",
  },
  {
    id: "closing",
    section: "closing",
    title: "总结：适合什么任务，下一步怎么试",
    kicker: "落地建议",
    summary:
      "从高重复、强上下文、可分解的任务开始试点，最易见效。",
    bulletPoints: [
      "先试一个高重复协作任务 + 一份 skill",
      "用 task 追踪每次执行，用 inbox 收结果",
      "积累 skills 再扩大，把 agent 当成员来管理",
      "文档 multica.ai/docs · GitHub multica-ai/multica",
    ],
    visualType: "summary",
    sourceLinks: [{ label: "Welcome", href: D }],
  },
];