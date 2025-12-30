export function Spotlight() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-[-20%] h-[600px] w-[600px] -translate-x-1/2 rounded-full blur-3xl opacity-40 dark:opacity-30"
        style={{
          background:
            "radial-gradient(circle at center, rgba(99,102,241,0.55), transparent 60%)",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.15),transparent_60%)]" />
    </div>
  );
}

