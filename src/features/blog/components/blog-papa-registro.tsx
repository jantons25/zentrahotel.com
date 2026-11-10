// Separador editorial del blog: "Registro para la misa del Papa".
// Mismo campo navy que "Colecciones"; va primero entre las tarjetas de artículos.
import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { BlogPapaRegistroCarousel } from "@/features/blog/components/blog-papa-registro-carousel";
import { fontCollectionsDisplay } from "@/features/blog/config/collections-fonts";

export function BlogPapaRegistro() {
  return (
    <Section
      aria-labelledby="registro-papa-titulo"
      className={`${fontCollectionsDisplay.variable} relative overflow-hidden bg-secondary text-secondary-foreground`}
    >
      <div
        className="pointer-events-none absolute -top-40 -right-32 size-[28rem] rounded-full bg-primary/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-44 -left-28 size-[26rem] rounded-full bg-white/10 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative">
        <BlogPapaRegistroCarousel />
      </Container>
    </Section>
  );
}
