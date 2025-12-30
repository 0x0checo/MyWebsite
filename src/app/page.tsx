import { Spotlight } from "@/components/Spotlight";
import { FloatingNav } from "@/components/FloatingNav";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Page() {
  return (
    <div className="relative min-h-screen">
      <Spotlight />
      <FloatingNav />

      <main className="relative">
        <Hero />
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

