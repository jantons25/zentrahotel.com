// Tipos del feature de ofertas y cupones promocionales.
import type { LocalizedString } from "@/lib/i18n-pick";

// Oferta destacada con código, vigencia y textos de la tarjeta.
export interface Offer {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  highlight: LocalizedString;
  code: string;
  expiresAt: string;
}

// Cupón de descuento canjeable vía WhatsApp.
export interface Coupon {
  code: string;
  description: LocalizedString;
}
