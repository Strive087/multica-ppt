export type SlideSection = "intro" | "official" | "practice" | "closing";

export type VisualType =
  | "hero"
  | "chat-vs-workspace"
  | "runtime-diagram"
  | "feature-map"
  | "object-map"
  | "capability-grid"
  | "trigger-map"
  | "runtime-matrix"
  | "practice-workflow"
  | "workflow"
  | "summary";

export type SourceLink = {
  readonly label: string;
  readonly href: string;
};

export type SlideDefinition = {
  readonly id: string;
  readonly section: SlideSection;
  readonly title: string;
  readonly kicker: string;
  readonly summary: string;
  readonly bulletPoints: readonly string[];
  readonly visualType: VisualType;
  readonly sourceLinks: readonly SourceLink[];
  readonly callout?: string;
};
