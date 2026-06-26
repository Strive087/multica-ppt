import {
  ACCENT,
  INK,
  OCHRE,
  PAPER,
  SAGE,
  VisualFrame,
} from "@/components/visuals/shared";

export function SummaryVisual({ className }: { className?: string }) {
  return (
    <VisualFrame
      title="收尾视觉：从可分解的协作任务开始"
      className={className}
    >
      <div className="relative flex h-full w-full items-center justify-center">
        <svg viewBox="0 0 720 420" className="h-full w-full" preserveAspectRatio="xMidYMid meet" aria-hidden>
          <defs>
            <linearGradient id="sumFill" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor={OCHRE} stopOpacity="0.18" />
              <stop offset="1" stopColor={ACCENT} stopOpacity="0.10" />
            </linearGradient>
          </defs>

          {/* horizon */}
          <line x1="60" y1="330" x2="660" y2="330" stroke={INK} strokeOpacity="0.2" strokeWidth="2" />

          {/* sun / focal */}
          <circle cx="360" cy="190" r="110" fill="url(#sumFill)" />
          <circle cx="360" cy="190" r="110" fill="none" stroke={ACCENT} strokeWidth="2" />
          {[150, 188, 226].map((d) => (
            <circle key={d} cx="360" cy="190" r={d / 2} fill="none" stroke={INK} strokeOpacity="0.08" strokeWidth="1.4" />
          ))}
          <text x="360" y="184" textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontSize="18" letterSpacing="3" fill={INK}>START SMALL</text>
          <text x="360" y="210" textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontSize="13" letterSpacing="1.5" fill={INK} fillOpacity="0.6">高重复 · 强上下文 · 可分解</text>

          {/* ground markers */}
          {[
            { x: 150, label: "skills", c: SAGE },
            { x: 360, label: "tasks", c: OCHRE },
            { x: 570, label: "agents", c: ACCENT },
          ].map((m) => (
            <g key={m.label}>
              <line x1={m.x} y1="330" x2={m.x} y2="366" stroke={m.c} strokeWidth="2.4" />
              <circle cx={m.x} cy="330" r="7" fill={m.c} />
              <text x={m.x} y="388" textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontSize="14" letterSpacing="2" fill={INK}>{m.label}</text>
            </g>
          ))}

          <text x="60" y="56" fontFamily="ui-sans-serif, system-ui" fontSize="15" letterSpacing="5" fill={ACCENT}>CLOSING</text>
        </svg>
      </div>
    </VisualFrame>
  );
}