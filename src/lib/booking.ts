// Props del enlace externo de reservas (Cloudbeds), compartidas por los CTAs "Reservar" del sitio.
import { siteConfig } from "@/config/site";

export const bookingLinkProps = {
  href: siteConfig.bookingUrl,
  target: "_blank",
  rel: "noopener noreferrer",
} as const;
