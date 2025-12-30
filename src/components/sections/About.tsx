import { Section } from "@/components/Section";
import { site } from "@/data/site";

export function About() {
  return (
    <Section id="about" title="About" subtitle="Short and focused.">
      <div className="rounded-2xl border border-neutral-200 bg-white/60 p-6 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/40">
        <p className="leading-relaxed text-neutral-700 dark:text-neutral-200">
          {site.about}
        </p>
      </div>
    </Section>
  );
}

