// Catálogo de promociones vigentes de la cadena Zentra Hotel + Nexus Cowork.
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import type { Promotion, PromotionSede } from "@/features/promotions/types";

export const sedeLabels: Record<PromotionSede, string> = {
  balta: "Zentra Balta",
  plaza: "Zentra Plaza",
  "san-jose": "Zentra San José",
  nexus: "Nexus Cowork",
};

export const sedeShortLabels: Record<PromotionSede, string> = {
  balta: "Balta",
  plaza: "Plaza",
  "san-jose": "San José",
  nexus: "Nexus",
};

// Orden en el filtro (misma secuencia que en /empresa).
export const sedeOrder: PromotionSede[] = [
  "balta",
  "plaza",
  "san-jose",
  "nexus",
];

export const promotions: Promotion[] = [
  {
    slug: "balta-larga-estadia",
    sede: "balta",
    title: "Larga estadía Balta",
    tagline: "Tres noches, mejor tarifa.",
    description:
      "Descuento directo sobre la tarifa nocturna al reservar tres o más noches consecutivas en habitación ejecutiva. Ideal para consultores y auditores.",
    discount: "-20%",
    tags: ["Estadía 3+", "Habitación ejecutiva"],
    validUntil: "2026-08-31",
    cover: "/images/balta/hab-suite.webp",
    coverAlt: "Habitación ejecutiva de Zentra Balta con cama king y escritorio",
    code: "BALTA20",
    ctaLabel: "Reservar",
    ctaHref: siteConfig.bookingUrl,
    ctaExternal: true,
    conditions: [
      "Aplica en reservas directas desde web o WhatsApp",
      "Válido hasta el 31 · AGO — 2026",
      "No combinable con otros descuentos",
    ],
  },
  {
    slug: "balta-check-in-express",
    sede: "balta",
    title: "Bienvenida ejecutiva",
    tagline: "Llegas, firmas, subes.",
    description:
      "Check-in express en tres minutos, desayuno americano incluido y traslado de cortesía desde el aeropuerto para reservas de dos o más noches.",
    discount: "Traslado gratis",
    tags: ["Check-in 3 min", "Aeropuerto"],
    validUntil: "2026-09-30",
    cover: "/images/balta/hab-suite-dos.webp",
    coverAlt: "Interior de habitación de Zentra Balta con escritorio",
    ctaLabel: "Consultar por WhatsApp",
    ctaHref: buildWhatsAppUrl(
      "Hola, quiero información sobre la bienvenida ejecutiva de Zentra Balta.",
    ),
    ctaExternal: true,
    conditions: [
      "Aplica en reservas de 2+ noches",
      "Traslado sujeto a coordinación con recepción",
      "Válido hasta el 30 · SEP — 2026",
    ],
  },
  {
    slug: "plaza-semana-completa",
    sede: "plaza",
    title: "Semana en Plaza",
    tagline: "Siete noches, descanso amplio.",
    description:
      "Reserva siete o más noches en Zentra Plaza y accede a habitación con sala, jacuzzi disponible y desayuno buffet incluido cada día.",
    discount: "-25%",
    tags: ["Estadía 7+", "Jacuzzi"],
    validUntil: "2026-08-15",
    cover: "/images/plaza/cowork-plaza-tres.webp",
    coverAlt: "Habitación amplia con dos camas y zona de estudio en Zentra Plaza",
    code: "PLAZA25",
    ctaLabel: "Reservar",
    ctaHref: siteConfig.bookingUrl,
    ctaExternal: true,
    conditions: [
      "Estadía mínima 7 noches consecutivas",
      "Válido hasta el 15 · AGO — 2026",
      "Sujeto a disponibilidad de habitación con jacuzzi",
    ],
  },
  {
    slug: "plaza-domingo-cortesia",
    sede: "plaza",
    title: "Domingo cortesía",
    tagline: "Cinco noches y una de regalo.",
    description:
      "Al reservar cinco noches de lunes a viernes, el domingo va por cortesía de la casa. Extiende el viaje sin sumar factura.",
    discount: "1 noche gratis",
    tags: ["Fin de semana", "Estadía 5+"],
    validUntil: "2026-10-31",
    cover: "/images/plaza/individual.webp",
    coverAlt: "Habitación individual de Zentra Plaza con luz natural",
    code: "PLAZADOM",
    ctaLabel: "Reservar",
    ctaHref: siteConfig.bookingUrl,
    ctaExternal: true,
    conditions: [
      "Aplica de lun a vie con extensión al domingo",
      "No aplica en feriados largos",
      "Válido hasta el 31 · OCT — 2026",
    ],
  },
  {
    slug: "sanjose-workation",
    sede: "san-jose",
    title: "Workation San José",
    tagline: "Trabajar en calma, dormir mejor.",
    description:
      "Tarifa reducida para viajeros con trabajo remoto: habitación silenciosa con blackout, Wi-Fi 5G de alta velocidad y acceso a espacios comunes de reunión.",
    discount: "-30%",
    tags: ["Remoto", "Semana completa"],
    validUntil: "2026-09-15",
    cover: "/images/sanjose/hab-doble.webp",
    coverAlt: "Habitación doble ejecutiva de Zentra San José",
    code: "REMOTO30",
    ctaLabel: "Reservar",
    ctaHref: siteConfig.bookingUrl,
    ctaExternal: true,
    conditions: [
      "Reserva mínima de 5 noches",
      "Requiere validación de trabajo remoto por WhatsApp",
      "Válido hasta el 15 · SEP — 2026",
    ],
  },
  {
    slug: "sanjose-upgrade",
    sede: "san-jose",
    title: "Upgrade a matrimonial",
    tagline: "Habitación superior sin sumar factura.",
    description:
      "Reserva individual y recibe upgrade automático a matrimonial sujeto a disponibilidad al check-in. Aplica todos los días de la semana.",
    discount: "Upgrade cortesía",
    tags: ["Solo hoy", "Sujeto a disponibilidad"],
    validUntil: "2026-08-10",
    cover: "/images/sanjose/hab-matrimonial.webp",
    coverAlt: "Habitación matrimonial ejecutiva de Zentra San José",
    ctaLabel: "Consultar por WhatsApp",
    ctaHref: buildWhatsAppUrl(
      "Hola, quiero información sobre el upgrade cortesía en Zentra San José.",
    ),
    ctaExternal: true,
    conditions: [
      "Upgrade sujeto a disponibilidad al momento del check-in",
      "Aplica en reservas directas",
      "Válido hasta el 10 · AGO — 2026",
    ],
  },
  {
    slug: "nexus-primer-dia",
    sede: "nexus",
    title: "Primer día en Nexus",
    tagline: "Prueba el coworking sin costo.",
    description:
      "Primera jornada gratis en escritorio compartido para conocer las instalaciones. Café, infusiones e internet de fibra incluidos.",
    discount: "1 día gratis",
    tags: ["Escritorio compartido", "Prueba"],
    validUntil: "2026-12-31",
    cover: "/images/nexus/sala-a.webp",
    coverAlt: "Sala A de Nexus Cowork con estaciones de trabajo compartidas",
    code: "NEXUS1",
    ctaLabel: "Agendar visita",
    ctaHref: buildWhatsAppUrl(
      "Hola, quiero agendar mi primer día gratis en Nexus Cowork.",
    ),
    ctaExternal: true,
    conditions: [
      "Aplica una vez por persona",
      "Sujeto a disponibilidad de escritorio",
      "Válido hasta el 31 · DIC — 2026",
    ],
  },
  {
    slug: "nexus-sala-reuniones",
    sede: "nexus",
    title: "Sala de reuniones lunes",
    tagline: "Arranca la semana con descuento.",
    description:
      "Descuento en la reserva de sala de reuniones para 5 o 10 personas todos los lunes. Incluye smart TV, videoconferencia y pared pizarra.",
    discount: "-30%",
    tags: ["Solo lunes", "Sala 5 y 10 pax"],
    validUntil: "2026-11-30",
    cover: "/images/nexus/sala-b.webp",
    coverAlt: "Sala B de reuniones en Nexus Cowork",
    code: "LUNES30",
    ctaLabel: "Reservar sala",
    ctaHref: buildWhatsAppUrl(
      "Hola, quiero reservar una sala de reuniones en Nexus Cowork con el descuento de lunes.",
    ),
    ctaExternal: true,
    conditions: [
      "Aplica solo los lunes de 08:00 a 19:00",
      "Requiere confirmación por WhatsApp",
      "Válido hasta el 30 · NOV — 2026",
    ],
  },
];
