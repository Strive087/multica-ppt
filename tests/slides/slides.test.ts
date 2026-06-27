import { describe, expect, it } from "vitest";

import { slides } from "@/content/slides";
import {
  getOfficialSlides,
  getPracticeSlides,
  getProductSlides,
} from "@/lib/slides";

describe("slides deck", () => {
  it("orders sections as intro/official → practice → closing", () => {
    const practiceIndices = slides
      .map((slide, index) => (slide.section === "practice" ? index : -1))
      .filter((index) => index >= 0);
    const firstPractice = practiceIndices[0];
    const lastPractice = practiceIndices[practiceIndices.length - 1];

    expect(slides.length).toBeLessThanOrEqual(10);
    expect(getProductSlides(slides).length).toBeGreaterThanOrEqual(7);
    expect(getOfficialSlides(slides).length).toBeGreaterThanOrEqual(5);
    expect(practiceIndices.length).toBeGreaterThanOrEqual(1);
    expect(firstPractice).toBeGreaterThan(0);
    expect(
      slides
        .slice(0, firstPractice)
        .every(
          (slide) => slide.section === "intro" || slide.section === "official",
        ),
    ).toBe(true);
    expect(
      slides
        .slice(firstPractice, lastPractice + 1)
        .every((slide) => slide.section === "practice"),
    ).toBe(true);
    expect(
      slides.slice(lastPractice + 1).every((slide) => slide.section === "closing"),
    ).toBe(true);
  });

  it("keeps source links on every official slide", () => {
    for (const slide of getProductSlides(slides)) {
      expect(slide.sourceLinks.length).toBeGreaterThan(0);
    }
  });
});
