"use client";

import { Section } from "@/components/Section";
import { site } from "@/data/site";
import { motion } from "framer-motion";

export function Highlights() {
  return (
    <Section
      id="highlights"
      title="Highlights"
      subtitle="A bit more context beyond projects."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {site.FeatureCard.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: idx * 0.05, duration: 0.35 }}
            className="rounded-2xl border border-neutral-200 bg-white/60 p-6 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/40"
          >
            <h3 className="text-lg font-semibold leading-snug">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              {item.body}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 rounded-2xl border border-neutral-200 bg-white/60 p-6 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/40">
        <p className="text-sm text-neutral-500 dark:text-neutral-400">
          My tech stack
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {site.techStack.map((t) => (
            <span
              key={t}
              className="rounded-full border border-neutral-200 px-3 py-1 text-xs text-neutral-700 dark:border-neutral-800 dark:text-neutral-200"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}

