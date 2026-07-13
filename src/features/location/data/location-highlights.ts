// Ventajas específicas de la ubicación de Zentra Hotel (centro de Chiclayo).
import {
  Building2,
  Landmark,
  Plane,
  UtensilsCrossed,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface LocationHighlight {
  icon: LucideIcon;
  category: string;
  title: string;
  distance: string;
  description: string;
}

export const locationHighlights: LocationHighlight[] = [
  {
    icon: Landmark,
    category: "Centro histórico",
    title: "Plaza de Armas",
    distance: "5 min caminando",
    description:
      "Catedral, palmeras y el corazón cultural de Chiclayo, a la vuelta de la esquina.",
  },
  {
    icon: UtensilsCrossed,
    category: "Gastronomía",
    title: "Mercado Modelo",
    distance: "3 min a pie",
    description:
      "Cebiches, king kong y sabores norteños en el mercado más emblemático.",
  },
  {
    icon: Building2,
    category: "Comercio",
    title: "Av. Balta y bancos",
    distance: "En tu misma cuadra",
    description:
      "Bancos, farmacias, cafés y las principales tiendas del centro comercial.",
  },
  {
    icon: Plane,
    category: "Movilidad",
    title: "Aeropuerto Ruiz Gallo",
    distance: "12 min en auto",
    description:
      "Terminal terrestre a 8 min y taxis 24/7 en la puerta del hotel.",
  },
];
