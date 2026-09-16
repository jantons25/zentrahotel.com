// Cuerpo compartido de las tres páginas de sede: hero propio + "Nuestras habitaciones".
import { VenueHeroSection } from "@/features/venues/components/venue-hero-section";
import { VenueRoomsSection } from "@/features/venues/components/venue-rooms-section";
import { venuePages } from "@/features/venues/data/venue-pages";
import type { VenueSlug } from "@/features/venues/types";

export function VenuePageView({ slug }: { slug: VenueSlug }) {
  const venue = venuePages[slug];

  return (
    <>
      <VenueHeroSection venue={venue} />
      <VenueRoomsSection venue={venue} />
    </>
  );
}
