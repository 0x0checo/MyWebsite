"use client";

import { motion } from "framer-motion";

const items = [
  { label: "Home", href: "#home" },
  { label: "Highlights", href: "#highlights" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function FloatingNav() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -12 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed left-1/2 top-6 z-50 -translate-x-1/2"
    >
      <div className="flex items-center gap-1 rounded-full border border-neutral-200 bg-white/70 px-2 py-2 shadow-sm backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/60">
        {items.map((it) => (
          <a
            key={it.href}
            href={it.href}
            className="rounded-full px-3 py-1 text-sm text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-900"
          >
            {it.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}

