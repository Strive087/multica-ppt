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