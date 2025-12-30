import { site } from "@/data/site";
import { AnimatedText } from "@/components/AnimatedText";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="py-20">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="max-w-3xl">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            {site.location}
          </p>
          <div className="mt-3">
            <AnimatedText text={site.name} />
          </div>
          <p className="mt-4 text-lg text-neutral-700 dark:text-neutral-200">
            {site.tagline}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {site.highlights.map((h) => (
              <li
                key={h}
                className="rounded-full border border-neutral-200 bg-white/60 px-3 py-1 text-sm text-neutral-700 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/40 dark:text-neutral-200"
              >
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-4 py-2 text-sm text-white hover:opacity-90 dark:bg-white dark:text-neutral-900"
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/60 px-4 py-2 text-sm text-neutral-800 hover:bg-white dark:border-neutral-800 dark:bg-neutral-950/40 dark:text-neutral-100 dark:hover:bg-neutral-950"
              href={site.links.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/60 px-4 py-2 text-sm text-neutral-800 hover:bg-white dark:border-neutral-800 dark:bg-neutral-950/40 dark:text-neutral-100 dark:hover:bg-neutral-950"
              href={site.links.cv}
              target="_blank"
              rel="noreferrer"
            >
              <FileText size={16} /> CV
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/60 px-4 py-2 text-sm text-neutral-800 hover:bg-white dark:border-neutral-800 dark:bg-neutral-950/40 dark:text-neutral-100 dark:hover:bg-neutral-950"
              href={site.links.email}
            >
              <Mail size={16} /> Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

