import { SlideContent } from "@/components/presentation/slide-content";
import { SlideFrame } from "@/components/presentation/slide-frame";
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
    <section aria-label="overview deck">
      <div className="mb-6 space-y-2">
        <p>总览模式内容</p>
        <p>{slides[currentSlide]?.title}</p>
      </div>
      <div className="space-y-6">
        {slides.map((slide, index) => (
          <div key={slide.id} className="space-y-3">
            <button
              type="button"
              aria-label={slide.title}
              onClick={() => onSelectSlide(index)}
              className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100"
            >
              跳到：{slide.title}
            </button>
            <SlideFrame>
              <SlideContent slide={slide} index={index} total={slides.length} />
            </SlideFrame>
          </div>
        ))}
      </div>
    </section>
  );
}
