// Página de detalle de un artículo del diario: /blog/[slug].
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";

import { Container } from "@/components/common/container";
import { ArticleAside } from "@/features/blog/components/article-aside";
import { ArticleBody } from "@/features/blog/components/article-body";
import { ArticleFooter } from "@/features/blog/components/article-footer";
import { ArticleCover, ArticleHero } from "@/features/blog/components/article-hero";
import { ArticleProgress } from "@/features/blog/components/article-progress";
import { ArticleRelated } from "@/features/blog/components/article-related";
import type { TocItem } from "@/features/blog/components/article-toc";
import { fontBlogDisplay } from "@/features/blog/config/blog-fonts";
import { blogCategoryLabels } from "@/features/blog/data/blog";
import {
  getPostBySlug,
  getPublishedSlugs,
  getRelatedPosts,
} from "@/features/blog/lib/get-post";
import { routing } from "@/i18n/routing";
import { siteConfig } from "@/config/site";
import { pick } from "@/lib/i18n-pick";
import { buildArticleJsonLd } from "@/lib/seo/jsonld";

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

// URL absoluta del artículo, respetando el prefijo de locale (`as-needed`).
function articleUrl(locale: string, slug: string) {
  const prefix = locale === routing.defaultLocale ? "" : `/${locale}`;
  return `${siteConfig.url}${prefix}/blog/${slug}`;
}

export function generateStaticParams() {
  return getPublishedSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const title = pick(post.title, locale);
  const description = pick(post.excerpt, locale);

  return {
    title: `${title} · Diario Zentra`,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      type: "article",
      title,
      description,
      url: articleUrl(locale, slug),
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [{ url: post.cover }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [post.cover],
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const post = getPostBySlug(slug);
  if (!post) notFound();

  const url = articleUrl(locale, slug);
  const related = getRelatedPosts(slug);

  const tocItems: TocItem[] = post.article.body
    .filter((block) => block.type === "heading")
    .map((block) => ({ id: block.id, label: pick(block.text, locale) }));

  const jsonLd = buildArticleJsonLd({
    url,
    title: pick(post.title, locale),
    description: pick(post.excerpt, locale),
    image: post.cover,
    publishedAt: post.publishedAt,
    authorName: post.author.name,
    section: pick(blogCategoryLabels[post.category], locale),
    locale,
  });

  return (
    <div className={fontBlogDisplay.variable}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <ArticleProgress />
      <ArticleHero post={post} url={url} />
      <ArticleCover post={post} />

      <Container className="py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <ArticleBody blocks={post.article.body} locale={locale} />
            <ArticleFooter post={post} url={url} />
          </div>

          <div className="lg:col-span-4">
            <ArticleAside items={tocItems} />
          </div>
        </div>
      </Container>

      <ArticleRelated posts={related} />
    </div>
  );
}
