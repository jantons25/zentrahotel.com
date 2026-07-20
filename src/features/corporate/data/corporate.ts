// Contenido estructurado de la landing corporativa (sedes, sectores, beneficios, formulario).
import type { LucideIcon } from "lucide-react";
import {
  Award,
  BedDouble,
  Briefcase,
  Building2,
  Cable,
  ClipboardList,
  Coffee,
  Factory,
  Handshake,
  HardHat,
  LayoutGrid,
  Leaf,
  LineChart,
  MapPin,
  MoonStar,
  Mountain,
  Presentation,
  ScrollText,
  ShoppingBag,
  Signal,
  TicketPercent,
  Timer,
  TrendingDown,
  Truck,
  UserCog,
  Users,
  Wifi,
  Zap,
} from "lucide-react";

import type { LocalizedString } from "@/lib/i18n-pick";

export interface CorporateHeroKpi {
  label: LocalizedString;
  detail: LocalizedString;
  icon: LucideIcon;
  href?: string;
}

export const corporateHeroKpis: readonly CorporateHeroKpi[] = [
  { label: { es: "3 hoteles", en: "3 hotels" }, detail: { es: "", en: "" }, icon: Building2 },
  { label: { es: "1 coworking", en: "1 coworking" }, detail: { es: "", en: "" }, icon: Handshake },
  { label: { es: "Tarifas Corporativas", en: "Corporate Rates" }, detail: { es: "", en: "" }, icon: Wifi },
  { label: { es: "Brochure", en: "Brochure" }, detail: { es: "", en: "" }, icon: Timer, href: "/docs/Brochure%20Zentra%20General.pdf" }
] as const;

export interface CorporateLocation {
  brand: "Zentra Hotel" | "Nexus Cowork";
  name: string;
  slug: string;
  tagline: LocalizedString;
  description: LocalizedString;
  image: string;
  imageAlt: LocalizedString;
  features: LocalizedString[];
  stats: {
    capacity: { icon: LucideIcon; label: LocalizedString };
    detail: { icon: LucideIcon; label: LocalizedString };
    location: { icon: LucideIcon; label: LocalizedString };
  };
}

