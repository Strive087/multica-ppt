import clsx from "clsx";

export function ProgressNav({
  slideCount,
  currentSlide,
  mode,
}: {
  slideCount: number;
  currentSlide: number;
  mode: "slides" | "overview";
}) {
  const pct = slideCount > 1 ? (currentSlide / (slideCount - 1)) * 100 : 0;

  return (
    <div
      aria-label="presentation progress"
      className="flex items-center gap-4 text-sm text-ink-muted"
    >
      <span className="font-sans uppercase tracking-editorial text-ink-faint">
        {mode === "slides" ? "逐页演示" : "连续总览"}
      </span>
      <div className="relative h-px w-32 overflow-hidden rounded-full bg-ink/15">
        <div
          className="absolute inset-y-0 left-0 rounded-full bg-accent"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className={clsx("font-mono tabular-nums text-ink-soft")}>
        第 {currentSlide + 1} / {slideCount} 页
      </span>
    </div>
  );
}