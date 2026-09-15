// Promociones y ofertas especiales de la home (segunda sección).
//
// ⚠️ Tarifas de ejemplo: reemplazar `priceFrom` / `priceWeb` por las vigentes antes
// de publicar. Todo el resto del contenido ya corresponde a sedes y servicios reales.
import type { LocalizedString } from "@/lib/i18n-pick";

export interface SpecialOffer {
  id: string;
  /** Sede o marca que aparece en la etiqueta sobre la foto. */
  venue: string;
  /** Tono de la etiqueta: "primary" (oliva) o "secondary" (navy). */
  tone: "primary" | "secondary";
  image: string;
  alt: LocalizedString;
  /** Sello verde de campaña sobre la foto. */
  badge: LocalizedString;
  title: LocalizedString;
  /** Viñetas cortas de lo que incluye la tarifa. */
  includes: LocalizedString[];
  /** Tarifa lista (sin descuento) en soles. */
  priceFrom: number;
  /** Tarifa reservando directo en la web, en soles. */
  priceWeb: number;
  /** Código promocional asociado, si lo hay. */
  code?: string;
  /** Vigencia en formato ISO. */
  validUntil: string;
}

export const specialOffers: SpecialOffer[] = [
  {
    id: "balta-suite-jacuzzi",
    venue: "Zentra Balta",
    tone: "secondary",
    image: "/images/suite-jacuzzi.jpg",
    alt: {
      es: "Suite con jacuzzi privado en Zentra Balta.",
      en: "Suite with private jacuzzi at Zentra Balta.",
    },
    badge: { es: "Compra anticipada", en: "Early booking" },
    title: {
      es: "Suite con jacuzzi privado",
      en: "Suite with private jacuzzi",
    },
    includes: [
      { es: "Desayuno buffet incluido", en: "Buffet breakfast included" },
      { es: "Jacuzzi privado en la habitación", en: "In-room private jacuzzi" },
      {
        es: "Late check-out sujeto a disponibilidad",
        en: "Late check-out on request",
      },
    ],
    priceFrom: 289,
    priceWeb: 260,
    code: "ZENTRAWEB",
    validUntil: "2026-12-31T23:59:59-05:00",
  },
  {
    id: "velada-romantica",
    venue: "Experiencia Zen",
    tone: "primary",
    image: "/images/velada-romantica.webp",
    alt: {
      es: "Velada romántica preparada en la habitación.",
      en: "Romantic dinner set up in the room.",
    },
    badge: { es: "Paquete parejas", en: "Couples package" },
    title: {
      es: "Velada romántica en tu habitación",
      en: "Romantic night in your room",
    },
    includes: [
      {
        es: "Cena para dos servida en la suite",
        en: "Dinner for two served in the suite",
      },
      { es: "Decoración y ambientación cálida", en: "Warm décor and ambience" },
      { es: "Copa de bienvenida", en: "Welcome drink" },
    ],
    priceFrom: 349,
    priceWeb: 315,
    validUntil: "2026-12-31T23:59:59-05:00",
  },
  {
    id: "larga-estadia-plaza",
    venue: "Zentra Plaza",
    tone: "secondary",
    image: "/images/plaza/habitacion-001.webp",
    alt: {
      es: "Habitación amplia de Zentra Plaza con zona de trabajo.",
      en: "Spacious Zentra Plaza room with a work area.",
    },
    badge: { es: "5 noches o más", en: "5 nights or more" },
    title: {
      es: "Larga estadía frente a la Plaza",
      en: "Long stay by the main square",
    },
    includes: [
      { es: "Desayuno buffet incluido", en: "Buffet breakfast included" },
      { es: "Lavandería una vez por semana", en: "Weekly laundry service" },
      {
        es: "Escritorio y Wi-Fi 5G en la habitación",
        en: "Desk and 5G Wi-Fi in the room",
      },
    ],
    priceFrom: 199,
    priceWeb: 169,
    code: "ZENTRA5N",
    validUntil: "2026-12-31T23:59:59-05:00",
  },
  {
    id: "sanjose-doble",
    venue: "Zentra San José",
    tone: "secondary",
    image: "/images/sanjose/hab-doble.webp",
    alt: {
      es: "Habitación doble de Zentra San José.",
      en: "Double room at Zentra San José.",
    },
    badge: { es: "Tarifa web", en: "Web rate" },
    title: {
      es: "Doble a pasos de la catedral",
      en: "Double room steps from the cathedral",
    },
    includes: [
      { es: "Desayuno buffet incluido", en: "Buffet breakfast included" },
      { es: "Habitaciones amplias y silenciosas", en: "Spacious, quiet rooms" },
      { es: "Cancelación flexible", en: "Flexible cancellation" },
    ],
    priceFrom: 169,
    priceWeb: 149,
    code: "ZENTRAWEB",
    validUntil: "2026-12-31T23:59:59-05:00",
  },
  {
    id: "nexus-corporativo",
    venue: "Nexus Cowork",
    tone: "primary",
    image: "/images/nexus/sala-a.webp",
    alt: {
      es: "Sala de reuniones equipada en Nexus Cowork.",
      en: "Equipped meeting room at Nexus Cowork.",
    },
    badge: { es: "Convenio corporativo", en: "Corporate agreement" },
    title: {
      es: "Hospedaje + sala de reuniones",
      en: "Stay plus meeting room",
    },
    includes: [
      {
        es: "Habitación ejecutiva con desayuno",
        en: "Executive room with breakfast",
      },
      {
        es: "2 horas de sala equipada al día",
        en: "2 hours of equipped meeting room daily",
      },
      {
        es: "Factura a nombre de la empresa",
        en: "Invoice issued to your company",
      },
    ],
    priceFrom: 259,
    priceWeb: 229,
    validUntil: "2026-12-31T23:59:59-05:00",
  },
  {
    id: "zen-masajes",
    venue: "Experiencia Zen",
    tone: "primary",
    image: "/images/masajes.webp",
    alt: {
      es: "Ritual de masaje y aromaterapia en la suite.",
      en: "Massage and aromatherapy ritual in the suite.",
    },
    badge: { es: "Bienestar", en: "Wellness" },
    title: { es: "Noche + ritual de masajes", en: "Night plus massage ritual" },
    includes: [
      {
        es: "Masaje descontracturante de 50 minutos",
        en: "50-minute deep-tissue massage",
      },
      { es: "Aromaterapia e infusiones", en: "Aromatherapy and herbal teas" },
      {
        es: "Desayuno servido en la habitación",
        en: "Breakfast served in the room",
      },
    ],
    priceFrom: 299,
    priceWeb: 265,
    validUntil: "2026-12-31T23:59:59-05:00",
  },
];
