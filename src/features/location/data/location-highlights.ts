// Ventajas específicas de la ubicación de Zentra Hotel (centro de Chiclayo).
import {
  Building2,
  Landmark,
  Plane,
  UtensilsCrossed,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import type { LocalizedString } from "@/lib/i18n-pick";

export interface LocationHighlight {
  icon: LucideIcon;
  category: LocalizedString;
  title: LocalizedString;
  distance: LocalizedString;
  description: LocalizedString;
}

export const locationHighlights: LocationHighlight[] = [
  {
    icon: Landmark,
    category: { es: "Centro histórico", en: "Historic center" },
    title: { es: "Plaza de Armas", en: "Plaza de Armas" },
    distance: { es: "5 min caminando", en: "5 min walk" },
    description: {
      es: "Catedral, palmeras y el corazón cultural de Chiclayo, a la vuelta de la esquina.",
      en: "Cathedral, palm trees, and the cultural heart of Chiclayo, right around the corner.",
    },
  },
  {
    icon: UtensilsCrossed,
    category: { es: "Gastronomía", en: "Food" },
    title: { es: "Mercado Modelo", en: "Mercado Modelo" },
    distance: { es: "3 min a pie", en: "3 min on foot" },
    description: {
      es: "Cebiches, king kong y sabores norteños en el mercado más emblemático.",
      en: "Cebiches, king kong, and northern Peruvian flavors in the city's most iconic market.",
    },
  },
  {
    icon: Building2,
    category: { es: "Comercio", en: "Shopping" },
    title: {
      es: "Av. Balta y bancos",
      en: "Av. Balta and banks",
    },
    distance: {
      es: "En tu misma cuadra",
      en: "On the same block",
    },
    description: {
      es: "Bancos, farmacias, cafés y las principales tiendas del centro comercial.",
      en: "Banks, pharmacies, cafés, and the main downtown stores.",
    },
  },
  {
    icon: Plane,
    category: { es: "Movilidad", en: "Mobility" },
    title: {
      es: "Aeropuerto Ruiz Gallo",
      en: "Ruiz Gallo Airport",
    },
    distance: {
      es: "12 min en auto",
      en: "12 min by car",
    },
    description: {
      es: "Terminal terrestre a 8 min y taxis 24/7 en la puerta del hotel.",
      en: "Bus terminal 8 min away and 24/7 taxis at the hotel door.",
    },
  },
];
