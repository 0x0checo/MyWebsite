import { ReactNode } from "react";

type Props = {
  id?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export function Section({ id, title, subtitle, children }: Props) {
  return (
    <section id={id} className="relative py-20">
      <div className="mx-auto w-full max-w-5xl px-6">
        {/* Header */}
        <div className="mb-10 space-y-4">
          <h2
            className="
              text-5xl md:text-6xl font-semibold tracking-tight
              leading-[1.08]
              text-transparent bg-clip-text
              bg-gradient-to-r from-indigo-200 via-sky-200 to-purple-200
              drop-shadow-[0_0_18px_rgba(56,189,248,0.22)]
            "
          >
            {title}
          </h2>

          {subtitle ? (
            <p className="text-base md:text-lg leading-relaxed text-neutral-200/80">
              {subtitle}
            </p>
          ) : null}
        </div>

        {children}
      </div>
    </section>
  );
}

