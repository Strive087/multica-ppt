export function MigrationWorkflow() {
  const steps = [
    "拆分迁移批次",
    "沉淀 skill 规则",
    "批量执行与复查",
    "人工 review 收口",
  ];

  return (
    <div className="space-y-3">
      {steps.map((step, index) => (
        <div
          key={step}
          className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-400/20 text-sm text-orange-200">
            {index + 1}
          </div>
          <p className="text-sm text-slate-200">{step}</p>
        </div>
      ))}
    </div>
  );
}
