import {
  ACCENT,
  INK,
  OCHRE,
  PAPER,
  SAGE,
  VisualFrame,
} from "@/components/visuals/shared";

const workspaces = ["Workspace A", "Workspace B"];
const tools = [
  { label: "Claude Code", c: SAGE },
  { label: "Codex", c: OCHRE },
  { label: "Cursor", c: ACCENT },
] as const;

export function RuntimeMatrix() {
  const sans = "ui-sans-serif, system-ui";

  return (
    <VisualFrame
      title="Runtime 矩阵：工作区乘以 AI 编程工具"
      className="flex h-full w-full flex-col"
    >
      <svg viewBox="0 0 780 420" className="h-full w-full" preserveAspectRatio="xMidYMid meet" aria-hidden>
        <text x="390" y="34" textAnchor="middle" fontFamily={sans} fontSize="14" letterSpacing="5" fill={ACCENT}>
          RUNTIME = DAEMON × AI CODING TOOL
        </text>

        <rect x="80" y="70" width="620" height="272" rx="24" fill={PAPER} stroke={INK} strokeOpacity="0.14" strokeWidth="2" />
        <rect x="80" y="70" width="620" height="272" rx="24" fill={SAGE} fillOpacity="0.035" />

        <text x="132" y="122" fontFamily={sans} fontSize="12" letterSpacing="2.5" fill={INK} fillOpacity="0.48">
          WORKSPACE
        </text>
        <text x="344" y="104" textAnchor="middle" fontFamily={sans} fontSize="12" letterSpacing="2.5" fill={INK} fillOpacity="0.48">
          LOCAL AI CODING TOOLS
        </text>

        {tools.map((tool, i) => {
          const x = 304 + i * 128;
          return (
            <g key={tool.label}>
              <rect x={x - 50} y="124" width="100" height="38" rx="10" fill={PAPER} stroke={tool.c} strokeOpacity="0.55" strokeWidth="1.6" />
              <text x={x} y="148" textAnchor="middle" fontFamily={sans} fontSize="12.5" fill={INK}>
                {tool.label}
              </text>
            </g>
          );
        })}

        {workspaces.map((workspace, row) => {
          const y = 204 + row * 72;
          return (
            <g key={workspace}>
              <rect x="122" y={y - 23} width="126" height="46" rx="12" fill={PAPER} stroke={SAGE} strokeOpacity="0.45" strokeWidth="1.6" />
              <text x="185" y={y + 5} textAnchor="middle" fontFamily={sans} fontSize="13.5" fontWeight="700" fill={INK}>
                {workspace}
              </text>
              {tools.map((tool, col) => {
                const x = 304 + col * 128;
                return (
                  <g key={`${workspace}-${tool.label}`}>
                    <rect x={x - 42} y={y - 21} width="84" height="42" rx="12" fill={PAPER} stroke={tool.c} strokeWidth="1.8" />
                    <rect x={x - 42} y={y - 21} width="84" height="42" rx="12" fill={tool.c} fillOpacity="0.10" />
                    <text x={x} y={y + 5} textAnchor="middle" fontFamily={sans} fontSize="12.2" fontWeight="700" fill={INK}>
                      runtime
                    </text>
                  </g>
                );
              })}
            </g>
          );
        })}

        <rect x="222" y="352" width="336" height="38" rx="12" fill={OCHRE} fillOpacity="0.09" stroke={OCHRE} strokeOpacity="0.34" />
        <text x="390" y="376" textAnchor="middle" fontFamily={sans} fontSize="14.5" fontWeight="700" fill={OCHRE}>
          2 个 workspace × 3 个工具 = 6 个 runtime
        </text>
      </svg>
    </VisualFrame>
  );
}
