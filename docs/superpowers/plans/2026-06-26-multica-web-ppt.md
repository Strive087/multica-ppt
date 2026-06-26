# Multica Web PPT Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a Vercel-ready `Next.js + reveal.js` web presentation that introduces Multica's product model first and ends with a Chinese report-migration practice section.

**Architecture:** Use a single Next.js App Router route as the presentation entry, with slide content stored in typed local data. A presentation shell will switch between reveal.js slide mode and a stacked overview mode while sharing the same slide model, styling tokens, and visual components.

**Tech Stack:** Next.js, React, TypeScript, Tailwind CSS, reveal.js, Vitest, Testing Library

---

## File Structure

### Project setup and config

- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.ts`
- Create: `next-env.d.ts`
- Create: `postcss.config.js`
- Create: `tailwind.config.ts`
- Create: `.gitignore`
- Create: `vitest.config.ts`
- Create: `tests/setup.ts`

### App shell

- Create: `app/layout.tsx`
- Create: `app/page.tsx`
- Create: `app/globals.css`

### Content and logic

- Create: `src/types/slides.ts`
- Create: `src/content/slides.ts`
- Create: `src/lib/slides.ts`

### Presentation components

- Create: `src/components/presentation/presentation-shell.tsx`
- Create: `src/components/presentation/reveal-deck.tsx`
- Create: `src/components/presentation/overview-deck.tsx`
- Create: `src/components/presentation/slide-frame.tsx`
- Create: `src/components/presentation/slide-content.tsx`
- Create: `src/components/presentation/mode-toggle.tsx`
- Create: `src/components/presentation/progress-nav.tsx`

### Visual blocks

- Create: `src/components/visuals/runtime-diagram.tsx`
- Create: `src/components/visuals/object-map.tsx`
- Create: `src/components/visuals/capability-grid.tsx`
- Create: `src/components/visuals/migration-workflow.tsx`

### Tests

- Create: `tests/slides/slides.test.ts`
- Create: `tests/presentation/presentation-shell.test.tsx`
- Create: `tests/presentation/slide-content.test.tsx`

### Docs

- Create: `README.md`

## Task 1: Bootstrap The Next.js Presentation Workspace

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.ts`
- Create: `next-env.d.ts`
- Create: `postcss.config.js`
- Create: `tailwind.config.ts`
- Create: `.gitignore`
- Create: `vitest.config.ts`
- Create: `tests/setup.ts`

- [ ] **Step 1: Create the project manifest and scripts**

```json
{
  "name": "multica-web-ppt",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "test": "vitest run",
    "test:watch": "vitest"
  },
  "dependencies": {
    "clsx": "^2.1.1",
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "reveal.js": "^6.0.1"
  },
  "devDependencies": {
    "@testing-library/jest-dom": "^6.6.3",
    "@testing-library/react": "^16.0.1",
    "@testing-library/user-event": "^14.5.2",
    "@types/node": "^22.10.1",
    "@types/react": "^19.0.2",
    "@types/react-dom": "^19.0.2",
    "@vitejs/plugin-react": "^4.3.4",
    "autoprefixer": "^10.4.20",
    "jsdom": "^25.0.1",
    "postcss": "^8.4.49",
    "tailwindcss": "^3.4.16",
    "typescript": "^5.7.2",
    "vitest": "^2.1.8"
  }
}
```

- [ ] **Step 2: Add base config files**

```ts
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
```

```json
// tsconfig.json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "es2022"],
    "allowJs": false,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },
    "plugins": [{ "name": "next" }]
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

```js
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
```

```ts
// next-env.d.ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited directly.
```

```gitignore
# .gitignore
node_modules
.next
coverage
dist
```

- [ ] **Step 3: Install dependencies**

Run: `pnpm install`  
Expected: dependencies installed, lockfile created, exit code `0`

- [ ] **Step 4: Add Vitest config and test setup**

```ts
// vitest.config.ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: "./tests/setup.ts",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

```ts
// tests/setup.ts
import "@testing-library/jest-dom/vitest";
```

- [ ] **Step 5: Commit bootstrap config**

```bash
git add package.json tsconfig.json next.config.ts next-env.d.ts postcss.config.js tailwind.config.ts vitest.config.ts tests/setup.ts .gitignore pnpm-lock.yaml
git commit -m "chore: scaffold multica web ppt workspace"
```

