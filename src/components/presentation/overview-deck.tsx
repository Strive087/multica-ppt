import clsx from "clsx";

import { OverviewThumb } from "@/components/presentation/overview-thumb";
import type { SlideDefinition } from "@/types/slides";

export function OverviewDeck({
  slides,
  currentSlide,
  onSelectSlide,
}: {
  slides: readonly SlideDefinition[];
  currentSlide: number;
  onSelectSlide: (index: number) => void;
}) {
  return (
    <section aria-label="overview deck" className="w-full max-w-stage">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
        <div className="space-y-1">
          <p className="font-sans text-xs uppercase tracking-editorial text-ink-faint">
            连续总览 · {slides.length} 页
          </p>
          <h2 className="font-serif text-2xl font-semibold text-ink">
            选择一页开始讲述
          </h2>
        </div>
        <p className="max-w-md font-serif text-sm leading-relaxed text-ink-soft">
          以缩略卡片浏览整副演示稿，点选任意页直接进入演示模式。
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {slides.map((slide, index) => {
          const isCurrent = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={clsx(
                "group relative flex flex-col overflow-hidden rounded-2xl border bg-paper-soft text-left transition-all duration-200",
                isCurrent
                  ? "border-accent/50 ring-1 ring-accent/30 shadow-[0_18px_40px_-28px_rgba(169,79,28,0.55)]"
                  : "border-ink/10 hover:-translate-y-0.5 hover:border-ink/25 hover:shadow-[0_18px_40px_-32px_rgba(42,36,29,0.45)]",
              )}
            >
              <div className="relative aspect-[16/9] w-full border-b border-ink/8 bg-paper">
                <OverviewThumb slide={slide} />
                <span
                  className={clsx(
                    "absolute left-3 top-3 inline-flex h-7 w-7 items-center justify-center rounded-full font-mono text-xs",
                    isCurrent
                      ? "bg-accent text-paper-soft"
                      : "bg-ink/8 text-ink-soft",
                  )}
                >
                  {index + 1}
                </span>
              </div>

              <div className="flex flex-1 flex-col gap-2 p-4">
                <p className="font-sans text-[0.65rem] uppercase tracking-editorial text-accent/80">
                  {slide.kicker}
                </p>
                <h3 className="font-serif text-base font-semibold leading-snug text-ink">
                  {slide.title}
                </h3>
                <button
                  type="button"
                  aria-label={slide.title}
                  onClick={() => onSelectSlide(index)}
                  className={clsx(
                    "mt-2 inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 font-sans text-xs transition-colors",
                    isCurrent
                      ? "bg-accent/15 text-accent"
                      : "bg-ink/8 text-ink-soft group-hover:bg-ink group-hover:text-paper-soft",
                  )}
                >
                  {isCurrent ? "当前页 ·" : "跳到"} {slide.title}
                  <span aria-hidden>↗</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}