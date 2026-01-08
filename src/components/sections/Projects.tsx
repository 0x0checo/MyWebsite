"use client";

import Image from "next/image";
import { Section } from "@/components/Section";
import { site } from "@/data/site";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  thumbnail?: string;
  thumbnailAlt?: string;
};

function ProjectCard({ p, idx }: { p: Project; idx: number }) {
  return (
    <motion.a
      href={p.link}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: idx * 0.05, duration: 0.35 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-950/35 p-5 backdrop-blur-xl
shadow-[0_0_0_1px_rgba(255,255,255,0.04)] transition-all duration-200
hover:-translate-y-1 hover:border-white/16 hover:shadow-[0_20px_80px_-30px_rgba(0,0,0,0.75)]"
    >
      <div className="pointer-events-none absolute inset-0 opacity-70 transition-opacity duration-200 group-hover:opacity-100">
        <div className="absolute -inset-24 bg-[radial-gradient(900px_circle_at_20%_0%,rgba(99,102,241,0.18),transparent_55%)]" />
        <div className="absolute -inset-24 bg-[radial-gradient(900px_circle_at_80%_30%,rgba(168,85,247,0.14),transparent_60%)]" />
      </div>

      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_50%_-10%,rgba(56,189,248,0.10),transparent_60%)]" />
      </div>

      {p.thumbnail ? (
        <div className="relative mb-4 overflow-hidden rounded-xl border border-white/10 bg-black/20">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={p.thumbnail}
              alt={p.thumbnailAlt ?? p.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={idx < 2}
            />
          </div>
        </div>
      ) : null}

      <div className="relative flex items-start justify-between gap-3">
        <h3 className="text-base font-semibold tracking-tight text-neutral-100">
          {p.title}
        </h3>
        <ArrowUpRight
          size={18}
          className="mt-0.5 text-neutral-300/70 transition group-hover:text-neutral-100"
        />
      </div>

      <p className="relative mt-2 text-sm leading-relaxed text-neutral-300/85">
        {p.description}
      </p>

      <div className="relative mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/12 bg-white/5 px-2.5 py-1 text-xs text-neutral-200/90"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.a>
  );
}

export function Projects() {
  const projects = site.projects as Project[];

  const firstRowTitles = new Set([
    "RAG Retrieval Engine",
    "AI-Generated Text Detection (Internship Project)",
  ]);

  const firstRow = projects.filter((p) => firstRowTitles.has(p.title));
  const secondRow = projects.filter((p) => !firstRowTitles.has(p.title));

  return (
    <Section id="projects" title="Projects" subtitle="A few things I built recently.">
      <div className="grid gap-4 md:grid-cols-2">
        {firstRow.map((p, idx) => (
          <ProjectCard key={p.title} p={p} idx={idx} />
        ))}
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {secondRow.map((p, idx) => (
          <ProjectCard key={p.title} p={p} idx={idx + firstRow.length} />
        ))}
      </div>
    </Section>
  );
}

