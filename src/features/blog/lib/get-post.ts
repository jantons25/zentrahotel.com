// Resolución de posts del diario por slug: índice (blog.ts) + cuerpo (blog-articles.ts).
import { blogArticles } from "@/features/blog/data/blog-articles";
import { blogPosts } from "@/features/blog/data/blog";
import type { BlogPost, BlogPostDetail } from "@/features/blog/types";

// Devuelve el post con su artículo, o null si el slug no existe o no tiene cuerpo.
export function getPostBySlug(slug: string): BlogPostDetail | null {
  const post = blogPosts.find((item) => item.slug === slug);
  const article = blogArticles[slug];
  if (!post || !article) return null;
  return { ...post, article };
}

// Todos los slugs publicados (con cuerpo) — usado por generateStaticParams y el sitemap.
export function getPublishedSlugs(): string[] {
  return blogPosts
    .filter((post) => blogArticles[post.slug])
    .map((post) => post.slug);
}

// Relacionados: primero misma categoría, luego los más recientes, sin repetir.
export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = blogPosts.find((post) => post.slug === slug);
  if (!current) return blogPosts.slice(0, limit);

  const others = blogPosts.filter(
    (post) => post.slug !== slug && blogArticles[post.slug],
  );
  const sameCategory = others.filter(
    (post) => post.category === current.category,
  );
  const rest = others.filter((post) => post.category !== current.category);

  return [...sameCategory, ...rest].slice(0, limit);
}
