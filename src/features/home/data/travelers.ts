// Categorías de tipo de viajero mostradas en el carrusel de la home.
import { Briefcase, Compass, HeartPulse, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Categoría de viajero con icono, descripción breve e imagen editorial.
export interface TravelerType {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  tag: string;
}

export const travelerTypes: TravelerType[] = [
  {
    title: "Negocios",
    description:
      "Ubicación céntrica, Wi-Fi 5G y espacios cómodos para trabajar durante tu estadía.",
    icon: Briefcase,
    image: "/images/viajero-2.webp",
    imageAlt: "Habitación individual iluminada para viajeros de negocios",
    tag: "Corporativo",
  },
  {
    title: "Turismo",
    description:
      "Punto de partida ideal para descubrir Chiclayo y sus alrededores.",
    icon: Compass,
    image: "/images/viajero-3.webp",
    imageAlt: "Habitación doble luminosa lista para explorar Chiclayo",
    tag: "Descubre la ciudad",
  },
  {
    title: "Experiencias",
    description:
      "Veladas románticas, experiencia Zen y momentos pensados para sorprender.",
    icon: Sparkles,
    image: "/images/velada-romantica.webp",
    imageAlt: "Mesa con velas y pétalos para una velada romántica",
    tag: "Momentos memorables",
  },
  {
    title: "Salud y bienestar",
    description:
      "Masajes, aromaterapia y descanso reparador en un ambiente tranquilo.",
    icon: HeartPulse,
    image: "/images/zen-room6.webp",
    imageAlt: "Sesión de masaje relajante con aromaterapia",
    tag: "Bienestar",
  },
];
