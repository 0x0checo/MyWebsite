"use client";

import { Section } from "@/components/Section";
import { site } from "@/data/site";
import { motion } from "framer-motion";

export function Highlights() {
  return (
    <Section
      id="highlights"
      title="Highlights"
      subtitle="Beyond the code."
    >
      <div className="grid gap-4 md:grid-cols-3">
        {site.FeatureCard.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: idx * 0.05, duration: 0.35 }}
            className="rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur
shadow-[0_0_0_1px_rgba(255,255,255,0.02)]
transition-all duration-200
hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]
hover:shadow-[0_10px_30px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.04)]"
          >
            <h3 className="text-lg font-semibold leading-snug text-neutral-50">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-neutral-300">
              {item.body}
            </p>
          </motion.div>
        ))}
      </div>

      <div
        className="mt-6 rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur
shadow-[0_0_0_1px_rgba(255,255,255,0.02)]
transition-all duration-200
hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]
hover:shadow-[0_10px_30px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.04)]"
      >
        <p className="text-sm text-neutral-400">My tech stack</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {site.techStack.map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-neutral-200
transition-all duration-200
hover:-translate-y-0.5 hover:bg-white/[0.06] hover:border-white/20"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}

