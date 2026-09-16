// Configuración global del sitio: identidad, contacto, navegación, redes sociales e idiomas.
import type { NavItem, NavNode } from "@/types";

export const siteConfig = {
  name: "Zentra Hotel & Cowork",
  tagline: "Hotel moderno y cómodo en el centro de Chiclayo",
  description:
    "Zentra Hotel: hotel moderno y cómodo en el centro de Chiclayo. Reserva directo en web y ahorra en tu próximo viaje.",
  url: "https://zentrahotel.com",
  bookingUrl: "https://hotels.cloudbeds.com/es/reservation/h4UU3o?currency=pen",
  // Motor de reservas embebido (web components de Cloudbeds Immersive Experience 2.0).
  // `orgSubdomain` es el subdominio de la Organización de Cloudbeds — el texto que
  // antecede a `.cloudbeds.com` en la URL del Group Booking Engine. NO es el dominio
  // del sitio ni el código de propiedad de `hotels.cloudbeds.com/reservation/XXXX`.
  cloudbeds: {
    scriptUrl:
      "https://static1.cloudbeds.com/booking-engine/latest/static/js/immersive-experience/cb-immersive-experience.js",
    // Vacío a propósito: "zentrahotels" no es una Organización real de Cloudbeds y el
    // web component respondía "Error al cargar las propiedades", dejando la barra
    // inutilizable. Sin subdominio se pinta la barra propia, que ya redirige al
    // Booking Engine de cada sede. Se rellena por env cuando exista la Organización.
    orgSubdomain: process.env.NEXT_PUBLIC_CLOUDBEDS_SUBDOMAIN ?? "",
    currency: "pen",
    // Orden y nombre visible de las sedes dentro del selector de propiedades.
    // `code` es el identificador de hotels.cloudbeds.com/es/reservation/<code>.
    properties: [
      { code: "h4UU3o", name: "Zentra Balta" },
      { code: "6lEIN9", name: "Zentra Plaza" },
      { code: "NXhCN9", name: "Zentra San José" },
    ],
  },
  contact: {
    phoneDisplay: "+51 924 048 177",
    whatsappNumber: "51924048177",
    advisorWhatsappNumber: "51921597372",
    email: "zentra.hotel@gmail.com",
    addressBalta: "Calle Leoncio Prado 919",
    addressPlaza: "Calle Elias Aguire 520",
    addressSanJose: "Calle San José 554",
    mapEmbedUrl:
      // "https://www.google.com/maps?q=Calle+Leoncio+Prado+919+Chiclayo&output=embed",
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.984433493944!2d-79.84288212468385!3d-6.7717481932251244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904cef28056df287%3A0xc9cd1b5c22229246!2sEl%C3%ADas%20Aguirre%20520%2C%20Chiclayo%2014001!5e0!3m2!1ses!2spe!4v1784323830485!5m2!1ses!2spe",
    mapShareUrl: "https://maps.app.goo.gl/H5tjHo3GTp1SbkYr7",
  },
  social: {
    facebook: "https://www.facebook.com/zentrahotel",
    instagram: "https://www.instagram.com/hotelzentra/",
    tiktok: "https://www.tiktok.com/@zentrahotel",
  },
  languages: [
    { code: "es", label: "Español", available: true },
    { code: "en", label: "English", available: false },
    { code: "pt", label: "Português", available: false },
  ],
} as const;

// Árbol de navegación del menú desplegable a pantalla completa.
// Cada `key` resuelve a `messages/{locale}.json` bajo el namespace `nav`.
// Los nodos con `hidden: true` siguen existiendo (rutas y sitemap) pero no se
// pintan en el menú; basta con quitar la bandera para recuperarlos.
export const mainNavTree: NavNode[] = [
  { key: "inicio", href: "/" },
  {
    key: "sedes",
    // Cada sede tiene página propia y se abre en una pestaña nueva.
    children: [
      { key: "sedeBalta", href: "/sede-balta", newTab: true },
      { key: "sedePlaza", href: "/sede-plaza", newTab: true },
      { key: "sedeSanJose", href: "/sede-san-jose", newTab: true },
    ],
  },
  { key: "empresa", href: "/empresa" },
  { key: "blog", href: "/blog" },
  { key: "galeria", href: "/galeria" },
  { key: "promociones", href: "/promociones", hidden: true },
  { key: "nosotros", href: "/nosotros", hidden: true },
  { key: "habitaciones", href: "/habitaciones", hidden: true },
];

// Solo los nodos visibles, ya listos para pintar en el menú.
export const visibleNavTree: NavNode[] = mainNavTree
  .filter((node) => !node.hidden)
  .map((node) => ({
    ...node,
    children: node.children?.filter((child) => !child.hidden),
  }));

// Aplana el árbol a rutas reales (ignora anclas y grupos sin href) para sitemap y footer.
function flattenRoutes(nodes: NavNode[]): NavItem[] {
  return nodes.flatMap((node) => [
    ...(node.href && !node.href.includes("#")
      ? [{ key: node.key, href: node.href }]
      : []),
    ...(node.children ? flattenRoutes(node.children) : []),
  ]);
}

export const mainNav: NavItem[] = flattenRoutes(mainNavTree);

// Enlaces del pie de página: solo lo que hoy está visible en el menú.
export const mainNavLeft: NavItem[] = flattenRoutes(visibleNavTree);
