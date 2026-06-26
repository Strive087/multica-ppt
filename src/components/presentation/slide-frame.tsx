export function SlideFrame({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="rounded-3xl border border-white/10 bg-white/5 p-8">{children}</div>;
}
