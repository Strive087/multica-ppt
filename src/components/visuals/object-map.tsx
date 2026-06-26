import {
  ACCENT,
  INK,
  OCHRE,
  PAPER,
  SAGE,
  VisualFrame,
} from "@/components/visuals/shared";

export function ObjectMap() {
  const nodes = [
    { key: "workspace", label: "Workspace", x: 360, y: 80, r: 42, fill: INK },
    { key: "project", label: "Project", x: 360, y: 180, r: 36, fill: OCHRE },
    { key: "issue", label: "Issue", x: 360, y: 274, r: 42, fill: ACCENT, core: true },
    { key: "agent", label: "Agent", x: 140, y: 180, r: 36, fill: SAGE },
    { key: "task", label: "Task", x: 580, y: 180, r: 36, fill: OCHRE },
  ];

  return (
    <VisualFrame
      title="核心对象协作：Workspace / Project / Issue / Agent / Task"
      className="flex h-full w-full flex-col"
    >
      <div className="relative flex flex-1 items-center justify-center">
        <svg viewBox="0 0 720 340" className="h-full w-full" preserveAspectRatio="xMidYMid meet" aria-hidden>
          {/* relations */}
          <g stroke={INK} strokeOpacity="0.3" strokeWidth="2" fill="none">
            <line x1="360" y1="122" x2="360" y2="144" />
            <line x1="360" y1="216" x2="360" y2="232" />
            <line x1="176" y1="180" x2="324" y2="180" />
            <line x1="396" y1="180" x2="544" y2="180" />
            <line x1="172" y1="204" x2="328" y2="252" strokeDasharray="4 6" />
            <line x1="392" y1="252" x2="548" y2="204" strokeDasharray="4 6" />
          </g>

          {nodes.map((n) => (
            <g key={n.key}>
              <circle cx={n.x} cy={n.y} r={n.r} fill={PAPER} stroke={n.fill} strokeWidth="2.2" />
              <circle cx={n.x} cy={n.y} r={n.r} fill={n.fill} fillOpacity={n.core ? 0.18 : 0.10} />
              <text x={n.x} y={n.y + 5} textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontSize="16" letterSpacing="1.5" fill={INK}>{n.label}</text>
            </g>
          ))}

          <text x="140" y="64" fontFamily="ui-sans-serif, system-ui" fontSize="15" letterSpacing="5" fill={ACCENT}>CORE OBJECTS</text>
          <line x1="270" y1="80" x2="330" y2="80" stroke={ACCENT} strokeWidth="2" />
          <text x="600" y="328" textAnchor="end" fontFamily="ui-sans-serif, system-ui" fontSize="13" letterSpacing="1.5" fill={INK} fillOpacity="0.55">虚线：agent 产生 task 记录执行</text>
        </svg>
      </div>
    </VisualFrame>
  );
}