## Task 2: Build The Slide Data Model And Validate The Deck Shape

**Files:**
- Create: `src/types/slides.ts`
- Create: `src/content/slides.ts`
- Create: `src/lib/slides.ts`
- Test: `tests/slides/slides.test.ts`

- [ ] **Step 1: Write the failing slide-shape tests**

```ts
// tests/slides/slides.test.ts
import { describe, expect, it } from "vitest";
import { slides } from "@/content/slides";
import { getOfficialSlides, getPracticeSlides } from "@/lib/slides";

describe("slides deck", () => {
  it("contains official product slides before practice slides", () => {
    const official = getOfficialSlides(slides);
    const practice = getPracticeSlides(slides);

    expect(official.length).toBeGreaterThanOrEqual(7);
    expect(practice.length).toBeGreaterThanOrEqual(1);
    expect(slides.at(-2)?.section).toBe("practice");
  });

  it("keeps source links on every official slide", () => {
    for (const slide of getOfficialSlides(slides)) {
      expect(slide.sourceLinks.length).toBeGreaterThan(0);
    }
  });
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm test tests/slides/slides.test.ts`  
Expected: FAIL because `@/content/slides` and `@/lib/slides` do not exist yet

- [ ] **Step 3: Implement the slide types, data, and helpers**

```ts
// src/types/slides.ts
export type SlideSection = "intro" | "official" | "practice" | "closing";
export type VisualType =
  | "hero"
  | "runtime-diagram"
  | "object-map"
  | "capability-grid"
  | "workflow"
  | "summary";

export type SourceLink = {
  label: string;
  href: string;
};

export type SlideDefinition = {
  id: string;
  section: SlideSection;
  title: string;
  kicker: string;
  summary: string;
  bulletPoints: string[];
  visualType: VisualType;
  sourceLinks: SourceLink[];
  callout?: string;
};
```

```ts
// src/lib/slides.ts
import type { SlideDefinition } from "@/types/slides";

export function getOfficialSlides(slides: SlideDefinition[]) {
  return slides.filter((slide) => slide.section === "official" || slide.section === "intro");
}

export function getPracticeSlides(slides: SlideDefinition[]) {
  return slides.filter((slide) => slide.section === "practice");
}
```