export const corporateLocations: CorporateLocation[] = [
  {
    brand: "Zentra Hotel",
    name: "Zentra Plaza",
    slug: "plaza",
    tagline: { es: "Estadías largas", en: "Long stays" },
    description: {
      es: "Frente a la plaza principal, para equipos que se quedan una semana o más. Habitaciones amplias con espacio para trabajar.",
      en: "Facing the main square, for teams staying a week or more. Spacious rooms with space to work.",
    },
    image: "/images/plaza/cowork-plaza-tres.webp",
    imageAlt: {
      es: "Habitación de Zentra Plaza con dos camas y zona de estudio.",
      en: "Zentra Plaza room with two beds and a work area.",
    },
    features: [
      { es: "Habitaciones amplias con sala", en: "Spacious rooms with a lounge area" },
      { es: "Jacuzzi y ducha española", en: "Jacuzzi and rainfall shower" },
      { es: "Café e infusiones ilimitadas", en: "Unlimited coffee and tea" },
      { es: "Lavandería y factura electrónica", en: "Laundry and electronic invoicing" },
    ],
    stats: {
      location: { icon: MapPin, label: { es: "Elias Aguirre 520", en: "Elias Aguirre 520" } },
      detail: { icon: Timer, label: { es: "Cerca a la catedral", en: "Near the cathedral" } },
      capacity: { icon: BedDouble, label: { es: "Hotel de estreno", en: "Brand-new hotel" } },
    },
  },
  {
    brand: "Nexus Cowork",
    name: "Nexus Cowork",
    slug: "nexus",
    tagline: { es: "Oficina lista", en: "Office-ready" },
    description: {
      es: "Oficinas privadas, coworking y salas de reuniones 100% implementadas para trabajar sin interrupciones.",
      en: "Private offices, coworking, and fully equipped meeting rooms so your team works uninterrupted.",
    },
    image: "/images/nexus/sala-a-dos.webp",
    imageAlt: {
      es: "Sala de reuniones de Nexus Cowork con smart TV y pared pizarra.",
      en: "Nexus Cowork meeting room with smart TV and whiteboard wall.",
    },
    features: [
      { es: "Oficinas privadas para 1 a 12 personas", en: "Private offices for 1 to 12 people" },
      { es: "Salas de reuniones 5 y 10 personas", en: "Meeting rooms for 5 and 10 people" },
      { es: "Smart TV y videoconferencia", en: "Smart TV and video conferencing" },
      { es: "Soporte técnico especializado", en: "Specialized technical support" },
    ],
    stats: {
      location: { icon: MapPin, label: { es: "Balta 506", en: "Balta 506" } },
      detail: { icon: Timer, label: { es: "Centro Financiero", en: "Financial district" } },
      capacity: {
        icon: Presentation,
        label: { es: "Salas y oficinas equipadas", en: "Equipped rooms and offices" },
      },
    },
  },
  {
    brand: "Zentra Hotel",
    name: "Zentra San José",
    slug: "san-jose",
    tagline: { es: "Proyectos técnicos", en: "Technical projects" },
    description: {
      es: "Ambiente ejecutivo tranquilo para estadías largas. Perfecta para consultores, auditores y equipos técnicos.",
      en: "Quiet executive setting for long stays. Perfect for consultants, auditors, and technical teams.",
    },
    image: "/images/sanjose/hab-matrimonial.webp",
    imageAlt: {
      es: "Habitación ejecutiva individual de Zentra San José.",
      en: "Zentra San José executive single room.",
    },
    features: [
      { es: "WiFi 5G de alta velocidad", en: "High-speed 5G Wi-Fi" },
      { es: "Habitación silenciosa con blackout", en: "Quiet room with blackout curtains" },
      { es: "Espacios comunes para reuniones", en: "Common spaces for meetings" },
      { es: "Servicio 24 h y room service", en: "24-hour service and room service" },
    ],
    stats: {
      location: { icon: MapPin, label: { es: "San José 554", en: "San José 554" } },
      detail: { icon: Timer, label: { es: "Cerca a la catedral", en: "Near the cathedral" } },
      capacity: { icon: MoonStar, label: { es: "Habitaciones amplias", en: "Spacious rooms" } },
    },
  },
  {
    brand: "Zentra Hotel",
    name: "Zentra Balta",
    slug: "balta",
    tagline: { es: "Sede insignia", en: "Flagship location" },
    description: {
      es: "Sobre la Av. Balta, a pasos del centro financiero. Ideal para ejecutivos con agenda intensa.",
      en: "On Av. Balta, steps from the financial district. Ideal for executives with a packed agenda.",
    },
    image: "/images/balta/hab-suite.webp",
    imageAlt: {
      es: "Habitación ejecutiva de Zentra Balta con cama king y escritorio.",
      en: "Zentra Balta executive room with king bed and desk.",
    },
    features: [
      { es: "Habitaciones ejecutivas con escritorio", en: "Executive rooms with a desk" },
      { es: "Check-in express en 3 minutos", en: "Express check-in in 3 minutes" },
      { es: "Desayuno americano incluido", en: "American breakfast included" },
      { es: "Traslado al aeropuerto", en: "Airport transfer" },
    ],
    stats: {
      location: { icon: MapPin, label: { es: "Leoncio Prado 919", en: "Leoncio Prado 919" } },
      detail: {
        icon: Timer,
        label: {
          es: "Cerca a la Zona Comercial de Chiclayo",
          en: "Near Chiclayo's shopping district",
        },
      },
      capacity: { icon: BedDouble, label: { es: "Habitaciones modernas", en: "Modern rooms" } },
    },
  },
];

export interface CorporateProblem {
  number: string;
  icon: LucideIcon;
  title: LocalizedString;
  description: LocalizedString;
}

