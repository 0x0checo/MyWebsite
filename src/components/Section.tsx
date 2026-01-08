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
    <section id={id} className="scroll-mt-28 py-16">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-10">
          <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            <span className="bg-gradient-to-b from-neutral-50 to-neutral-300 bg-clip-text text-transparent">
              {title}
            </span>
          </h2>

          {subtitle ? (
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-neutral-300/80 sm:text-lg">
              {subtitle}
            </p>
          ) : null}
        </div>

        {children}
      </div>
    </section>
  );
}

