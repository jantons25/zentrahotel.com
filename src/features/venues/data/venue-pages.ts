// Contenido de las tres páginas de sede: carrusel del hero, motor de reservas de la
// propiedad y mosaico de habitaciones.
//
// Las fotos de habitación definitivas aún no existen, así que el mosaico reutiliza y
// repite las imágenes disponibles de cada sede: al reemplazarlas basta cambiar `src`.
import type {
  VenueAmenityKey,
  VenuePage,
  VenueRoomShot,
  VenueRoomType,
  VenueSlug,
} from "@/features/venues/types";

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

// Servicios reutilizables entre tipos de habitación (clave + etiqueta bilingüe).
const AMENITIES: Record<
  VenueAmenityKey,
  { key: VenueAmenityKey; label: { es: string; en: string } }
> = {
  wifi: {
    key: "wifi",
    label: {
      es: "Wi-Fi en toda la habitación",
      en: "Wi-Fi throughout the room",
    },
  },
  ac: {
    key: "ac",
    label: { es: "Aire acondicionado", en: "Air conditioning" },
  },
  tv: { key: "tv", label: { es: "Smart TV", en: "Smart TV" } },
  bath: {
    key: "bath",
    label: { es: "Baño privado con ducha", en: "Private bathroom with shower" },
  },
  desk: {
    key: "desk",
    label: { es: "Escritorio de trabajo", en: "Work desk" },
  },
  coffee: {
    key: "coffee",
    label: { es: "Café e infusiones", en: "Coffee and tea" },
  },
  breakfast: {
    key: "breakfast",
    label: { es: "Desayuno incluido", en: "Breakfast included" },
  },
  bed: {
    key: "bed",
    label: { es: "Ropa de cama premium", en: "Premium bedding" },
  },
  sparkles: {
    key: "sparkles",
    label: { es: "Limpieza diaria", en: "Daily housekeeping" },
  },
};

const amenityList = (...keys: VenueAmenityKey[]) =>
  keys.map((key) => AMENITIES[key]);

// Tipos de habitación del mosaico. `slots` define cuántas fotos de la grilla
// corresponden a cada tipo (suman los 9 huecos de ASPECTS).
const ROOM_TYPES = [
  {
    id: "clasica",
    slots: 3,
    icon: "bed" as VenueAmenityKey,
    name: { es: "Habitación Clásica", en: "Classic Room" },
    description: {
      es: "El descanso esencial de Zentra: cama bien vestida, baño privado y todo lo necesario para llegar, soltar la maleta y dormir tranquilo.",
      en: "Zentra's essential rest: a well-made bed, private bathroom and everything you need to arrive, drop your bag and sleep well.",
    },
    amenities: amenityList("bed", "ac", "wifi", "tv", "bath"),
  },
  {
    id: "ejecutiva",
    slots: 3,
    icon: "desk" as VenueAmenityKey,
    name: { es: "Habitación Ejecutiva", en: "Executive Room" },
    description: {
      es: "Pensada para viajes de trabajo, con escritorio, aire acondicionado y Wi-Fi en toda la habitación.",
      en: "Designed for business trips, with a work desk, air conditioning and Wi-Fi throughout the room.",
    },
    amenities: amenityList("desk", "ac", "wifi", "tv", "bath"),
  },
  {
    id: "deluxe",
    slots: 2,
    icon: "sparkles" as VenueAmenityKey,
    name: { es: "Habitación Deluxe", en: "Deluxe Room" },
    description: {
      es: "Más espacio y mejores acabados para estadías largas: zona de estar, ropa de cama premium y limpieza diaria.",
      en: "More space and finer finishes for longer stays: a sitting area, premium bedding and daily housekeeping.",
    },
    amenities: amenityList("sparkles", "ac", "wifi", "tv", "coffee"),
  },
  {
    id: "suite",
    slots: 1,
    icon: "coffee" as VenueAmenityKey,
    name: { es: "Suite", en: "Suite" },
    description: {
      es: "La categoría más amplia de la sede, para celebrar o alargar el viaje sin apuros. Ambiente separado, desayuno incluido y atención 24 horas.",
      en: "The largest category at this location, to celebrate or extend your trip without rushing. Separate sitting area, breakfast included and 24-hour service.",
    },
    amenities: amenityList("coffee", "breakfast", "ac", "wifi", "bath"),
  },
];

// Mínimo de fotos por carrusel: si un tipo tiene menos huecos en el mosaico, se
// completa con el resto de fotos de la sede (las definitivas aún no existen).
const MIN_GALLERY = 4;

// Arma el mosaico y las fichas del modal repitiendo en bucle las fotos de la sede.
function buildRooms(venueName: string, sources: string[]) {
  const shots: VenueRoomShot[] = [];
  const roomTypes: VenueRoomType[] = [];
  let slot = 0;

  for (const type of ROOM_TYPES) {
    const ownSources: string[] = [];

    for (let i = 0; i < type.slots; i += 1, slot += 1) {
      const src = sources[slot % sources.length];
      ownSources.push(src);
      shots.push({
        id: `shot-${slot + 1}`,
        src,
        alt: {
          es: `${type.name.es} de ${venueName}.`,
          en: `${type.name.en} at ${venueName}.`,
        },
        label: type.name,
        aspect: ASPECTS[slot % ASPECTS.length],
        typeId: type.id,
      });
    }

    // Completa el carrusel con las demás fotos de la sede hasta el mínimo.
    const gallerySources = [...ownSources];
    for (const src of sources) {
      if (gallerySources.length >= MIN_GALLERY) break;
      if (!gallerySources.includes(src)) gallerySources.push(src);
    }

    roomTypes.push({
      id: type.id,
      name: type.name,
      description: type.description,
      icon: type.icon,
      amenities: type.amenities,
      images: gallerySources.map((src) => ({
        src,
        alt: {
          es: `${type.name.es} de ${venueName}.`,
          en: `${type.name.en} at ${venueName}.`,
        },
      })),
    });
  }

  return { roomShots: shots, roomTypes };
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
    ...buildRooms("Zentra Balta", [
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
    ...buildRooms("Zentra Plaza", [
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
    ...buildRooms("Zentra San José", [
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
