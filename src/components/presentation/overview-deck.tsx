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
      <p>总览模式内容</p>
      <p>{slides[currentSlide]?.title}</p>
      <ol>
        {slides.map((slide, index) => (
          <li key={slide.id}>
            <button type="button" onClick={() => onSelectSlide(index)}>
              {slide.title}
            </button>
          </li>
        ))}
      </ol>
    </section>
  );
}
