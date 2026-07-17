// Contenido estructurado de la landing corporativa (sedes, sectores, beneficios, formulario).
import type { LucideIcon } from "lucide-react";
import {
  Award,
  Bath,
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
  MonitorPlay,
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
  User,
  UserCog,
  Users,
  Wifi,
  Zap,
} from "lucide-react";

export const corporateHeroKpis = [
  {
    label: "3 hoteles",
    detail: "",
    icon: Building2,
  },
  {
    label: "1 coworking",
    detail: "",
    icon: Handshake,
  },
  {
    label: "Desayuno Buffet",
    detail: "",
    icon: Timer,
  },
  {
    label: "WiFi 5G",
    detail: "",
    icon: Wifi,
  },
] as const;

export interface CorporateLocation {
  brand: "Zentra Hotel" | "Nexus Cowork";
  name: string;
  slug: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  features: string[];
  stats: {
    capacity: { icon: LucideIcon; label: string };
    detail: { icon: LucideIcon; label: string };
    location: { icon: LucideIcon; label: string};
  };
}

export const corporateLocations: CorporateLocation[] = [
  {
    brand: "Zentra Hotel",
    name: "Zentra Plaza",
    slug: "plaza",
    tagline: "Estadías largas",
    description:
      "Frente a la plaza principal, para equipos que se quedan una semana o más. Habitaciones amplias con espacio para trabajar.",
    image: "/images/plaza/cowork-plaza-tres.webp",
    imageAlt: "Habitación de Zentra Plaza con dos camas y zona de estudio.",
    features: [
      "Habitaciones amplias con sala",
      "Jacuzzi y ducha española",
      "Café e infusiones ilimitadas",
      "Lavandería y factura electrónica",
    ],
    stats: {
      location: { icon: MapPin, label: "Elias Aguirre 520"},
      detail: { icon: Timer, label: "Cerca a la catedral" },
      capacity: { icon: BedDouble, label: "Hotel de estreno"},
    },
  },
  {
    brand: "Nexus Cowork",
    name: "Nexus Cowork",
    slug: "nexus",
    tagline: "Oficina lista",
    description:
      "Oficinas privadas, coworking y salas de reuniones 100% implementadas para trabajar sin interrupciones.",
    image: "/images/nexus/sala-a-dos.webp",
    imageAlt: "Sala de reuniones de Nexus Cowork con smart TV y pared pizarra.",
    features: [
      "Oficinas privadas para 1 a 12 personas",
      "Salas de reuniones 5 y 10 personas",
      "Smart TV y videoconferencia",
      "Soporte técnico especializado",
    ],
    stats: {
      location: { icon: MapPin, label: "Balta 506"},
      detail: { icon: Timer, label: "Centro Financiero" },
      capacity: { icon: Presentation, label: "Salas y oficinas equipadas" },
    },
  },
  {
    brand: "Zentra Hotel",
    name: "Zentra San José",
    slug: "san-jose",
    tagline: "Proyectos técnicos",
    description:
      "Ambiente ejecutivo tranquilo para estadías largas. Perfecta para consultores, auditores y equipos técnicos.",
    image: "/images/sanjose/hab-matrimonial.webp",
    imageAlt: "Habitación ejecutiva individual de Zentra San José.",
    features: [
      "WiFi 5G de alta velocidad",
      "Habitación silenciosa con blackout",
      "Espacios comunes para reuniones",
      "Servicio 24 h y room service",
    ],
    stats: {
      location: { icon: MapPin, label: "San José 554"},
      detail: { icon: Timer, label: "Cerca a la catedral" },
      capacity: { icon: MoonStar, label: "Habitaciones amplias" },
    },
  },
  {
    brand: "Zentra Hotel",
    name: "Zentra Balta",
    slug: "balta",
    tagline: "Sede insignia",
    description:
      "Sobre la Av. Balta, a pasos del centro financiero. Ideal para ejecutivos con agenda intensa.",
    image: "/images/balta/hab-suite.webp",
    imageAlt:
      "Habitación ejecutiva de Zentra Balta con cama king y escritorio.",
    features: [
      "Habitaciones ejecutivas con escritorio",
      "Check-in express en 3 minutos",
      "Desayuno americano incluido",
      "Traslado al aeropuerto",
    ],
    stats: {
      location: { icon: MapPin, label: "Leoncio Prado 919"},
      detail: { icon: Timer, label: "Cerca a la Zona Comercial de Chiclayo" },
      capacity: { icon: BedDouble, label: "Habitaciones modernas" },
    },
  },
];

export const corporateProblems = [
  {
    number: "01",
    icon: LineChart,
    title: "Pérdida de productividad",
    description:
      "Viajar sin reservas expone a tu equipo a un menor rendimiento, debido a espacios deficientes y mal equipados.",
  },
  {
    number: "02",
    icon: TrendingDown,
    title: "Mayor costo operativo",
    description:
      "Los tiempos de desplazamiento entre el hotel y la oficina se facturan como horas productivas. Un viaje mal coordinado, desperdicia dinero",
  },
  {
    number: "03",
    icon: ClipboardList,
    title: "Carga administrativa",
    description:
      "Se necesita coordinar varias reservas y gestionar múltiples facturas.",
  },
  {
    number: "04",
    icon: LayoutGrid,
    title: "Proveedores dispersos",
    description:
      "Más proveedores, más riesgo de fallo, más coordinación y menos control sobre el presupuesto de viajes corporativos.",
  },
] as const;

