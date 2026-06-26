import clsx from "clsx";

export function ModeToggle({
  mode,
  onChange,
}: {
  mode: "slides" | "overview";
  onChange: (mode: "slides" | "overview") => void;
}) {
  const isOverview = mode === "overview";
  const toggleLabel = "切换到总览模式";
  const slidesLabel = "切换到演示模式";

  return (
    <div
      role="group"
      aria-label="演示模式切换"
      className="inline-flex items-center rounded-full border border-ink/15 bg-paper-soft/80 p-1 text-sm"
    >
      <button
        type="button"
        aria-label={slidesLabel}
        onClick={() => onChange("slides")}
        className={clsx(
          "rounded-full px-4 py-1.5 font-sans transition-colors",
          !isOverview
            ? "bg-ink text-paper-soft shadow-sm"
            : "text-ink-muted hover:text-ink",
        )}
      >
        演示
      </button>
      <button
        type="button"
        aria-label={toggleLabel}
        onClick={() => onChange("overview")}
        className={clsx(
          "rounded-full px-4 py-1.5 font-sans transition-colors",
          isOverview
            ? "bg-ink text-paper-soft shadow-sm"
            : "text-ink-muted hover:text-ink",
        )}
      >
        总览
      </button>
    </div>
  );
}