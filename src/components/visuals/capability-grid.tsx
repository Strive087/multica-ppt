import {
  ACCENT,
  INK,
  OCHRE,
  PAPER,
  SAGE,
  VisualFrame,
} from "@/components/visuals/shared";

export function CapabilityGrid() {
  const items = [
    {
      label: "Assign issues",
      cn: "可被分配 issue",
      fill: SAGE,
      glyph: "◧",
    },
    {
      label: "@-mention",
      cn: "在协作中被 @",
      fill: OCHRE,
      glyph: "@",
    },
    {
      label: "Skills",
      cn: "注入知识与流程",
      fill: ACCENT,
      glyph: "✦",
    },
    {
      label: "Squads",
      cn: "成组协同",
      fill: SAGE,
      glyph: "◇",
    },
    {
      label: "Tasks",
      cn: "记录每次执行",
      fill: OCHRE,
      glyph: "▤",
    },
    {
      label: "Autopilots",
      cn: "触发自动执行",
      fill: ACCENT,
      glyph: "↻",
    },
  ];

  return (
    <VisualFrame
      title="Agent 能力：Agents / Skills / Autopilots"
      className="flex h-full w-full flex-col"
    >
      <div className="grid flex-1 grid-cols-2 gap-4 py-2 sm:grid-cols-3">
        {items.map((it) => (
          <div
            key={it.label}
            className="flex flex-col items-start justify-between gap-2 rounded-2xl border border-ink/12 bg-paper p-5 shadow-[0_10px_30px_-22px_rgba(42,36,29,0.4)]"
          >
            <span
              aria-hidden
              className="flex h-12 w-12 items-center justify-center rounded-xl font-serif text-2xl"
              style={{ color: it.fill, backgroundColor: `${it.fill}18` }}
            >
              {it.glyph}
            </span>
            <p className="font-sans text-base font-semibold tracking-wide text-ink">{it.label}</p>
            <p className="font-serif text-sm leading-tight text-ink-muted">{it.cn}</p>
          </div>
        ))}
      </div>
    </VisualFrame>
  );
}