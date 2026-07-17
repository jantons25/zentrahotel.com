// Catálogo de habitaciones y experiencias del hotel, por sede (fuente única; futura API del PMS).
import {
  Bath,
  Coffee,
  Flower2,
  Heart,
  MonitorPlay,
  Snowflake,
  Sparkles,
  Sun,
  Tv,
  Waves,
  Wifi,
  Wind,
} from "lucide-react";

import type { Room, RoomSede } from "@/features/rooms/types";

export const sedeLabels: Record<RoomSede, string> = {
  balta: "Zentra Balta",
  plaza: "Zentra Plaza",
  "san-jose": "Zentra San José",
};

export const sedeShortLabels: Record<RoomSede, string> = {
  balta: "Balta",
  plaza: "Plaza",
  "san-jose": "San José",
};

// Orden en el filtro (misma secuencia que en /promociones, sin Nexus: no es alojamiento).
export const sedeOrder: RoomSede[] = ["balta", "plaza", "san-jose"];

const standardAmenities = [
  { label: "Wi-Fi 5G", icon: Wifi },
  { label: "Aire acondicionado", icon: Snowflake },
  { label: "Smart TV", icon: Tv },
  { label: "Baño privado", icon: Bath },
];

export const rooms: Room[] = [
  // ── Zentra Balta ──────────────────────────────────────────────
  {
    slug: "habitacion-individual",
    sede: "balta",
    name: "Habitación individual",
    category: "Descanso esencial",
    tagline: "Una plaza que sabe recibir.",
    description:
      "Cuarto compacto y luminoso pensado para el viajero que llega, deja la maleta y vuelve al ritmo de Chiclayo sin más ceremonia. Escritorio, buen Wi-Fi y una cama corta y bien vestida.",
    capacity: "1 persona",
    detail: "1 cama (1.5 plazas)",
    size: "12 m²",
    view: "Vista interior",
    amenities: standardAmenities,
    gallery: [
      {
        src: "/images/room-individual.jpg",
        alt: "Habitación individual con cama de 1.5 plazas y ropa de cama blanca",
      },
    ],
    image: "/images/room-individual.jpg",
    imageAlt: "Habitación individual con cama y baño privado",
    bookable: true,
  },
  {
    slug: "habitacion-matrimonial",
    sede: "balta",
    name: "Habitación matrimonial",
    category: "En pareja",
    tagline: "Para dormir cerca y despertar sin prisa.",
    description:
      "Cama de dos plazas, ropa de cama premium y una atmósfera calmada apta para escapadas cortas o estadías de trabajo con acompañante. Detalles simples, ejecución cuidada.",
    capacity: "2 personas",
    detail: "1 cama (2 plazas)",
    size: "16 m²",
    view: "Vista al centro de Chiclayo",
    amenities: [...standardAmenities, { label: "Café e infusiones", icon: Coffee }],
    gallery: [
      {
        src: "/images/room-matrimonial.jpg",
        alt: "Habitación matrimonial con cama de dos plazas y decoración cálida",
      },
      {
        src: "/images/balta/hab-suite.webp",
        alt: "Detalle del cabecero y mesa de noche",
      },
      {
        src: "/images/balta/hab-suite-dos.webp",
        alt: "Vista general con escritorio y cortinas blackout",
      },
    ],
    image: "/images/room-matrimonial.jpg",
    imageAlt: "Habitación matrimonial con cama de dos plazas",
    bookable: true,
  },
  {
    slug: "habitacion-doble",
    sede: "balta",
    name: "Habitación doble",
    category: "Para tres",
    tagline: "Familia, amigos o equipo — sin apretujar.",
    description:
      "Combinamos una cama matrimonial y una individual para grupos de tres. Amplia, con dos zonas claras: la de descanso y la de convivir. Perfecta para estadías de fin de semana.",
    capacity: "3 personas",
    detail: "1 cama (2 plazas) + 1 cama (1.5 plazas)",
    size: "22 m²",
    view: "Vista al centro",
    amenities: [...standardAmenities, { label: "Café e infusiones", icon: Coffee }],
    gallery: [
      {
        src: "/images/room-doble.jpg",
        alt: "Habitación doble con dos camas y luz natural",
      },
      {
        src: "/images/balta/comedor.webp",
        alt: "Área común y comedor cercano a la habitación",
      },
    ],
    image: "/images/room-doble.jpg",
    imageAlt: "Habitación doble con dos camas",
    bookable: true,
  },
  {
    slug: "suite-con-jacuzzi",
    sede: "balta",
    name: "Suite con jacuzzi",
    category: "Signature",
    tagline: "Jacuzzi privado, luz cálida y vista a la ciudad.",
    description:
      "La habitación más pedida de Zentra. Suite con cama queen, jacuzzi privado en el ambiente y una atmósfera pensada para desconectarse. Bienvenida cortesía de la casa al llegar.",
    capacity: "2 personas",
    detail: "1 cama queen",
    size: "28 m²",
    view: "Vista panorámica",
    amenities: [
      { label: "Jacuzzi privado", icon: Waves },
      { label: "Wi-Fi 5G", icon: Wifi },
      { label: "Aire acondicionado", icon: Snowflake },
      { label: "Smart TV", icon: MonitorPlay },
      { label: "Ducha española", icon: Wind },
      { label: "Café e infusiones", icon: Coffee },
    ],
    gallery: [
      {
        src: "/images/zen-room.jpg",
        alt: "Jacuzzi de la suite con copas de vino y pétalos de rosa",
      },
      { src: "/images/zen-room2.webp", alt: "Cama queen de la suite con vista" },
      { src: "/images/zen-room3.webp", alt: "Detalle del jacuzzi con iluminación cálida" },
      { src: "/images/zen-room4.webp", alt: "Baño y ducha española de la suite" },
      { src: "/images/zen-room5.webp", alt: "Vista amplia de la suite" },
      { src: "/images/zen-room6.webp", alt: "Detalles decorativos de la suite" },
    ],
    image: "/images/zen-room.jpg",
    imageAlt: "Jacuzzi de la suite con copas de vino y pétalos de rosa",
    bookable: true,
  },
  {
    slug: "velada-romantica",
    sede: "balta",
    name: "Velada romántica",
    category: "Experiencia",
    tagline: "Un ritual de dos, montado antes de tu llegada.",
    description:
      "Sumamos a tu reserva un montaje especial: pétalos, vino cortesía, música baja y cena preparada por nuestro equipo. Se coordina con al menos 24 horas de anticipación.",
    capacity: "2 personas",
    detail: "Sobre cualquier habitación matrimonial",
    view: "Bajo reserva previa",
    amenities: [
      { label: "Montaje incluido", icon: Heart },
      { label: "Vino cortesía", icon: Sparkles },
      { label: "Cena a pedido", icon: Coffee },
      { label: "Preparación previa", icon: Sun },
    ],
    gallery: [
      {
        src: "/images/velada-romantica.webp",
        alt: "Cama decorada con pétalos en forma de corazón",
      },
      {
        src: "/images/velada-romantica2.webp",
        alt: "Detalle de listones y decoración romántica",
      },
      {
        src: "/images/velada-romantica.jpg",
        alt: "Ambiente iluminado con luz cálida y vela",
      },
    ],
    image: "/images/velada-romantica2.webp",
    imageAlt: "Cama decorada con corazón de pétalos de rosa y listones",
    bookable: false,
  },
  {
    slug: "masajes",
    sede: "balta",
    name: "Masajes en habitación",
    category: "Bienestar",
    tagline: "Aromaterapia sin salir del cuarto.",
    description:
      "Sesión de masaje descontracturante y aromaterapia coordinada con nuestro terapeuta aliado, servida en la comodidad de tu habitación. Se agenda con antelación desde recepción.",
    capacity: "1 o 2 personas",
    detail: "Aromaterapia · 60 min",
    view: "Servicio bajo cita",
    amenities: [
      { label: "Aromaterapia", icon: Flower2 },
      { label: "Terapeuta certificado", icon: Sparkles },
      { label: "Ambiente en la habitación", icon: Sun },
    ],
    gallery: [
      {
        src: "/images/masajes.webp",
        alt: "Toalla decorativa en forma de flor sobre la cama",
      },
      {
        src: "/images/masajes.jpg",
        alt: "Detalle del ritual de masaje con aromaterapia",
      },
    ],
    image: "/images/masajes.webp",
    imageAlt: "Toalla decorativa en forma de flor sobre la cama",
    bookable: false,
  },

  // ── Zentra Plaza ──────────────────────────────────────────────
  {
    slug: "plaza-individual",
    sede: "plaza",
    name: "Habitación individual",
    category: "Descanso esencial",
    tagline: "Frente a la plaza principal.",
    description:
      "Cuarto compacto y luminoso a pasos de la plaza principal, pensado para el viajero que llega, deja la maleta y sale a caminar el centro de Chiclayo. Escritorio y buen Wi-Fi incluidos.",
    capacity: "1 persona",
    detail: "1 cama (1.5 plazas)",
    size: "12 m²",
    view: "Vista a la plaza principal",
    amenities: standardAmenities,
    gallery: [
      {
        src: "/images/plaza/individual.webp",
        alt: "Habitación individual de Zentra Plaza con luz natural",
      },
    ],
    image: "/images/plaza/individual.webp",
    imageAlt: "Habitación individual de Zentra Plaza con luz natural",
    bookable: true,
  },
  {
    slug: "plaza-matrimonial",
    sede: "plaza",
    name: "Habitación matrimonial",
    category: "En pareja",
    tagline: "Para dormir cerca y despertar sin prisa.",
    description:
      "Cama de dos plazas y una atmósfera calmada, a pasos de la plaza principal. Ideal para escapadas cortas o estadías de trabajo con acompañante.",
    capacity: "2 personas",
    detail: "1 cama (2 plazas)",
    size: "16 m²",
    view: "Vista a la plaza principal",
    amenities: [...standardAmenities, { label: "Café e infusiones", icon: Coffee }],
    gallery: [
      {
        src: "/images/room-matrimonial.jpg",
        alt: "Habitación matrimonial con cama de dos plazas y decoración cálida",
      },
    ],
    image: "/images/room-matrimonial.jpg",
    imageAlt: "Habitación matrimonial de Zentra Plaza",
    bookable: true,
  },
  {
    slug: "plaza-doble",
    sede: "plaza",
    name: "Habitación doble",
    category: "Para tres",
    tagline: "Amplia, con espacio para trabajar.",
    description:
      "Habitación amplia con cama matrimonial y una individual, más una zona de estudio. Pensada para equipos o familias que se quedan una semana o más frente a la plaza principal.",
    capacity: "3 personas",
    detail: "1 cama (2 plazas) + 1 cama (1.5 plazas)",
    size: "22 m²",
    view: "Vista a la plaza principal",
    amenities: [...standardAmenities, { label: "Café e infusiones", icon: Coffee }],
    gallery: [
      {
        src: "/images/plaza/cowork-plaza-tres.webp",
        alt: "Habitación amplia con dos camas y zona de estudio en Zentra Plaza",
      },
      {
        src: "/images/room-doble.jpg",
        alt: "Habitación doble con dos camas y luz natural",
      },
    ],
    image: "/images/plaza/cowork-plaza-tres.webp",
    imageAlt: "Habitación amplia con dos camas y zona de estudio en Zentra Plaza",
    bookable: true,
  },
  {
    slug: "plaza-cuadruple",
    sede: "plaza",
    name: "Habitación cuádruple",
    category: "Grupos",
    tagline: "Para grupos de cuatro, sin separar habitaciones.",
    description:
      "Habitación pensada para grupos de cuatro personas. Estamos terminando de fotografiar y documentar esta ficha — escríbenos por WhatsApp y te confirmamos disponibilidad y tarifa al instante.",
    capacity: "4 personas",
    detail: "Detalle de camas: por confirmar",
    gallery: [
      {
        src: "/images/plaza/cowork-plaza-uno.webp",
        alt: "Espacio de Zentra Plaza — fotos de la habitación cuádruple próximamente",
      },
    ],
    image: "/images/plaza/cowork-plaza-uno.webp",
    imageAlt: "Espacio de Zentra Plaza — fotos de la habitación cuádruple próximamente",
    bookable: false,
    pending: true,
  },
  {
    slug: "plaza-quintuple",
    sede: "plaza",
    name: "Habitación quíntuple",
    category: "Grupos",
    tagline: "Para grupos de cinco, sin separar habitaciones.",
    description:
      "Habitación pensada para grupos de cinco personas. Estamos terminando de fotografiar y documentar esta ficha — escríbenos por WhatsApp y te confirmamos disponibilidad y tarifa al instante.",
    capacity: "5 personas",
    detail: "Detalle de camas: por confirmar",
    gallery: [
      {
        src: "/images/plaza/cowork-plaza-uno.webp",
        alt: "Espacio de Zentra Plaza — fotos de la habitación quíntuple próximamente",
      },
    ],
    image: "/images/plaza/cowork-plaza-uno.webp",
    imageAlt: "Espacio de Zentra Plaza — fotos de la habitación quíntuple próximamente",
    bookable: false,
    pending: true,
  },

  // ── Zentra San José ───────────────────────────────────────────
  {
    slug: "sanjose-individual",
    sede: "san-jose",
    name: "Habitación individual",
    category: "Descanso esencial",
    tagline: "Ambiente ejecutivo y silencioso.",
    description:
      "Cuarto compacto en un ambiente ejecutivo tranquilo, con blackout y Wi-Fi 5G de alta velocidad. Ideal para consultores y viajeros de trabajo que buscan descanso real.",
    capacity: "1 persona",
    detail: "1 cama (1.5 plazas)",
    size: "12 m²",
    view: "Ambiente silencioso",
    amenities: standardAmenities,
    gallery: [
      {
        src: "/images/room-individual.jpg",
        alt: "Habitación individual con cama de 1.5 plazas y ropa de cama blanca",
      },
    ],
    image: "/images/room-individual.jpg",
    imageAlt: "Habitación individual de Zentra San José",
    bookable: true,
  },
  {
    slug: "sanjose-matrimonial",
    sede: "san-jose",
    name: "Habitación matrimonial",
    category: "En pareja",
    tagline: "Ejecutiva, silenciosa y con blackout.",
    description:
      "Cama de dos plazas en un ambiente ejecutivo pensado para proyectos técnicos y estadías largas. Cortinas blackout, escritorio y Wi-Fi 5G de alta velocidad.",
    capacity: "2 personas",
    detail: "1 cama (2 plazas)",
    size: "16 m²",
    view: "Ambiente silencioso",
    amenities: [...standardAmenities, { label: "Café e infusiones", icon: Coffee }],
    gallery: [
      {
        src: "/images/sanjose/hab-matrimonial.webp",
        alt: "Habitación matrimonial ejecutiva de Zentra San José",
      },
    ],
    image: "/images/sanjose/hab-matrimonial.webp",
    imageAlt: "Habitación matrimonial ejecutiva de Zentra San José",
    bookable: true,
  },
  {
    slug: "sanjose-doble",
    sede: "san-jose",
    name: "Habitación doble",
    category: "Para tres",
    tagline: "Equipos técnicos, sin apretujar.",
    description:
      "Cama matrimonial más una individual en un ambiente ejecutivo silencioso, con espacios comunes cercanos para reuniones. Perfecta para equipos técnicos en estadías largas.",
    capacity: "3 personas",
    detail: "1 cama (2 plazas) + 1 cama (1.5 plazas)",
    size: "22 m²",
    view: "Ambiente silencioso",
    amenities: [...standardAmenities, { label: "Café e infusiones", icon: Coffee }],
    gallery: [
      {
        src: "/images/sanjose/hab-doble.webp",
        alt: "Habitación doble con dos camas y luz natural en Zentra San José",
      },
      {
        src: "/images/sanjose/comedor.webp",
        alt: "Espacios comunes disponibles para huéspedes",
      },
    ],
    image: "/images/sanjose/hab-doble.webp",
    imageAlt: "Habitación doble de Zentra San José",
    bookable: true,
  },
  {
    slug: "sanjose-triple",
    sede: "san-jose",
    name: "Habitación triple",
    category: "Grupos",
    tagline: "Para grupos de tres, sin separar habitaciones.",
    description:
      "Habitación pensada para grupos de tres personas. Estamos terminando de fotografiar y documentar esta ficha — escríbenos por WhatsApp y te confirmamos disponibilidad y tarifa al instante.",
    capacity: "3 personas",
    detail: "Detalle de camas: por confirmar",
    gallery: [
      {
        src: "/images/sanjose/comedor.webp",
        alt: "Zona común de Zentra San José — fotos de la habitación triple próximamente",
      },
    ],
    image: "/images/sanjose/comedor.webp",
    imageAlt: "Zona común de Zentra San José — fotos de la habitación triple próximamente",
    bookable: false,
    pending: true,
  },
];

// Subconjunto curado (6 tipos, sede Balta) para las secciones de la home — no se expande
// con las variantes por sede para no repetir tarjetas con el mismo nombre.
const featuredSlugs = [
  "habitacion-individual",
  "habitacion-matrimonial",
  "habitacion-doble",
  "suite-con-jacuzzi",
  "velada-romantica",
  "masajes",
];

export const featuredRooms: Room[] = featuredSlugs
  .map((slug) => rooms.find((room) => room.slug === slug))
  .filter((room): room is Room => Boolean(room));
