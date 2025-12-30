import { Section } from "@/components/Section";
import { site } from "@/data/site";

export function Contact() {
  return (
    <Section id="contact" title="Contact" subtitle="Let’s connect.">
      <div className="rounded-2xl border border-neutral-200 bg-white/60 p-6 backdrop-blur dark:border-neutral-800 dark:bg-neutral-950/40">
        <p className="text-neutral-700 dark:text-neutral-200">
          Best way to reach me:{" "}
          <a className="underline" href={site.links.email}>
            email
          </a>
          .
        </p>
      </div>
    </Section>
  );
}

