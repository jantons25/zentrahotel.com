// Contenido de ofertas y cupones vigentes (fuente única; en el futuro vendrá de la API).
import type { Coupon, Offer } from "@/features/offers/types";

export const featuredOffer: Offer = {
  id: "zentra-select",
  title: "¡Más noches, más ahorro!",
  description:
    "Completa el formulario para acceder a un 10% en tu primera reserva.",
  highlight: "Obtén 10% off adicional",
  code: "ZENTRASELECT",
  expiresAt: "2026-05-09T23:59:59-05:00",
};

export const coupons: Coupon[] = [
  { code: "ZENTRA3N", description: "Descuento por 3 noches o más" },
  { code: "ZENTRA9A9", description: "Descuento en tu próxima estadía" },
];
