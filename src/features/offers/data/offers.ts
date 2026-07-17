// Contenido de ofertas y cupones vigentes (fuente única; en el futuro vendrá de la API).
import type { Coupon, Offer } from "@/features/offers/types";

export const featuredOffer: Offer = {
  id: "zentra-select",
  title: "¡Más noches, más ahorro!",
  description:
    "Accede a un descuento del 10% en tu primera reserva.",
  highlight: "Obtén 10% off adicional",
  code: "ZENTRAWEB",
  expiresAt: "2026-07-24T23:59:59-05:00",
};

export const coupons: Coupon[] = [
  { code: "ZENTRA5N", description: "Descuento por 5 noches o más" },
  { code: "ZENTRAPERU", description: "Descuento por fiestas patrias" },
];
