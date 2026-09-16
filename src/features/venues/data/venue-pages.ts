// Contenido de las tres páginas de sede: carrusel del hero, motor de reservas de la
// propiedad y mosaico de habitaciones.
//
// Las fotos de habitación definitivas aún no existen, así que el mosaico reutiliza y
// repite las imágenes disponibles de cada sede: al reemplazarlas basta cambiar `src`.
import type { VenuePage, VenueSlug } from "@/features/venues/types";

// Proporciones del mosaico. Se repiten en ciclo para que la grilla quede despareja
// (columnas CSS + alturas distintas = efecto masonry sin librería).
const ASPECTS = [
  "aspect-[3/4]",
  "aspect-[4/3]",
  "aspect-[4/5]",
  "aspect-[16/11]",
  "aspect-[1/1]",
  "aspect-[3/4]",
  "aspect-[4/3]",
  "aspect-[5/6]",
  "aspect-[16/10]",
];

// Tipos de habitación que rotan sobre las fotos disponibles.
const LABELS = [
  { es: "Habitación Clásica", en: "Classic Room" },
  { es: "Habitación Clásica", en: "Classic Room" },
  { es: "Habitación Clásica", en: "Classic Room" },
  { es: "Habitación Ejecutiva", en: "Executive Room" },
  { es: "Habitación Ejecutiva", en: "Executive Room" },
  { es: "Habitación Ejecutiva", en: "Executive Room" },
  { es: "Habitación Deluxe", en: "Deluxe Room" },
  { es: "Habitación Deluxe", en: "Deluxe Room" },
  { es: "Suite", en: "Suite" },
];

// Arma el mosaico repitiendo en bucle las fotos que hoy tiene la sede.
function buildRoomShots(venueName: string, sources: string[]) {
  return ASPECTS.map((aspect, index) => {
    const label = LABELS[index];
    return {
      id: `shot-${index + 1}`,
      src: sources[index % sources.length],
      alt: {
        es: `${label.es} de ${venueName}.`,
        en: `${label.en} at ${venueName}.`,
      },
      label,
      aspect,
    };
  });
}

