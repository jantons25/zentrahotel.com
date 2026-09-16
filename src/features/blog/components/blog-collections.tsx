// Separador editorial del blog: "Colecciones".
// Se intercala entre las tarjetas de artículos para dar una pausa al lector,
// sobre un campo navy que corta el crema de la retícula.
import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { BlogCollectionsCarousel } from "@/features/blog/components/blog-collections-carousel";
import { fontCollectionsDisplay } from "@/features/blog/config/collections-fonts";

export function BlogCollections() {
  return (
    <Section
      aria-labelledby="colecciones-titulo"
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
        <BlogCollectionsCarousel />
      </Container>
    </Section>
  );
}
