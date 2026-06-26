import { HeroVisual } from "@/components/visuals/hero-visual";
import { CapabilityGrid } from "@/components/visuals/capability-grid";
import { MigrationWorkflow } from "@/components/visuals/migration-workflow";
import { ObjectMap } from "@/components/visuals/object-map";
import { RuntimeDiagram } from "@/components/visuals/runtime-diagram";
import { SummaryVisual } from "@/components/visuals/summary-visual";
import type { SlideDefinition, VisualType } from "@/types/slides";

type TemplateKind = "hero" | "diagram" | "story" | "summary";

function templateFor(slide: SlideDefinition): TemplateKind {
  if (slide.visualType === "hero") return "hero";
  if (slide.visualType === "summary" && slide.section === "closing") return "summary";
  if (slide.visualType === "summary") return "story";
  return "diagram";
}

function renderVisual(type: VisualType) {
  switch (type) {
    case "runtime-diagram":
      return <RuntimeDiagram />;
    case "object-map":
      return <ObjectMap />;
    case "capability-grid":
      return <CapabilityGrid />;
    case "workflow":
      return <MigrationWorkflow />;
    case "hero":
      return <HeroVisual />;
    case "summary":
    default:
      return <SummaryVisual />;
  }
}

function Sources({ slide }: { slide: SlideDefinition }) {
  return (
    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
      <h3 className="font-sans text-sm uppercase tracking-editorial text-ink-faint">
        来源
      </h3>
      {slide.sourceLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="font-sans text-base text-accent hover:text-accent-deep"
        >
          <span>{link.label}</span>
          <span aria-hidden> ↗</span>
        </a>
      ))}
    </div>
  );
}

interface TemplateProps {
  slide: SlideDefinition;
  index: number;
  total: number;
}

function HeroTemplate({ slide }: TemplateProps) {
  return (
    <div className="grid h-full w-full grid-cols-1 md:grid-cols-[0.92fr_1.08fr]">
      <div className="flex flex-col justify-between gap-8 px-12 py-14 lg:px-16">
        <p className="font-sans text-lg uppercase tracking-editorial text-accent">
          {slide.kicker}
        </p>
        <div className="space-y-8">
          <h2 className="font-serif text-5xl font-semibold leading-[1.08] text-ink lg:text-6xl">
            {slide.title}
          </h2>
          <p className="max-w-xl font-serif text-2xl leading-relaxed text-ink-soft">
            {slide.summary}
          </p>
          <div className="flex flex-wrap gap-3">
            {slide.bulletPoints.map((point) => (
              <span
                key={point}
                className="rounded-full border border-ink/15 bg-paper px-4 py-1.5 font-sans text-base text-ink-soft"
              >
                {point}
              </span>
            ))}
          </div>
        </div>
        <Sources slide={slide} />
      </div>
      <div className="relative border-l border-ink/10 bg-paper">
        {renderVisual(slide.visualType)}
      </div>
    </div>
  );
}

function DiagramTemplate({ slide }: TemplateProps) {
  return (
    <div className="grid h-full w-full grid-rows-[auto_1fr_auto] gap-5 px-12 py-12 lg:px-16">
      <div className="flex items-start justify-between gap-8">
        <div className="space-y-3">
          <p className="font-sans text-lg uppercase tracking-editorial text-accent">
            {slide.kicker}
          </p>
          <h2 className="max-w-3xl font-serif text-4xl font-semibold leading-[1.1] text-ink lg:text-5xl">
            {slide.title}
          </h2>
        </div>
        <p className="hidden max-w-sm text-right font-serif text-xl leading-relaxed text-ink-muted md:block">
          {slide.summary}
        </p>
      </div>

      <div className="min-h-0 flex-1">{renderVisual(slide.visualType)}</div>

      <div className="flex flex-wrap items-center justify-between gap-5">
        <ul className="flex flex-wrap gap-x-8 gap-y-2">
          {slide.bulletPoints.map((point) => (
            <li
              key={point}
              className="flex items-center gap-2.5 font-sans text-lg text-ink-soft"
            >
              <span aria-hidden className="h-2 w-2 rounded-full bg-accent" />
              {point}
            </li>
          ))}
        </ul>
        <Sources slide={slide} />
      </div>
    </div>
  );
}

