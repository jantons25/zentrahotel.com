// Configuración global del sitio: identidad, contacto, navegación, redes sociales e idiomas.
import type { NavItem } from "@/types";

export const siteConfig = {
  name: "Zentra Hotel & Cowork",
  tagline: "Hotel moderno y cómodo en el centro de Chiclayo",
  description:
    "Zentra Hotel: hotel moderno y cómodo en el centro de Chiclayo. Reserva directo en web y ahorra en tu próximo viaje.",
  url: "https://zentrahotel.com",
  bookingUrl: "https://hotels.cloudbeds.com/es/reservation/h4UU3o?currency=pen",
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

// Navegación principal dividida en dos grupos alrededor del logo (izquierda / derecha).
// Cada item lleva una `key` que resuelve a `messages/{locale}.json` bajo el namespace `nav`.
export const mainNavLeft: NavItem[] = [
  { key: "inicio", href: "/" },
  { key: "nosotros", href: "/nosotros" },
  { key: "habitaciones", href: "/habitaciones" },
  { key: "empresa", href: "/empresa" },
];

export const mainNavRight: NavItem[] = [
  { key: "blog", href: "/blog" },
  { key: "promociones", href: "/promociones" },
];

export const mainNav: NavItem[] = [...mainNavLeft, ...mainNavRight];
