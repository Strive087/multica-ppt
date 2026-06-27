import {
  ACCENT,
  INK,
  OCHRE,
  SAGE,
} from "@/components/visuals/shared";
import type { SlideDefinition } from "@/types/slides";

function ThumbShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden bg-paper p-4">
      <svg viewBox="0 0 220 124" className="h-full w-full" preserveAspectRatio="xMidYMid meet" aria-hidden>
        {children}
      </svg>
    </div>
  );
}

export function OverviewThumb({ slide }: { slide: SlideDefinition }) {
  switch (slide.visualType) {
    case "hero":
      return (
        <ThumbShell>
          <circle cx="110" cy="62" r="40" fill="none" stroke={INK} strokeOpacity="0.18" strokeWidth="1.4" />
          <circle cx="110" cy="62" r="18" fill={OCHRE} fillOpacity="0.18" stroke={INK} strokeOpacity="0.3" />
          <circle cx="40" cy="62" r="9" fill={SAGE} fillOpacity="0.5" />
          <rect x="172" y="52" width="20" height="20" rx="5" fill={ACCENT} fillOpacity="0.5" />
          <path d="M50 62 H92" stroke={INK} strokeOpacity="0.25" strokeWidth="1.2" strokeDasharray="2 3" />
          <path d="M128 62 H170" stroke={INK} strokeOpacity="0.25" strokeWidth="1.2" strokeDasharray="2 3" />
        </ThumbShell>
      );
    case "runtime-diagram":
      return (
        <ThumbShell>
          {[36, 110, 184].map((x, i) => (
            <g key={x}>
              <circle cx={x} cy="62" r="22" fill="none" stroke={[SAGE, OCHRE, ACCENT][i]} strokeWidth="1.6" />
              <circle cx={x} cy="62" r="22" fill={[SAGE, OCHRE, ACCENT][i]} fillOpacity="0.12" />
            </g>
          ))}
          <path d="M58 62 H88" stroke={INK} strokeOpacity="0.4" strokeWidth="1.2" />
          <path d="M132 62 H162" stroke={INK} strokeOpacity="0.4" strokeWidth="1.2" />
        </ThumbShell>
      );
    case "chat-vs-workspace":
      return (
        <ThumbShell>
          <rect x="16" y="26" width="78" height="70" rx="8" fill={INK} fillOpacity="0.06" stroke={INK} strokeOpacity="0.18" />
          <rect x="31" y="42" width="42" height="10" rx="5" fill={SAGE} fillOpacity="0.35" />
          <rect x="38" y="60" width="50" height="10" rx="5" fill={OCHRE} fillOpacity="0.35" />
          <path d="M100 62 H120" stroke={ACCENT} strokeOpacity="0.55" strokeWidth="1.5" strokeDasharray="2 3" />
          <circle cx="162" cy="60" r="16" fill={ACCENT} fillOpacity="0.18" stroke={ACCENT} />
          <circle cx="132" cy="84" r="10" fill={SAGE} fillOpacity="0.28" stroke={SAGE} />
          <circle cx="192" cy="84" r="10" fill={OCHRE} fillOpacity="0.28" stroke={OCHRE} />
          <line x1="162" y1="76" x2="132" y2="84" stroke={INK} strokeOpacity="0.2" />
          <line x1="162" y1="76" x2="192" y2="84" stroke={INK} strokeOpacity="0.2" />
        </ThumbShell>
      );
    case "feature-map":
      return (
        <ThumbShell>
          <circle cx="110" cy="62" r="18" fill={ACCENT} fillOpacity="0.18" stroke={ACCENT} />
          {[
            { x: 46, y: 34, c: SAGE },
            { x: 174, y: 34, c: OCHRE },
            { x: 190, y: 86, c: ACCENT },
            { x: 110, y: 104, c: SAGE },
            { x: 30, y: 86, c: OCHRE },
          ].map((n, i) => (
            <g key={i}>
              <line x1="110" y1="62" x2={n.x} y2={n.y} stroke={INK} strokeOpacity="0.18" strokeDasharray="2 3" />
              <circle cx={n.x} cy={n.y} r="10" fill={n.c} fillOpacity="0.22" stroke={n.c} />
            </g>
          ))}
        </ThumbShell>
      );
    case "runtime-matrix":
      return (
        <ThumbShell>
          <rect x="22" y="24" width="176" height="78" rx="8" fill={SAGE} fillOpacity="0.08" stroke={INK} strokeOpacity="0.16" />
          {[0, 1, 2].map((i) => (
            <rect key={i} x={82 + i * 36} y="34" width="28" height="12" rx="3" fill={[SAGE, OCHRE, ACCENT][i]} fillOpacity="0.18" stroke={[SAGE, OCHRE, ACCENT][i]} strokeWidth="0.8" />
          ))}
          {[0, 1].map((row) =>
            [0, 1, 2].map((col) => (
              <circle key={`${row}-${col}`} cx={96 + col * 36} cy={64 + row * 24} r="7" fill={[SAGE, OCHRE, ACCENT][col]} fillOpacity="0.18" stroke={[SAGE, OCHRE, ACCENT][col]} />
            )),
          )}
          {[0, 1].map((row) => (
            <rect key={row} x="34" y={58 + row * 24} width="34" height="12" rx="3" fill={INK} fillOpacity="0.06" stroke={SAGE} strokeOpacity="0.35" />
          ))}
        </ThumbShell>
      );
    case "practice-workflow":
      return (
        <ThumbShell>
          <path d="M30 68 C56 36, 82 36, 106 62 C132 90, 164 88, 190 58" fill="none" stroke={INK} strokeOpacity="0.2" strokeWidth="1.2" />
          {[
            { x: 34, y: 68, c: SAGE },
            { x: 78, y: 46, c: OCHRE },
            { x: 118, y: 68, c: ACCENT },
            { x: 160, y: 46, c: SAGE },
            { x: 194, y: 68, c: OCHRE },
          ].map((n, i) => (
            <g key={i}>
              <circle cx={n.x} cy={n.y} r="9" fill={n.c} fillOpacity="0.18" stroke={n.c} />
            </g>
          ))}
          <path d="M190 84 C150 110, 72 110, 34 84" fill="none" stroke={ACCENT} strokeOpacity="0.28" strokeWidth="1" strokeDasharray="2 3" />
        </ThumbShell>
      );
    case "object-map":
      return (
        <ThumbShell>
          <line x1="110" y1="30" x2="110" y2="94" stroke={INK} strokeOpacity="0.25" strokeWidth="1.2" strokeDasharray="2 4" />
          <line x1="40" y1="62" x2="92" y2="62" stroke={INK} strokeOpacity="0.25" strokeWidth="1.2" />
          <line x1="128" y1="62" x2="180" y2="62" stroke={INK} strokeOpacity="0.25" strokeWidth="1.2" />
          <circle cx="110" cy="30" r="10" fill={INK} fillOpacity="0.18" stroke={INK} strokeOpacity="0.4" />
          <circle cx="110" cy="62" r="12" fill={OCHRE} fillOpacity="0.25" stroke={OCHRE} />
          <circle cx="110" cy="94" r="12" fill={ACCENT} fillOpacity="0.25" stroke={ACCENT} />
          <circle cx="40" cy="62" r="10" fill={SAGE} fillOpacity="0.35" stroke={SAGE} />
          <circle cx="180" cy="62" r="10" fill={OCHRE} fillOpacity="0.35" stroke={OCHRE} />
        </ThumbShell>
      );
    case "capability-grid":
      return (
        <ThumbShell>
          {[0, 1, 2, 3, 4, 5].map((i) => {
            const cx = 32 + (i % 3) * 60;
            const cy = 36 + Math.floor(i / 3) * 44;
            const c = [SAGE, OCHRE, ACCENT, SAGE, OCHRE, ACCENT][i];
            return <rect key={i} x={cx - 22} y={cy - 16} width="44" height="32" rx="6" fill={c} fillOpacity="0.16" stroke={c} strokeWidth="1.2" />;
          })}
        </ThumbShell>
      );
    case "workflow":
      return (
        <ThumbShell>
          <line x1="22" y1="62" x2="198" y2="62" stroke={INK} strokeOpacity="0.2" strokeWidth="1.2" />
          {[
            { x: 36, c: OCHRE },
            { x: 86, c: SAGE },
            { x: 136, c: ACCENT },
            { x: 184, c: SAGE },
          ].map((s, i) => (
            <g key={i}>
              <circle cx={s.x} cy="62" r="11" fill={s.c} fillOpacity="0.18" stroke={s.c} strokeWidth="1.4" />
            </g>
          ))}
          <path d="M184 73 C 184 100, 36 100, 36 73" fill="none" stroke={ACCENT} strokeOpacity="0.3" strokeWidth="1" strokeDasharray="2 3" />
        </ThumbShell>
      );
    case "summary":
    default:
      return (
        <ThumbShell>
          <circle cx="110" cy="58" r="26" fill={OCHRE} fillOpacity="0.16" stroke={ACCENT} strokeWidth="1.4" />
          <line x1="20" y1="96" x2="200" y2="96" stroke={INK} strokeOpacity="0.2" strokeWidth="1.2" />
          {[
            { x: 60, c: SAGE },
            { x: 110, c: OCHRE },
            { x: 160, c: ACCENT },
          ].map((m) => (
            <g key={m.x}>
              <circle cx={m.x} cy="96" r="4" fill={m.c} />
              <line x1={m.x} y1="96" x2={m.x} y2="108" stroke={m.c} strokeWidth="1.4" />
            </g>
          ))}
        </ThumbShell>
      );
  }
}
