import { CapabilityGrid } from "@/components/visuals/capability-grid";
import { MigrationWorkflow } from "@/components/visuals/migration-workflow";
import { ObjectMap } from "@/components/visuals/object-map";
import { RuntimeDiagram } from "@/components/visuals/runtime-diagram";
import type { SlideDefinition } from "@/types/slides";

function renderVisual(slide: SlideDefinition) {
  switch (slide.visualType) {
    case "runtime-diagram":
      return <RuntimeDiagram />;
    case "object-map":
      return <ObjectMap />;
    case "capability-grid":
      return <CapabilityGrid />;
    case "workflow":
      return <MigrationWorkflow />;
    case "hero":
      return (
        <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            Human + Agent
          </p>
          <p className="mt-4 text-lg text-slate-100">
            让任务、上下文和执行过程进入同一个协作平面。
          </p>
        </div>
      );
    case "summary":
    default:
      return (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Key Point
          </p>
          <p className="mt-4 text-lg text-slate-100">{slide.summary}</p>
        </div>
      );
  }
}

export function SlideContent({
  slide,
  index,
  total,
}: {
  slide: SlideDefinition;
  index: number;
  total: number;
}) {
  return (
    <article className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
          {slide.kicker}
        </p>
        <h2 className="text-4xl font-semibold leading-tight">{slide.title}</h2>
        <p className="max-w-2xl text-lg text-slate-300">{slide.summary}</p>
        <ul className="space-y-3 text-left text-slate-200">
          {slide.bulletPoints.map((point) => (
            <li
              key={point}
              className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>

      <div className="space-y-4 rounded-[2rem] border border-cyan-400/20 bg-slate-900/70 p-6">
        {renderVisual(slide)}
        <p className="text-sm text-slate-400">
          第 {index + 1} / {total} 页
        </p>
        <div className="space-y-2">
          <h3 className="text-sm uppercase tracking-[0.3em] text-slate-400">
            Sources
          </h3>
          {slide.sourceLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="block text-cyan-300 hover:text-cyan-200"
            >
              {link.label}
            </a>
          ))}
        </div>
        {slide.callout ? (
          <p className="rounded-2xl bg-orange-400/10 px-4 py-3 text-sm text-orange-200">
            {slide.callout}
          </p>
        ) : null}
      </div>
    </article>
  );
}
