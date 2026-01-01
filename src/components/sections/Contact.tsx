import { Section } from "@/components/Section";
import { site } from "@/data/site";

export function Contact() {
  return (
    <Section id="contact" title="Contact" subtitle="Let’s connect.">
      <div
        className="group rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur
shadow-[0_0_0_1px_rgba(255,255,255,0.02)]
transition-all duration-200
hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]
hover:shadow-[0_10px_30px_rgba(0,0,0,0.35),0_0_0_1px_rgba(255,255,255,0.04)]"
      >
        <p className="text-neutral-200">
          Best way to reach me:{" "}
          <a
            className="underline decoration-white/40 underline-offset-4 transition hover:decoration-white/80"
            href={site.links.email}
          >
            email
          </a>
          .
        </p>
      </div>
    </Section>
  );
}

