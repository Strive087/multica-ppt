import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import { slides } from "@/content/slides";
import { SlideContent } from "@/components/presentation/slide-content";

test("renders source links and bullet points for a slide", () => {
  render(<SlideContent slide={slides[2]} index={2} total={slides.length} />);

  expect(
    screen.getByText("核心心智模型：Server / Daemon / AI Coding Tool"),
  ).toBeInTheDocument();
  expect(screen.getByText("server 管协作状态")).toBeInTheDocument();
  expect(
    screen.getByRole("link", { name: "How Multica works" }),
  ).toHaveAttribute("href", "https://multica.ai/docs/how-multica-works");
});

test("renders the runtime diagram visual for runtime slides", () => {
  render(<SlideContent slide={slides[2]} index={2} total={slides.length} />);

  expect(screen.getByText("Server")).toBeInTheDocument();
  expect(screen.getByText("Daemon")).toBeInTheDocument();
  expect(screen.getByText("AI Coding Tool")).toBeInTheDocument();
});
