export function CapabilityGrid() {
  const items = [
    "Assign issues",
    "@-mention",
    "Skills",
    "Squads",
    "Tasks",
    "Autopilots",
  ];

  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div
          key={item}
          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-slate-200"
        >
          {item}
        </div>
      ))}
    </div>
  );
}
