import {
  ACCENT,
  INK,
  OCHRE,
  PAPER,
  SAGE,
  VisualFrame,
} from "@/components/visuals/shared";

const STATES = [
  { key: "queued", label: "Queued", sub: "等待 daemon 拉取", x: 80, y: 190, fill: OCHRE },
  { key: "dispatched", label: "Dispatched", sub: "daemon 已认领", x: 280, y: 190, fill: SAGE },
  { key: "running", label: "Running", sub: "AI tool 执行中", x: 480, y: 190, fill: ACCENT },
  { key: "completed", label: "Completed", sub: "成功回写", x: 680, y: 110, fill: SAGE },
  { key: "failed", label: "Failed", sub: "超时/离线/错误", x: 680, y: 270, fill: ACCENT },
];

export function MigrationWorkflow() {
  const flow: [number, number][] = [
    [0, 1],
    [1, 2],
    [2, 3],
    [2, 4],
  ];

  return (
    <VisualFrame
      title="Task 状态机：queued → dispatched → running → completed / failed"
      className="flex h-full w-full flex-col"
    >
      <svg viewBox="0 0 780 400" className="h-full w-full" preserveAspectRatio="xMidYMid meet" aria-hidden>
        {/* flow arrows */}
        {flow.map(([from, to], i) => {
          const a = STATES[from];
          const b = STATES[to];
          const up = b.y < a.y;
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const len = Math.sqrt(dx * dx + dy * dy);
          const ux = dx / len;
          const uy = dy / len;
          const sx = a.x + ux * 56;
          const sy = a.y + uy * 56;
          const ex = b.x - ux * 56;
          const ey = b.y - uy * 56;
          return (
            <g key={i}>
              <line x1={sx} y1={sy} x2={ex} y2={ey} stroke={INK} strokeOpacity={0.35} strokeWidth="2.2" markerEnd="url(#arr-state)" />
            </g>
          );
        })}

        {/* retry arrow failed → queued */}
        <path d="M680 310 C 680 370, 80 370, 80 246" fill="none" stroke={ACCENT} strokeOpacity="0.4" strokeWidth="2" strokeDasharray="5 5" markerEnd="url(#arr-retry)" />
        <text x="380" y="394" textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontSize="13" fill={ACCENT} fillOpacity="0.7">retryable → 自动重排队</text>

        {/* state nodes */}
        {STATES.map((s) => (
          <g key={s.key}>
            <circle cx={s.x} cy={s.y} r="52" fill={PAPER} stroke={s.fill} strokeWidth="2.6" />
            <circle cx={s.x} cy={s.y} r="52" fill={s.fill} fillOpacity={0.12} />
            <text x={s.x} y={s.y - 6} textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontSize="16" fontWeight="600" fill={INK}>{s.label}</text>
            <text x={s.x} y={s.y + 14} textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontSize="11" fill={INK} fillOpacity="0.6">{s.sub}</text>
          </g>
        ))}

        {/* cancelled (side note) */}
        <g transform="translate(400 340)">
          <rect x="-56" y="-18" width="112" height="36" rx="8" fill={PAPER} stroke={INK} strokeOpacity="0.2" strokeWidth="1.5" strokeDasharray="4 4" />
          <text x="0" y="4" textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontSize="13" fill={INK} fillOpacity="0.5">Cancelled</text>
        </g>

        {/* title */}
        <text x="80" y="36" fontFamily="ui-sans-serif, system-ui" fontSize="14" letterSpacing="4" fill={ACCENT}>TASK STATE MACHINE</text>

        <defs>
          <marker id="arr-state" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
            <path d="M0 0 L8 4.5 L0 9 Z" fill={INK} fillOpacity="0.4" />
          </marker>
          <marker id="arr-retry" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
            <path d="M0 0 L8 4.5 L0 9 Z" fill={ACCENT} fillOpacity="0.5" />
          </marker>
        </defs>
      </svg>
    </VisualFrame>
  );
}