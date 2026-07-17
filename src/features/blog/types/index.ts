// Tipos del diario editorial de Zentra: autores, categorías y posts.

export type BlogCategory =
  | "chiclayo"
  | "viajero"
  | "corporativo"
  | "casa-zentra";

export interface BlogAuthor {
  name: string;
  role: string;
  avatar: string;
}

export interface BlogPost {
  slug: string;
  category: BlogCategory;
  title: string;
  excerpt: string;
  cover: string;
  coverAlt: string;
  author: BlogAuthor;
  publishedAt: string;
  readingMinutes: number;
  featured?: boolean;
}
