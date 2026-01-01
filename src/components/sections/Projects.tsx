"use client";

import Image from "next/image";
import { Section } from "@/components/Section";
import { site } from "@/data/site";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="A few things I built recently."
    >
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
            className="group rounded-2xl border border-neutral-200 bg-white/60 p-5 backdrop-blur
transition-all duration-200
hover:-translate-y-1 hover:shadow-lg hover:shadow-neutral-900/10 hover:border-neutral-300 hover:bg-white
dark:border-neutral-800 dark:bg-neutral-950/40 dark:hover:bg-neutral-950 dark:hover:border-neutral-700 dark:hover:shadow-neutral-900/40"
          > 
            {p.thumbnail ? (
              <div className="mb-4 overflow-hidden rounded-xl border border-neutral-200 dark:border-neutral-800">
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src={p.thumbnail}
                    alt={p.thumbnailAlt ?? p.title}
                    fill
                    className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                    priority={idx < 2}
                  />
                </div>
               </div>
             ) : null}

            <div className="flex items-start justify-between gap-3">
              <h3 className="text-base font-semibold">{p.title}</h3>
              <ArrowUpRight className="opacity-60 transition group-hover:opacity-100" size={18} />
            </div>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
              {p.description}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-neutral-200 px-2 py-0.5 text-xs text-neutral-700 dark:border-neutral-800 dark:text-neutral-200"
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

