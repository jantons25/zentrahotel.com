// Catálogo de promociones vigentes de la cadena Zentra Hotel + Nexus Cowork.
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import type { Promotion, PromotionSede } from "@/features/promotions/types";
import type { LocalizedString } from "@/lib/i18n-pick";

export const sedeLabels: Record<PromotionSede, LocalizedString> = {
  balta: { es: "Zentra Balta", en: "Zentra Balta" },
  plaza: { es: "Zentra Plaza", en: "Zentra Plaza" },
  "san-jose": { es: "Zentra San José", en: "Zentra San José" },
  nexus: { es: "Nexus Cowork", en: "Nexus Cowork" },
};

export const sedeShortLabels: Record<PromotionSede, LocalizedString> = {
  balta: { es: "Balta", en: "Balta" },
  plaza: { es: "Plaza", en: "Plaza" },
  "san-jose": { es: "San José", en: "San José" },
  nexus: { es: "Nexus", en: "Nexus" },
};

// Orden en el filtro (misma secuencia que en /empresa).
export const sedeOrder: PromotionSede[] = [
  "balta",
  "plaza",
  "san-jose",
  "nexus",
];

const bookingHref: LocalizedString = {
  es: siteConfig.bookingUrl,
  en: siteConfig.bookingUrl,
};

