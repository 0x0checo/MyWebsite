"use client";

import { motion } from "framer-motion";

export function AnimatedText({ text }: { text: string }) {
  const letters = Array.from(text);
  return (
    <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
      {letters.map((ch, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.02, duration: 0.3 }}
        >
          {ch === " " ? "\u00A0" : ch}
        </motion.span>
      ))}
    </h1>
  );
}

