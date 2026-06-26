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
    <main>
      <header>
        <p>Multica Share</p>
        <h1>Multica 的核心能力与报表迁移实践</h1>
        <ModeToggle mode={mode} onChange={setMode} />
      </header>
      <ProgressNav
        slideCount={slides.length}
        currentSlide={currentSlide}
        mode={mode}
      />
      {mode === "slides" ? (
        <RevealDeck
          slides={slides}
          currentSlide={currentSlide}
          onSlideChange={setCurrentSlide}
        />
      ) : (
        <OverviewDeck
          slides={slides}
          currentSlide={currentSlide}
          onSelectSlide={handleOverviewSelect}
        />
      )}
    </main>
  );
}
