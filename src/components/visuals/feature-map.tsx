import {
  ACCENT,
  INK,
  OCHRE,
  PAPER,
  SAGE,
  VisualFrame,
} from "@/components/visuals/shared";

const features = [
  { label: "Skills", sub: "团队知识包", x: 134, y: 94, c: SAGE },
  { label: "Squads", sub: "leader 路由", x: 626, y: 94, c: OCHRE },
  { label: "Tools", sub: "多 AI 工具", x: 672, y: 300, c: ACCENT },
  { label: "Visibility", sub: "私有 / 团队", x: 380, y: 358, c: SAGE },
  { label: "Resources", sub: "项目上下文", x: 88, y: 300, c: OCHRE },
] as const;

export function FeatureMap() {
  const sans = "ui-sans-serif, system-ui";

  return (
    <VisualFrame
      title="Agent 特殊能力星图"
      className="relative h-full w-full overflow-hidden rounded-[2rem] border border-ink/10 bg-[radial-gradient(circle_at_50%_50%,rgba(169,79,28,0.15),transparent_28%),linear-gradient(180deg,#fdf9f1_0%,#f7f0e2_100%)]"
    >
      <svg viewBox="0 0 760 430" className="h-full w-full" preserveAspectRatio="xMidYMid meet" aria-hidden>
        <text x="380" y="34" textAnchor="middle" fontFamily={sans} fontSize="14" letterSpacing="5" fill={ACCENT}>
          AGENT AS A MANAGED TEAM MEMBER
        </text>

        <g stroke={INK} strokeOpacity="0.22" strokeWidth="2" strokeDasharray="5 7" fill="none">
          {features.map((feature) => (
            <line key={feature.label} x1="380" y1="220" x2={feature.x} y2={feature.y} />
          ))}
        </g>

        <circle cx="380" cy="220" r="78" fill={PAPER} stroke={ACCENT} strokeWidth="2.4" />
        <circle cx="380" cy="220" r="78" fill={ACCENT} fillOpacity="0.12" />
        <rect x="342" y="182" width="76" height="76" rx="18" fill={ACCENT} fillOpacity="0.12" stroke={ACCENT} strokeOpacity="0.5" />
        <path d="M362 221 l13 13 l28 -35" fill="none" stroke={ACCENT} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
        <text x="380" y="282" textAnchor="middle" fontFamily={sans} fontSize="17" fontWeight="700" letterSpacing="2" fill={INK}>
          AGENT
        </text>

        {features.map((feature) => (
          <g key={feature.label}>
            <circle cx={feature.x} cy={feature.y} r="58" fill={PAPER} stroke={feature.c} strokeWidth="2" />
            <circle cx={feature.x} cy={feature.y} r="58" fill={feature.c} fillOpacity="0.12" />
            <text x={feature.x} y={feature.y - 4} textAnchor="middle" fontFamily={sans} fontSize="16" fontWeight="700" fill={INK}>
              {feature.label}
            </text>
            <text x={feature.x} y={feature.y + 18} textAnchor="middle" fontFamily={sans} fontSize="12" fill={INK} fillOpacity="0.6">
              {feature.sub}
            </text>
          </g>
        ))}
      </svg>
    </VisualFrame>
  );
}
