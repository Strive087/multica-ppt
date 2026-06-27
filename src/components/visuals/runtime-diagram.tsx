import {
  ACCENT,
  INK,
  OCHRE,
  PAPER,
  SAGE,
  VisualFrame,
} from "@/components/visuals/shared";

const steps = [
  { label: "Assign issue", sub: "Web / CLI", x: 92, w: 106, c: SAGE },
  { label: "MULTICA", sub: "状态与对象", x: 246, w: 106, c: OCHRE },
  { label: "WORK QUEUE", sub: "queued task", x: 400, w: 122, c: ACCENT },
  { label: "DAEMON", sub: "本机轮询", x: 596, w: 94, c: SAGE },
  { label: "LOCAL EXECUTION", sub: "AI tool + repo", x: 739, w: 134, c: ACCENT },
] as const;

function Arrow({ x1, x2, y = 202 }: { x1: number; x2: number; y?: number }) {
  return (
    <line
      x1={x1}
      y1={y}
      x2={x2}
      y2={y}
      stroke={INK}
      strokeOpacity="0.32"
      strokeWidth="2.2"
      markerEnd="url(#runtime-arr)"
    />
  );
}

export function RuntimeDiagram() {
  const sans = "ui-sans-serif, system-ui";

  return (
    <VisualFrame
      title="Multica task handoff: server queue to local daemon execution"
      className="flex h-full w-full flex-col"
    >
      <svg viewBox="0 0 840 420" className="h-full w-full" preserveAspectRatio="xMidYMid meet" aria-hidden>
        <defs>
          <marker id="runtime-arr" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
            <path d="M0 0 L9 5 L0 10 Z" fill={INK} fillOpacity="0.42" />
          </marker>
        </defs>

        <text x="420" y="34" textAnchor="middle" fontFamily={sans} fontSize="14" letterSpacing="5" fill={ACCENT}>
          TASK HANDOFF · SERVER ORCHESTRATES, LOCAL MACHINE EXECUTES
        </text>

        <rect x="34" y="72" width="456" height="214" rx="22" fill={PAPER} stroke={INK} strokeOpacity="0.16" strokeWidth="2" />
        <rect x="34" y="72" width="456" height="214" rx="22" fill={SAGE} fillOpacity="0.035" />
        <text x="58" y="104" fontFamily={sans} fontSize="13" letterSpacing="3" fill={INK} fillOpacity="0.55">
          MULTICA SERVER
        </text>
        <text x="58" y="124" fontFamily={sans} fontSize="12" fill={INK} fillOpacity="0.50">
          管 workspace、issue、agent 定义与任务队列；不执行 AI
        </text>

        <rect x="548" y="72" width="264" height="214" rx="22" fill={PAPER} stroke={OCHRE} strokeOpacity="0.42" strokeWidth="2" />
        <rect x="548" y="72" width="264" height="214" rx="22" fill={OCHRE} fillOpacity="0.06" />
        <text x="572" y="104" fontFamily={sans} fontSize="13" letterSpacing="3" fill={OCHRE}>
          YOUR SIDE
        </text>
        <text x="572" y="124" fontFamily={sans} fontSize="12" fill={INK} fillOpacity="0.52">
          代码、密钥、CPU 和工具都在本机
        </text>

        <Arrow x1={steps[0].x + steps[0].w / 2 + 10} x2={steps[1].x - steps[1].w / 2 - 10} />
        <Arrow x1={steps[1].x + steps[1].w / 2 + 10} x2={steps[2].x - steps[2].w / 2 - 10} />
        <Arrow x1={steps[2].x + steps[2].w / 2 + 10} x2={steps[3].x - steps[3].w / 2 - 10} />
        <Arrow x1={steps[3].x + steps[3].w / 2 + 10} x2={steps[4].x - steps[4].w / 2 - 10} />

        {steps.map((step) => (
          <g key={step.label}>
            <rect
              x={step.x - step.w / 2}
              y="166"
              width={step.w}
              height="72"
              rx="16"
              fill={PAPER}
              stroke={step.c}
              strokeWidth="2"
            />
            <rect
              x={step.x - step.w / 2}
              y="166"
              width={step.w}
              height="72"
              rx="16"
              fill={step.c}
              fillOpacity="0.10"
            />
            <text x={step.x} y="194" textAnchor="middle" fontFamily={sans} fontSize="13.5" fontWeight="700" fill={INK}>
              {step.label}
            </text>
            <text x={step.x} y="216" textAnchor="middle" fontFamily={sans} fontSize="11" fill={INK} fillOpacity="0.58">
              {step.sub}
            </text>
          </g>
        ))}

        <path
          d="M739 256 V318 H246 V256"
          fill="none"
          stroke={ACCENT}
          strokeOpacity="0.34"
          strokeWidth="2"
          strokeDasharray="6 7"
          markerEnd="url(#runtime-arr)"
        />
        <text x="493" y="342" textAnchor="middle" fontFamily={sans} fontSize="13" letterSpacing="2" fill={ACCENT} fillOpacity="0.78">
          result / comment / status 回写到协作线
        </text>
      </svg>
    </VisualFrame>
  );
}
