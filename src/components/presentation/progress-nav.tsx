export function ProgressNav({
  slideCount,
  currentSlide,
  mode,
}: {
  slideCount: number;
  currentSlide: number;
  mode: "slides" | "overview";
}) {
  return (
    <div aria-label="presentation progress">
      <span>{mode === "slides" ? "逐页演示" : "连续总览"}</span>
      <span>
        第 {currentSlide + 1} / {slideCount} 页
      </span>
    </div>
  );
}
