// Sección "Para cada tipo de viajero": layout editorial con carrusel horizontal.
import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { fontTravelerDisplay } from "@/features/home/config/traveler-fonts";
import { TravelerCarousel } from "@/features/home/components/traveler-carousel";

export function TravelerSection() {
  return (
    <Section
      aria-labelledby="viajero-titulo"
      className={`${fontTravelerDisplay.variable} relative overflow-hidden bg-[color-mix(in_oklab,var(--accent)_65%,white)]`}
    >
      <div
        className="pointer-events-none absolute -top-40 -right-32 size-[28rem] rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <Container>
        <TravelerCarousel />
      </Container>
    </Section>
  );
}
