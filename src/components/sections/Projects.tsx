"use client";

import Image from "next/image";
import { Section } from "@/components/Section";
import { site } from "@/data/site";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function ProjectCard({
  p,
  idx,
  compact = false,
}: {
  p: any;
  idx: number;
  compact?: boolean;
}) {
  return (
    <motion.a
      key={p.title}
      href={p.link}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: idx * 0.05, duration: 0.35 }}
      className={[
        "group relative overflow-hidden rounded-2xl border backdrop-blur transition-all duration-200",
        "hover:-translate-y-1 hover:shadow-lg hover:shadow-neutral-900/20",
        // Light
        "border-neutral-200/70 bg-white/60 hover:border-neutral-300/80 hover:bg-white/70",
        // Dark (更“科技”一点：深玻璃 + 轻微渐变)
        "dark:border-neutral-800/70 dark:bg-gradient-to-b dark:from-neutral-950/55 dark:to-neutral-900/20",
        "dark:hover:border-neutral-700 dark:hover:from-neutral-950/70 dark:hover:to-neutral-900/30",
        compact ? "p-4" : "p-5",
      ].join(" ")}
    >
      {/* hover 微光（不会发灰） */}
      <div className="pointer-events-none absolute -inset-24 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100">
        <div className="h-48 w-48 rounded-full bg-sky-500/10" />
        <div className="absolute left-24 top-20 h-56 w-56 rounded-full bg-indigo-500/10" />
      </div>

      {p.thumbnail ? (
        <div
          className={[
            "mb-4 overflow-hidden rounded-xl border",
            "border-neutral-200/70 dark:border-neutral-800/70",
            // 缩略图底色，避免你截图那种“灰板子”
            "bg-neutral-50/60 dark:bg-neutral-900/30",
          ].join(" ")}
        >
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={p.thumbnail}
              alt={p.thumbnailAlt ?? p.title}
              fill
              // 图表类建议 object-contain，UI/界面类建议 object-cover
              className={[
                (p.thumbnailFit ?? "object-contain"),
                "transition-transform duration-200 group-hover:scale-[1.01]",
              ].join(" ")}
              sizes="(max-width: 640px) 100vw, 50vw"
              priority={idx < 2}
            />
          </div>
        </div>
      ) : null}

      <div className="flex items-start justify-between gap-3">
        <h3
          className={[
            compact ? "text-base" : "text-lg",
            "font-semibold leading-snug",
            "text-neutral-900 dark:text-neutral-100",
          ].join(" ")}
        >
          {p.title}
        </h3>
        <ArrowUpRight
          className="mt-1 opacity-60 transition group-hover:opacity-100 text-neutral-900 dark:text-neutral-100"
          size={18}
        />
      </div>

      <p
        className={[
          "mt-2 leading-relaxed",
          compact ? "text-sm" : "text-sm",
          "text-neutral-600 dark:text-neutral-300",
        ].join(" ")}
      >
        {p.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t: string) => (
          <span
            key={t}
            className={[
              "rounded-full border px-2.5 py-1 text-xs",
              "border-neutral-200/70 text-neutral-700",
              "dark:border-neutral-800/70 dark:text-neutral-200",
              // tag 也别发灰：给一点点玻璃底
              "bg-white/40 dark:bg-neutral-950/30",
            ].join(" ")}
          >
            {t}
          </span>
        ))}
      </div>
    </motion.a>
  );
}

export function Projects() {
  // 方案 A：Top 3 精选 + 2 个更多
  const all = site.projects ?? [];
  const featuredExplicit = all.filter((p: any) => p.featured);

  const featured =
    featuredExplicit.length >= 3 ? featuredExplicit.slice(0, 3) : all.slice(0, 3);

  const featuredTitles = new Set(featured.map((p: any) => p.title));
  const more = all.filter((p: any) => !featuredTitles.has(p.title)).slice(0, 2);

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Selected work that reflects my focus in NLP, RAG, and applied ML."
    >
      {/* Featured */}
      <div className="mb-4 flex items-end justify-between gap-3">
        <h4 className="text-sm font-semibold tracking-wide text-neutral-700 dark:text-neutral-200">
          Featured
        </h4>
        {/* 右侧小字你如果不想要，就删掉这一行 */}
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          Top 3 selected projects
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {featured.map((p: any, idx: number) => (
          <ProjectCard key={p.title} p={p} idx={idx} />
        ))}
      </div>

      {/* More */}
      {more.length > 0 && (
        <>
          <div className="mt-10 mb-4 flex items-end justify-between gap-3">
            <h4 className="text-sm font-semibold tracking-wide text-neutral-700 dark:text-neutral-200">
              More work
            </h4>
            {/* 这行也可以删 */}
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Other projects & experiments
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {more.map((p: any, idx: number) => (
              <ProjectCard key={p.title} p={p} idx={idx} compact />
            ))}
          </div>
        </>
      )}
    </Section>
  );
}

