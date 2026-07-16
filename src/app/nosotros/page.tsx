// Página Nosotros: identidad, valores, experiencia de reserva y aliados de Zentra.
import type { Metadata } from "next";

import { AboutExperience } from "@/features/about/components/about-experience";
import { AboutHero } from "@/features/about/components/about-hero";
import { AboutPartners } from "@/features/about/components/about-partners";
import { AboutValues } from "@/features/about/components/about-values";

export const metadata: Metadata = {
  title: "Nosotros · Boutique hotel en el centro de Chiclayo",
  description:
    "Conoce a Zentra Hotel: un hospedaje boutique en el centro de Chiclayo con tres sedes, atención cercana y experiencia 24/7.",
  alternates: { canonical: "/nosotros" },
};

export default function NosotrosPage() {
  return (
    <>
      <AboutHero />
      <AboutValues />
      <AboutExperience />
      <AboutPartners />
    </>
  );
}
