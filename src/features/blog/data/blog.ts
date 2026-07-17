// Contenido del diario editorial de Zentra. Fuente única; futura CMS.
import type { BlogAuthor, BlogCategory, BlogPost } from "@/features/blog/types";

export const blogCategoryLabels: Record<BlogCategory, string> = {
  chiclayo: "Chiclayo",
  viajero: "Viajero",
  corporativo: "Corporativo",
  "casa-zentra": "Casa Zentra",
};

const authors: Record<string, BlogAuthor> = {
  concierge: {
    name: "Lucía Reyna",
    role: "Concierge Zentra",
    avatar: "/images/viajero-1.webp",
  },
  editorial: {
    name: "Editorial Zentra",
    role: "Equipo Zentra",
    avatar: "/images/logo-icono.jpeg",
  },
  corporate: {
    name: "Diego Aliaga",
    role: "Cuentas corporativas",
    avatar: "/images/viajero-2.webp",
  },
};

export const blogPosts: BlogPost[] = [
  {
    slug: "chiclayo-en-48-horas",
    category: "chiclayo",
    title: "Chiclayo en 48 horas: la guía que damos a los huéspedes",
    excerpt:
      "Un itinerario honesto — museo Tumbas Reales, mercado Modelo, arroz con pato y una tarde en Pimentel — con los tiempos reales de cada trayecto desde el hotel.",
    cover: "/images/hero-collage.webp",
    coverAlt: "Composición de imágenes del centro de Chiclayo",
    author: authors.concierge,
    publishedAt: "2026-07-12",
    readingMinutes: 8,
    featured: true,
  },
  {
    slug: "arroz-con-pato-conserje",
    category: "chiclayo",
    title: "Dónde comer arroz con pato según nuestro conserje",
    excerpt:
      "Cuatro huariques que llevamos años recomendando. Ninguno es cadena, ninguno cuesta más de 40 soles y en ninguno hay que hacer reserva.",
    cover: "/images/viajero-1.webp",
    coverAlt: "Plato tradicional lambayecano en mesa de restaurante",
    author: authors.concierge,
    publishedAt: "2026-07-08",
    readingMinutes: 5,
  },
  {
    slug: "trabajar-remoto-chiclayo",
    category: "viajero",
    title: "Cinco lugares para trabajar remoto en Chiclayo (además de tu habitación)",
    excerpt:
      "Cafés silenciosos, coworkings con Wi-Fi decente y una biblioteca pública que no sale en Google Maps. Ideal para viernes de agenda ligera.",
    cover: "/images/cowork-plaza.webp",
    coverAlt: "Espacio de coworking con laptop y café",
    author: authors.editorial,
    publishedAt: "2026-07-04",
    readingMinutes: 6,
  },
  {
    slug: "empacar-viaje-norte-peru",
    category: "corporativo",
    title: "Cómo empacar para un viaje corporativo al norte del Perú",
    excerpt:
      "Julio nublado por la mañana, 28° por la tarde. Lista básica de qué llevar y qué dejar en casa según la agenda — validado con clientes frecuentes.",
    cover: "/images/viajero-3.webp",
    coverAlt: "Maleta abierta con ropa de trabajo lista para viajar",
    author: authors.corporate,
    publishedAt: "2026-06-30",
    readingMinutes: 4,
  },
  {
    slug: "tumbas-reales-sin-turistas",
    category: "chiclayo",
    title: "El museo Tumbas Reales sin turistas: la mejor hora para visitarlo",
    excerpt:
      "Un dato práctico: si llegas antes de las 10:30 tienes las salas de oro casi para ti. Cómo coordinar el trayecto en 20 minutos desde el hotel.",
    cover: "/images/viajero-2.webp",
    coverAlt: "Museo Tumbas Reales de Sipán en Lambayeque",
    author: authors.concierge,
    publishedAt: "2026-06-24",
    readingMinutes: 5,
  },
  {
    slug: "rituales-casa-zentra",
    category: "casa-zentra",
    title: "Rituales de la casa: qué te sirve Zentra al llegar",
    excerpt:
      "Café de altura del norte, infusión fría de maracuyá y una toalla caliente si vienes en avión. Detalles pequeños que hacen la primera hora distinta.",
    cover: "/images/zen-room3.webp",
    coverAlt: "Detalle de bienvenida en la suite de Zentra Hotel",
    author: authors.editorial,
    publishedAt: "2026-06-18",
    readingMinutes: 3,
  },
];
