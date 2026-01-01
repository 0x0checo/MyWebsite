// src/components/Section.tsx
import React from "react";

export function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-16">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="mb-8">
          {/* Title: fallback bright text + gradient overlay in dark mode */}
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            <span className="dark:bg-gradient-to-r dark:from-neutral-50 dark:via-indigo-200 dark:to-sky-200 dark:bg-clip-text dark:text-transparent">
              {title}
            </span>
          </h2>

          {subtitle ? (
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
              {subtitle}
            </p>
          ) : null}

          {/* subtle divider */}
          <div className="relative mt-5 h-px w-full overflow-hidden bg-black/10 dark:bg-white/10">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-60 blur-[0.5px]" />
          </div>
        </div>

        {children}
      </div>
    </section>
  );
}

