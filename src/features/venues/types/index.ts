// Tipos de las páginas individuales de sede (/sede-balta, /sede-plaza, /sede-san-jose).
import type { HeroSlide } from "@/features/home/data/hero-slides";
import type { LocalizedString } from "@/lib/i18n-pick";

// Slug de la ruta pública de cada sede. Coincide con el nombre de la carpeta en app/.
export type VenueSlug = "sede-balta" | "sede-plaza" | "sede-san-jose";

// Una foto del mosaico "Nuestras habitaciones". `aspect` define la altura dentro de
// la columna y es lo que da el aire desordenado de la grilla.
export interface VenueRoomShot {
  id: string;
  src: string;
  alt: LocalizedString;
  /** Rótulo sobre la foto (tipo de habitación). */
  label: LocalizedString;
  /** Clase Tailwind de proporción: controla la altura de la tarjeta. */
  aspect: string;
}

// Ficha completa de una página de sede.
export interface VenuePage {
  slug: VenueSlug;
  name: string;
  /** Código de propiedad del Booking Engine de Cloudbeds (hotels.cloudbeds.com/reservation/<code>). */
  propertyCode: string;
  address: string;
  metaDescription: LocalizedString;
  /** Carrusel de fondo del hero, con las fotos de esta sede. */
  heroSlides: HeroSlide[];
  /** Mosaico de la sección "Nuestras habitaciones". */
  roomShots: VenueRoomShot[];
}
