import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Multica Web PPT",
  description: "Multica 功能与报表迁移实践分享",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
