import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Multica Web PPT — 核心能力与报表迁移实践",
  description: "Multica 的核心功能、工作方式，以及它在报表迁移任务中的实践价值",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen">{children}</body>
    </html>
  );
}