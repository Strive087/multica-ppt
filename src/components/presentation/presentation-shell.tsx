"use client";

import { useState } from "react";

import { OverviewDeck } from "@/components/presentation/overview-deck";
import { ProgressNav } from "@/components/presentation/progress-nav";
import { RevealDeck } from "@/components/presentation/reveal-deck";
import { ModeToggle } from "@/components/presentation/mode-toggle";
import type { SlideDefinition } from "@/types/slides";

export function PresentationShell({
  slides,
}: {
  slides: readonly SlideDefinition[];
}) {
  const [mode, setMode] = useState<"slides" | "overview">("slides");
  const [currentSlide, setCurrentSlide] = useState(0);

  function handleOverviewSelect(index: number) {
    setCurrentSlide(index);
    setMode("slides");
  }

  return (
    <main className="relative flex h-screen w-screen flex-col overflow-hidden bg-paper">
      <div className="pointer-events-none absolute right-4 top-4 z-20 flex items-center gap-3">
        <div className="pointer-events-auto rounded-full bg-paper-soft/80 backdrop-blur">
          <ProgressNav
            slideCount={slides.length}
            currentSlide={currentSlide}
            mode={mode}
          />
        </div>
        <div className="pointer-events-auto">
          <ModeToggle mode={mode} onChange={setMode} />
        </div>
      </div>

      {mode === "slides" ? (
        <RevealDeck
          slides={slides}
          currentSlide={currentSlide}
          onSlideChange={setCurrentSlide}
        />
      ) : (
        <div className="flex-1 overflow-auto px-6 py-16 lg:px-10">
          <OverviewDeck
            slides={slides}
            currentSlide={currentSlide}
            onSelectSlide={handleOverviewSelect}
          />
        </div>
      )}
    </main>
  );
}