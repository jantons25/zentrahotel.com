// Datos fijos de la landing de agradecimiento: cuenta para el depósito, sedes y políticas.
import { venuePages } from "@/features/venues/data/venue-pages";
import type { LocalizedString } from "@/lib/i18n-pick";

// Cuenta a la que se transfiere el depósito del 50 % que confirma la reserva.
export const bankTransfer = {
  holder: "Zentra Hotel EIRL",
  bank: "BCP",
  accountNumber: "3058122884039",
  interbankNumber: "00230500812288403913",
} as const;

export interface StayVenue {
  name: string;
  address: string;
  image: string;
  alt: LocalizedString;
  directionsUrl: string;
}

function buildDirectionsUrl(name: string, address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${name}, ${address}`,
  )}`;
}

function toStayVenue(
  slug: keyof typeof venuePages,
  image: string,
  alt: LocalizedString,
): StayVenue {
  const { name, address } = venuePages[slug];
  return {
    name,
    address,
    image,
    alt,
    directionsUrl: buildDirectionsUrl(name, address),
  };
}

export const stayVenues: StayVenue[] = [
  toStayVenue("sede-balta", "/images/balta/hab-suite.webp", {
    es: "Suite de Zentra Balta con ambientación cálida.",
    en: "Zentra Balta suite with warm décor.",
  }),
  toStayVenue("sede-plaza", "/images/plaza/cowork-plaza-uno.webp", {
    es: "Lobby de Zentra Plaza con zona de estar.",
    en: "Zentra Plaza lobby with a lounge area.",
  }),
  toStayVenue("sede-san-jose", "/images/sanjose/hab-matrimonial.webp", {
    es: "Habitación matrimonial de Zentra San José.",
    en: "Double room at Zentra San José.",
  }),
];

// Políticas de entrada y salida, tal como figuran en el motor de reservas.
export const stayPolicies = {
  checkIn: "14:00",
  checkOut: "11:00",
  lateCheckOutUntil: "18:00",
  lateCheckOutFee: "50 %",
} as const;