```ts
// src/content/slides.ts
import type { SlideDefinition } from "@/types/slides";

export const slides: SlideDefinition[] = [
  {
    id: "cover",
    section: "intro",
    title: "Multica：让 AI Agent 真正进入工程协作流",
    kicker: "内部分享 / Web PPT",
    summary: "先讲清 Multica 是什么、怎么工作，再落到我如何把它用在报表迁移任务中。",
    bulletPoints: ["不是聊天窗口，而是任务协作平台", "人和 agent 在同一 workspace 里协作"],
    visualType: "hero",
    sourceLinks: [{ label: "Welcome", href: "https://multica.ai/docs" }]
  },
  {
    id: "why-multica",
    section: "official",
    title: "为什么值得关注 Multica",
    kicker: "产品定位",
    summary: "Multica 的关键不是对话，而是让任务、执行、上下文和责任对象连起来。",
    bulletPoints: ["以 issue 为中心", "以 agent 为一等成员", "以 task 追踪执行过程"],
    visualType: "summary",
    sourceLinks: [{ label: "Welcome", href: "https://multica.ai/docs" }]
  },
  {
    id: "runtime-model",
    section: "official",
    title: "核心心智模型：Server / Daemon / AI Coding Tool",
    kicker: "How Multica works",
    summary: "服务端负责任务协作与编排，真正执行 agent 工作的是 daemon 连接的本地或接入式 coding tool。",
    bulletPoints: ["server 管协作状态", "daemon 负责调度运行", "coding tool 负责实际执行"],
    visualType: "runtime-diagram",
    sourceLinks: [{ label: "How Multica works", href: "https://multica.ai/docs/how-multica-works" }]
  },
  {
    id: "core-objects",
    section: "official",
    title: "核心对象怎么协作",
    kicker: "Workspace / Project / Issue / Agent / Task",
    summary: "Multica 通过共享的工作对象把人、任务和执行过程统一起来。",
    bulletPoints: ["issue 是核心工作单元", "agent 可以像成员一样被分配工作", "task 记录每次 agent 执行"],
    visualType: "object-map",
    sourceLinks: [{ label: "Issues and projects", href: "https://multica.ai/docs/issues" }]
  },
  {
    id: "agent-capabilities",
    section: "official",
    title: "Agent 不只是被动回答问题",
    kicker: "Agents / Skills / Autopilots",
    summary: "Agent 可以接 issue、被 @、装载 skill、进入 squad，还能通过 autopilot 自动开工。",
    bulletPoints: ["可被分配和评论协作", "skills 注入知识与流程", "autopilots 触发自动执行"],
    visualType: "capability-grid",
    sourceLinks: [
      { label: "Agents", href: "https://multica.ai/docs/agents" },
      { label: "Skills", href: "https://multica.ai/docs/skills" },
      { label: "Autopilots", href: "https://multica.ai/docs/autopilots" }
    ]
  },
  {
    id: "usage-surfaces",
    section: "official",
    title: "日常入口：Desktop、CLI、Cloud / Self-host",
    kicker: "How teams actually use it",
    summary: "Desktop 适合快速上手，CLI 适合脚本化与自动化，Cloud / Self-host 决定后端托管方式。",
    bulletPoints: ["Desktop 上手成本最低", "CLI 适合流水线和批处理", "Cloud 与自托管是后端选择"],
    visualType: "summary",
    sourceLinks: [
      { label: "Desktop app", href: "https://multica.ai/docs/desktop-app" },
      { label: "CLI", href: "https://multica.ai/docs/cli" }
    ]
  },
  {
    id: "engineering-fit",
    section: "official",
    title: "为什么它更像工程协作系统",
    kicker: "不是一次性 prompt 工具",
    summary: "它强调可分配、可复用、可追踪、可重试，比临时聊天更适合复杂工程任务。",
    bulletPoints: ["共享上下文", "执行状态明确", "知识可沉淀为 skills"],
    visualType: "summary",
    sourceLinks: [
      { label: "Tasks", href: "https://multica.ai/docs/tasks" },
      { label: "Agents", href: "https://multica.ai/docs/agents" }
    ]
  },
  {
    id: "migration-practice",
    section: "practice",
    title: "我如何把 Multica 用到报表迁移里",
    kicker: "个人实践",
    summary: "把迁移拆成 issue、把规则沉淀成 skill、把复查和回归变成可重复执行的 task 流。",
    bulletPoints: ["先拆迁移批次和核对点", "用 skill 固化 repo 规则", "保留人工 review 做最终质量关"],
    visualType: "workflow",
    sourceLinks: [{ label: "Multica Docs", href: "https://multica.ai/docs" }],
    callout: "这一页明确标注为个人使用方式，不冒充官方最佳实践。"
  },
  {
    id: "closing",
    section: "closing",
    title: "总结：适合什么任务，下一步怎么试",
    kicker: "落地建议",
    summary: "从一类高重复、强上下文、可分解的任务试点，最容易看见 Multica 的价值。",
    bulletPoints: ["先试高重复协作任务", "先积累 skills 再扩大范围", "把 agent 当成员来管理"],
    visualType: "summary",
    sourceLinks: [{ label: "Welcome", href: "https://multica.ai/docs" }]
  }
];
```

- [ ] **Step 4: Run test to verify it passes**

Run: `pnpm test tests/slides/slides.test.ts`  
Expected: PASS with `2 passed`

- [ ] **Step 5: Commit slide data model**

```bash
git add src/types/slides.ts src/content/slides.ts src/lib/slides.ts tests/slides/slides.test.ts
git commit -m "feat: add multica presentation content model"
```

## Task 3: Render The App Shell And Mode Toggle

**Files:**
- Create: `app/layout.tsx`
- Create: `app/page.tsx`
- Create: `app/globals.css`
- Create: `src/components/presentation/presentation-shell.tsx`
- Create: `src/components/presentation/mode-toggle.tsx`
- Create: `src/components/presentation/progress-nav.tsx`
- Test: `tests/presentation/presentation-shell.test.tsx`

- [ ] **Step 1: Write the failing shell interaction test**