export const corporateProblems: readonly CorporateProblem[] = [
  {
    number: "01",
    icon: LineChart,
    title: { es: "Pérdida de productividad", en: "Lost productivity" },
    description: {
      es: "Viajar sin reservas expone a tu equipo a un menor rendimiento, debido a espacios deficientes y mal equipados.",
      en: "Traveling without bookings drops team performance through poor, ill-equipped spaces.",
    },
  },
  {
    number: "02",
    icon: TrendingDown,
    title: { es: "Mayor costo operativo", en: "Higher operating cost" },
    description: {
      es: "Los tiempos de desplazamiento entre el hotel y la oficina se facturan como horas productivas.",
      en: "Commute time between hotel and office ends up billed as productive hours.",
    },
  },
  {
    number: "03",
    icon: ClipboardList,
    title: { es: "Carga administrativa", en: "Admin overhead" },
    description: {
      es: "Tu equipo se ve en la necesidad de coordinar varias reservas y gestionar múltiples facturas.",
      en: "Your team ends up juggling multiple bookings and managing multiple invoices.",
    },
  },
  {
    number: "04",
    icon: LayoutGrid,
    title: { es: "Proveedores dispersos", en: "Scattered vendors" },
    description: {
      es: "Más proveedores, más riesgo de fallo, más coordinación y menos control sobre el presupuesto de viajes corporativos.",
      en: "More vendors, more failure points, more coordination, and less control over your corporate travel budget.",
    },
  },
] as const;

export interface CorporateFeature {
  icon: LucideIcon;
  label: LocalizedString;
}

export const corporateSolutionZentraFeatures: readonly CorporateFeature[] = [
  { icon: Building2, label: { es: "Habitaciones ejecutivas\ncon escritorio", en: "Executive rooms\nwith desk" } },
  { icon: Timer, label: { es: "Espacios de\ntrabajo", en: "Work\nspaces" } },
  { icon: Wifi, label: { es: "Internet continuo y de alta velocidad", en: "Reliable high-speed internet" } },
  { icon: Coffee, label: { es: "Desayuno\nBuffet", en: "Buffet\nbreakfast" } },
  { icon: Coffee, label: { es: "Café e infusiones\nilimitadas", en: "Unlimited coffee\nand tea" } },
  { icon: Building2, label: { es: "Frigobar\nincorporado", en: "In-room\nminibar" } },
  { icon: Timer, label: { es: "Ambientes modernos y\nseguros", en: "Modern and\nsafe spaces" } },
  { icon: Timer, label: { es: "Room Service\n24 horas", en: "24-hour\nroom service" } },
] as const;

export const corporateSolutionNexusFeatures: readonly CorporateFeature[] = [
  { icon: Briefcase, label: { es: "Oficinas\nprivadas", en: "Private\noffices" } },
  { icon: Users, label: { es: "Escritorios de trabajo\nen áreas compartidas", en: "Workstations in\nshared areas" } },
  { icon: Signal, label: { es: "Sala de reuniones\npara 7 y 10 personas", en: "Meeting rooms\nfor 7 and 10 people" } },
  { icon: UserCog, label: { es: "Aire\nacondicionado", en: "Air\nconditioning" } },
  { icon: Coffee, label: { es: "Comedor y\nKitchenette", en: "Dining area and\nkitchenette" } },
  { icon: Wifi, label: { es: "Internet de fibra óptica\ncon respaldo", en: "Fiber internet with\nbackup" } },
  { icon: Users, label: { es: "Soporte técnico\nespecializado", en: "Specialized technical\nsupport" } },
  { icon: Coffee, label: { es: "Café, infusiones y\nagua ilimitadas", en: "Unlimited coffee,\ntea, and water" } },
] as const;

export interface CorporateHubHighlight {
  value: string;
  label: LocalizedString;
}

export const corporateHubHighlights: readonly CorporateHubHighlight[] = [
  { value: "1", label: { es: "espacio cowork", en: "coworking space" } },
  { value: "1", label: { es: "factura consolidada", en: "consolidated invoice" } },
] as const;

export interface CorporateSector {
  label: LocalizedString;
  icon: LucideIcon;
}

