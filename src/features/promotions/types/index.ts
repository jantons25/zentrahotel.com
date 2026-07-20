// Tipos de la página de promociones: sedes, etiquetas y estructura de oferta.
import type { LocalizedString } from "@/lib/i18n-pick";

export type PromotionSede = "balta" | "plaza" | "san-jose" | "nexus";

export interface Promotion {
  slug: string;
  sede: PromotionSede;
  title: LocalizedString;
  tagline: LocalizedString;
  description: LocalizedString;
  discount: LocalizedString;
  tags: LocalizedString[];
  validUntil: string;
  cover: string;
  coverAlt: LocalizedString;
  code?: string;
  ctaLabel: LocalizedString;
  ctaHref: LocalizedString;
  ctaExternal?: boolean;
  conditions: LocalizedString[];
}
