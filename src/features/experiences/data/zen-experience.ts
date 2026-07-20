// Historias editoriales de la Experiencia Zen mostradas en la sección zen-titulo.
import type { ZenStory } from "@/features/experiences/types";

export const zenFeaturedStory: ZenStory = {
  category: {
    es: "Signature · Zen Deluxe",
    en: "Signature · Zen Deluxe",
  },
  title: {
    es: "El ritual completo: masaje, aromaterapia y jacuzzi bajo velas",
    en: "The full ritual: massage, aromatherapy, and jacuzzi by candlelight",
  },
  excerpt: {
    es: "Noventa minutos de masaje relajante, mascarilla facial y baño de piedras volcánicas. Terminas la velada en una suite con jacuzzi, música ambiental y desayuno americano a la mañana siguiente.",
    en: "Ninety minutes of relaxing massage, facial mask, and volcanic-stone bath. End the evening in a suite with jacuzzi, ambient music, and American breakfast in the morning.",
  },
  duration: {
    es: "Noche completa · 90 min de spa",
    en: "Full night · 90 min of spa",
  },
  releaseLabel: {
    es: "Disponible todo el año",
    en: "Available year-round",
  },
  image: "/images/zen-room2.webp",
  imageAlt: {
    es: "Sesión de masaje con velas y aromaterapia en la suite Zen Deluxe",
    en: "Massage session with candles and aromatherapy in the Zen Deluxe suite",
  },
};

export const zenStories: ZenStory[] = [
  {
    category: { es: "Ambientación", en: "Ambience" },
    title: {
      es: "Velas, aromaterapia y música para desconectar",
      en: "Candles, aromatherapy, and music to disconnect",
    },
    excerpt: {
      es: "Cada habitación se prepara con esencias, pétalos y decoración zen antes de tu llegada.",
      en: "Each room is prepared with scents, petals, and Zen touches before you arrive.",
    },
    duration: {
      es: "Preparado antes del check-in",
      en: "Prepared before check-in",
    },
    releaseLabel: {
      es: "Incluido en todos los paquetes",
      en: "Included in all packages",
    },
    image: "/images/zen-room3.webp",
    imageAlt: {
      es: "Habitación con velas, pétalos y ambientación romántica para una velada Zen",
      en: "Room with candles, petals, and romantic setting for a Zen evening",
    },
  },
  {
    category: { es: "Habitación", en: "Room" },
    title: {
      es: "Suite con jacuzzi privado para dos",
      en: "Suite with private jacuzzi for two",
    },
    excerpt: {
      es: "Elige entre matrimonial VIP, suite deluxe o doble relax, todas con hidromasaje.",
      en: "Choose from queen VIP, deluxe suite, or double relax — all with hydro massage.",
    },
    duration: { es: "Check-in flexible", en: "Flexible check-in" },
    releaseLabel: {
      es: "Zen Deluxe · Doble Relax",
      en: "Zen Deluxe · Double Relax",
    },
    image: "/images/zen-room4.webp",
    imageAlt: {
      es: "Suite con jacuzzi privado iluminada para la experiencia Zen",
      en: "Suite with private jacuzzi lit for the Zen experience",
    },
  },
  {
    category: { es: "Alimentos y bebidas", en: "Food and drinks" },
    title: {
      es: "Infusiones relajantes y desayuno buffet",
      en: "Relaxing infusions and buffet breakfast",
    },
    excerpt: {
      es: "Cerramos la noche con una infusión de la casa y despertamos con desayuno completo.",
      en: "We close the night with a house infusion and wake up with a full breakfast.",
    },
    duration: {
      es: "Desayuno servido 7 · 10 am",
      en: "Breakfast served 7 · 10 am",
    },
    releaseLabel: { es: "Excepto Zen Especial", en: "Except Zen Especial" },
    image: "/images/zen-room5.webp",
    imageAlt: {
      es: "Bandeja de desayuno servida en la suite Zen",
      en: "Breakfast tray served in the Zen suite",
    },
  },
];