export const corporateSectors: CorporateSector[] = [
  { label: { es: "Minería", en: "Mining" }, icon: Mountain },
  { label: { es: "Construcción e infraestructura", en: "Construction and infrastructure" }, icon: HardHat },
  { label: { es: "Telecomunicaciones", en: "Telecommunications" }, icon: Cable },
  { label: { es: "Energía y utilities", en: "Energy and utilities" }, icon: Zap },
  { label: { es: "Agroindustria", en: "Agribusiness" }, icon: Leaf },
  { label: { es: "Logística y distribución", en: "Logistics and distribution" }, icon: Truck },
  { label: { es: "Retail y consumo masivo", en: "Retail and consumer goods" }, icon: ShoppingBag },
  { label: { es: "Consultoría y servicios financieros", en: "Consulting and financial services" }, icon: Briefcase },
  { label: { es: "Industria manufacturera", en: "Manufacturing industry" }, icon: Factory },
];

export interface CorporateClient {
  name: string;
  logo: string;
}

export const corporateClients: CorporateClient[] = [
  { name: "Enazul", logo: "/images/empresas/Enazul.png" },
  { name: "Nexus Capital", logo: "/images/empresas/Nexus capital.png" },
  { name: "Perú Verde Citrus", logo: "/images/empresas/Perú verde.png" },
  { name: "Acuña Inmobiliaria", logo: "/images/empresas/acuña.png" },
  {
    name: "BBVA Comercializadora Corporativa",
    logo: "/images/empresas/bbva.png",
  },
  { name: "Innovate", logo: "/images/empresas/innovate.png" },
  { name: "Prime Fruits Perú", logo: "/images/empresas/prime fruits.png" },
  { name: "Grupo Quiola", logo: "/images/empresas/quiola.png" },
];

export interface CorporateBenefit {
  number: string;
  icon: LucideIcon;
  title: LocalizedString;
  description: LocalizedString;
}

export const corporateBenefits: readonly CorporateBenefit[] = [
  {
    number: "01",
    icon: TicketPercent,
    title: { es: "Tarifas corporativas preferenciales", en: "Preferred corporate rates" },
    description: {
      es: "Accede a tarifas diseñadas para equipos en desplazamiento frecuente, con condiciones que mejoran según el volumen de uso.",
      en: "Rates designed for teams that travel often, with terms that improve as usage grows.",
    },
  },
  {
    number: "02",
    icon: TrendingDown,
    title: { es: "Descuentos por volumen", en: "Volume discounts" },
    description: {
      es: "Mientras más viajes tu equipo, mejor la condición. La cadena Zentra escala tus ahorros mes a mes, sin renegociaciones.",
      en: "The more your team travels, the better the terms. Zentra scales your savings month over month — no renegotiation.",
    },
  },
  {
    number: "03",
    icon: Award,
    title: { es: "Acceso prioritario a espacios", en: "Priority access to spaces" },
    description: {
      es: "Habitaciones y salas de Nexus Cowork con disponibilidad garantizada para tu equipo, incluso en fechas de alta demanda.",
      en: "Rooms and Nexus Cowork spaces guaranteed for your team, even on high-demand dates.",
    },
  },
  {
    number: "04",
    icon: ScrollText,
    title: { es: "Ejecutivo de cuenta", en: "Account executive" },
    description: {
      es: "Un solo contacto humano que conoce tu operación: gestiona reservas, resuelve incidencias y consolida tu facturación.",
      en: "A single human contact who knows your operation: manages bookings, resolves issues, and consolidates your invoicing.",
    },
  },
] as const;

export interface CorporateGalleryItem {
  src: string;
  alt: LocalizedString;
  caption: LocalizedString;
  brand: "Zentra Hotel" | "Nexus Cowork";
}

