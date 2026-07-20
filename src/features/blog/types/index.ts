// Tipos del diario editorial de Zentra: autores, categorías y posts.
import type { LocalizedString } from "@/lib/i18n-pick";

export type BlogCategory =
  | "chiclayo"
  | "viajero"
  | "corporativo"
  | "casa-zentra";

export interface BlogAuthor {
  name: string;
  role: LocalizedString;
  avatar: string;
}

export interface BlogPost {
  slug: string;
  category: BlogCategory;
  title: LocalizedString;
  excerpt: LocalizedString;
  cover: string;
  coverAlt: LocalizedString;
  author: BlogAuthor;
  publishedAt: string;
  readingMinutes: number;
  featured?: boolean;
}
