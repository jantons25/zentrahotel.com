// Franja verde de presentación con el lema del hotel y su propuesta de valor.
import { Container } from "@/components/common/container";
import { siteConfig } from "@/config/site";

export function PresentationBand() {
  return (
    <section aria-label="Presentación" className="bg-primary">
      <Container className="space-y-4 py-14 text-center md:py-20">
        <h2 className="text-2xl font-bold text-white text-balance md:text-3xl">
          {siteConfig.tagline}
        </h2>
        <p className="text-sm font-semibold tracking-wide text-secondary md:text-base">
          Reserva directo en web y ahorra en tu próximo viaje a Chiclayo
        </p>
      </Container>
    </section>
  );
}
