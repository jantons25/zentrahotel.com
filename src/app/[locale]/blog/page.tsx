// Página "Blog": diario editorial de Zentra con hero, post destacado y retícula por
// categorías, partida en dos por el separador "Colecciones" que da una pausa al lector.
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { BlogCollections } from "@/features/blog/components/blog-collections";
import { BlogFeatured } from "@/features/blog/components/blog-featured";
import { BlogGrid } from "@/features/blog/components/blog-grid";
import { BlogPageHero } from "@/features/blog/components/blog-page-hero";
import { fontBlogDisplay } from "@/features/blog/config/blog-fonts";
import { blogPosts } from "@/features/blog/data/blog";

export const metadata: Metadata = {
  title: "Diario · Zentra Hotel",
  description:
    "Guías locales de Chiclayo, tips para viajeros y crónicas de la casa Zentra. Lo que le contamos a los huéspedes antes de que lleguen.",
  alternates: { canonical: "/blog" },
};

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const featured = blogPosts.find((post) => post.featured) ?? blogPosts[0];
  const rest = blogPosts.filter((post) => post.slug !== featured.slug);
  // El separador entra tras la primera fila completa de tarjetas.
  const beforeBreak = rest.slice(0, 3);
  const afterBreak = rest.slice(3);

  return (
    <div className={fontBlogDisplay.variable}>
      <BlogPageHero />
      <BlogFeatured post={featured} />
      <BlogGrid posts={beforeBreak} />
      <BlogCollections />
      {afterBreak.length > 0 ? (
        <BlogGrid posts={afterBreak} withHeader={false} />
      ) : null}
    </div>
  );
}
