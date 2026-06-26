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

首次部署到 Vercel：

```bash
vercel login
vercel deploy
```

如果要发正式环境：

```bash
vercel --prod
```

这个项目使用默认 Next.js 构建设置，不需要额外的 `vercel.json`。
