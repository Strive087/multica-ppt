import {
  ACCENT,
  INK,
  OCHRE,
  PAPER,
  SAGE,
  VisualFrame,
} from "@/components/visuals/shared";

export function HeroVisual({ className }: { className?: string }) {
  return (
    <VisualFrame
      title="封面视觉：人与 Agent 在协作平面交汇"
      className={className}
    >
      <div className="relative flex h-full w-full items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_55%,rgba(185,124,31,0.16),transparent_62%)]" />
        <svg
          viewBox="0 0 720 540"
          className="h-full w-full p-6"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
        >
          <defs>
            <linearGradient id="heroFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor={OCHRE} stopOpacity="0.20" />
              <stop offset="1" stopColor={ACCENT} stopOpacity="0.12" />
            </linearGradient>
          </defs>

          {[212, 168, 124, 80].map((r) => (
            <circle
              key={r}
              cx="360"
              cy="258"
              r={r}
              fill="none"
              stroke={INK}
              strokeOpacity="0.12"
              strokeWidth="1.5"
            />
          ))}

          {/* workspace core */}
          <circle cx="360" cy="298" r="64" fill={PAPER} stroke={INK} strokeOpacity="0.32" strokeWidth="2.2" />
          <circle cx="360" cy="298" r="64" fill="url(#heroFill)" />
          <text x="360" y="294" textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontSize="18" letterSpacing="2" fill={INK}>WORKSPACE</text>
          <text x="360" y="316" textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontSize="12" letterSpacing="1.2" fill={INK} fillOpacity="0.6">issue · task · context</text>

          {/* human node */}
          <g>
            <circle cx="148" cy="298" r="48" fill={PAPER} stroke={SAGE} strokeWidth="2.2" />
            <circle cx="148" cy="282" r="18" fill={SAGE} fillOpacity="0.24" />
            <path d="M120 332a28 28 0 0 1 56 0" fill="none" stroke={SAGE} strokeWidth="2.2" />
            <text x="148" y="372" textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontSize="15" letterSpacing="2" fill={INK}>HUMAN</text>
          </g>

          {/* agent node */}
          <g>
            <rect x="552" y="250" width="96" height="96" rx="22" fill={PAPER} stroke={ACCENT} strokeWidth="2.2" />
            <rect x="572" y="270" width="56" height="56" rx="14" fill={ACCENT} fillOpacity="0.20" />
            <path d="M582 302l10 10 22-24" fill="none" stroke={ACCENT} strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
            <text x="600" y="372" textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontSize="15" letterSpacing="2" fill={INK}>AGENT</text>
          </g>

          <path d="M196 298 H296" stroke={INK} strokeOpacity="0.34" strokeWidth="2" strokeDasharray="2 6" fill="none" />
          <path d="M424 298 H552" stroke={INK} strokeOpacity="0.34" strokeWidth="2" strokeDasharray="2 6" fill="none" />

          <text x="360" y="60" textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontSize="15" letterSpacing="7" fill={ACCENT}>HUMAN · AGENT · CONTEXT</text>
          <line x1="286" y1="78" x2="434" y2="78" stroke={ACCENT} strokeWidth="2" />
        </svg>
      </div>
    </VisualFrame>
  );
}