export const corporateGallery: CorporateGalleryItem[] = [
  {
    src: "/images/plaza/individual.webp",
    alt: { es: "Habitación Individual.", en: "Single room." },
    caption: { es: "Zentra Plaza · Habitaciones", en: "Zentra Plaza · Rooms" },
    brand: "Zentra Hotel",
  },
  {
    src: "/images/plaza/cowork-plaza-uno.webp",
    alt: { es: "Suite Zentra con jacuzzi privado.", en: "Zentra suite with private jacuzzi." },
    caption: { es: "Zentra Plaza · Coworking integrado", en: "Zentra Plaza · Integrated coworking" },
    brand: "Zentra Hotel",
  },
  {
    src: "/images/nexus/sala-b.webp",
    alt: { es: "Sala de reuniones B", en: "Meeting room B" },
    caption: { es: "Nexus Cowork · Sala B", en: "Nexus Cowork · Room B" },
    brand: "Nexus Cowork",
  },
  {
    src: "/images/nexus/sala-flex.webp",
    alt: { es: "Espacio flex de trabajo corporativo.", en: "Flex corporate workspace." },
    caption: { es: "Nexus Cowork · Sala Flex", en: "Nexus Cowork · Flex room" },
    brand: "Nexus Cowork",
  },
  {
    src: "/images/balta/hab-suite-dos.webp",
    alt: {
      es: "Habitación ejecutiva de Zentra con cama matrimonial.",
      en: "Zentra executive room with queen bed.",
    },
    caption: { es: "Zentra Balta · Suite", en: "Zentra Balta · Suite" },
    brand: "Zentra Hotel",
  },
  {
    src: "/images/sanjose/comedor.webp",
    alt: { es: "Sala de comedor y coworking.", en: "Dining and coworking area." },
    caption: { es: "Zentra San José · Comedor", en: "Zentra San José · Dining area" },
    brand: "Zentra Hotel",
  },
];

export interface CorporatePlan {
  number: string;
  name: LocalizedString;
  rangeBadge: LocalizedString;
  features: LocalizedString[];
  featured?: boolean;
}

export const corporatePlans: readonly CorporatePlan[] = [
  {
    number: "01",
    name: { es: "Nivel Operativo", en: "Operational Tier" },
    rangeBadge: { es: "1–5 personas/mes", en: "1–5 people/mo" },
    features: [
      { es: "Habitación ejecutiva", en: "Executive room" },
      { es: "Desayuno incluido", en: "Breakfast included" },
      { es: "1 factura mensual consolidada", en: "1 consolidated monthly invoice" },
    ],
  },
  {
    number: "02",
    name: { es: "Nivel Equipo", en: "Team Tier" },
    rangeBadge: { es: "6–15 personas/mes", en: "6–15 people/mo" },
    features: [
      { es: "Todo lo del Nivel Operativo", en: "Everything in the Operational Tier" },
      { es: "Acceso a coworking compartido", en: "Access to shared coworking" },
      { es: "Tarifa preferencial escalonada", en: "Tiered preferential rates" },
    ],
  },
  {
    number: "03",
    name: { es: "Nivel Corporativo", en: "Corporate Tier" },
    rangeBadge: { es: "16–40 personas/mes", en: "16–40 people/mo" },
    features: [
      { es: "Todo lo del Nivel Equipo", en: "Everything in the Team Tier" },
      {
        es: "Horas de sala de reuniones incluidas al mes",
        en: "Meeting room hours included each month",
      },
      { es: "Prioridad de disponibilidad", en: "Priority availability" },
    ],
  },
  {
    number: "04",
    name: { es: "Nivel Enterprise", en: "Enterprise Tier" },
    rangeBadge: { es: "+40 personas/mes", en: "40+ people/mo" },
    featured: true,
    features: [
      { es: "Oficina privada en Nexus Cowork", en: "Private office at Nexus Cowork" },
      { es: "Ejecutivo de cuenta dedicado", en: "Dedicated account executive" },
      { es: "SLA de respuesta garantizado", en: "Guaranteed response SLA" },
      { es: "Condiciones a medida", en: "Tailored terms" },
    ],
  },
] as const;

export const corporateTravelFrequencyOptions: readonly LocalizedString[] = [
  { es: "1 a 5 personas al mes", en: "1 to 5 people per month" },
  { es: "6 a 15 personas al mes", en: "6 to 15 people per month" },
  { es: "16 a 40 personas al mes", en: "16 to 40 people per month" },
  { es: "Más de 40 personas al mes", en: "More than 40 people per month" },
] as const;

export const corporateSectorOptions: readonly LocalizedString[] = corporateSectors.map(
  (s) => s.label,
);

export const corporatePreferredLocations: readonly LocalizedString[] = [
  { es: "Sin preferencia", en: "No preference" },
  { es: "Zentra Balta", en: "Zentra Balta" },
  { es: "Zentra Plaza", en: "Zentra Plaza" },
  { es: "Zentra San José", en: "Zentra San José" },
  { es: "Todas las sedes", en: "All locations" },
] as const;
