// Props del enlace externo de reservas (Cloudbeds), compartidas por los CTAs "Reservar" del sitio.
import { siteConfig } from "@/config/site";

export const bookingLinkProps = {
  href: siteConfig.bookingUrl,
  target: "_blank",
  rel: "noopener noreferrer",
} as const;

// Booking Engine individual de cada propiedad (páginas de sede y fichas de habitación).
export function propertyBookingUrl(code: string) {
  return `https://hotels.cloudbeds.com/es/reservation/${code}?currency=${siteConfig.cloudbeds.currency}`;
}
