"use client";

import { useEffect, useRef } from "react";
import Reveal, { type RevealApi } from "reveal.js";

import { SlideContent } from "@/components/presentation/slide-content";
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
  const rootRef = useRef<HTMLDivElement | null>(null);
  const deckRef = useRef<RevealApi | null>(null);

  useEffect(() => {
    if (!rootRef.current) {
      return;
    }

    if (
      typeof window === "undefined" ||
      /jsdom/i.test(window.navigator.userAgent)
    ) {
      return;
    }

    const deck = new Reveal(rootRef.current, {
      embedded: true,
      controls: true,
      progress: false,
      hash: false,
    });
    deckRef.current = deck;

    void deck.initialize().then(() => {
      deck.slide(currentSlide);
      deck.on("slidechanged", (event) => {
        const slideEvent = event as Event & { indexh: number };
        onSlideChange(slideEvent.indexh);
      });
    });

    return () => {
      deckRef.current = null;
      void deck.destroy();
    };
  }, [onSlideChange]);

  useEffect(() => {
    if (!deckRef.current) {
      return;
    }

    if (deckRef.current.getIndices().h !== currentSlide) {
      deckRef.current.slide(currentSlide);
    }
  }, [currentSlide]);

  return (
    <section aria-label="reveal deck" className="space-y-4">
      <div className="flex gap-3">
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

      <div ref={rootRef} className="reveal">
        <div className="slides">
          {slides.map((slide, index) => (
            <section key={slide.id}>
              <SlideContent slide={slide} index={index} total={slides.length} />
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
