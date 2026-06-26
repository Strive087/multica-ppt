import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import { slides } from "@/content/slides";
import { SlideContent } from "@/components/presentation/slide-content";

const runtimeSlide = slides.find((s) => s.id === "runtime-model")!;

test("renders source links and bullet points for a slide", () => {
  render(<SlideContent slide={runtimeSlide} index={6} total={slides.length} />);

  expect(
    screen.getByText("核心心智模型：Server / Daemon / AI Coding Tool"),
  ).toBeInTheDocument();
  expect(screen.getByText(/daemon 在本机每 3 秒拉取任务/)).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: "How Multica works" }),
  ).toHaveAttribute("href", "https://multica.ai/docs/how-multica-works");
});

test("renders the runtime diagram visual for runtime slides", () => {
  render(<SlideContent slide={runtimeSlide} index={6} total={slides.length} />);

  expect(screen.getByText("YOUR SIDE")).toBeInTheDocument();
  expect(screen.getByText("DAEMON")).toBeInTheDocument();
  expect(screen.getByText("MULTICA")).toBeInTheDocument();
});