// Tipos del feature de habitaciones y experiencias reservables.
import type { LucideIcon } from "lucide-react";

// Sedes del hotel que ofrecen habitaciones (Nexus Cowork queda fuera: no es alojamiento).
export type RoomSede = "balta" | "plaza" | "san-jose";

// Imagen individual dentro del mosaico tipo galería de una habitación.
export interface RoomGalleryImage {
  src: string;
  alt: string;
}

// Amenidad destacada mostrada como chip en el detalle de habitación.
export interface RoomAmenity {
  label: string;
  icon: LucideIcon;
}

// Habitación o experiencia mostrada en las tarjetas de la página.
export interface Room {
  slug: string;
  sede: RoomSede;
  name: string;
  category: string;
  tagline: string;
  description: string;
  capacity: string;
  detail: string;
  size?: string;
  view?: string;
  amenities?: RoomAmenity[];
  gallery?: RoomGalleryImage[];
  image: string;
  imageAlt: string;
  bookable: boolean;
  // Ficha aún sin fotos/detalle definitivo confirmado por el hotel.
  pending?: boolean;
}