export const corporateSolutionZentraFeatures = [
  { icon: Building2, label: "Habitaciones ejecutivas\ncon escritorio" },
  { icon: Timer, label: "Espacios de\ntrabajo" },
  { icon: Wifi, label: "Internet continuo y de alta velocidad"},
  { icon: Coffee, label: "Desayuno\nBuffet"},
  { icon: Coffee, label: "Café e infusiones\nilimitadas"},
  { icon: Building2, label: "Frigobar\nincorporado"},
  { icon: Timer, label: "Ambientes modernos y\nseguros"},
  { icon: Timer, label: "Room Service\n24 horas"}, 
] as const;

export const corporateSolutionNexusFeatures = [
  { icon: Briefcase, label: "Oficinas\nprivadas" },
  { icon: Users, label: "Escritorios de trabajo\nen áreas compartidas" },
  { icon: Signal, label: "Sala de reuniones\npara 7 y 10 personas" },
  { icon: UserCog, label: "Aire\nacondicionado" },
  { icon: Coffee, label: "Comedor y\nKitchenette"},
  { icon: Wifi, label: "Internet de fibra óptica\ncon respaldo"},
  { icon: Users, label: "Soporte técnico\nespecializado"},
  { icon: Coffee, label: "Café, infusiones y\nagua ilimitadas"}
] as const;

export const corporateHubHighlights = [
  { value: "1", label: "espacio cowork" },
  { value: "1", label: "factura consolidada" },
] as const;

export interface CorporateSector {
  label: string;
  icon: LucideIcon;
}

export const corporateSectors: CorporateSector[] = [
  { label: "Minería", icon: Mountain },
  { label: "Construcción e infraestructura", icon: HardHat },
  { label: "Telecomunicaciones", icon: Cable },
  { label: "Energía y utilities", icon: Zap },
  { label: "Agroindustria", icon: Leaf },
  { label: "Logística y distribución", icon: Truck },
  { label: "Retail y consumo masivo", icon: ShoppingBag },
  { label: "Consultoría y servicios financieros", icon: Briefcase },
  { label: "Industria manufacturera", icon: Factory },
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

export const corporateBenefits = [
  {
    number: "01",
    icon: TicketPercent,
    title: "Tarifas corporativas preferenciales",
    description:
      "Accede a tarifas diseñadas para equipos en desplazamiento frecuente, con condiciones que mejoran según el volumen de uso.",
  },
  {
    number: "02",
    icon: TrendingDown,
    title: "Descuentos por volumen",
    description:
      "Mientras más viajes tu equipo, mejor la condición. La cadena Zentra escala tus ahorros mes a mes, sin renegociaciones.",
  },
  {
    number: "03",
    icon: Award,
    title: "Acceso prioritario a espacios",
    description:
      "Habitaciones y salas de Nexus Cowork con disponibilidad garantizada para tu equipo, incluso en fechas de alta demanda.",
  },
  {
    number: "04",
    icon: ScrollText,
    title: "Ejecutivo de cuenta",
    description:
      "Un solo contacto humano que conoce tu operación: gestiona reservas, resuelve incidencias y consolida tu facturación.",
  },
] as const;

export interface CorporateGalleryItem {
  src: string;
  alt: string;
  caption: string;
  brand: "Zentra Hotel" | "Nexus Cowork";
}

export const corporateGallery: CorporateGalleryItem[] = [
  // {
  //   src: "/images/zen-room.jpg",
  //   alt: "Habitación ejecutiva de Zentra con cama matrimonial.",
  //   caption: "Zentra Balta · Suite ejecutiva",
  //   brand: "Zentra Hotel",
  // },
  {
    src: "/images/plaza/individual.webp",
    alt: "Habitación Individual.",
    caption: "Zentra Plaza · Habitaciones",
    brand: "Zentra Hotel",
  },
  {
    src: "/images/plaza/cowork-plaza-uno.webp",
    alt: "Suite Zentra con jacuzzi privado.",
    caption: "Zentra Plaza · Coworking integrado",
    brand: "Zentra Hotel",
  },
  {
    src: "/images/nexus/sala-b.webp",
    alt: "Sala de reuniones B",
    caption: "Nexus Cowork · Sala B",
    brand: "Nexus Cowork",
  },
  {
    src: "/images/nexus/sala-flex.webp",
    alt: "Espacio flex de trabajo corporativo.",
    caption: "Nexus Cowork · Sala Flex",
    brand: "Nexus Cowork",
  },
  {
    src: "/images/balta/hab-suite-dos.webp",
    alt: "Habitación ejecutiva de Zentra con cama matrimonial.",
    caption: "Zentra Balta · Suite",
    brand: "Zentra Hotel",
  },
  {
    src: "/images/sanjose/comedor.webp",
    alt: "Sala de comedor y coworking.",
    caption: "Zentra San José · Comedor",
    brand: "Zentra Hotel",
  },
];

export const corporateTravelFrequencyOptions = [
  "1 a 5 personas al mes",
  "6 a 15 personas al mes",
  "16 a 40 personas al mes",
  "Más de 40 personas al mes",
] as const;

export const corporateSectorOptions = corporateSectors.map((s) => s.label);

export const corporatePreferredLocations = [
  "Sin preferencia",
  "Zentra Balta",
  "Zentra Plaza",
  "Zentra San José",
  "Todas las sedes",
] as const;
