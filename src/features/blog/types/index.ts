// Tipos del diario editorial de Zentra: autores, categorías, posts y bloques de artículo.
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

// --- Cuerpo del artículo -----------------------------------------------------
// El cuerpo de cada post se modela como una lista de bloques tipados; el
// renderer (article-body.tsx) decide la tipografía de cada uno. Los `heading`
// generan ancla e ítem en la tabla de contenidos.

export interface BlogListItem {
  title?: LocalizedString;
  text: LocalizedString;
}

export type BlogBlock =
  | { type: "paragraph"; text: LocalizedString }
  | { type: "heading"; id: string; text: LocalizedString }
  | { type: "subheading"; text: LocalizedString }
  | {
      type: "image";
      src: string;
      alt: LocalizedString;
      caption?: LocalizedString;
    }
  | { type: "list"; ordered?: boolean; items: BlogListItem[] }
  | { type: "quote"; text: LocalizedString; cite?: LocalizedString }
  | { type: "tip"; label?: LocalizedString; text: LocalizedString }
  | {
      type: "table";
      head: LocalizedString[];
      rows: LocalizedString[][];
    }
  | {
      type: "cta";
      title: LocalizedString;
      text: LocalizedString;
      label: LocalizedString;
      href: string;
    };

// Contenido extendido de un post: bajada, etiquetas y bloques del cuerpo.
export interface BlogArticle {
  lead: LocalizedString;
  tags: LocalizedString[];
  body: BlogBlock[];
}

// Post + contenido resueltos juntos para la página de detalle.
export interface BlogPostDetail extends BlogPost {
  article: BlogArticle;
}
