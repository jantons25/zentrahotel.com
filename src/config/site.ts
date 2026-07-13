// Configuración global del sitio: identidad, contacto, navegación, redes sociales e idiomas.
import type { NavItem } from "@/types";

export const siteConfig = {
  name: "Zentra Hotel",
  tagline: "Hotel moderno y cómodo en el centro de Chiclayo",
  description:
    "Zentra Hotel: hotel moderno y cómodo en el centro de Chiclayo. Reserva directo en web y ahorra en tu próximo viaje.",
  url: "https://zentrahotel.com",
  bookingUrl: "https://hotels.cloudbeds.com/es/reservation/h4UU3o?currency=pen",
  contact: {
    phoneDisplay: "+51 924 048 177",
    whatsappNumber: "51924048177",
    email: "zentra.hotel@gmail.com",
    address: "Calle Leoncio Prado 919, centro de Chiclayo, Perú",
    mapEmbedUrl:
      "https://www.google.com/maps?q=Calle+Leoncio+Prado+919+Chiclayo&output=embed",
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

// Navegación principal dividida en dos grupos alrededor del logo (izquierda / derecha).
export const mainNavLeft: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Habitaciones", href: "/habitaciones" },
  { label: "Empresa", href: "/empresa" },
];

export const mainNavRight: NavItem[] = [
  { label: "Blog", href: "/blog" },
  { label: "Promociones", href: "/promociones" },
];

export const mainNav: NavItem[] = [...mainNavLeft, ...mainNavRight];
