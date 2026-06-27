import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import { slides } from "@/content/slides";
import { SlideContent } from "@/components/presentation/slide-content";

const runtimeSlide = slides.find((s) => s.id === "runtime-model")!;
const practiceSlide = slides.find((s) => s.id === "practice-fit")!;

test("renders source links and bullet points for a slide", () => {
  render(<SlideContent slide={runtimeSlide} index={6} total={slides.length} />);

  expect(
    screen.getByText("核心架构：Server / Daemon / AI Coding Tool"),
  ).toBeInTheDocument();
  expect(screen.getByText(/Daemon 每 3 秒拉取任务/)).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: "How Multica works" }),
  ).toHaveAttribute("href", "https://multica.ai/docs/zh/how-multica-works");
});

test("renders the runtime diagram visual for runtime slides", () => {
  render(<SlideContent slide={runtimeSlide} index={6} total={slides.length} />);

  expect(screen.getByText("YOUR SIDE")).toBeInTheDocument();
  expect(screen.getByText("WORK QUEUE")).toBeInTheDocument();
  expect(screen.getByText("LOCAL EXECUTION")).toBeInTheDocument();
  expect(screen.getByText("DAEMON")).toBeInTheDocument();
  expect(screen.getByText("MULTICA")).toBeInTheDocument();
});

test("renders a practice workflow visual for the practice slide", () => {
  render(<SlideContent slide={practiceSlide} index={7} total={slides.length} />);

  expect(screen.getByText("PRACTICE LOOP")).toBeInTheDocument();
  expect(screen.getByText("拆 issue")).toBeInTheDocument();
  expect(screen.getByText("沉淀 skill")).toBeInTheDocument();
  expect(screen.getByText("人工 review")).toBeInTheDocument();
});
