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
  const isReadyRef = useRef(false);
  const currentSlideRef = useRef(currentSlide);
  const onSlideChangeRef = useRef(onSlideChange);

  currentSlideRef.current = currentSlide;
  onSlideChangeRef.current = onSlideChange;

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

    let isMounted = true;
    const deck = new Reveal(rootRef.current, {
      embedded: true,
      controls: false,
      progress: false,
      hash: false,
      keyboard: true,
      touch: true,
      overview: false,
      center: false,
    });
    deckRef.current = deck;
    isReadyRef.current = false;

    void deck.initialize().then(() => {
      if (!isMounted) {
        return;
      }

      isReadyRef.current = true;
      deck.slide(currentSlideRef.current);
      deck.on("slidechanged", (event) => {
        const slideEvent = event as Event & { indexh: number };
        onSlideChangeRef.current(slideEvent.indexh);
      });
    });

    return () => {
      isMounted = false;
      isReadyRef.current = false;
      deckRef.current = null;
      void deck.destroy();
    };
  }, [onSlideChange]);

  useEffect(() => {
    if (!deckRef.current || !isReadyRef.current) {
      return;
    }

    if (deckRef.current.getIndices().h !== currentSlide) {
      deckRef.current.slide(currentSlide);
    }
  }, [currentSlide]);

  return (
    <section
      aria-label="reveal deck"
      className="relative h-full w-full flex-1"
    >
      {/* Full-screen stage: edge-to-edge PPT content */}
      <div className="stage-frame relative h-full w-full overflow-hidden bg-paper-soft">
        <div
          ref={rootRef}
          className="reveal h-full w-full"
        >
          <div className="slides">
            {slides.map((slide, index) => (
              <section key={slide.id}>
                <SlideContent slide={slide} index={index} total={slides.length} />
              </section>
            ))}
          </div>
        </div>
      </div>

      {/* Floating prev/next nav overlay */}
      <div className="pointer-events-none absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2 font-sans text-sm">
        <button
          type="button"
          onClick={() => onSlideChange(Math.max(0, currentSlide - 1))}
          disabled={currentSlide === 0}
          className="pointer-events-auto inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-paper-soft/85 px-4 py-1.5 text-ink-soft backdrop-blur transition-colors hover:border-accent/40 hover:text-accent disabled:opacity-40 disabled:hover:border-ink/15 disabled:hover:text-ink-soft"
        >
          <span aria-hidden>←</span>
          上一页
        </button>
        <button
          type="button"
          onClick={() =>
            onSlideChange(Math.min(slides.length - 1, currentSlide + 1))
          }
          disabled={currentSlide === slides.length - 1}
          className="pointer-events-auto inline-flex items-center gap-1.5 rounded-full border border-ink/15 bg-ink/90 px-4 py-1.5 text-paper-soft backdrop-blur transition-colors hover:bg-accent disabled:opacity-40 disabled:hover:bg-ink"
        >
          下一页
          <span aria-hidden>→</span>
        </button>
      </div>
    </section>
  );
}