// Contenido del diario editorial de Zentra. Fuente única; futura CMS.
import type { BlogAuthor, BlogCategory, BlogPost } from "@/features/blog/types";
import type { LocalizedString } from "@/lib/i18n-pick";

export const blogCategoryLabels: Record<BlogCategory, LocalizedString> = {
  chiclayo: { es: "Chiclayo", en: "Chiclayo" },
  viajero: { es: "Viajero", en: "Traveler" },
  corporativo: { es: "Corporativo", en: "Corporate" },
  "casa-zentra": { es: "Casa Zentra", en: "House Zentra" },
};

const authors: Record<string, BlogAuthor> = {
  concierge: {
    name: "Lucía Reyna",
    role: { es: "Concierge Zentra", en: "Zentra Concierge" },
    avatar: "/images/viajero-1.webp",
  },
  editorial: {
    name: "Editorial Zentra",
    role: { es: "Equipo Zentra", en: "Zentra team" },
    avatar: "/images/logo-icono.jpeg",
  },
  corporate: {
    name: "Diego Aliaga",
    role: { es: "Cuentas corporativas", en: "Corporate accounts" },
    avatar: "/images/viajero-2.webp",
  },
};

export const blogPosts: BlogPost[] = [
  {
    slug: "chiclayo-en-48-horas",
    category: "chiclayo",
    title: {
      es: "Chiclayo en 48 horas: la guía que damos a los huéspedes",
      en: "Chiclayo in 48 hours: the guide we give our guests",
    },
    excerpt: {
      es: "Un itinerario honesto — museo Tumbas Reales, mercado Modelo, arroz con pato y una tarde en Pimentel — con los tiempos reales de cada trayecto desde el hotel.",
      en: "An honest itinerary — Royal Tombs museum, Mercado Modelo, arroz con pato, and an afternoon in Pimentel — with real travel times from the hotel.",
    },
    cover: "/images/hero-collage.webp",
    coverAlt: {
      es: "Composición de imágenes del centro de Chiclayo",
      en: "Composite of images from downtown Chiclayo",
    },
    author: authors.concierge,
    publishedAt: "2026-07-12",
    readingMinutes: 8,
    featured: true,
  },
  {
    slug: "arroz-con-pato-conserje",
    category: "chiclayo",
    title: {
      es: "Dónde comer arroz con pato según nuestro conserje",
      en: "Where to eat arroz con pato, according to our concierge",
    },
    excerpt: {
      es: "Cuatro huariques que llevamos años recomendando. Ninguno es cadena, ninguno cuesta más de 40 soles y en ninguno hay que hacer reserva.",
      en: "Four hole-in-the-wall spots we've recommended for years. None are chains, none cost more than 40 soles, and none need a reservation.",
    },
    cover: "/images/viajero-1.webp",
    coverAlt: {
      es: "Plato tradicional lambayecano en mesa de restaurante",
      en: "Traditional Lambayeque dish on a restaurant table",
    },
    author: authors.concierge,
    publishedAt: "2026-07-08",
    readingMinutes: 5,
  },
  {
    slug: "trabajar-remoto-chiclayo",
    category: "viajero",
    title: {
      es: "Cinco lugares para trabajar remoto en Chiclayo (además de tu habitación)",
      en: "Five places to work remotely in Chiclayo (besides your room)",
    },
    excerpt: {
      es: "Cafés silenciosos, coworkings con Wi-Fi decente y una biblioteca pública que no sale en Google Maps. Ideal para viernes de agenda ligera.",
      en: "Quiet cafés, coworkings with decent Wi-Fi, and a public library that doesn't show up on Google Maps. Ideal for a light-agenda Friday.",
    },
    cover: "/images/cowork-plaza.webp",
    coverAlt: {
      es: "Espacio de coworking con laptop y café",
      en: "Coworking space with laptop and coffee",
    },
    author: authors.editorial,
    publishedAt: "2026-07-04",
    readingMinutes: 6,
  },
  {
    slug: "empacar-viaje-norte-peru",
    category: "corporativo",
    title: {
      es: "Cómo empacar para un viaje corporativo al norte del Perú",
      en: "How to pack for a business trip to northern Peru",
    },
    excerpt: {
      es: "Julio nublado por la mañana, 28° por la tarde. Lista básica de qué llevar y qué dejar en casa según la agenda — validado con clientes frecuentes.",
      en: "Cloudy July mornings, 28° afternoons. A basic list of what to bring and what to leave at home based on your agenda — validated with frequent guests.",
    },
    cover: "/images/viajero-3.webp",
    coverAlt: {
      es: "Maleta abierta con ropa de trabajo lista para viajar",
      en: "Open suitcase with work clothes ready for travel",
    },
    author: authors.corporate,
    publishedAt: "2026-06-30",
    readingMinutes: 4,
  },
  {
    slug: "tumbas-reales-sin-turistas",
    category: "chiclayo",
    title: {
      es: "El museo Tumbas Reales sin turistas: la mejor hora para visitarlo",
      en: "The Royal Tombs museum without the crowds: the best time to visit",
    },
    excerpt: {
      es: "Un dato práctico: si llegas antes de las 10:30 tienes las salas de oro casi para ti. Cómo coordinar el trayecto en 20 minutos desde el hotel.",
      en: "A practical tip: get there before 10:30 and the gold rooms are practically yours. How to plan the 20-minute trip from the hotel.",
    },
    cover: "/images/viajero-2.webp",
    coverAlt: {
      es: "Museo Tumbas Reales de Sipán en Lambayeque",
      en: "Royal Tombs of Sipán museum in Lambayeque",
    },
    author: authors.concierge,
    publishedAt: "2026-06-24",
    readingMinutes: 5,
  },
  {
    slug: "rituales-casa-zentra",
    category: "casa-zentra",
    title: {
      es: "Rituales de la casa: qué te sirve Zentra al llegar",
      en: "House rituals: what Zentra serves you on arrival",
    },
    excerpt: {
      es: "Café de altura del norte, infusión fría de maracuyá y una toalla caliente si vienes en avión. Detalles pequeños que hacen la primera hora distinta.",
      en: "Northern high-altitude coffee, cold passion-fruit infusion, and a warm towel if you're arriving by plane. Small details that make the first hour different.",
    },
    cover: "/images/zen-room3.webp",
    coverAlt: {
      es: "Detalle de bienvenida en la suite de Zentra Hotel",
      en: "Welcome detail in a Zentra Hotel suite",
    },
    author: authors.editorial,
    publishedAt: "2026-06-18",
    readingMinutes: 3,
  },
];
