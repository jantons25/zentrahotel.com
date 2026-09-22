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
  editorial: {
    name: "Editorial Zentra",
    role: { es: "Equipo Zentra", en: "Zentra team" },
    avatar: "/images/logo-icono.jpeg",
  },
};

export const blogPosts: BlogPost[] = [
  {
    slug: "agenda-papa-leon-xiv-chiclayo",
    category: "chiclayo",
    title: {
      es: "Agenda del Papa León XIV en Chiclayo: horarios y lugares que visitará",
      en: "Pope Leo XIV's schedule in Chiclayo: times and places he will visit",
    },
    excerpt: {
      es: "El Vaticano publicó el programa oficial: del 13 al 15 de noviembre de 2026 el Papa estará en Lambayeque. Misa en las Pampas de Pimentel, coronación en la Catedral, Santa Cruz y Zaña, con horarios confirmados.",
      en: "The Vatican has published the official program: Pope Leo XIV will be in Lambayeque from 13 to 15 November 2026. Mass at the Pampas de Pimentel, a coronation at the Cathedral, Santa Cruz and Zaña, with confirmed times.",
    },
    cover: "/images/blog/agenda-papa/portada.webp",
    coverAlt: {
      es: "El Papa León XIV saludando frente a la Catedral de Chiclayo",
      en: "Pope Leo XIV waving in front of Chiclayo Cathedral",
    },
    author: authors.editorial,
    publishedAt: "2026-09-22",
    readingMinutes: 7,
    featured: true,
  },
  {
    slug: "como-llegar-misa-papa-pimentel",
    category: "chiclayo",
    title: {
      es: "¿Cómo llegar a la misa del Papa León XIV en Chiclayo desde tu hotel?",
      en: "How to get to Pope Leo XIV's Mass in Chiclayo from your hotel",
    },
    excerpt: {
      es: "La misa del 13 de noviembre será en las Pampas de Pimentel, sector Las Rocas, y podría reunir a un millón de fieles. Cómo organizar el traslado, qué llevar y por qué conviene salir desde Chiclayo.",
      en: "The 13 November Mass will be held at the Pampas de Pimentel, Las Rocas sector, and could draw a million people. How to plan your transport, what to bring and why leaving from Chiclayo makes sense.",
    },
    cover: "/images/blog/como-llegar-misa/portada.webp",
    coverAlt: {
      es: "El Papa León XIV entre cardenales durante una celebración en la Capilla Sixtina",
      en: "Pope Leo XIV among cardinals during a celebration in the Sistine Chapel",
    },
    author: authors.editorial,
    publishedAt: "2026-09-21",
    readingMinutes: 5,
  },
  {
    slug: "ruta-del-papa-chiclayo",
    category: "chiclayo",
    title: {
      es: "Guía completa de la Ruta del Papa en Chiclayo",
      en: "The complete guide to the Pope's Route in Chiclayo",
    },
    excerpt: {
      es: "Templos, santuarios y pueblos vinculados al Papa León XIV, con distancias reales desde el Parque Principal y cuánto tiempo tomará cada tramo. La guía para armar el recorrido en uno o dos días.",
      en: "Churches, sanctuaries and towns tied to Pope Leo XIV, with real distances from the main park and how long each leg takes. The guide to planning the route in one or two days.",
    },
    cover: "/images/blog/ruta-del-papa/portada.webp",
    coverAlt: {
      es: "El Papa León XIV frente a la Catedral de Chiclayo",
      en: "Pope Leo XIV in front of Chiclayo Cathedral",
    },
    author: authors.editorial,
    publishedAt: "2026-09-02",
    readingMinutes: 9,
  },
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
    author: authors.editorial,
    publishedAt: "2026-07-12",
    readingMinutes: 8,
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
    author: authors.editorial,
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
    author: authors.editorial,
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
    author: authors.editorial,
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
