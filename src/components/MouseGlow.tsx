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

      // smooth follow
      current.current.x += (target.current.x - current.current.x) * 0.12;
      current.current.y += (target.current.y - current.current.y) * 0.12;

      root.style.setProperty("--mx", `${current.current.x}px`);
      root.style.setProperty("--my", `${current.current.y}px`);

      // keep animating while moving
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
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* primary indigo glow */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(600px circle at var(--mx, 50%) var(--my, 20%), rgba(99,102,241,0.22), transparent 55%)",
          mixBlendMode: "screen",
        }}
      />
      {/* secondary cyan glow */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background:
            "radial-gradient(500px circle at var(--mx, 50%) var(--my, 20%), rgba(56,189,248,0.14), transparent 60%)",
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
}

