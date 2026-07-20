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

import type { Room, RoomAmenity, RoomSede } from "@/features/rooms/types";
import type { LocalizedString } from "@/lib/i18n-pick";

export const sedeLabels: Record<RoomSede, LocalizedString> = {
  balta: { es: "Zentra Balta", en: "Zentra Balta" },
  plaza: { es: "Zentra Plaza", en: "Zentra Plaza" },
  "san-jose": { es: "Zentra San José", en: "Zentra San José" },
};

export const sedeShortLabels: Record<RoomSede, LocalizedString> = {
  balta: { es: "Balta", en: "Balta" },
  plaza: { es: "Plaza", en: "Plaza" },
  "san-jose": { es: "San José", en: "San José" },
};

// Orden en el filtro (misma secuencia que en /promociones, sin Nexus: no es alojamiento).
export const sedeOrder: RoomSede[] = ["balta", "plaza", "san-jose"];

const AMENITY_WIFI: RoomAmenity = { label: { es: "Wi-Fi 5G", en: "5G Wi-Fi" }, icon: Wifi };
const AMENITY_AC: RoomAmenity = { label: { es: "Aire acondicionado", en: "Air conditioning" }, icon: Snowflake };
const AMENITY_TV: RoomAmenity = { label: { es: "Smart TV", en: "Smart TV" }, icon: Tv };
const AMENITY_BATH: RoomAmenity = { label: { es: "Baño privado", en: "Private bathroom" }, icon: Bath };
const AMENITY_COFFEE: RoomAmenity = { label: { es: "Café e infusiones", en: "Coffee and tea" }, icon: Coffee };

const standardAmenities: RoomAmenity[] = [AMENITY_WIFI, AMENITY_AC, AMENITY_TV, AMENITY_BATH];

