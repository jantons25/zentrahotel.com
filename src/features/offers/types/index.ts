// Tipos del feature de ofertas y cupones promocionales.

// Oferta destacada con código, vigencia y textos de la tarjeta.
export interface Offer {
  id: string;
  title: string;
  description: string;
  highlight: string;
  code: string;
  expiresAt: string;
}

// Cupón de descuento canjeable vía WhatsApp.
export interface Coupon {
  code: string;
  description: string;
}