export const promotions: Promotion[] = [
  {
    slug: "balta-larga-estadia",
    sede: "balta",
    title: { es: "Larga estadía Balta", en: "Long stay at Balta" },
    tagline: { es: "Tres noches, mejor tarifa.", en: "Three nights, best rate." },
    description: {
      es: "Descuento directo sobre la tarifa nocturna al reservar tres o más noches consecutivas en habitación ejecutiva. Ideal para consultores y auditores.",
      en: "Direct discount on the nightly rate when booking three or more consecutive nights in an executive room. Ideal for consultants and auditors.",
    },
    discount: { es: "-20%", en: "-20%" },
    tags: [
      { es: "Estadía 3+", en: "Stay 3+" },
      { es: "Habitación ejecutiva", en: "Executive room" },
    ],
    validUntil: "2026-08-31",
    cover: "/images/balta/hab-suite.webp",
    coverAlt: {
      es: "Habitación ejecutiva de Zentra Balta con cama king y escritorio",
      en: "Zentra Balta executive room with king bed and desk",
    },
    code: "BALTA20",
    ctaLabel: { es: "Reservar", en: "Book" },
    ctaHref: bookingHref,
    ctaExternal: true,
    conditions: [
      { es: "Aplica en reservas directas desde web o WhatsApp", en: "Applies to direct bookings via web or WhatsApp" },
      { es: "Válido hasta el 31 · AGO — 2026", en: "Valid until Aug 31 — 2026" },
      { es: "No combinable con otros descuentos", en: "Cannot be combined with other discounts" },
    ],
  },
  {
    slug: "balta-check-in-express",
    sede: "balta",
    title: { es: "Bienvenida ejecutiva", en: "Executive welcome" },
    tagline: { es: "Llegas, firmas, subes.", en: "Arrive, sign, head up." },
    description: {
      es: "Check-in express en tres minutos, desayuno americano incluido y traslado de cortesía desde el aeropuerto para reservas de dos o más noches.",
      en: "Three-minute express check-in, American breakfast included, and complimentary airport pickup for bookings of two or more nights.",
    },
    discount: { es: "Traslado gratis", en: "Free transfer" },
    tags: [
      { es: "Check-in 3 min", en: "3 min check-in" },
      { es: "Aeropuerto", en: "Airport" },
    ],
    validUntil: "2026-09-30",
    cover: "/images/balta/hab-suite-dos.webp",
    coverAlt: {
      es: "Interior de habitación de Zentra Balta con escritorio",
      en: "Interior of a Zentra Balta room with a desk",
    },
    ctaLabel: { es: "Consultar por WhatsApp", en: "Ask on WhatsApp" },
    ctaHref: {
      es: buildWhatsAppUrl("Hola, quiero información sobre la bienvenida ejecutiva de Zentra Balta."),
      en: buildWhatsAppUrl("Hi, I'd like info on the Zentra Balta executive welcome."),
    },
    ctaExternal: true,
    conditions: [
      { es: "Aplica en reservas de 2+ noches", en: "Applies to 2+ night bookings" },
      { es: "Traslado sujeto a coordinación con recepción", en: "Transfer subject to coordination with reception" },
      { es: "Válido hasta el 30 · SEP — 2026", en: "Valid until Sep 30 — 2026" },
    ],
  },
  {
    slug: "plaza-semana-completa",
    sede: "plaza",
    title: { es: "Semana en Plaza", en: "Week at Plaza" },
    tagline: { es: "Siete noches, descanso amplio.", en: "Seven nights, ample rest." },
    description: {
      es: "Reserva siete o más noches en Zentra Plaza y accede a habitación con sala, jacuzzi disponible y desayuno buffet incluido cada día.",
      en: "Book seven or more nights at Zentra Plaza and get a room with a lounge area, jacuzzi available, and buffet breakfast every day.",
    },
    discount: { es: "-25%", en: "-25%" },
    tags: [
      { es: "Estadía 7+", en: "Stay 7+" },
      { es: "Jacuzzi", en: "Jacuzzi" },
    ],
    validUntil: "2026-08-15",
    cover: "/images/plaza/cowork-plaza-tres.webp",
    coverAlt: {
      es: "Habitación amplia con dos camas y zona de estudio en Zentra Plaza",
      en: "Spacious room with two beds and a work area at Zentra Plaza",
    },
    code: "PLAZA25",
    ctaLabel: { es: "Reservar", en: "Book" },
    ctaHref: bookingHref,
    ctaExternal: true,
    conditions: [
      { es: "Estadía mínima 7 noches consecutivas", en: "Minimum stay of 7 consecutive nights" },
      { es: "Válido hasta el 15 · AGO — 2026", en: "Valid until Aug 15 — 2026" },
      { es: "Sujeto a disponibilidad de habitación con jacuzzi", en: "Subject to availability of jacuzzi room" },
    ],
  },
  {
    slug: "plaza-domingo-cortesia",
    sede: "plaza",
    title: { es: "Domingo cortesía", en: "Complimentary Sunday" },
    tagline: { es: "Cinco noches y una de regalo.", en: "Five nights and one on us." },
    description: {
      es: "Al reservar cinco noches de lunes a viernes, el domingo va por cortesía de la casa. Extiende el viaje sin sumar factura.",
      en: "Book five nights Monday through Friday and Sunday is on the house. Extend your trip without extending the bill.",
    },
    discount: { es: "1 noche gratis", en: "1 night free" },
    tags: [
      { es: "Fin de semana", en: "Weekend" },
      { es: "Estadía 5+", en: "Stay 5+" },
    ],
    validUntil: "2026-10-31",
    cover: "/images/plaza/individual.webp",
    coverAlt: {
      es: "Habitación individual de Zentra Plaza con luz natural",
      en: "Zentra Plaza single room with natural light",
    },
    code: "PLAZADOM",
    ctaLabel: { es: "Reservar", en: "Book" },
    ctaHref: bookingHref,
    ctaExternal: true,
    conditions: [
      { es: "Aplica de lun a vie con extensión al domingo", en: "Applies Mon–Fri with Sunday extension" },
      { es: "No aplica en feriados largos", en: "Does not apply on long holidays" },
      { es: "Válido hasta el 31 · OCT — 2026", en: "Valid until Oct 31 — 2026" },
    ],
  },
  {
    slug: "sanjose-workation",
    sede: "san-jose",
    title: { es: "Workation San José", en: "San José workation" },
    tagline: { es: "Trabajar en calma, dormir mejor.", en: "Work calm, sleep better." },
    description: {
      es: "Tarifa reducida para viajeros con trabajo remoto: habitación silenciosa con blackout, Wi-Fi 5G de alta velocidad y acceso a espacios comunes de reunión.",
      en: "Reduced rate for remote-work travelers: quiet blackout room, high-speed 5G Wi-Fi, and access to shared meeting spaces.",
    },
    discount: { es: "-30%", en: "-30%" },
    tags: [
      { es: "Remoto", en: "Remote" },
      { es: "Semana completa", en: "Full week" },
    ],
    validUntil: "2026-09-15",
    cover: "/images/sanjose/hab-doble.webp",
    coverAlt: {
      es: "Habitación doble ejecutiva de Zentra San José",
      en: "Zentra San José executive double room",
    },
    code: "REMOTO30",
    ctaLabel: { es: "Reservar", en: "Book" },
    ctaHref: bookingHref,
    ctaExternal: true,
    conditions: [
      { es: "Reserva mínima de 5 noches", en: "Minimum 5-night booking" },
      { es: "Requiere validación de trabajo remoto por WhatsApp", en: "Requires remote-work validation via WhatsApp" },
      { es: "Válido hasta el 15 · SEP — 2026", en: "Valid until Sep 15 — 2026" },
    ],
  },
  {
    slug: "sanjose-upgrade",
    sede: "san-jose",
    title: { es: "Upgrade a matrimonial", en: "Upgrade to queen" },
    tagline: {
      es: "Habitación superior sin sumar factura.",
      en: "A better room without a bigger bill.",
    },
    description: {
      es: "Reserva individual y recibe upgrade automático a matrimonial sujeto a disponibilidad al check-in. Aplica todos los días de la semana.",
      en: "Book a single and get an automatic upgrade to a queen, subject to availability at check-in. Applies every day of the week.",
    },
    discount: { es: "Upgrade cortesía", en: "Complimentary upgrade" },
    tags: [
      { es: "Solo hoy", en: "Today only" },
      { es: "Sujeto a disponibilidad", en: "Subject to availability" },
    ],
    validUntil: "2026-08-10",
    cover: "/images/sanjose/hab-matrimonial.webp",
    coverAlt: {
      es: "Habitación matrimonial ejecutiva de Zentra San José",
      en: "Zentra San José executive queen room",
    },
    ctaLabel: { es: "Consultar por WhatsApp", en: "Ask on WhatsApp" },
    ctaHref: {
      es: buildWhatsAppUrl("Hola, quiero información sobre el upgrade cortesía en Zentra San José."),
      en: buildWhatsAppUrl("Hi, I'd like info on the complimentary upgrade at Zentra San José."),
    },
    ctaExternal: true,
    conditions: [
      { es: "Upgrade sujeto a disponibilidad al momento del check-in", en: "Upgrade subject to availability at check-in" },
      { es: "Aplica en reservas directas", en: "Applies to direct bookings" },
      { es: "Válido hasta el 10 · AGO — 2026", en: "Valid until Aug 10 — 2026" },
    ],
  },
  {
    slug: "nexus-primer-dia",
    sede: "nexus",
    title: { es: "Primer día en Nexus", en: "First day at Nexus" },
    tagline: { es: "Prueba el coworking sin costo.", en: "Try coworking at no cost." },
    description: {
      es: "Primera jornada gratis en escritorio compartido para conocer las instalaciones. Café, infusiones e internet de fibra incluidos.",
      en: "First day free at a shared desk to try the space. Coffee, tea, and fiber internet included.",
    },
    discount: { es: "1 día gratis", en: "1 day free" },
    tags: [
      { es: "Escritorio compartido", en: "Shared desk" },
      { es: "Prueba", en: "Trial" },
    ],
    validUntil: "2026-12-31",
    cover: "/images/nexus/sala-a.webp",
    coverAlt: {
      es: "Sala A de Nexus Cowork con estaciones de trabajo compartidas",
      en: "Nexus Cowork Room A with shared workstations",
    },
    code: "NEXUS1",
    ctaLabel: { es: "Agendar visita", en: "Schedule a visit" },
    ctaHref: {
      es: buildWhatsAppUrl("Hola, quiero agendar mi primer día gratis en Nexus Cowork."),
      en: buildWhatsAppUrl("Hi, I'd like to schedule my free first day at Nexus Cowork."),
    },
    ctaExternal: true,
    conditions: [
      { es: "Aplica una vez por persona", en: "One per person" },
      { es: "Sujeto a disponibilidad de escritorio", en: "Subject to desk availability" },
      { es: "Válido hasta el 31 · DIC — 2026", en: "Valid until Dec 31 — 2026" },
    ],
  },
  {
    slug: "nexus-sala-reuniones",
    sede: "nexus",
    title: { es: "Sala de reuniones lunes", en: "Monday meeting room" },
    tagline: { es: "Arranca la semana con descuento.", en: "Kick off the week with a discount." },
    description: {
      es: "Descuento en la reserva de sala de reuniones para 5 o 10 personas todos los lunes. Incluye smart TV, videoconferencia y pared pizarra.",
      en: "Discount on meeting-room bookings for 5 or 10 people every Monday. Includes smart TV, video conferencing, and whiteboard wall.",
    },
    discount: { es: "-30%", en: "-30%" },
    tags: [
      { es: "Solo lunes", en: "Mondays only" },
      { es: "Sala 5 y 10 pax", en: "Rooms for 5 and 10 pax" },
    ],
    validUntil: "2026-11-30",
    cover: "/images/nexus/sala-b.webp",
    coverAlt: {
      es: "Sala B de reuniones en Nexus Cowork",
      en: "Nexus Cowork meeting room B",
    },
    code: "LUNES30",
    ctaLabel: { es: "Reservar sala", en: "Book room" },
    ctaHref: {
      es: buildWhatsAppUrl("Hola, quiero reservar una sala de reuniones en Nexus Cowork con el descuento de lunes."),
      en: buildWhatsAppUrl("Hi, I'd like to book a Nexus Cowork meeting room with the Monday discount."),
    },
    ctaExternal: true,
    conditions: [
      { es: "Aplica solo los lunes de 08:00 a 19:00", en: "Applies only Mondays from 08:00 to 19:00" },
      { es: "Requiere confirmación por WhatsApp", en: "Requires confirmation via WhatsApp" },
      { es: "Válido hasta el 30 · NOV — 2026", en: "Valid until Nov 30 — 2026" },
    ],
  },
];