function StoryTemplate({ slide }: TemplateProps) {
  return (
    <div className="grid h-full w-full grid-cols-1 gap-8 px-12 py-14 lg:grid-cols-[1fr_0.62fr] lg:px-16">
      <div className="flex flex-col justify-center gap-7">
        <p className="font-sans text-lg uppercase tracking-editorial text-accent">
          {slide.kicker}
        </p>
        <h2 className="font-serif text-5xl font-semibold leading-[1.08] text-ink lg:text-6xl">
          {slide.title}
        </h2>
        <p className="max-w-2xl font-serif text-2xl leading-relaxed text-ink-soft">
          {slide.summary}
        </p>
        <ol className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {slide.bulletPoints.map((point, i) => (
            <li
              key={point}
              className="flex items-start gap-3 border-t border-ink/15 pt-3"
            >
              <span className="font-mono text-base text-accent">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-serif text-lg leading-snug text-ink-soft">{point}</span>
            </li>
          ))}
        </ol>
        <Sources slide={slide} />
      </div>
      <div className="relative hidden items-center justify-center lg:flex">
        <div className="h-full w-full rounded-2xl bg-[radial-gradient(circle_at_50%_40%,rgba(185,124,31,0.16),transparent_70%)]" />
        <svg viewBox="0 0 240 240" className="absolute h-full w-full p-6 opacity-90" aria-hidden>
          <circle cx="120" cy="120" r="92" fill="none" stroke="#2a241d" strokeOpacity="0.14" strokeWidth="1.4" />
          <circle cx="120" cy="120" r="92" fill="#b07d1f" fillOpacity="0.10" />
          <circle cx="120" cy="120" r="48" fill="#fbf6ec" stroke="#a94f1c" strokeWidth="1.6" />
          <circle cx="120" cy="120" r="48" fill="#a94f1c" fillOpacity="0.14" />
          <text x="120" y="116" textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontSize="10" letterSpacing="2" fill="#2a241d">SHARED</text>
          <text x="120" y="130" textAnchor="middle" fontFamily="ui-sans-serif, system-ui" fontSize="8" letterSpacing="1" fill="#2a241d" fillOpacity="0.6">context</text>
        </svg>
      </div>
    </div>
  );
}

function SummaryTemplate({ slide }: TemplateProps) {
  return (
    <div className="grid h-full w-full grid-cols-1 items-center gap-10 px-12 py-14 lg:grid-cols-[1fr_0.85fr] lg:px-20">
      <div className="flex flex-col justify-center gap-8">
        <p className="font-sans text-lg uppercase tracking-editorial text-accent">
          {slide.kicker}
        </p>
        <h2 className="font-serif text-5xl font-semibold leading-[1.05] text-ink lg:text-6xl">
          {slide.title}
        </h2>
        <p className="max-w-2xl font-serif text-2xl leading-relaxed text-ink-soft">
          {slide.summary}
        </p>
        <div className="h-px w-32 bg-accent/60" />
        <ol className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {slide.bulletPoints.map((point, i) => (
            <li
              key={point}
              className="space-y-1.5 border-l-2 border-accent/40 pl-4"
            >
              <span className="font-mono text-sm text-ink-faint">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="font-serif text-lg leading-snug text-ink-soft">{point}</p>
            </li>
          ))}
        </ol>
        <Sources slide={slide} />
      </div>
      <div className="relative h-full min-h-0">
        {renderVisual(slide.visualType)}
      </div>
    </div>
  );
}

export function SlideContent({ slide, index, total }: TemplateProps) {
  const template = templateFor(slide);
  return (
    <div className="h-full w-full bg-paper-soft" data-template={template} data-slide-index={index} data-slide-total={total}>
      {template === "hero" ? (
        <HeroTemplate slide={slide} index={index} total={total} />
      ) : template === "diagram" ? (
        <DiagramTemplate slide={slide} index={index} total={total} />
      ) : template === "story" ? (
        <StoryTemplate slide={slide} index={index} total={total} />
      ) : (
        <SummaryTemplate slide={slide} index={index} total={total} />
      )}
      {slide.callout ? (
        <p className="absolute bottom-6 left-12 right-12 rounded-lg bg-accent/10 px-4 py-2.5 font-sans text-base text-accent-deep lg:left-16">
          {slide.callout}
        </p>
      ) : null}
    </div>
  );
}