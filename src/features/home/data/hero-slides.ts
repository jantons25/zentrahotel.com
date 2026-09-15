// Diapositivas del carrusel de fondo del hero. Las imágenes viven en
// `public/images/lambayeque` y cada una lleva su propio titular y bajada.
import type { LocalizedString } from "@/lib/i18n-pick";

export interface HeroSlide {
  id: string;
  image: string;
  alt: LocalizedString;
  /** Primera línea del titular (peso ligero). */
  title: LocalizedString;
  /** Remate en itálica y color primario, como en el resto del sitio. */
  titleEmphasis: LocalizedString;
  subtitle: LocalizedString;
}

export const heroSlides: HeroSlide[] = [
  {
    id: "chiclayo-centro",
    image: "/images/lambayeque/chiclayo-001.jpg",
    alt: {
      es: "Centro histórico de Chiclayo al atardecer.",
      en: "Historic center of Chiclayo at dusk.",
    },
    title: { es: "Bienvenido a Zentra,", en: "Welcome to Zentra," },
    titleEmphasis: {
      es: "donde Chiclayo se hace hogar.",
      en: "where Chiclayo feels like home.",
    },
    subtitle: {
      es: "Tres sedes en el corazón del centro histórico, a cinco minutos de la Plaza de Armas.",
      en: "Three locations in the heart of the historic center, five minutes from the main square.",
    },
  },
  {
    id: "lambayeque-cultura",
    image: "/images/lambayeque/chiclayo-002.jpg",
    alt: {
      es: "Patrimonio cultural de Lambayeque.",
      en: "Cultural heritage of Lambayeque.",
    },
    title: { es: "Descubre Lambayeque", en: "Discover Lambayeque" },
    titleEmphasis: {
      es: "sin perder el descanso.",
      en: "without losing your rest.",
    },
    subtitle: {
      es: "Museos, rutas y gastronomía a la puerta del hotel. Tú explora; del resto nos ocupamos nosotros.",
      en: "Museums, routes and food right outside the door. You explore; we take care of the rest.",
    },
  },
  {
    id: "negocios",
    image: "/images/lambayeque/chiclayo-003.jpg",
    alt: {
      es: "Zona comercial y financiera de Chiclayo.",
      en: "Chiclayo business and financial district.",
    },
    title: { es: "Viaja por trabajo,", en: "Travel for work," },
    titleEmphasis: {
      es: "opera desde el primer minuto.",
      en: "operate from minute one.",
    },
    subtitle: {
      es: "Hospedaje ejecutivo y oficinas equipadas de Nexus Cowork, con convenios corporativos todo el año.",
      en: "Executive stays and fully equipped Nexus Cowork offices, with corporate rates all year.",
    },
  },
  {
    id: "descanso",
    image: "/images/lambayeque/chiclayo-004.jpg",
    alt: {
      es: "Atardecer sobre la ciudad de Chiclayo.",
      en: "Sunset over the city of Chiclayo.",
    },
    title: { es: "Reserva directo", en: "Book direct" },
    titleEmphasis: {
      es: "y ahorra en cada noche.",
      en: "and save every night.",
    },
    subtitle: {
      es: "Tarifa web garantizada, cancelación flexible y atención cercana las 24 horas.",
      en: "Guaranteed web rate, flexible cancellation and 24-hour personal service.",
    },
  },
];
