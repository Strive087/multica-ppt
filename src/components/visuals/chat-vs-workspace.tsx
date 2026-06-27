import {
  ACCENT,
  INK,
  OCHRE,
  PAPER,
  SAGE,
  VisualFrame,
} from "@/components/visuals/shared";

export function ChatVsWorkspace() {
  const sans = "ui-sans-serif, system-ui";

  return (
    <VisualFrame
      title="从聊天窗口到协作工作台的对比图"
      className="flex h-full w-full flex-col"
    >
      <svg viewBox="0 0 780 430" className="h-full w-full" preserveAspectRatio="xMidYMid meet" aria-hidden>
        <defs>
          <marker id="chat-arrow" markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
            <path d="M0 0 L8 4.5 L0 9 Z" fill={ACCENT} fillOpacity="0.75" />
          </marker>
        </defs>

        <text x="390" y="26" textAnchor="middle" fontFamily={sans} fontSize="14" letterSpacing="5" fill={ACCENT}>
          CHAT IS A WINDOW · MULTICA IS A WORKSPACE
        </text>

        <rect x="30" y="54" width="310" height="320" rx="20" fill={PAPER} stroke={INK} strokeOpacity="0.16" strokeWidth="2" />
        <rect x="30" y="54" width="310" height="320" rx="20" fill={INK} fillOpacity="0.035" />
        <text x="185" y="90" textAnchor="middle" fontFamily={sans} fontSize="18" fontWeight="700" fill={INK}>
          传统 AI 聊天
        </text>
        <text x="185" y="116" textAnchor="middle" fontFamily={sans} fontSize="12" letterSpacing="2" fill={INK} fillOpacity="0.5">
          CONTEXT COPIED BY HUMAN
        </text>

        {[
          { y: 154, w: 168, fill: SAGE, text: "我把需求贴给你" },
          { y: 198, w: 204, fill: OCHRE, text: "再补一段背景..." },
          { y: 242, w: 182, fill: ACCENT, text: "执行结果再复制回来" },
        ].map((bubble, i) => (
          <g key={bubble.text}>
            <rect
              x={i === 1 ? 78 : 88}
              y={bubble.y}
              width={bubble.w}
              height="30"
              rx="15"
              fill={bubble.fill}
              fillOpacity="0.13"
              stroke={bubble.fill}
              strokeOpacity="0.35"
            />
            <text x={(i === 1 ? 78 : 88) + bubble.w / 2} y={bubble.y + 20} textAnchor="middle" fontFamily={sans} fontSize="13" fill={INK}>
              {bubble.text}
            </text>
          </g>
        ))}
        <path d="M108 310 C160 286, 218 286, 274 310" fill="none" stroke={INK} strokeOpacity="0.25" strokeWidth="2" strokeDasharray="4 6" />
        <text x="185" y="335" textAnchor="middle" fontFamily={sans} fontSize="14" fill={INK} fillOpacity="0.62">
          人负责搬运上下文和状态
        </text>

        <path d="M358 214 H422" stroke={ACCENT} strokeWidth="2.4" strokeDasharray="5 6" markerEnd="url(#chat-arrow)" />
        <text x="390" y="196" textAnchor="middle" fontFamily={sans} fontSize="13" letterSpacing="2" fill={ACCENT}>
          shift
        </text>

        <rect x="440" y="54" width="310" height="320" rx="20" fill={PAPER} stroke={SAGE} strokeOpacity="0.32" strokeWidth="2" />
        <rect x="440" y="54" width="310" height="320" rx="20" fill={SAGE} fillOpacity="0.045" />
        <text x="595" y="90" textAnchor="middle" fontFamily={sans} fontSize="18" fontWeight="700" fill={INK}>
          Multica Workspace
        </text>
        <text x="595" y="116" textAnchor="middle" fontFamily={sans} fontSize="12" letterSpacing="2" fill={INK} fillOpacity="0.5">
          CONTEXT LIVES WITH THE WORK
        </text>

        <g stroke={INK} strokeOpacity="0.25" strokeWidth="1.8" fill="none">
          <line x1="595" y1="174" x2="520" y2="246" />
          <line x1="595" y1="174" x2="670" y2="246" />
          <line x1="595" y1="174" x2="595" y2="286" />
        </g>

        {[
          { x: 595, y: 174, r: 45, c: ACCENT, label: "Issue", sub: "目标" },
          { x: 520, y: 246, r: 34, c: SAGE, label: "Agent", sub: "执行者" },
          { x: 670, y: 246, r: 34, c: OCHRE, label: "Comment", sub: "协作线" },
          { x: 595, y: 300, r: 34, c: ACCENT, label: "Task", sub: "状态流" },
        ].map((node) => (
          <g key={node.label}>
            <circle cx={node.x} cy={node.y} r={node.r} fill={PAPER} stroke={node.c} strokeWidth="2" />
            <circle cx={node.x} cy={node.y} r={node.r} fill={node.c} fillOpacity="0.13" />
            <text x={node.x} y={node.y - 2} textAnchor="middle" fontFamily={sans} fontSize="14" fontWeight="700" fill={INK}>
              {node.label}
            </text>
            <text x={node.x} y={node.y + 16} textAnchor="middle" fontFamily={sans} fontSize="11" fill={INK} fillOpacity="0.55">
              {node.sub}
            </text>
          </g>
        ))}

        <text x="595" y="350" textAnchor="middle" fontFamily={sans} fontSize="14" fill={INK} fillOpacity="0.62">
          平台保存上下文、负责人、进度与结果
        </text>
      </svg>
    </VisualFrame>
  );
}