export const rooms: Room[] = [
  // ── Zentra Balta ──────────────────────────────────────────────
  {
    slug: "habitacion-individual",
    sede: "balta",
    name: { es: "Habitación individual", en: "Single room" },
    category: { es: "Descanso esencial", en: "Essential rest" },
    tagline: { es: "Una plaza que sabe recibir.", en: "A single that knows how to welcome." },
    description: {
      es: "Cuarto compacto y luminoso pensado para el viajero que llega, deja la maleta y vuelve al ritmo de Chiclayo sin más ceremonia. Escritorio, buen Wi-Fi y una cama corta y bien vestida.",
      en: "A bright, compact room for the traveler who arrives, drops the bag, and jumps back into the pace of Chiclayo. Desk, solid Wi-Fi, and a well-made twin bed.",
    },
    capacity: { es: "1 persona", en: "1 person" },
    detail: { es: "1 cama (1.5 plazas)", en: "1 bed (twin)" },
    size: { es: "12 m²", en: "12 m²" },
    view: { es: "Vista interior", en: "Interior view" },
    amenities: standardAmenities,
    gallery: [
      {
        src: "/images/room-individual.jpg",
        alt: {
          es: "Habitación individual con cama de 1.5 plazas y ropa de cama blanca",
          en: "Single room with twin bed and white linens",
        },
      },
    ],
    image: "/images/room-individual.jpg",
    imageAlt: {
      es: "Habitación individual con cama y baño privado",
      en: "Single room with bed and private bathroom",
    },
    bookable: true,
  },
  {
    slug: "habitacion-matrimonial",
    sede: "balta",
    name: { es: "Habitación matrimonial", en: "Queen room" },
    category: { es: "En pareja", en: "For couples" },
    tagline: {
      es: "Para dormir cerca y despertar sin prisa.",
      en: "Sleep close and wake without rush.",
    },
    description: {
      es: "Cama de dos plazas, ropa de cama premium y una atmósfera calmada apta para escapadas cortas o estadías de trabajo con acompañante. Detalles simples, ejecución cuidada.",
      en: "Queen bed, premium linens, and a calm atmosphere for short getaways or work stays with a companion. Simple details, careful execution.",
    },
    capacity: { es: "2 personas", en: "2 people" },
    detail: { es: "1 cama (2 plazas)", en: "1 bed (queen)" },
    size: { es: "16 m²", en: "16 m²" },
    view: { es: "Vista al centro de Chiclayo", en: "View of downtown Chiclayo" },
    amenities: [...standardAmenities, AMENITY_COFFEE],
    gallery: [
      {
        src: "/images/room-matrimonial.jpg",
        alt: {
          es: "Habitación matrimonial con cama de dos plazas y decoración cálida",
          en: "Queen room with queen bed and warm decor",
        },
      },
      {
        src: "/images/balta/hab-suite.webp",
        alt: {
          es: "Detalle del cabecero y mesa de noche",
          en: "Headboard and nightstand detail",
        },
      },
      {
        src: "/images/balta/hab-suite-dos.webp",
        alt: {
          es: "Vista general con escritorio y cortinas blackout",
          en: "Overall view with desk and blackout curtains",
        },
      },
    ],
    image: "/images/room-matrimonial.jpg",
    imageAlt: {
      es: "Habitación matrimonial con cama de dos plazas",
      en: "Queen room with queen bed",
    },
    bookable: true,
  },
  {
    slug: "habitacion-doble",
    sede: "balta",
    name: { es: "Habitación doble", en: "Double room" },
    category: { es: "Para tres", en: "For three" },
    tagline: {
      es: "Familia, amigos o equipo — sin apretujar.",
      en: "Family, friends, or team — without squeezing.",
    },
    description: {
      es: "Combinamos una cama matrimonial y una individual para grupos de tres. Amplia, con dos zonas claras: la de descanso y la de convivir. Perfecta para estadías de fin de semana.",
      en: "We combine a queen and a twin bed for groups of three. Spacious, with two clear zones: rest and hang out. Perfect for weekend stays.",
    },
    capacity: { es: "3 personas", en: "3 people" },
    detail: {
      es: "1 cama (2 plazas) + 1 cama (1.5 plazas)",
      en: "1 queen bed + 1 twin bed",
    },
    size: { es: "22 m²", en: "22 m²" },
    view: { es: "Vista al centro", en: "Downtown view" },
    amenities: [...standardAmenities, AMENITY_COFFEE],
    gallery: [
      {
        src: "/images/room-doble.jpg",
        alt: {
          es: "Habitación doble con dos camas y luz natural",
          en: "Double room with two beds and natural light",
        },
      },
      {
        src: "/images/balta/comedor.webp",
        alt: {
          es: "Área común y comedor cercano a la habitación",
          en: "Common and dining area near the room",
        },
      },
    ],
    image: "/images/room-doble.jpg",
    imageAlt: {
      es: "Habitación doble con dos camas",
      en: "Double room with two beds",
    },
    bookable: true,
  },
  {
    slug: "suite-con-jacuzzi",
    sede: "balta",
    name: { es: "Suite con jacuzzi", en: "Jacuzzi suite" },
    category: { es: "Signature", en: "Signature" },
    tagline: {
      es: "Jacuzzi privado, luz cálida y vista a la ciudad.",
      en: "Private jacuzzi, warm light, and city views.",
    },
    description: {
      es: "La habitación más pedida de Zentra. Suite con cama queen, jacuzzi privado en el ambiente y una atmósfera pensada para desconectarse. Bienvenida cortesía de la casa al llegar.",
      en: "Zentra's most-requested room. Suite with queen bed, in-room private jacuzzi, and an atmosphere designed to disconnect. Complimentary welcome on arrival.",
    },
    capacity: { es: "2 personas", en: "2 people" },
    detail: { es: "1 cama queen", en: "1 queen bed" },
    size: { es: "28 m²", en: "28 m²" },
    view: { es: "Vista panorámica", en: "Panoramic view" },
    amenities: [
      { label: { es: "Jacuzzi privado", en: "Private jacuzzi" }, icon: Waves },
      AMENITY_WIFI,
      AMENITY_AC,
      { label: { es: "Smart TV", en: "Smart TV" }, icon: MonitorPlay },
      { label: { es: "Ducha española", en: "Rainfall shower" }, icon: Wind },
      AMENITY_COFFEE,
    ],
    gallery: [
      {
        src: "/images/zen-room.jpg",
        alt: {
          es: "Jacuzzi de la suite con copas de vino y pétalos de rosa",
          en: "Suite jacuzzi with wine glasses and rose petals",
        },
      },
      {
        src: "/images/zen-room2.webp",
        alt: { es: "Cama queen de la suite con vista", en: "Suite queen bed with view" },
      },
      {
        src: "/images/zen-room3.webp",
        alt: {
          es: "Detalle del jacuzzi con iluminación cálida",
          en: "Jacuzzi detail with warm lighting",
        },
      },
      {
        src: "/images/zen-room4.webp",
        alt: {
          es: "Baño y ducha española de la suite",
          en: "Bathroom and rainfall shower of the suite",
        },
      },
      {
        src: "/images/zen-room5.webp",
        alt: { es: "Vista amplia de la suite", en: "Wide view of the suite" },
      },
      {
        src: "/images/zen-room6.webp",
        alt: {
          es: "Detalles decorativos de la suite",
          en: "Decorative details of the suite",
        },
      },
    ],
    image: "/images/zen-room.jpg",
    imageAlt: {
      es: "Jacuzzi de la suite con copas de vino y pétalos de rosa",
      en: "Suite jacuzzi with wine glasses and rose petals",
    },
    bookable: true,
  },
  {
    slug: "velada-romantica",
    sede: "balta",
    name: { es: "Velada romántica", en: "Romantic evening" },
    category: { es: "Experiencia", en: "Experience" },
    tagline: {
      es: "Un ritual de dos, montado antes de tu llegada.",
      en: "A ritual for two, set up before you arrive.",
    },
    description: {
      es: "Sumamos a tu reserva un montaje especial: pétalos, vino cortesía, música baja y cena preparada por nuestro equipo. Se coordina con al menos 24 horas de anticipación.",
      en: "We add a special setup to your booking: petals, complimentary wine, soft music, and a dinner prepared by our team. Coordinated at least 24 hours in advance.",
    },
    capacity: { es: "2 personas", en: "2 people" },
    detail: {
      es: "Sobre cualquier habitación matrimonial",
      en: "On any queen room",
    },
    view: { es: "Bajo reserva previa", en: "By advance reservation" },
    amenities: [
      { label: { es: "Montaje incluido", en: "Setup included" }, icon: Heart },
      { label: { es: "Vino cortesía", en: "Complimentary wine" }, icon: Sparkles },
      { label: { es: "Cena a pedido", en: "Dinner on request" }, icon: Coffee },
      { label: { es: "Preparación previa", en: "Prepared ahead" }, icon: Sun },
    ],
    gallery: [
      {
        src: "/images/velada-romantica.webp",
        alt: {
          es: "Cama decorada con pétalos en forma de corazón",
          en: "Bed decorated with petals in a heart shape",
        },
      },
      {
        src: "/images/velada-romantica2.webp",
        alt: {
          es: "Detalle de listones y decoración romántica",
          en: "Ribbon detail and romantic decor",
        },
      },
      {
        src: "/images/velada-romantica.jpg",
        alt: {
          es: "Ambiente iluminado con luz cálida y vela",
          en: "Room lit with warm light and a candle",
        },
      },
    ],
    image: "/images/velada-romantica2.webp",
    imageAlt: {
      es: "Cama decorada con corazón de pétalos de rosa y listones",
      en: "Bed decorated with a rose-petal heart and ribbons",
    },
    bookable: false,
  },
  {
    slug: "masajes",
    sede: "balta",
    name: { es: "Masajes en habitación", en: "In-room massages" },
    category: { es: "Bienestar", en: "Wellness" },
    tagline: { es: "Aromaterapia sin salir del cuarto.", en: "Aromatherapy without leaving the room." },
    description: {
      es: "Sesión de masaje descontracturante y aromaterapia coordinada con nuestro terapeuta aliado, servida en la comodidad de tu habitación. Se agenda con antelación desde recepción.",
      en: "Deep-tissue massage and aromatherapy session with our partner therapist, delivered in the comfort of your room. Booked ahead through reception.",
    },
    capacity: { es: "1 o 2 personas", en: "1 or 2 people" },
    detail: { es: "Aromaterapia · 60 min", en: "Aromatherapy · 60 min" },
    view: { es: "Servicio bajo cita", en: "By-appointment service" },
    amenities: [
      { label: { es: "Aromaterapia", en: "Aromatherapy" }, icon: Flower2 },
      { label: { es: "Terapeuta certificado", en: "Certified therapist" }, icon: Sparkles },
      { label: { es: "Ambiente en la habitación", en: "In-room ambience" }, icon: Sun },
    ],
    gallery: [
      {
        src: "/images/masajes.webp",
        alt: {
          es: "Toalla decorativa en forma de flor sobre la cama",
          en: "Decorative flower-shaped towel on the bed",
        },
      },
      {
        src: "/images/masajes.jpg",
        alt: {
          es: "Detalle del ritual de masaje con aromaterapia",
          en: "Massage-with-aromatherapy ritual detail",
        },
      },
    ],
    image: "/images/masajes.webp",
    imageAlt: {
      es: "Toalla decorativa en forma de flor sobre la cama",
      en: "Decorative flower-shaped towel on the bed",
    },
    bookable: false,
  },

  // ── Zentra Plaza ──────────────────────────────────────────────
  {
    slug: "plaza-individual",
    sede: "plaza",
    name: { es: "Habitación individual", en: "Single room" },
    category: { es: "Descanso esencial", en: "Essential rest" },
    tagline: { es: "Frente a la plaza principal.", en: "Facing the main square." },
    description: {
      es: "Cuarto compacto y luminoso a pasos de la plaza principal, pensado para el viajero que llega, deja la maleta y sale a caminar el centro de Chiclayo. Escritorio y buen Wi-Fi incluidos.",
      en: "Bright, compact room steps from the main square, for the traveler who arrives, drops the bag, and heads out to walk downtown Chiclayo. Desk and solid Wi-Fi included.",
    },
    capacity: { es: "1 persona", en: "1 person" },
    detail: { es: "1 cama (1.5 plazas)", en: "1 bed (twin)" },
    size: { es: "12 m²", en: "12 m²" },
    view: { es: "Vista a la plaza principal", en: "View of the main square" },
    amenities: standardAmenities,
    gallery: [
      {
        src: "/images/plaza/individual.webp",
        alt: {
          es: "Habitación individual de Zentra Plaza con luz natural",
          en: "Zentra Plaza single room with natural light",
        },
      },
    ],
    image: "/images/plaza/individual.webp",
    imageAlt: {
      es: "Habitación individual de Zentra Plaza con luz natural",
      en: "Zentra Plaza single room with natural light",
    },
    bookable: true,
  },
  {
    slug: "plaza-matrimonial",
    sede: "plaza",
    name: { es: "Habitación matrimonial", en: "Queen room" },
    category: { es: "En pareja", en: "For couples" },
    tagline: { es: "Para dormir cerca y despertar sin prisa.", en: "Sleep close and wake without rush." },
    description: {
      es: "Cama de dos plazas y una atmósfera calmada, a pasos de la plaza principal. Ideal para escapadas cortas o estadías de trabajo con acompañante.",
      en: "Queen bed and a calm atmosphere, steps from the main square. Ideal for short getaways or work stays with a companion.",
    },
    capacity: { es: "2 personas", en: "2 people" },
    detail: { es: "1 cama (2 plazas)", en: "1 bed (queen)" },
    size: { es: "16 m²", en: "16 m²" },
    view: { es: "Vista a la plaza principal", en: "View of the main square" },
    amenities: [...standardAmenities, AMENITY_COFFEE],
    gallery: [
      {
        src: "/images/room-matrimonial.jpg",
        alt: {
          es: "Habitación matrimonial con cama de dos plazas y decoración cálida",
          en: "Queen room with queen bed and warm decor",
        },
      },
    ],
    image: "/images/room-matrimonial.jpg",
    imageAlt: {
      es: "Habitación matrimonial de Zentra Plaza",
      en: "Zentra Plaza queen room",
    },
    bookable: true,
  },
  {
    slug: "plaza-doble",
    sede: "plaza",
    name: { es: "Habitación doble", en: "Double room" },
    category: { es: "Para tres", en: "For three" },
    tagline: { es: "Amplia, con espacio para trabajar.", en: "Spacious, with room to work." },
    description: {
      es: "Habitación amplia con cama matrimonial y una individual, más una zona de estudio. Pensada para equipos o familias que se quedan una semana o más frente a la plaza principal.",
      en: "Spacious room with a queen and a twin bed, plus a work area. Designed for teams or families staying a week or more, facing the main square.",
    },
    capacity: { es: "3 personas", en: "3 people" },
    detail: {
      es: "1 cama (2 plazas) + 1 cama (1.5 plazas)",
      en: "1 queen bed + 1 twin bed",
    },
    size: { es: "22 m²", en: "22 m²" },
    view: { es: "Vista a la plaza principal", en: "View of the main square" },
    amenities: [...standardAmenities, AMENITY_COFFEE],
    gallery: [
      {
        src: "/images/plaza/cowork-plaza-tres.webp",
        alt: {
          es: "Habitación amplia con dos camas y zona de estudio en Zentra Plaza",
          en: "Spacious room with two beds and work area at Zentra Plaza",
        },
      },
      {
        src: "/images/room-doble.jpg",
        alt: {
          es: "Habitación doble con dos camas y luz natural",
          en: "Double room with two beds and natural light",
        },
      },
    ],
    image: "/images/plaza/cowork-plaza-tres.webp",
    imageAlt: {
      es: "Habitación amplia con dos camas y zona de estudio en Zentra Plaza",
      en: "Spacious room with two beds and work area at Zentra Plaza",
    },
    bookable: true,
  },
  {
    slug: "plaza-cuadruple",
    sede: "plaza",
    name: { es: "Habitación cuádruple", en: "Quadruple room" },
    category: { es: "Grupos", en: "Groups" },
    tagline: {
      es: "Para grupos de cuatro, sin separar habitaciones.",
      en: "For groups of four, without splitting rooms.",
    },
    description: {
      es: "Habitación pensada para grupos de cuatro personas. Estamos terminando de fotografiar y documentar esta ficha — escríbenos por WhatsApp y te confirmamos disponibilidad y tarifa al instante.",
      en: "Room designed for groups of four. We're finishing photographing and documenting this listing — message us on WhatsApp and we'll confirm availability and rate instantly.",
    },
    capacity: { es: "4 personas", en: "4 people" },
    detail: { es: "Detalle de camas: por confirmar", en: "Bed setup: to be confirmed" },
    gallery: [
      {
        src: "/images/plaza/cowork-plaza-uno.webp",
        alt: {
          es: "Espacio de Zentra Plaza — fotos de la habitación cuádruple próximamente",
          en: "Zentra Plaza space — quadruple room photos coming soon",
        },
      },
    ],
    image: "/images/plaza/cowork-plaza-uno.webp",
    imageAlt: {
      es: "Espacio de Zentra Plaza — fotos de la habitación cuádruple próximamente",
      en: "Zentra Plaza space — quadruple room photos coming soon",
    },
    bookable: false,
    pending: true,
  },
  {
    slug: "plaza-quintuple",
    sede: "plaza",
    name: { es: "Habitación quíntuple", en: "Quintuple room" },
    category: { es: "Grupos", en: "Groups" },
    tagline: {
      es: "Para grupos de cinco, sin separar habitaciones.",
      en: "For groups of five, without splitting rooms.",
    },
    description: {
      es: "Habitación pensada para grupos de cinco personas. Estamos terminando de fotografiar y documentar esta ficha — escríbenos por WhatsApp y te confirmamos disponibilidad y tarifa al instante.",
      en: "Room designed for groups of five. We're finishing photographing and documenting this listing — message us on WhatsApp and we'll confirm availability and rate instantly.",
    },
    capacity: { es: "5 personas", en: "5 people" },
    detail: { es: "Detalle de camas: por confirmar", en: "Bed setup: to be confirmed" },
    gallery: [
      {
        src: "/images/plaza/cowork-plaza-uno.webp",
        alt: {
          es: "Espacio de Zentra Plaza — fotos de la habitación quíntuple próximamente",
          en: "Zentra Plaza space — quintuple room photos coming soon",
        },
      },
    ],
    image: "/images/plaza/cowork-plaza-uno.webp",
    imageAlt: {
      es: "Espacio de Zentra Plaza — fotos de la habitación quíntuple próximamente",
      en: "Zentra Plaza space — quintuple room photos coming soon",
    },
    bookable: false,
    pending: true,
  },

  // ── Zentra San José ───────────────────────────────────────────
  {
    slug: "sanjose-individual",
    sede: "san-jose",
    name: { es: "Habitación individual", en: "Single room" },
    category: { es: "Descanso esencial", en: "Essential rest" },
    tagline: { es: "Ambiente ejecutivo y silencioso.", en: "Quiet, executive setting." },
    description: {
      es: "Cuarto compacto en un ambiente ejecutivo tranquilo, con blackout y Wi-Fi 5G de alta velocidad. Ideal para consultores y viajeros de trabajo que buscan descanso real.",
      en: "Compact room in a quiet executive setting, with blackout curtains and high-speed 5G Wi-Fi. Ideal for consultants and work travelers who want real rest.",
    },
    capacity: { es: "1 persona", en: "1 person" },
    detail: { es: "1 cama (1.5 plazas)", en: "1 bed (twin)" },
    size: { es: "12 m²", en: "12 m²" },
    view: { es: "Ambiente silencioso", en: "Quiet setting" },
    amenities: standardAmenities,
    gallery: [
      {
        src: "/images/room-individual.jpg",
        alt: {
          es: "Habitación individual con cama de 1.5 plazas y ropa de cama blanca",
          en: "Single room with twin bed and white linens",
        },
      },
    ],
    image: "/images/room-individual.jpg",
    imageAlt: {
      es: "Habitación individual de Zentra San José",
      en: "Zentra San José single room",
    },
    bookable: true,
  },
  {
    slug: "sanjose-matrimonial",
    sede: "san-jose",
    name: { es: "Habitación matrimonial", en: "Queen room" },
    category: { es: "En pareja", en: "For couples" },
    tagline: {
      es: "Ejecutiva, silenciosa y con blackout.",
      en: "Executive, quiet, with blackout curtains.",
    },
    description: {
      es: "Cama de dos plazas en un ambiente ejecutivo pensado para proyectos técnicos y estadías largas. Cortinas blackout, escritorio y Wi-Fi 5G de alta velocidad.",
      en: "Queen bed in an executive setting for technical projects and long stays. Blackout curtains, desk, and high-speed 5G Wi-Fi.",
    },
    capacity: { es: "2 personas", en: "2 people" },
    detail: { es: "1 cama (2 plazas)", en: "1 bed (queen)" },
    size: { es: "16 m²", en: "16 m²" },
    view: { es: "Ambiente silencioso", en: "Quiet setting" },
    amenities: [...standardAmenities, AMENITY_COFFEE],
    gallery: [
      {
        src: "/images/sanjose/hab-matrimonial.webp",
        alt: {
          es: "Habitación matrimonial ejecutiva de Zentra San José",
          en: "Zentra San José executive queen room",
        },
      },
    ],
    image: "/images/sanjose/hab-matrimonial.webp",
    imageAlt: {
      es: "Habitación matrimonial ejecutiva de Zentra San José",
      en: "Zentra San José executive queen room",
    },
    bookable: true,
  },
  {
    slug: "sanjose-doble",
    sede: "san-jose",
    name: { es: "Habitación doble", en: "Double room" },
    category: { es: "Para tres", en: "For three" },
    tagline: {
      es: "Equipos técnicos, sin apretujar.",
      en: "Technical teams, without squeezing.",
    },
    description: {
      es: "Cama matrimonial más una individual en un ambiente ejecutivo silencioso, con espacios comunes cercanos para reuniones. Perfecta para equipos técnicos en estadías largas.",
      en: "Queen bed plus a twin in a quiet executive setting, with nearby common spaces for meetings. Perfect for technical teams on long stays.",
    },
    capacity: { es: "3 personas", en: "3 people" },
    detail: {
      es: "1 cama (2 plazas) + 1 cama (1.5 plazas)",
      en: "1 queen bed + 1 twin bed",
    },
    size: { es: "22 m²", en: "22 m²" },
    view: { es: "Ambiente silencioso", en: "Quiet setting" },
    amenities: [...standardAmenities, AMENITY_COFFEE],
    gallery: [
      {
        src: "/images/sanjose/hab-doble.webp",
        alt: {
          es: "Habitación doble con dos camas y luz natural en Zentra San José",
          en: "Double room with two beds and natural light at Zentra San José",
        },
      },
      {
        src: "/images/sanjose/comedor.webp",
        alt: {
          es: "Espacios comunes disponibles para huéspedes",
          en: "Common spaces available for guests",
        },
      },
    ],
    image: "/images/sanjose/hab-doble.webp",
    imageAlt: {
      es: "Habitación doble de Zentra San José",
      en: "Zentra San José double room",
    },
    bookable: true,
  },
  {
    slug: "sanjose-triple",
    sede: "san-jose",
    name: { es: "Habitación triple", en: "Triple room" },
    category: { es: "Grupos", en: "Groups" },
    tagline: {
      es: "Para grupos de tres, sin separar habitaciones.",
      en: "For groups of three, without splitting rooms.",
    },
    description: {
      es: "Habitación pensada para grupos de tres personas. Estamos terminando de fotografiar y documentar esta ficha — escríbenos por WhatsApp y te confirmamos disponibilidad y tarifa al instante.",
      en: "Room designed for groups of three. We're finishing photographing and documenting this listing — message us on WhatsApp and we'll confirm availability and rate instantly.",
    },
    capacity: { es: "3 personas", en: "3 people" },
    detail: { es: "Detalle de camas: por confirmar", en: "Bed setup: to be confirmed" },
    gallery: [
      {
        src: "/images/sanjose/comedor.webp",
        alt: {
          es: "Zona común de Zentra San José — fotos de la habitación triple próximamente",
          en: "Zentra San José common area — triple room photos coming soon",
        },
      },
    ],
    image: "/images/sanjose/comedor.webp",
    imageAlt: {
      es: "Zona común de Zentra San José — fotos de la habitación triple próximamente",
      en: "Zentra San José common area — triple room photos coming soon",
    },
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
