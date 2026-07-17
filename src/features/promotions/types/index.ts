// Tipos de la página de promociones: sedes, etiquetas y estructura de oferta.

export type PromotionSede = "balta" | "plaza" | "san-jose" | "nexus";

export interface Promotion {
  slug: string;
  sede: PromotionSede;
  title: string;
  tagline: string;
  description: string;
  discount: string;
  tags: string[];
  validUntil: string;
  cover: string;
  coverAlt: string;
  code?: string;
  ctaLabel: string;
  ctaHref: string;
  ctaExternal?: boolean;
  conditions: string[];
}
