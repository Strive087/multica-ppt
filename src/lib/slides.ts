import type { SlideDefinition } from "@/types/slides";

export function getIntroSlides(slides: readonly SlideDefinition[]) {
  return slides.filter((slide) => slide.section === "intro");
}

export function getOfficialSlides(slides: readonly SlideDefinition[]) {
  return slides.filter((slide) => slide.section === "official");
}

export function getProductSlides(slides: readonly SlideDefinition[]) {
  return slides.filter(
    (slide) => slide.section === "intro" || slide.section === "official",
  );
}

export function getPracticeSlides(slides: readonly SlideDefinition[]) {
  return slides.filter((slide) => slide.section === "practice");
}
