// Categorías de tipo de viajero mostradas en el carrusel de la home.
import { Briefcase, Compass, HeartPulse, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import type { LocalizedString } from "@/lib/i18n-pick";

// Categoría de viajero con icono, descripción breve e imagen editorial.
export interface TravelerType {
  title: LocalizedString;
  description: LocalizedString;
  icon: LucideIcon;
  image: string;
  imageAlt: LocalizedString;
  tag: LocalizedString;
}

export const travelerTypes: TravelerType[] = [
  {
    title: { es: "Negocios", en: "Business" },
    description: {
      es: "Ubicación céntrica, Wi-Fi 5G y espacios cómodos para trabajar durante tu estadía.",
      en: "Central location, 5G Wi-Fi, and comfortable spaces to work during your stay.",
    },
    icon: Briefcase,
    image: "/images/viajero-2.webp",
    imageAlt: {
      es: "Habitación individual iluminada para viajeros de negocios",
      en: "Well-lit single room for business travelers",
    },
    tag: { es: "Corporativo", en: "Corporate" },
  },
  {
    title: { es: "Turismo", en: "Tourism" },
    description: {
      es: "Punto de partida ideal para descubrir Chiclayo y sus alrededores.",
      en: "Ideal launching pad to discover Chiclayo and its surroundings.",
    },
    icon: Compass,
    image: "/images/viajero-3.webp",
    imageAlt: {
      es: "Habitación doble luminosa lista para explorar Chiclayo",
      en: "Bright double room, ready to explore Chiclayo",
    },
    tag: { es: "Descubre la ciudad", en: "Discover the city" },
  },
  {
    title: { es: "Experiencias", en: "Experiences" },
    description: {
      es: "Veladas románticas, experiencia Zen y momentos pensados para sorprender.",
      en: "Romantic evenings, Zen experience, and moments designed to surprise.",
    },
    icon: Sparkles,
    image: "/images/velada-romantica.webp",
    imageAlt: {
      es: "Mesa con velas y pétalos para una velada romántica",
      en: "Table with candles and petals for a romantic evening",
    },
    tag: {
      es: "Momentos memorables",
      en: "Memorable moments",
    },
  },
  {
    title: { es: "Salud y bienestar", en: "Health and wellness" },
    description: {
      es: "Masajes, aromaterapia y descanso reparador en un ambiente tranquilo.",
      en: "Massages, aromatherapy, and restorative rest in a calm setting.",
    },
    icon: HeartPulse,
    image: "/images/zen-room6.webp",
    imageAlt: {
      es: "Sesión de masaje relajante con aromaterapia",
      en: "Relaxing massage session with aromatherapy",
    },
    tag: { es: "Bienestar", en: "Wellness" },
  },
];
