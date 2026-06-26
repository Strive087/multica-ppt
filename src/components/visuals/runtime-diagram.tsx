export function RuntimeDiagram() {
  return (
    <div className="grid gap-4 text-left md:grid-cols-3">
      <div className="rounded-3xl border border-cyan-400/30 bg-cyan-400/10 p-5">
        <h4 className="text-lg font-semibold">Server</h4>
        <p className="text-sm text-slate-300">
          管理 workspace、issue、agent、task 等协作状态。
        </p>
      </div>
      <div className="rounded-3xl border border-sky-400/30 bg-sky-400/10 p-5">
        <h4 className="text-lg font-semibold">Daemon</h4>
        <p className="text-sm text-slate-300">
          负责把任务调度到可运行环境，并衔接执行生命周期。
        </p>
      </div>
      <div className="rounded-3xl border border-orange-400/30 bg-orange-400/10 p-5">
        <h4 className="text-lg font-semibold">AI Coding Tool</h4>
        <p className="text-sm text-slate-300">实际执行编码、修改、分析等工作。</p>
      </div>
    </div>
  );
}
