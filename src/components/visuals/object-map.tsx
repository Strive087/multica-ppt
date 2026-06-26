export function ObjectMap() {
  const items = ["Workspace", "Project", "Issue", "Agent", "Task"];

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
      <p className="mb-4 text-sm uppercase tracking-[0.3em] text-slate-400">
        Core Objects
      </p>
      <div className="flex flex-wrap gap-3">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
