"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { motion, useScroll } from "framer-motion";

type NavItem = { id: string; label: string };

export function FloatingNav() {
  const items: NavItem[] = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "highlights", label: "Highlights" },
      { id: "projects", label: "Projects" },
      { id: "about", label: "About" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  // scroll progress
  const { scrollYProgress } = useScroll();

  // active section
  const [activeId, setActiveId] = useState<string>("home");

  useEffect(() => {
    const sections = items
      .map((it) => document.getElementById(it.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        // pick the most visible entry
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      {
        root: null,
        // 让“当前 section”更稳定：顶部留出导航高度
        rootMargin: "-30% 0px -60% 0px",
        threshold: [0.05, 0.1, 0.2, 0.35, 0.5],
      }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [items]);

  return (
    <>
      {/* scroll progress bar */}
      <motion.div
        className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-gradient-to-r from-indigo-400 via-sky-400 to-fuchsia-400"
        style={{ scaleX: scrollYProgress }}
      />

      {/* floating nav */}
      <div className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
        <nav className="rounded-full border border-white/10 bg-white/5 px-2 py-2 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.7)] backdrop-blur">
          <ul className="flex items-center gap-1">
            {items.map((it) => {
              const isActive = activeId === it.id;

              return (
                <li key={it.id}>
                  <Link
                    href={`#${it.id}`}
                    className={[
                      "relative block rounded-full px-4 py-2 text-sm transition",
                      "text-neutral-200/80 hover:text-neutral-100",
                      isActive
                        ? "bg-white/10 text-neutral-50 ring-1 ring-white/15"
                        : "hover:bg-white/5",
                    ].join(" ")}
                  >
                    {it.label}

                    {/* active underline glow */}
                    {isActive ? (
                      <span className="pointer-events-none absolute inset-x-3 -bottom-[6px] h-[2px] rounded-full bg-gradient-to-r from-indigo-300/80 via-sky-300/80 to-fuchsia-300/80 blur-[0.5px]" />
                    ) : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </>
  );
}

