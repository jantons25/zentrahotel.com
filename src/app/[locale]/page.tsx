// Página de inicio: compone todas las secciones de la home e inyecta los datos estructurados.
//
// Home recortada: hero, promociones, servicios, sedes y ubicación. Las secciones de
// presentación, habitaciones, rituales, canales de contacto y comentarios salieron
// del recorrido; "Colecciones" vive ahora en /blog como separador de artículos.
import { setRequestLocale } from "next-intl/server";

import { HeroSection } from "@/features/home/components/hero-section";
import { LocationSection } from "@/features/location/components/location-section";
import { SpecialOffersSection } from "@/features/offers/components/special-offers-section";
import { ServicesSection } from "@/features/services/components/services-section";
import { VenuesSection } from "@/features/venues/components/venues-section";
import { buildHotelJsonLd } from "@/lib/seo/jsonld";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildHotelJsonLd()) }}
      />
      <HeroSection />
      <SpecialOffersSection />
      <ServicesSection />
      <VenuesSection />
      <LocationSection />
    </>
  );
}
