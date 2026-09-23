// Cuarta sección de la home: nuestras sedes.
// `anchor` es el id al que apuntan los submenús "Sedes" del menú principal.
import type { LucideIcon } from "lucide-react";
import {
  Bed,
  Building2,
  Clock,
  LayoutGrid,
  MapPin,
  Moon,
  Presentation,
  Sparkles,
} from "lucide-react";

import type { LocalizedString } from "@/lib/i18n-pick";

export interface Venue {
  id: string;
  /** Id del ancla en la home (destino de los submenús del menú principal). */
  anchor: string;
  /** Destino del CTA "Ver más": ruta interna de la sede o sitio externo (Nexus). */
  href: string;
  brand: "Zentra Hotel" | "Nexus Cowork";
  name: string;
  image: string;
  alt: LocalizedString;
  /** Tres rasgos cortos con icono, como en la tarjeta de referencia. */
  features: { icon: LucideIcon; label: LocalizedString }[];
}

export const venues: Venue[] = [
  {
    id: "plaza",
    anchor: "sede-plaza",
    href: "/sede-plaza",
    brand: "Zentra Hotel",
    name: "Zentra Plaza",
    image: "/images/plaza/cowork-plaza-uno.webp",
    alt: {
      es: "Lobby de Zentra Plaza con zona de estar.",
      en: "Zentra Plaza lobby with a lounge area.",
    },
    features: [
      {
        icon: MapPin,
        label: { es: "Elías Aguirre 520", en: "Elías Aguirre 520" },
      },
      {
        icon: Clock,
        label: { es: "Cerca a la catedral", en: "Close to the cathedral" },
      },
      { icon: Bed, label: { es: "Hotel de estreno", en: "Brand-new hotel" } },
    ],
  },
  {
    id: "nexus",
    anchor: "nexus-cowork",
    href: "https://nexuscowork.com",
    brand: "Nexus Cowork",
    name: "Nexus Cowork",
    image: "/images/nexus/sala-a.webp",
    alt: {
      es: "Sala de reuniones equipada en Nexus Cowork.",
      en: "Equipped meeting room at Nexus Cowork.",
    },
    features: [
      { icon: MapPin, label: { es: "Balta 506", en: "Balta 506" } },
      {
        icon: Building2,
        label: { es: "Centro financiero", en: "Financial district" },
      },
      {
        icon: Presentation,
        label: {
          es: "Salas y oficinas equipadas",
          en: "Equipped rooms and offices",
        },
      },
    ],
  },
  {
    id: "san-jose",
    anchor: "sede-san-jose",
    href: "/sede-san-jose",
    brand: "Zentra Hotel",
    name: "Zentra San José",
    image: "/images/sanjose/hab-matrimonial.webp",
    alt: {
      es: "Habitación matrimonial de Zentra San José.",
      en: "Double room at Zentra San José.",
    },
    features: [
      { icon: MapPin, label: { es: "San José 554", en: "San José 554" } },
      {
        icon: Clock,
        label: { es: "Cerca a la catedral", en: "Close to the cathedral" },
      },
      {
        icon: Moon,
        label: { es: "Habitaciones amplias", en: "Spacious rooms" },
      },
    ],
  },
  {
    id: "balta",
    anchor: "sede-balta",
    href: "/sede-balta",
    brand: "Zentra Hotel",
    name: "Zentra Balta",
    image: "/images/balta/hab-suite.webp",
    alt: {
      es: "Suite de Zentra Balta con ambientación cálida.",
      en: "Zentra Balta suite with warm décor.",
    },
    features: [
      {
        icon: MapPin,
        label: { es: "Leoncio Prado 919", en: "Leoncio Prado 919" },
      },
      {
        icon: LayoutGrid,
        label: {
          es: "Cerca a la zona comercial",
          en: "Close to the shopping district",
        },
      },
      {
        icon: Sparkles,
        label: { es: "Habitaciones modernas", en: "Modern rooms" },
      },
    ],
  },
];