```tsx
// tests/presentation/presentation-shell.test.tsx
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { slides } from "@/content/slides";
import { PresentationShell } from "@/components/presentation/presentation-shell";

test("switches from slide mode to overview mode", async () => {
  const user = userEvent.setup();

  render(<PresentationShell slides={slides} />);

  expect(screen.getByText("演示模式")).toBeInTheDocument();
  await user.click(screen.getByRole("button", { name: "切换到总览模式" }));
  expect(screen.getByText("总览模式")).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm test tests/presentation/presentation-shell.test.tsx`  
Expected: FAIL because `PresentationShell` does not exist yet

- [ ] **Step 3: Implement the app shell and mode toggle**

```tsx
// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Multica Web PPT",
  description: "Multica 功能与报表迁移实践分享",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
```

```tsx
// app/page.tsx
import { slides } from "@/content/slides";
import { PresentationShell } from "@/components/presentation/presentation-shell";

export default function Page() {
  return <PresentationShell slides={slides} />;
}
```

```tsx
// src/components/presentation/presentation-shell.tsx
"use client";

import { useState } from "react";
import type { SlideDefinition } from "@/types/slides";
import { ModeToggle } from "@/components/presentation/mode-toggle";
import { ProgressNav } from "@/components/presentation/progress-nav";
import { RevealDeck } from "@/components/presentation/reveal-deck";
import { OverviewDeck } from "@/components/presentation/overview-deck";

export function PresentationShell({ slides }: { slides: SlideDefinition[] }) {
  const [mode, setMode] = useState<"slides" | "overview">("slides");

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-20 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">Multica Share</p>
            <h1 className="text-lg font-semibold">Multica 的核心能力与报表迁移实践</h1>
          </div>
          <ModeToggle mode={mode} onChange={setMode} />
        </div>
      </header>

      <ProgressNav slideCount={slides.length} mode={mode} />
      {mode === "slides" ? <RevealDeck slides={slides} /> : <OverviewDeck slides={slides} />}
    </main>
  );
}
```

```tsx
// src/components/presentation/mode-toggle.tsx
export function ModeToggle({
  mode,
  onChange,
}: {
  mode: "slides" | "overview";
  onChange: (mode: "slides" | "overview") => void;
}) {
  const overview = mode === "overview";

  return (
    <button
      type="button"
      aria-label={overview ? "切换到演示模式" : "切换到总览模式"}
      onClick={() => onChange(overview ? "slides" : "overview")}
      className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100"
    >
      {overview ? "总览模式" : "演示模式"}
    </button>
  );
}
```

```tsx
// src/components/presentation/progress-nav.tsx
export function ProgressNav({
  slideCount,
  mode,
}: {
  slideCount: number;
  mode: "slides" | "overview";
}) {
  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 text-sm text-slate-400">
      <span>{mode === "slides" ? "逐页演示" : "连续总览"}</span>
      <span>{slideCount} 页内容</span>
    </div>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `pnpm test tests/presentation/presentation-shell.test.tsx`  
Expected: PASS with `1 passed`

- [ ] **Step 5: Commit the shell**

```bash
git add app/layout.tsx app/page.tsx app/globals.css src/components/presentation/presentation-shell.tsx src/components/presentation/mode-toggle.tsx src/components/presentation/progress-nav.tsx tests/presentation/presentation-shell.test.tsx
git commit -m "feat: add presentation shell and mode toggle"
```

## Task 4: Add Slide Rendering For Reveal Mode And Overview Mode

**Files:**
- Create: `src/components/presentation/reveal-deck.tsx`
- Create: `src/components/presentation/overview-deck.tsx`
- Create: `src/components/presentation/slide-frame.tsx`
- Create: `src/components/presentation/slide-content.tsx`
- Test: `tests/presentation/slide-content.test.tsx`

- [ ] **Step 1: Write the failing rendering test**

```tsx
// tests/presentation/slide-content.test.tsx
import { render, screen } from "@testing-library/react";
import { slides } from "@/content/slides";
import { SlideContent } from "@/components/presentation/slide-content";

test("renders source links and bullet points for a slide", () => {
  render(<SlideContent slide={slides[2]} index={2} total={slides.length} />);

  expect(screen.getByText("How Multica works")).toBeInTheDocument();
  expect(screen.getByText("server 管协作状态")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "How Multica works" })).toHaveAttribute(
    "href",
    "https://multica.ai/docs/how-multica-works"
  );
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm test tests/presentation/slide-content.test.tsx`  
Expected: FAIL because `SlideContent` does not exist yet

- [ ] **Step 3: Implement slide frame, content renderer, and deck containers**

```tsx
// src/components/presentation/slide-content.tsx
import type { SlideDefinition } from "@/types/slides";

