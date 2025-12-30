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
          <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
          {subtitle ? (
            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
              {subtitle}
            </p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}

