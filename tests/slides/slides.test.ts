import { describe, expect, it } from "vitest";

import { slides } from "@/content/slides";
import {
  getOfficialSlides,
  getPracticeSlides,
  getProductSlides,
} from "@/lib/slides";

describe("slides deck", () => {
  it("contains official product slides before practice slides", () => {
    const product = getProductSlides(slides);
    const practice = getPracticeSlides(slides);
    const practiceIndex = slides.findIndex((slide) => slide.section === "practice");

    expect(product.length).toBeGreaterThanOrEqual(7);
    expect(getOfficialSlides(slides).length).toBeGreaterThanOrEqual(6);
    expect(practice.length).toBeGreaterThanOrEqual(1);
    expect(practiceIndex).toBeGreaterThan(0);
    expect(
      slides
        .slice(0, practiceIndex)
        .every(
          (slide) =>
            slide.section === "intro" || slide.section === "official",
        ),
    ).toBe(true);
    expect(slides.slice(practiceIndex + 1).every((slide) => slide.section === "closing")).toBe(true);
  });

  it("keeps source links on every official slide", () => {
    for (const slide of getProductSlides(slides)) {
      expect(slide.sourceLinks.length).toBeGreaterThan(0);
    }
  });
});