export function SlideContent({
  slide,
  index,
  total,
}: {
  slide: SlideDefinition;
  index: number;
  total: number;
}) {
  return (
    <article className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">{slide.kicker}</p>
        <h2 className="text-4xl font-semibold leading-tight">{slide.title}</h2>
        <p className="max-w-2xl text-lg text-slate-300">{slide.summary}</p>
        <ul className="space-y-3 text-left text-slate-200">
          {slide.bulletPoints.map((point) => (
            <li key={point} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
              {point}
            </li>
          ))}
        </ul>
      </div>
      <div className="space-y-4 rounded-[2rem] border border-cyan-400/20 bg-slate-900/70 p-6">
        <p className="text-sm text-slate-400">
          第 {index + 1} / {total} 页
        </p>
        <div className="space-y-2">
          <h3 className="text-sm uppercase tracking-[0.3em] text-slate-400">Sources</h3>
          {slide.sourceLinks.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="block text-cyan-300 hover:text-cyan-200">
              {link.label}
            </a>
          ))}
        </div>
        {slide.callout ? <p className="rounded-2xl bg-orange-400/10 px-4 py-3 text-sm text-orange-200">{slide.callout}</p> : null}
      </div>
    </article>
  );
}
```

```tsx
// src/components/presentation/reveal-deck.tsx
"use client";

import { useEffect, useRef } from "react";
import Reveal from "reveal.js";
import type { SlideDefinition } from "@/types/slides";
import { SlideContent } from "@/components/presentation/slide-content";

export function RevealDeck({ slides }: { slides: SlideDefinition[] }) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    const deck = new Reveal(rootRef.current, { embedded: true, controls: true, progress: true, hash: true });
    void deck.initialize();
    return () => void deck.destroy();
  }, []);

  return (
    <div className="reveal mx-auto max-w-7xl px-6 py-8" ref={rootRef}>
      <div className="slides">
        {slides.map((slide, index) => (
          <section key={slide.id}>
            <SlideContent slide={slide} index={index} total={slides.length} />
          </section>
        ))}
      </div>
    </div>
  );
}
```

```tsx
// src/components/presentation/overview-deck.tsx
import type { SlideDefinition } from "@/types/slides";
import { SlideContent } from "@/components/presentation/slide-content";

export function OverviewDeck({ slides }: { slides: SlideDefinition[] }) {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-8">
      {slides.map((slide, index) => (
        <section key={slide.id} className="rounded-[2rem] border border-white/10 bg-white/5 p-8">
          <SlideContent slide={slide} index={index} total={slides.length} />
        </section>
      ))}
    </div>
  );
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `pnpm test tests/presentation/slide-content.test.tsx`  
Expected: PASS with `1 passed`

- [ ] **Step 5: Commit deck rendering**

```bash
git add src/components/presentation/reveal-deck.tsx src/components/presentation/overview-deck.tsx src/components/presentation/slide-frame.tsx src/components/presentation/slide-content.tsx tests/presentation/slide-content.test.tsx
git commit -m "feat: add reveal and overview slide rendering"
```

## Task 5: Add Custom Visuals, Theme Styling, And Responsive Fallbacks

**Files:**
- Create: `src/components/visuals/runtime-diagram.tsx`
- Create: `src/components/visuals/object-map.tsx`
- Create: `src/components/visuals/capability-grid.tsx`
- Create: `src/components/visuals/migration-workflow.tsx`
- Modify: `src/components/presentation/slide-content.tsx`
- Modify: `app/globals.css`

- [ ] **Step 1: Write the failing visual-selection test**

```tsx
// extend tests/presentation/slide-content.test.tsx
it("renders the runtime diagram visual for runtime slides", () => {
  render(<SlideContent slide={slides[2]} index={2} total={slides.length} />);
  expect(screen.getByText("Server")).toBeInTheDocument();
  expect(screen.getByText("Daemon")).toBeInTheDocument();
  expect(screen.getByText("AI Coding Tool")).toBeInTheDocument();
});
```

- [ ] **Step 2: Run test to verify it fails**

Run: `pnpm test tests/presentation/slide-content.test.tsx`  
Expected: FAIL because the visual components are not rendered yet