export const venuePages: Record<VenueSlug, VenuePage> = {
  "sede-balta": {
    slug: "sede-balta",
    name: "Zentra Balta",
    propertyCode: "h4UU3o",
    address: "Calle Leoncio Prado 919, Chiclayo",
    metaDescription: {
      es: "Zentra Balta: habitaciones modernas junto a la zona comercial de Chiclayo. Reserva directo y ahorra.",
      en: "Zentra Balta: modern rooms next to the Chiclayo shopping district. Book direct and save.",
    },
    heroSlides: [
      {
        id: "balta-suite",
        image: "/images/balta/hab-suite.webp",
        alt: {
          es: "Suite de Zentra Balta con ambientación cálida.",
          en: "Zentra Balta suite with warm décor.",
        },
        title: { es: "Zentra Balta,", en: "Zentra Balta," },
        titleEmphasis: {
          es: "a un paso de todo.",
          en: "a step away from everything.",
        },
        subtitle: {
          es: "Leoncio Prado 919, en plena zona comercial de Chiclayo. Habitaciones modernas y recepción 24 horas.",
          en: "Leoncio Prado 919, right in the Chiclayo shopping district. Modern rooms and a 24-hour front desk.",
        },
      },
      {
        id: "balta-suite-dos",
        image: "/images/balta/hab-suite-dos.webp",
        alt: {
          es: "Habitación de Zentra Balta con cama matrimonial.",
          en: "Zentra Balta room with a double bed.",
        },
        title: { es: "Descansa bien,", en: "Rest well," },
        titleEmphasis: { es: "sal a la ciudad.", en: "then head into town." },
        subtitle: {
          es: "Camas amplias, blackout y Wi-Fi 5G para que cada noche rinda.",
          en: "Wide beds, blackout curtains and 5G Wi-Fi so every night counts.",
        },
      },
      {
        id: "balta-suite-002",
        image: "/images/balta/hab-suite-002.webp",
        alt: {
          es: "Detalle de la suite de Zentra Balta.",
          en: "Detail of the Zentra Balta suite.",
        },
        title: { es: "Suites pensadas", en: "Suites designed" },
        titleEmphasis: { es: "para celebrar.", en: "to celebrate." },
        subtitle: {
          es: "Ambientes amplios para una escapada, un aniversario o una estadía larga.",
          en: "Spacious rooms for a getaway, an anniversary or a long stay.",
        },
      },
      {
        id: "balta-comedor",
        image: "/images/balta/comedor.webp",
        alt: {
          es: "Comedor de Zentra Balta listo para el desayuno.",
          en: "Zentra Balta dining room ready for breakfast.",
        },
        title: { es: "Reserva directo", en: "Book direct" },
        titleEmphasis: { es: "en esta sede.", en: "at this location." },
        subtitle: {
          es: "Tarifa web garantizada, cancelación flexible y atención cercana las 24 horas.",
          en: "Guaranteed web rate, flexible cancellation and 24-hour personal service.",
        },
      },
    ],
    roomShots: buildRoomShots("Zentra Balta", [
      "/images/balta/hab-suite.webp",
      "/images/balta/hab-suite-dos.webp",
      "/images/balta/hab-suite-002.webp",
      "/images/room-matrimonial.jpg",
      "/images/balta/comedor.webp",
      "/images/room-individual.jpg",
      "/images/suite-jacuzzi.jpg",
    ]),
  },

  "sede-plaza": {
    slug: "sede-plaza",
    name: "Zentra Plaza",
    propertyCode: "6lEIN9",
    address: "Calle Elías Aguirre 520, Chiclayo",
    metaDescription: {
      es: "Zentra Plaza: hotel de estreno a metros de la catedral de Chiclayo. Reserva directo y ahorra.",
      en: "Zentra Plaza: brand-new hotel steps from the Chiclayo cathedral. Book direct and save.",
    },
    heroSlides: [
      {
        id: "plaza-lobby",
        image: "/images/plaza/cowork-plaza-uno.webp",
        alt: {
          es: "Lobby de Zentra Plaza con zona de estar.",
          en: "Zentra Plaza lobby with a lounge area.",
        },
        title: { es: "Zentra Plaza,", en: "Zentra Plaza," },
        titleEmphasis: {
          es: "frente al corazón de Chiclayo.",
          en: "facing the heart of Chiclayo.",
        },
        subtitle: {
          es: "Elías Aguirre 520, a metros de la catedral y la Plaza de Armas. Hotel de estreno.",
          en: "Elías Aguirre 520, steps from the cathedral and the main square. A brand-new hotel.",
        },
      },
      {
        id: "plaza-habitacion",
        image: "/images/plaza/habitacion-001.webp",
        alt: {
          es: "Habitación de Zentra Plaza con luz natural.",
          en: "Zentra Plaza room with natural light.",
        },
        title: { es: "Todo nuevo,", en: "Everything new," },
        titleEmphasis: { es: "todo a la mano.", en: "everything close by." },
        subtitle: {
          es: "Habitaciones de estreno, aire acondicionado y desayuno para empezar temprano.",
          en: "Brand-new rooms, air conditioning and breakfast to start the day early.",
        },
      },
      {
        id: "plaza-individual",
        image: "/images/plaza/individual.webp",
        alt: {
          es: "Habitación individual de Zentra Plaza.",
          en: "Single room at Zentra Plaza.",
        },
        title: { es: "Viaja por trabajo,", en: "Travel for work," },
        titleEmphasis: {
          es: "opera desde el primer minuto.",
          en: "operate from minute one.",
        },
        subtitle: {
          es: "Escritorio, Wi-Fi 5G y el centro financiero a cinco minutos caminando.",
          en: "Desk, 5G Wi-Fi and the financial district a five-minute walk away.",
        },
      },
      {
        id: "plaza-cowork",
        image: "/images/plaza/cowork-plaza-tres.webp",
        alt: {
          es: "Zona de trabajo compartida en Zentra Plaza.",
          en: "Shared work area at Zentra Plaza.",
        },
        title: { es: "Reserva directo", en: "Book direct" },
        titleEmphasis: { es: "en esta sede.", en: "at this location." },
        subtitle: {
          es: "Tarifa web garantizada, cancelación flexible y atención cercana las 24 horas.",
          en: "Guaranteed web rate, flexible cancellation and 24-hour personal service.",
        },
      },
    ],
    roomShots: buildRoomShots("Zentra Plaza", [
      "/images/plaza/habitacion-001.webp",
      "/images/plaza/individual.webp",
      "/images/plaza/cowork-plaza-uno.webp",
      "/images/plaza/cowork-plaza-tres.webp",
      "/images/plaza/cowork-plaza-cuatro.webp",
      "/images/room-doble.jpg",
      "/images/zen-room2.webp",
    ]),
  },

  "sede-san-jose": {
    slug: "sede-san-jose",
    name: "Zentra San José",
    propertyCode: "NXhCN9",
    address: "Calle San José 554, Chiclayo",
    metaDescription: {
      es: "Zentra San José: habitaciones amplias cerca a la catedral de Chiclayo. Reserva directo y ahorra.",
      en: "Zentra San José: spacious rooms near the Chiclayo cathedral. Book direct and save.",
    },
    heroSlides: [
      {
        id: "sanjose-matrimonial",
        image: "/images/sanjose/hab-matrimonial.webp",
        alt: {
          es: "Habitación matrimonial de Zentra San José.",
          en: "Double room at Zentra San José.",
        },
        title: { es: "Zentra San José,", en: "Zentra San José," },
        titleEmphasis: {
          es: "el descanso con más espacio.",
          en: "rest with more room.",
        },
        subtitle: {
          es: "San José 554, a pocos pasos de la catedral. Habitaciones amplias y luminosas.",
          en: "San José 554, a few steps from the cathedral. Spacious, bright rooms.",
        },
      },
      {
        id: "sanjose-doble",
        image: "/images/sanjose/hab-doble.webp",
        alt: {
          es: "Habitación doble de Zentra San José.",
          en: "Twin room at Zentra San José.",
        },
        title: { es: "Para dos,", en: "For two," },
        titleEmphasis: {
          es: "para el equipo entero.",
          en: "or for the whole team.",
        },
        subtitle: {
          es: "Dobles y matrimoniales con baño privado, aire acondicionado y Smart TV.",
          en: "Twin and double rooms with private bathroom, air conditioning and Smart TV.",
        },
      },
      {
        id: "sanjose-comedor",
        image: "/images/sanjose/comedor.webp",
        alt: {
          es: "Comedor de Zentra San José.",
          en: "Zentra San José dining room.",
        },
        title: { es: "Desayuna temprano,", en: "Have breakfast early," },
        titleEmphasis: { es: "sal con la ciudad.", en: "leave with the city." },
        subtitle: {
          es: "Museos, mercado y gastronomía lambayecana a la puerta del hotel.",
          en: "Museums, market and Lambayeque food right outside the door.",
        },
      },
      {
        id: "sanjose-comedor-001",
        image: "/images/sanjose/comedor-001.webp",
        alt: {
          es: "Zona común de Zentra San José.",
          en: "Common area at Zentra San José.",
        },
        title: { es: "Reserva directo", en: "Book direct" },
        titleEmphasis: { es: "en esta sede.", en: "at this location." },
        subtitle: {
          es: "Tarifa web garantizada, cancelación flexible y atención cercana las 24 horas.",
          en: "Guaranteed web rate, flexible cancellation and 24-hour personal service.",
        },
      },
    ],
    roomShots: buildRoomShots("Zentra San José", [
      "/images/sanjose/hab-matrimonial.webp",
      "/images/sanjose/hab-doble.webp",
      "/images/sanjose/comedor.webp",
      "/images/sanjose/comedor-001.webp",
      "/images/room-doble.jpg",
      "/images/zen-room3.webp",
      "/images/room-matrimonial.jpg",
    ]),
  },
};

export const venuePageSlugs = Object.keys(venuePages) as VenueSlug[];
