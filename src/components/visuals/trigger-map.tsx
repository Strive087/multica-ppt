import { ACCENT, INK, OCHRE, PAPER, SAGE, VisualFrame } from "@/components/visuals/shared";

const cards = [
  { label: "Assign issue", cue: "正式接管 issue", detail: "成为负责人并启动执行", x: 58, y: 64, c: SAGE },
  { label: "@ mention", cue: "在评论里点名", detail: "插入讨论，不改负责人", x: 512, y: 64, c: OCHRE },
  { label: "Chat", cue: "私有探索对话", detail: "不绑定 issue，适合试探", x: 58, y: 244, c: ACCENT },
  { label: "Autopilot", cue: "定时或事件触发", detail: "把例行动作自动化", x: 512, y: 244, c: SAGE },
] as const;

function Card({ card }: { card: (typeof cards)[number] }) {
  const sans = "ui-sans-serif, system-ui";
  return (
    <g>
      <rect x={card.x} y={card.y} width="190" height="96" rx="18" fill={PAPER} stroke={card.c} strokeOpacity="0.42" strokeWidth="1.8" />
      <rect x={card.x} y={card.y} width="190" height="96" rx="18" fill={card.c} fillOpacity="0.08" />
      <circle cx={card.x + 24} cy={card.y + 28} r="6" fill={card.c} />
      <text x={card.x + 42} y={card.y + 33} fontFamily={sans} fontSize="14.5" fontWeight="700" fill={INK}>
        {card.label}
      </text>
      <text x={card.x + 24} y={card.y + 62} fontFamily={sans} fontSize="14" fill={INK}>
        {card.cue}
      </text>
      <text x={card.x + 24} y={card.y + 82} fontFamily={sans} fontSize="11.5" fill={INK} fillOpacity="0.62">
        {card.detail}
      </text>
    </g>
  );
}

export function TriggerMap() {
  const sans = "ui-sans-serif, system-ui";

  return (
    <VisualFrame
      title="四种触发方式围绕 Agent 的协作入口图"
      className="h-full w-full"
    >
      <svg viewBox="0 0 760 420" className="h-full w-full" preserveAspectRatio="xMidYMid meet" aria-hidden>
        <defs>
          <marker id="trigger-arr" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
            <path d="M0 0 L9 5 L0 10 Z" fill={INK} fillOpacity="0.34" />
          </marker>
        </defs>

        <rect x="28" y="34" width="704" height="342" rx="28" fill={PAPER} stroke={INK} strokeOpacity="0.12" strokeWidth="2" />
        <rect x="28" y="34" width="704" height="342" rx="28" fill={OCHRE} fillOpacity="0.035" />

        <line x1="248" y1="112" x2="324" y2="184" stroke={INK} strokeOpacity="0.26" strokeWidth="2" markerEnd="url(#trigger-arr)" />
        <line x1="512" y1="112" x2="436" y2="184" stroke={INK} strokeOpacity="0.26" strokeWidth="2" markerEnd="url(#trigger-arr)" />
        <line x1="248" y1="292" x2="324" y2="236" stroke={INK} strokeOpacity="0.26" strokeWidth="2" markerEnd="url(#trigger-arr)" />
        <line x1="512" y1="292" x2="436" y2="236" stroke={INK} strokeOpacity="0.26" strokeWidth="2" markerEnd="url(#trigger-arr)" />

        {cards.map((card) => (
          <Card key={card.label} card={card} />
        ))}

        <circle cx="380" cy="210" r="70" fill={PAPER} stroke={ACCENT} strokeWidth="2.2" />
        <circle cx="380" cy="210" r="70" fill={ACCENT} fillOpacity="0.10" />
        <rect x="356" y="168" width="48" height="48" rx="14" fill={ACCENT} />
        <text x="380" y="199" textAnchor="middle" fontFamily={sans} fontSize="26" fill={PAPER}>
          A
        </text>
        <text x="380" y="236" textAnchor="middle" fontFamily={sans} fontSize="21" fontWeight="700" fill={INK}>
          Agent
        </text>
        <text x="380" y="258" textAnchor="middle" fontFamily={sans} fontSize="11.5" letterSpacing="2" fill={INK} fillOpacity="0.54">
          same executor
        </text>

        <rect x="252" y="356" width="256" height="30" rx="15" fill={PAPER} stroke={INK} strokeOpacity="0.12" />
        <text x="380" y="376" textAnchor="middle" fontFamily={sans} fontSize="11.5" letterSpacing="2.4" fill={INK} fillOpacity="0.58">
          issue / thread / private / scheduled
        </text>
      </svg>
    </VisualFrame>
  );
}
