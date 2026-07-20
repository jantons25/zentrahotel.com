// Contenido de ofertas y cupones vigentes (fuente única; en el futuro vendrá de la API).
import type { Coupon, Offer } from "@/features/offers/types";

export const featuredOffer: Offer = {
  id: "zentra-select",
  title: {
    es: "¡Más noches, más ahorro!",
    en: "More nights, more savings!",
  },
  description: {
    es: "Accede a un descuento del 10% en tu primera reserva.",
    en: "Get a 10% discount on your first booking.",
  },
  highlight: {
    es: "Obtén 10% off adicional",
    en: "Get an extra 10% off",
  },
  code: "ZENTRAWEB",
  expiresAt: "2026-07-24T23:59:59-05:00",
};

export const coupons: Coupon[] = [
  {
    code: "ZENTRA5N",
    description: {
      es: "Descuento por 5 noches o más",
      en: "Discount for 5 nights or more",
    },
  },
  {
    code: "ZENTRAPERU",
    description: {
      es: "Descuento por fiestas patrias",
      en: "National holidays discount",
    },
  },
];
