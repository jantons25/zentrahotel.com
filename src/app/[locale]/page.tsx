// Página de inicio: compone todas las secciones de la home e inyecta los datos estructurados.
import { setRequestLocale } from "next-intl/server";

import { BookingChannels } from "@/features/booking/components/booking-channels";
import { ZenExperienceSection } from "@/features/experiences/components/zen-experience-section";
import { HeroSection } from "@/features/home/components/hero-section";
import { PresentationBand } from "@/features/home/components/presentation-band";
import { TravelerSection } from "@/features/home/components/traveler-section";
import { LocationSection } from "@/features/location/components/location-section";
import { OffersSection } from "@/features/offers/components/offers-section";
import { RoomsAvailability } from "@/features/rooms/components/rooms-availability";
import { RoomsShowcase } from "@/features/rooms/components/rooms-showcase";
import { ServicesSection } from "@/features/services/components/services-section";
import { TestimonialsSection } from "@/features/testimonials/components/testimonials-section";
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
      <PresentationBand />
      <OffersSection />
      <ServicesSection />
      <RoomsShowcase />
      <ZenExperienceSection />
      <TravelerSection />
      <BookingChannels />
      <RoomsAvailability />
      <TestimonialsSection />
      <LocationSection />
    </>
  );
}
