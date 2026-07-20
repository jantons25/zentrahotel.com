// Tipos del feature de habitaciones y experiencias reservables.
import type { LucideIcon } from "lucide-react";

import type { LocalizedString } from "@/lib/i18n-pick";

// Sedes del hotel que ofrecen habitaciones (Nexus Cowork queda fuera: no es alojamiento).
export type RoomSede = "balta" | "plaza" | "san-jose";

// Imagen individual dentro del mosaico tipo galería de una habitación.
export interface RoomGalleryImage {
  src: string;
  alt: LocalizedString;
}

// Amenidad destacada mostrada como chip en el detalle de habitación.
export interface RoomAmenity {
  label: LocalizedString;
  icon: LucideIcon;
}

// Habitación o experiencia mostrada en las tarjetas de la página.
export interface Room {
  slug: string;
  sede: RoomSede;
  name: LocalizedString;
  category: LocalizedString;
  tagline: LocalizedString;
  description: LocalizedString;
  capacity: LocalizedString;
  detail: LocalizedString;
  size?: LocalizedString;
  view?: LocalizedString;
  amenities?: RoomAmenity[];
  gallery?: RoomGalleryImage[];
  image: string;
  imageAlt: LocalizedString;
  bookable: boolean;
  // Ficha aún sin fotos/detalle definitivo confirmado por el hotel.
  pending?: boolean;
}