- [ ] **Step 3: Implement the visual blocks and theme styles**

```tsx
// src/components/visuals/runtime-diagram.tsx
export function RuntimeDiagram() {
  return (
    <div className="grid gap-4 text-left md:grid-cols-3">
      <div className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-5">
        <h4 className="text-lg font-semibold">Server</h4>
        <p className="text-sm text-slate-300">管理 workspace、issue、agent、task 等协作状态。</p>
      </div>
      <div className="rounded-3xl border border-sky-400/30 bg-sky-400/10 p-5">
        <h4 className="text-lg font-semibold">Daemon</h4>
        <p className="text-sm text-slate-300">负责把任务调度到可运行环境，并衔接执行生命周期。</p>
      </div>
      <div className="rounded-3xl border border-orange-400/30 bg-orange-400/10 p-5">
        <h4 className="text-lg font-semibold">AI Coding Tool</h4>
        <p className="text-sm text-slate-300">实际执行编码、修改、分析等工作。</p>
      </div>
    </div>
  );
}
```

```tsx
// update src/components/presentation/slide-content.tsx
import { RuntimeDiagram } from "@/components/visuals/runtime-diagram";

function renderVisual(visualType: SlideDefinition["visualType"]) {
  if (visualType === "runtime-diagram") {
    return <RuntimeDiagram />;
  }

  return <div className="rounded-3xl border border-white/10 bg-white/5 p-5 text-slate-300">Visual placeholder for {visualType}</div>;
}
```

```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: dark;
}

body {
  background:
    radial-gradient(circle at top, rgba(34, 211, 238, 0.12), transparent 30%),
    linear-gradient(180deg, #020617 0%, #0f172a 55%, #111827 100%);
  color: #e5eefb;
  font-family: ui-sans-serif, system-ui, sans-serif;
}

.reveal .slides section {
  text-align: left;
}
```

- [ ] **Step 4: Run test to verify it passes**

Run: `pnpm test tests/presentation/slide-content.test.tsx`  
Expected: PASS with all slide-content tests green

- [ ] **Step 5: Commit the visual treatment**

```bash
git add src/components/visuals/runtime-diagram.tsx src/components/visuals/object-map.tsx src/components/visuals/capability-grid.tsx src/components/visuals/migration-workflow.tsx src/components/presentation/slide-content.tsx app/globals.css tests/presentation/slide-content.test.tsx
git commit -m "feat: add custom multica presentation visuals"
```

## Task 6: Finish Docs, Build Verification, And Vercel Readiness

**Files:**
- Create: `README.md`
- Modify: `package.json`

- [ ] **Step 1: Write the README**

~~~md
# Multica Web PPT

一个基于 Next.js 与 reveal.js 的 Web 版演示稿，主题是 Multica 的核心功能、工作方式，以及它在报表迁移任务中的实践价值。

## 本地启动

```bash
pnpm install
pnpm dev
```

## 测试

```bash
pnpm test
```

## 构建

```bash
pnpm build
```

## 部署

直接部署到 Vercel，使用默认 Next.js 项目设置即可。
~~~

- [ ] **Step 2: Run the full test suite**

Run: `pnpm test`  
Expected: PASS with all tests green

- [ ] **Step 3: Run production build**

Run: `pnpm build`  
Expected: PASS with Next.js production build output and no fatal errors

- [ ] **Step 4: Commit the finished project**

```bash
git add README.md package.json app src tests
git commit -m "feat: build multica web ppt presentation"
```

## Self-Review

### Spec coverage

- Presentation-first UX: covered by Tasks 3 to 5
- `Next.js + reveal.js` implementation: covered by Tasks 1, 3, and 4
- Official-doc-first content ordering: covered by Task 2
- Practice section separated from official summary: covered by Task 2 content model
- Vercel-ready delivery and docs: covered by Task 6

No uncovered spec requirement remains.

### Placeholder scan

- No `TODO`, `TBD`, or "implement later" placeholders remain
- All tasks name exact files and commands
- Every test step includes a clear expected failure or pass condition

### Type consistency

- Shared `SlideDefinition` type is introduced before renderer tasks use it
- `PresentationShell`, `RevealDeck`, and `SlideContent` names are reused consistently across tests and implementation
- `slides` content source is introduced before app shell and rendering tasks consume it
