import {
  ACCENT,
  INK,
  OCHRE,
  PAPER,
  SAGE,
  VisualFrame,
} from "@/components/visuals/shared";

const states = [
  { label: "Queued", sub: "等待 daemon 拉取", x: 88, y: 176, w: 118, c: OCHRE },
  { label: "Dispatched", sub: "daemon 已认领", x: 246, y: 176, w: 132, c: SAGE },
  { label: "Running", sub: "AI tool 执行中", x: 416, y: 176, w: 124, c: ACCENT },
  { label: "Completed", sub: "成功回写", x: 620, y: 126, w: 124, c: SAGE },
  { label: "Failed", sub: "超时 / 离线 / 错误", x: 620, y: 250, w: 124, c: ACCENT },
] as const;

function NodeBox({ state }: { state: (typeof states)[number] }) {
  const sans = "ui-sans-serif, system-ui";
  return (
    <g>
      <rect x={state.x - state.w / 2} y={state.y - 38} width={state.w} height="76" rx="18" fill={PAPER} stroke={state.c} strokeWidth="2.4" />
      <rect x={state.x - state.w / 2} y={state.y - 38} width={state.w} height="76" rx="18" fill={state.c} fillOpacity="0.12" />
      <text x={state.x} y={state.y - 5} textAnchor="middle" fontFamily={sans} fontSize="16" fontWeight="700" fill={INK}>
        {state.label}
      </text>
      <text x={state.x} y={state.y + 17} textAnchor="middle" fontFamily={sans} fontSize="11.5" fill={INK} fillOpacity="0.62">
        {state.sub}
      </text>
    </g>
  );
}

function Arrow({ x1, y1, x2, y2, dashed = false }: { x1: number; y1: number; x2: number; y2: number; dashed?: boolean }) {
  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      stroke={dashed ? ACCENT : INK}
      strokeOpacity={dashed ? "0.42" : "0.34"}
      strokeWidth="2.2"
      strokeDasharray={dashed ? "6 7" : undefined}
      markerEnd={dashed ? "url(#arr-retry)" : "url(#arr-state)"}
    />
  );
}

export function MigrationWorkflow() {
  const sans = "ui-sans-serif, system-ui";

  return (
    <VisualFrame
      title="Task 状态机：queued → dispatched → running → completed / failed"
      className="flex h-full w-full flex-col"
    >
      <svg viewBox="0 0 780 400" className="h-full w-full" preserveAspectRatio="xMidYMid meet" aria-hidden>
        <defs>
          <marker id="arr-state" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
            <path d="M0 0 L8 4.5 L0 9 Z" fill={INK} fillOpacity="0.42" />
          </marker>
          <marker id="arr-retry" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
            <path d="M0 0 L8 4.5 L0 9 Z" fill={ACCENT} fillOpacity="0.58" />
          </marker>
        </defs>

        <text x="80" y="44" fontFamily={sans} fontSize="14" letterSpacing="4" fill={ACCENT}>
          TASK STATE MACHINE
        </text>

        <Arrow x1={147} y1={176} x2={174} y2={176} />
        <Arrow x1={312} y1={176} x2={354} y2={176} />
        <Arrow x1={478} y1={160} x2={552} y2={136} />
        <Arrow x1={478} y1={192} x2={552} y2={238} />
        <path
          d="M620 298 V344 H88 V222"
          fill="none"
          stroke={ACCENT}
          strokeOpacity="0.42"
          strokeWidth="2"
          strokeDasharray="6 7"
          markerEnd="url(#arr-retry)"
        />
        <text x="354" y="370" textAnchor="middle" fontFamily={sans} fontSize="13" fill={ACCENT} fillOpacity="0.76">
          retryable → 自动重排队
        </text>

        {states.map((state) => (
          <NodeBox key={state.label} state={state} />
        ))}

        <g transform="translate(338 262)">
          <rect x="0" y="0" width="116" height="34" rx="10" fill={PAPER} stroke={INK} strokeOpacity="0.22" strokeWidth="1.5" strokeDasharray="4 5" />
          <text x="58" y="22" textAnchor="middle" fontFamily={sans} fontSize="13" fill={INK} fillOpacity="0.54">
            Cancelled
          </text>
        </g>
      </svg>
    </VisualFrame>
  );
}
