"use client";

import { useState } from "react";

const DEFAULT_LINES = [
  "$ python -m venv .venv && source .venv/bin/activate",
  "$ pip install -r requirements.txt",
  "$ python train.py --model bert-base-uncased --task sst2",
  "$ python explain.py --method ig --k 10",
  "✔ saved: outputs/ig_heatmap.png",
];

export function MiniTerminal({
  title = "Quick demo",
  lines = DEFAULT_LINES,
}: {
  title?: string;
  lines?: string[];
}) {
  const [copied, setCopied] = useState(false);

  const copyAll = async () => {
    try {
      await navigator.clipboard.writeText(lines.join("\n"));
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  };

  return (
    <div className="mt-8 w-full max-w-2xl rounded-2xl border border-white/10 bg-white/5 p-4 shadow-[0_20px_80px_-30px_rgba(0,0,0,0.7)] backdrop-blur">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
          <span className="ml-2 text-xs text-neutral-300">{title}</span>
        </div>

        <button
          onClick={copyAll}
          className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-neutral-200 hover:bg-white/10"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <pre className="mt-3 overflow-x-auto rounded-xl bg-black/30 p-3 text-xs leading-relaxed text-neutral-100">
        <code>
          {lines.map((l, i) => (
            <div key={i} className="whitespace-pre">
              {l}
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}

