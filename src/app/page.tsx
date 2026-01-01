import { Spotlight } from "@/components/Spotlight";
import { FloatingNav } from "@/components/FloatingNav";
import { MouseGlow } from "@/components/MouseGlow";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Highlights } from "@/components/sections/Highlights";
import { Contact } from "@/components/sections/Contact";

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background layers */}
      <Spotlight />
      <MouseGlow />

      {/* Optional: grain layer (add /public/noise.png for best effect) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] mix-blend-overlay bg-[url('/noise.png')] bg-repeat" />

      <FloatingNav />

      <main className="relative">
        <Hero />
        <Highlights />
        <Projects />
        <About />
        <Contact />

        <footer className="py-10">
          <div className="mx-auto w-full max-w-5xl px-6 text-sm text-neutral-500 dark:text-neutral-400">
            © {new Date().getFullYear()} · Built with Next.js
          </div>
        </footer>
      </main>
    </div>
  );
}

