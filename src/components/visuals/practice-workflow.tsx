import {
  ACCENT,
  INK,
  OCHRE,
  PAPER,
  SAGE,
  VisualFrame,
} from "@/components/visuals/shared";

const stages = [
  { title: "拆 issue", sub: "按模块 / 表拆批次", x: 84, c: SAGE },
  { title: "沉淀 skill", sub: "规则、口径、禁区", x: 230, c: OCHRE },
  { title: "Agent 执行", sub: "批量迁移 / 改写", x: 380, c: ACCENT },
  { title: "测试对比", sub: "回归、截图、数据核验", x: 530, c: SAGE },
  { title: "人工 review", sub: "最终质量关", x: 676, c: OCHRE },
] as const;

function StageCard({ stage, index }: { stage: (typeof stages)[number]; index: number }) {
  const sans = "ui-sans-serif, system-ui";
  return (
    <g>
      <rect x={stage.x - 58} y="146" width="116" height="82" rx="18" fill={PAPER} stroke={stage.c} strokeWidth="2.2" />
      <rect x={stage.x - 58} y="146" width="116" height="82" rx="18" fill={stage.c} fillOpacity="0.11" />
      <text x={stage.x - 43} y="166" fontFamily={sans} fontSize="12" fontWeight="700" fill={stage.c}>
        {String(index + 1).padStart(2, "0")}
      </text>
      <text x={stage.x} y="188" textAnchor="middle" fontFamily={sans} fontSize="15.5" fontWeight="700" fill={INK}>
        {stage.title}
      </text>
      <text x={stage.x} y="211" textAnchor="middle" fontFamily={sans} fontSize="11.5" fill={INK} fillOpacity="0.60">
        {stage.sub}
      </text>
    </g>
  );
}

export function PracticeWorkflow() {
  const sans = "ui-sans-serif, system-ui";

  return (
    <VisualFrame
      title="实践闭环：拆 issue、沉淀 skill、Agent 执行、测试对比、人工 review"
      className="flex h-full w-full flex-col"
    >
      <svg viewBox="0 0 760 420" className="h-full w-full" preserveAspectRatio="xMidYMid meet" aria-hidden>
        <defs>
          <marker id="practice-arr" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
            <path d="M0 0 L9 5 L0 10 Z" fill={INK} fillOpacity="0.38" />
          </marker>
          <marker id="practice-return" markerWidth="10" markerHeight="10" refX="8" refY="5" orient="auto">
            <path d="M0 0 L9 5 L0 10 Z" fill={ACCENT} fillOpacity="0.56" />
          </marker>
        </defs>

        <text x="70" y="42" fontFamily={sans} fontSize="14" letterSpacing="5" fill={ACCENT}>
          PRACTICE LOOP
        </text>
        <line x1="212" y1="38" x2="318" y2="38" stroke={ACCENT} strokeOpacity="0.58" strokeWidth="2" />
        <text x="70" y="70" fontFamily={sans} fontSize="13" fill={INK} fillOpacity="0.58">
          把高重复任务做成可派发、可验收、可复盘的一条流水线
        </text>

        {stages.slice(0, -1).map((stage, i) => (
          <line
            key={stage.title}
            x1={stage.x + 64}
            y1="187"
            x2={stages[i + 1].x - 70}
            y2="187"
            stroke={INK}
            strokeOpacity="0.30"
            strokeWidth="2.2"
            markerEnd="url(#practice-arr)"
          />
        ))}

        {stages.map((stage, i) => (
          <StageCard key={stage.title} stage={stage} index={i} />
        ))}

        <path
          d="M676 252 V308 H230 V252"
          fill="none"
          stroke={ACCENT}
          strokeOpacity="0.38"
          strokeWidth="2"
          strokeDasharray="6 7"
          markerEnd="url(#practice-return)"
        />
        <text x="454" y="334" textAnchor="middle" fontFamily={sans} fontSize="13" letterSpacing="2" fill={ACCENT} fillOpacity="0.78">
          复盘结果继续补回 skill，下一批更稳定
        </text>

        <g transform="translate(162 262)">
          {[
            { label: "报表迁移", c: SAGE },
            { label: "批量改写", c: OCHRE },
            { label: "夜间巡检", c: ACCENT },
          ].map((item, i) => (
            <g key={item.label}>
              <rect x={i * 150} y="0" width="122" height="34" rx="10" fill={item.c} fillOpacity="0.10" stroke={item.c} strokeOpacity="0.42" />
              <text x={i * 150 + 61} y="22" textAnchor="middle" fontFamily={sans} fontSize="13" fill={INK} fillOpacity="0.76">
                {item.label}
              </text>
            </g>
          ))}
        </g>
      </svg>
    </VisualFrame>
  );
}
