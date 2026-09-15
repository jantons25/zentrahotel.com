// Ofertas flash de la marquesina del header. Fuente única del banner negro superior.
import type { LocalizedString } from "@/lib/i18n-pick";

// Una pieza de la cinta: texto corto y, opcionalmente, el código promocional asociado.
export interface FlashOffer {
  id: string;
  label: LocalizedString;
  code?: string;
}

export const flashOffers: FlashOffer[] = [
  {
    id: "web-directo",
    label: {
      es: "10% de descuento reservando directo en la web",
      en: "10% off when you book direct on our site",
    },
    code: "ZENTRAWEB",
  },
  {
    id: "larga-estadia",
    label: {
      es: "Tarifa especial desde 5 noches en cualquier sede",
      en: "Special rate from 5 nights at any location",
    },
    code: "ZENTRA5N",
  },
  {
    id: "desayuno",
    label: {
      es: "Desayuno buffet incluido en todas las habitaciones",
      en: "Buffet breakfast included in every room",
    },
  },
  {
    id: "corporativo",
    label: {
      es: "Convenios corporativos con tarifas cerradas todo el año",
      en: "Corporate agreements with fixed rates all year",
    },
  },
  {
    id: "jacuzzi",
    label: {
      es: "Suite con jacuzzi privado y velada romántica",
      en: "Suite with private jacuzzi and romantic dinner",
    },
  },
  {
    id: "cancelacion",
    label: {
      es: "Cancelación flexible y confirmación inmediata",
      en: "Flexible cancellation and instant confirmation",
    },
  },
];
