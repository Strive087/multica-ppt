import { render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { RevealDeck } from "@/components/presentation/reveal-deck";
import { slides } from "@/content/slides";

const initializeResolvers: Array<() => void> = [];
const slideMock = vi.fn();
const destroyMock = vi.fn();
const onMock = vi.fn();
const getIndicesMock = vi.fn(() => ({ h: 0 }));

vi.mock("reveal.js", () => {
  class MockReveal {
    initialize() {
      return new Promise<void>((resolve) => {
        initializeResolvers.push(resolve);
      });
    }

    slide = slideMock;
    destroy = destroyMock;
    on = onMock;
    getIndices = getIndicesMock;
  }

  return {
    __esModule: true,
    default: MockReveal,
  };
});

describe("RevealDeck", () => {
  beforeEach(() => {
    initializeResolvers.length = 0;
    slideMock.mockReset();
    destroyMock.mockReset();
    onMock.mockReset();
    getIndicesMock.mockReset();
    getIndicesMock.mockReturnValue({ h: 0 });

    Object.defineProperty(window.navigator, "userAgent", {
      configurable: true,
      value: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)",
    });
  });

  afterEach(() => {
    Object.defineProperty(window.navigator, "userAgent", {
      configurable: true,
      value: "jsdom",
    });
  });

  it("does not call slide before the deck is initialized", async () => {
    const onSlideChange = vi.fn();

    const view = render(
      <RevealDeck
        slides={slides}
        currentSlide={0}
        onSlideChange={onSlideChange}
      />,
    );

    view.rerender(
      <RevealDeck
        slides={slides}
        currentSlide={3}
        onSlideChange={onSlideChange}
      />,
    );

    expect(slideMock).not.toHaveBeenCalled();

    const resolve = initializeResolvers.shift();
    expect(resolve).toBeTypeOf("function");
    resolve?.();

    await Promise.resolve();

    expect(slideMock).toHaveBeenCalledTimes(1);
    expect(slideMock).toHaveBeenCalledWith(3);
  });
});
