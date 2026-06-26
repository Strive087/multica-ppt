export function ModeToggle({
  mode,
  onChange,
}: {
  mode: "slides" | "overview";
  onChange: (mode: "slides" | "overview") => void;
}) {
  const isOverview = mode === "overview";
  const nextLabel = isOverview ? "切换到演示模式" : "切换到总览模式";

  return (
    <button
      type="button"
      aria-label={nextLabel}
      onClick={() => onChange(isOverview ? "slides" : "overview")}
    >
      {nextLabel}
    </button>
  );
}
