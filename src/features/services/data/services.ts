// Catálogo de servicios del hotel con su icono, su foto y el detalle que se
// despliega al pasar el cursor (fuente única del grid de servicios).
import { Bath, Utensils, Wifi } from "lucide-react";

import type { HotelService } from "@/features/services/types";

export const hotelServices: HotelService[] = [
  {
    label: { es: "Jacuzzi", en: "Jacuzzi" },
    icon: Bath,
    image: "/images/suite-jacuzzi.jpg",
    detail: {
      es: "Suites con jacuzzi privado dentro de la habitación, listas para una noche distinta.",
      en: "Suites with a private in-room jacuzzi, ready for a night that feels different.",
    },
    highlights: [
      {
        es: "Agua caliente y sales de cortesía",
        en: "Hot water and complimentary salts",
      },
      { es: "Iluminación cálida regulable", en: "Warm, dimmable lighting" },
      { es: "Disponible en Balta y Plaza", en: "Available at Balta and Plaza" },
    ],
  },
  {
    label: { es: "Wi-Fi 5G", en: "5G Wi-Fi" },
    icon: Wifi,
    image: "/images/nexus/oficina-privada.webp",
    detail: {
      es: "Fibra simétrica en habitaciones y zonas comunes, pensada para videollamadas sin cortes.",
      en: "Symmetrical fibre in rooms and common areas, built for video calls that never drop.",
    },
    highlights: [
      { es: "Cobertura en todas las sedes", en: "Coverage at every location" },
      {
        es: "Escritorio y enchufes junto a la cama",
        en: "Desk and bedside outlets",
      },
      {
        es: "Salas de Nexus Cowork a un piso",
        en: "Nexus Cowork rooms one floor away",
      },
    ],
  },
  {
    label: { es: "Desayuno buffet", en: "Buffet breakfast" },
    icon: Utensils,
    image: "/images/sanjose/comedor.webp",
    detail: {
      es: "Buffet incluido en todas las habitaciones, con opciones locales y continentales cada mañana.",
      en: "Buffet included with every room, with local and continental options each morning.",
    },
    highlights: [
      { es: "De 6:30 a 10:00 a. m.", en: "From 6:30 to 10:00 a.m." },
      { es: "Café e infusiones ilimitadas", en: "Unlimited coffee and tea" },
      { es: "Opción servida en la habitación", en: "In-room service option" },
    ],
  },
];
