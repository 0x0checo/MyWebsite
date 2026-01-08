import { Container } from "@/components/Container";

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
    <section id={id} className="scroll-mt-28 py-20">
      <Container>
        <div className="mb-10">
          <h2 className="text-5xl font-bold tracking-tight text-neutral-100">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-3 text-base text-neutral-300/80">{subtitle}</p>
          ) : null}
        </div>
        {children}
      </Container>
    </section>
  );
}

