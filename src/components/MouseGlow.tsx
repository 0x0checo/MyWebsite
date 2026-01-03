"use client";

import { useEffect, useRef } from "react";

export function MouseGlow() {
  const raf = useRef<number | null>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const root = document.documentElement;

    const onMove = (e: MouseEvent) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (raf.current == null) raf.current = requestAnimationFrame(tick);
    };

    const tick = () => {
      raf.current = null;

      current.current.x += (target.current.x - current.current.x) * 0.14;
      current.current.y += (target.current.y - current.current.y) * 0.14;

      root.style.setProperty("--mx", `${current.current.x}px`);
      root.style.setProperty("--my", `${current.current.y}px`);

      if (
        Math.abs(target.current.x - current.current.x) > 0.5 ||
        Math.abs(target.current.y - current.current.y) > 0.5
      ) {
        raf.current = requestAnimationFrame(tick);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[40]">
      {/* main glow */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(650px circle at var(--mx, 50%) var(--my, 30%), rgba(99,102,241,0.22), transparent 60%)",
          mixBlendMode: "screen",
        }}
      />
      {/* secondary glow */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(520px circle at var(--mx, 50%) var(--my, 30%), rgba(56,189,248,0.14), transparent 62%)",
          mixBlendMode: "screen",
        }}
      />

      {/* ✅ very light vignette (optional) — 不再压黑文字 */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.20)_78%)]" />
    </div>
  );
}

