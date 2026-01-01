"use client";

import Image from "next/image";
import { Section } from "@/components/Section";
import { site } from "@/data/site";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="A few things I built recently.">
      <div className="grid gap-4 sm:grid-cols-2">
        {site.projects.map((p, idx) => (
          <motion.a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: idx * 0.05, duration: 0.35 }}
            className="group rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur
shadow-[0_0_0_1px_rgba(255,255,255,0.02)]
transition-all duration-200
hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]
hover:shadow-[0_10px_30px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.04)]"
          >
            {p.thumbnail ? (
              <div className="mb-4 overflow-hidden rounded-xl border border-white/10 bg-white/[0.03]">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={p.thumbnail}
                    alt={p.thumbnailAlt ?? p.title}
                    fill
                    className="object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    priority={idx < 2}
                  />
                </div>
              </div>
            ) : null}

            <div className="flex items-start justify-between gap-3">
              <h3 className="text-base font-semibold text-neutral-50">{p.title}</h3>
              <ArrowUpRight
                className="text-neutral-200/70 transition group-hover:text-neutral-50"
                size={18}
              />
            </div>

            <p className="mt-2 text-sm text-neutral-300">{p.description}</p>

            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
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
          </motion.a>
        ))}
      </div>
    </Section>
  );
}

