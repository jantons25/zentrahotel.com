// Página "Blog": diario editorial de Zentra con hero, post destacado y retícula por
// categorías, partida por dos separadores ("Registro para la misa del Papa" y
// "Colecciones") que dan una pausa al lector.
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { BlogCollections } from "@/features/blog/components/blog-collections";
import { BlogFeatured } from "@/features/blog/components/blog-featured";
import { BlogGrid } from "@/features/blog/components/blog-grid";
import { BlogPageHero } from "@/features/blog/components/blog-page-hero";
import { BlogPapaRegistro } from "@/features/blog/components/blog-papa-registro";
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
  // Cada separador entra tras una fila completa de tarjetas (3 por fila).
  const firstBlock = rest.slice(0, 3);
  const secondBlock = rest.slice(3, 6);
  const thirdBlock = rest.slice(6);

  return (
    <div className={fontBlogDisplay.variable}>
      <BlogPageHero />
      <BlogFeatured post={featured} />
      <BlogGrid posts={firstBlock} />
      <BlogPapaRegistro />
      {secondBlock.length > 0 ? (
        <BlogGrid posts={secondBlock} withHeader={false} />
      ) : null}
      <BlogCollections />
      {thirdBlock.length > 0 ? (
        <BlogGrid posts={thirdBlock} withHeader={false} />
      ) : null}
    </div>
  );
}
