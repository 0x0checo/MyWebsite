"use client";

import Image from "next/image";
import { Section } from "@/components/Section";
import { site } from "@/data/site";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

type Project = (typeof site.projects)[number] & {
  featured?: boolean;
};

function ProjectCard({
  p,
  idx,
  variant = "featured",
}: {
  p: Project;
  idx: number;
  variant?: "featured" | "more";
}) {
  const isFeatured = variant === "featured";

  return (
    <motion.a
      href={p.link}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: idx * 0.05, duration: 0.35 }}
      className={[
        "group rounded-2xl border backdrop-blur transition-all duration-200",
        "hover:-translate-y-1 hover:shadow-lg hover:border-neutral-300",
        "dark:hover:border-neutral-700 dark:hover:shadow-neutral-900/40",
        // featured vs more
        isFeatured
          ? "p-5 bg-white/60 border-neutral-200 hover:bg-white dark:bg-neutral-950/40 dark:border-neutral-800 dark:hover:bg-neutral-950"
          : "p-4 bg-white/40 border-neutral-200 hover:bg-white/70 dark:bg-neutral-950/25 dark:border-neutral-800 dark:hover:bg-neutral-950/40",
      ].join(" ")}
    >
      {p.thumbnail ? (
        <div
          className={[
            "mb-4 overflow-hidden rounded-xl border",
            "border-neutral-200 dark:border-neutral-800",
          ].join(" ")}
        >
          <div
            className={[
              "relative w-full",
              isFeatured ? "aspect-[16/9]" : "aspect-[21/9]",
            ].join(" ")}
          >
            <Image
              src={p.thumbnail}
              alt={p.thumbnailAlt ?? p.title}
              fill
              // 关键：避免“被截断”
              className="object-contain bg-white dark:bg-neutral-950"
              sizes="(max-width: 640px) 100vw, 50vw"
              priority={isFeatured && idx < 2}
            />
          </div>
        </div>
      ) : null}

      <div className="flex items-start justify-between gap-3">
        <h3 className={isFeatured ? "text-base font-semibold" : "text-sm font-semibold"}>
          {p.title}
        </h3>
        <ArrowUpRight
          className="opacity-60 transition group-hover:opacity-100"
          size={18}
        />
      </div>

      <p
        className={[
          "mt-2 text-neutral-600 dark:text-neutral-300",
          isFeatured ? "text-sm" : "text-xs leading-relaxed",
        ].join(" ")}
      >
        {p.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {p.tags.map((t) => (
          <span
            key={t}
            className={[
              "rounded-full border px-2 py-0.5 text-xs",
              "border-neutral-200 text-neutral-700",
              "dark:border-neutral-800 dark:text-neutral-200",
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
  const projects = (site.projects as Project[]) ?? [];

  const featured = projects.filter((p) => p.featured).slice(0, 3);
  const remaining = projects.filter((p) => !featured.includes(p));
  const more = remaining.slice(0, 2);

  // 兜底：如果你还没加 featured 字段，就默认前 3 个当 Featured
  const finalFeatured = featured.length ? featured : projects.slice(0, 3);
  const finalMore = featured.length ? more : projects.slice(3, 5);

  return (
    <Section id="projects" title="Projects" subtitle="A few things I built recently.">
      {/* Featured */}
      <div className="mb-3 flex items-center justify-between">
        <p className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
          Featured
        </p>
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          Top 3 highlights
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {finalFeatured.map((p, idx) => (
          <ProjectCard key={p.title} p={p} idx={idx} variant="featured" />
        ))}
      </div>

      {/* More */}
      {finalMore.length ? (
        <>
          <div className="mt-8 mb-3 flex items-center justify-between">
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-200">
              More
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Other work
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {finalMore.map((p, idx) => (
              <ProjectCard key={p.title} p={p} idx={idx} variant="more" />
            ))}
          </div>
        </>
      ) : null}
    </Section>
  );
}

