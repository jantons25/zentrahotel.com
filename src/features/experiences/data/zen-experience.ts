// Historias editoriales de la Experiencia Zen mostradas en la sección zen-titulo.
import type { ZenStory } from "@/features/experiences/types";

export const zenFeaturedStory: ZenStory = {
  category: "Signature · Zen Deluxe",
  title: "El ritual completo: masaje, aromaterapia y jacuzzi bajo velas",
  excerpt:
    "Noventa minutos de masaje relajante, mascarilla facial y baño de piedras volcánicas. Terminas la velada en una suite con jacuzzi, música ambiental y desayuno americano a la mañana siguiente.",
  duration: "Noche completa · 90 min de spa",
  releaseLabel: "Disponible todo el año",
  image: "/images/zen-room2.webp",
  imageAlt:
    "Sesión de masaje con velas y aromaterapia en la suite Zen Deluxe",
};

export const zenStories: ZenStory[] = [
  {
    category: "Ambientación",
    title: "Velas, aromaterapia y música para desconectar",
    excerpt:
      "Cada habitación se prepara con esencias, pétalos y decoración zen antes de tu llegada.",
    duration: "Preparado antes del check-in",
    releaseLabel: "Incluido en todos los paquetes",
    image: "/images/zen-room3.webp",
    imageAlt:
      "Habitación con velas, pétalos y ambientación romántica para una velada Zen",
  },
  {
    category: "Habitación",
    title: "Suite con jacuzzi privado para dos",
    excerpt:
      "Elige entre matrimonial VIP, suite deluxe o doble relax, todas con hidromasaje.",
    duration: "Check-in flexible",
    releaseLabel: "Zen Deluxe · Doble Relax",
    image: "/images/zen-room4.webp",
    imageAlt: "Suite con jacuzzi privado iluminada para la experiencia Zen",
  },
  {
    category: "Alimentos y bebidas",
    title: "Infusiones relajantes y desayuno buffet",
    excerpt:
      "Cerramos la noche con una infusión de la casa y despertamos con desayuno completo.",
    duration: "Desayuno servido 7 · 10 am",
    releaseLabel: "Excepto Zen Especial",
    image: "/images/zen-room5.webp",
    imageAlt: "Bandeja de desayuno servida en la suite Zen",
  },
];
