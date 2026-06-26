import type { SlideDefinition } from "@/types/slides";

export function RevealDeck({
  slides,
  currentSlide,
  onSlideChange,
}: {
  slides: readonly SlideDefinition[];
  currentSlide: number;
  onSlideChange: (index: number) => void;
}) {
  return (
    <section aria-label="reveal deck">
      <p>演示模式内容</p>
      <p>{slides[currentSlide]?.title}</p>
      <div>
        <button
          type="button"
          onClick={() => onSlideChange(Math.max(0, currentSlide - 1))}
        >
          上一页
        </button>
        <button
          type="button"
          onClick={() =>
            onSlideChange(Math.min(slides.length - 1, currentSlide + 1))
          }
        >
          下一页
        </button>
      </div>
    </section>
  );
}
