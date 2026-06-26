import {
  ACCENT,
  INK,
  OCHRE,
  PAPER,
  SAGE,
  VisualFrame,
} from "@/components/visuals/shared";

export function RuntimeDiagram() {
  const tools = ["Claude Code", "Codex", "Cursor", "Copilot", "Gemini", "+ 8"];
  const serverItems = ["Workspaces", "Issues & tasks", "Agent definitions", "Realtime (WebSocket)"];
  const sans = "ui-sans-serif, system-ui";

  return (
    <VisualFrame
      title="Multica runtime: Your side vs Multica Server"
      className="flex h-full w-full flex-col"
    >
      <svg viewBox="0 0 760 420" className="h-full w-full" preserveAspectRatio="xMidYMid meet" aria-hidden>
        {/* left panel */}
        <rect x="30" y="24" width="330" height="372" rx="16" fill={PAPER} stroke={OCHRE} strokeWidth="2" fillOpacity="0.5" />
        <rect x="30" y="24" width="330" height="372" rx="16" fill={OCHRE} fillOpacity="0.05" />
        <text x="196" y="54" textAnchor="middle" fontFamily={sans} fontSize="15" fontWeight="600" letterSpacing="3" fill={OCHRE}>YOUR SIDE</text>

        {/* Client row */}
        <text x="54" y="84" fontFamily={sans} fontSize="11" letterSpacing="2" fill={INK} fillOpacity="0.5">CLIENT</text>
        {["Web app", "CLI"].map((t, i) => (
          <g key={t}>
            <rect x={54 + i * 100} y="92" width="90" height="30" rx="7" fill={PAPER} stroke={INK} strokeOpacity="0.25" strokeWidth="1.5" />
            <text x={99 + i * 100} y="111" textAnchor="middle" fontFamily={sans} fontSize="13" fill={INK}>{t}</text>
          </g>
        ))}

        <line x1="54" y1="140" x2="336" y2="140" stroke={OCHRE} strokeOpacity="0.25" strokeWidth="1.5" />

        {/* Daemon row */}
        <text x="54" y="166" fontFamily={sans} fontSize="11" letterSpacing="2" fill={INK} fillOpacity="0.5">DAEMON</text>
        <text x="54" y="190" fontFamily={sans} fontSize="12" fill={INK} fillOpacity="0.6">Polls work, invokes local AI tools</text>
        {tools.map((t, i) => {
          const col = i % 3;
          const row = Math.floor(i / 3);
          const tx = 54 + col * 96;
          const ty = 202 + row * 38;
          const muted = i === tools.length - 1;
          return (
            <g key={t}>
              <rect
                x={tx}
                y={ty}
                width="86"
                height="28"
                rx="6"
                fill={muted ? "none" : PAPER}
                stroke={muted ? INK : ACCENT}
                strokeOpacity={muted ? 0.2 : 0.35}
                strokeWidth="1.5"
                strokeDasharray={muted ? "3 3" : undefined}
              />
              <text x={tx + 43} y={ty + 18} textAnchor="middle" fontFamily={sans} fontSize="12" fill={INK} fillOpacity={muted ? 0.5 : 0.85}>
                {t}
              </text>
            </g>
          );
        })}

        {/* Your code/keys/CPU badge */}
        <rect x="54" y="336" width="282" height="40" rx="10" fill={OCHRE} fillOpacity="0.08" stroke={OCHRE} strokeOpacity="0.3" strokeWidth="1.5" />
        <text x="196" y="361" textAnchor="middle" fontFamily={sans} fontSize="15" fontWeight="600" fill={OCHRE}>Your code, Your keys, Your CPU</text>

        {/* center arrow */}
        <g transform="translate(370 210)">
          <line x1="0" y1="-70" x2="0" y2="70" stroke={INK} strokeOpacity="0.2" strokeWidth="2" strokeDasharray="4 6" />
          <path d="M-8 -56 L0 -70 L8 -56" fill="none" stroke={INK} strokeOpacity="0.4" strokeWidth="2.4" strokeLinejoin="round" />
          <path d="M-8 56 L0 70 L8 56" fill="none" stroke={INK} strokeOpacity="0.4" strokeWidth="2.4" strokeLinejoin="round" />
          <text x="14" y="-4" fontFamily={sans} fontSize="12" letterSpacing="2" fill={INK} fillOpacity="0.5">poll 3s</text>
          <text x="14" y="16" fontFamily={sans} fontSize="12" letterSpacing="2" fill={INK} fillOpacity="0.5">heartbeat 15s</text>
        </g>

        {/* right panel */}
        <rect x="400" y="24" width="330" height="372" rx="16" fill={PAPER} stroke={INK} strokeOpacity="0.2" strokeWidth="2" />
        <rect x="400" y="24" width="330" height="372" rx="16" fill={INK} fillOpacity="0.04" />
        <text x="566" y="54" textAnchor="middle" fontFamily={sans} fontSize="15" fontWeight="600" letterSpacing="3" fill={INK}>MULTICA</text>

        <text x="424" y="84" fontFamily={sans} fontSize="11" letterSpacing="2" fill={INK} fillOpacity="0.5">SERVER, cloud or self-host</text>
        {serverItems.map((item, i) => (
          <g key={item}>
            <rect x="424" y={100 + i * 48} width="282" height="36" rx="8" fill={PAPER} stroke={SAGE} strokeOpacity="0.3" strokeWidth="1.5" />
            <circle cx="446" cy={118 + i * 48} r="5" fill={SAGE} fillOpacity="0.7" />
            <text x="464" y={123 + i * 48} fontFamily={sans} fontSize="14" fill={INK} fillOpacity="0.85">{item}</text>
          </g>
        ))}

        {/* No AI execution badge */}
        <rect x="424" y="336" width="282" height="40" rx="10" fill={INK} fillOpacity="0.06" stroke={INK} strokeOpacity="0.2" strokeWidth="1.5" />
        <text x="566" y="361" textAnchor="middle" fontFamily={sans} fontSize="14" fontWeight="600" letterSpacing="1.5" fill={INK} fillOpacity="0.7">No AI execution here</text>

        {/* top label */}
        <text x="380" y="14" textAnchor="middle" fontFamily={sans} fontSize="13" letterSpacing="5" fill={ACCENT}>DISTRIBUTED three-tier</text>
      </svg>
    </VisualFrame>
  );
}