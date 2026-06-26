import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { test, expect } from "vitest";

import { slides } from "@/content/slides";
import { PresentationShell } from "@/components/presentation/presentation-shell";

const total = slides.length;

test("switches from slide mode to overview mode", async () => {
  const user = userEvent.setup();

  render(<PresentationShell slides={slides} />);

  expect(screen.getByLabelText("reveal deck")).toBeInTheDocument();
  expect(screen.getByLabelText("presentation progress")).toHaveTextContent(
    `第 1 / ${total} 页`,
  );
  await user.click(screen.getByRole("button", { name: "切换到总览模式" }));

  expect(screen.getByLabelText("overview deck")).toBeInTheDocument();
  expect(screen.getByText("连续总览")).toBeInTheDocument();
  expect(screen.getByLabelText("presentation progress")).toHaveTextContent(
    `第 1 / ${total} 页`,
  );
});

test("keeps slide state in sync across reveal and overview interactions", async () => {
  const user = userEvent.setup();

  render(<PresentationShell slides={slides} />);

  const jumpIndex = 6;
  await user.click(screen.getByRole("button", { name: "下一页" }));
  expect(screen.getByLabelText("presentation progress")).toHaveTextContent(
    `第 2 / ${total} 页`,
  );
  expect(
    within(screen.getByLabelText("reveal deck")).getByText(slides[1].title),
  ).toBeInTheDocument();

  await user.click(screen.getByRole("button", { name: "切换到总览模式" }));
  expect(screen.getByLabelText("overview deck")).toBeInTheDocument();
  expect(
    within(screen.getByLabelText("overview deck")).getByRole("button", {
      name: slides[1].title,
    }),
  ).toBeInTheDocument();

  await user.click(screen.getByRole("button", { name: slides[jumpIndex].title }));
  expect(screen.getByLabelText("reveal deck")).toBeInTheDocument();
  expect(screen.getByLabelText("presentation progress")).toHaveTextContent(
    `第 ${jumpIndex + 1} / ${total} 页`,
  );
  expect(
    within(screen.getByLabelText("reveal deck")).getByText(slides[jumpIndex].title),
  ).toBeInTheDocument();
});