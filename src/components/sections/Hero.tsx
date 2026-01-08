import { site } from "@/data/site";
import { AnimatedText } from "@/components/AnimatedText";
import { Github, Linkedin, Mail, FileText } from "lucide-react";
import { MiniTerminal } from "../MiniTerminal";
import { Container } from "@/components/Container";

export function Hero() {
  return (
    <section id="home" className="py-20">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          {/* Left */}
          <div className="max-w-3xl">
            <p className="text-sm text-neutral-300/80">{site.location}</p>

            <div className="mt-3">
              <AnimatedText text={site.name} />
            </div>

            <p className="mt-4 text-lg text-neutral-100/80">{site.tagline}</p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {site.highlights.map((h) => (
                <li
                  key={h}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-sm text-neutral-100/85 backdrop-blur
transition-all duration-200
hover:-translate-y-0.5 hover:bg-white/[0.06] hover:border-white/20"
                >
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-4 py-2 text-sm
transition-all duration-200 hover:-translate-y-0.5 hover:opacity-95"
                href={site.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={16} /> GitHub
              </a>

              <a
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-neutral-100/85 backdrop-blur
transition-all duration-200
hover:-translate-y-0.5 hover:bg-white/[0.08] hover:border-white/20"
                href={site.links.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin size={16} /> LinkedIn
              </a>

              <a
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-neutral-100/85 backdrop-blur
transition-all duration-200
hover:-translate-y-0.5 hover:bg-white/[0.08] hover:border-white/20"
                href={site.links.cv}
                target="_blank"
                rel="noreferrer"
              >
                <FileText size={16} /> CV
              </a>

              <a
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm text-neutral-100/85 backdrop-blur
transition-all duration-200
hover:-translate-y-0.5 hover:bg-white/[0.08] hover:border-white/20"
                href={site.links.email}
              >
                <Mail size={16} /> Email
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="lg:mt-8">
            <MiniTerminal />
          </div>
        </div>
      </Container>
    </section>
  );
}

