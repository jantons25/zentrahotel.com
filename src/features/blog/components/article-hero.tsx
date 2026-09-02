// Cabecera del artículo: breadcrumb, categoría, titular, bajada, ficha del autor y portada.
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { ChevronRight } from "lucide-react";

import { Container } from "@/components/common/container";
import { ArticleShare } from "@/features/blog/components/article-share";
import { blogCategoryLabels } from "@/features/blog/data/blog";
import { formatEditorialDate } from "@/features/blog/lib/format-date";
import type { BlogPostDetail } from "@/features/blog/types";
import { Link } from "@/i18n/navigation";
import { pick } from "@/lib/i18n-pick";

import styles from "./blog.module.css";

interface ArticleHeroProps {
  post: BlogPostDetail;
  url: string;
}

export async function ArticleHero({ post, url }: ArticleHeroProps) {
  const t = await getTranslations("blog.article");
  const locale = await getLocale();
  const category = pick(blogCategoryLabels[post.category], locale);
  const title = pick(post.title, locale);

  return (
    <header className="relative isolate -mt-16 overflow-hidden bg-secondary pt-28 pb-40 text-white md:-mt-20 md:pt-36 md:pb-48">
      <div className={styles.auroraOne} aria-hidden="true" />
      <Container className="relative">
        <nav
          aria-label={t("breadcrumbAria")}
          className={`${styles.reveal} flex flex-wrap items-center gap-1.5 text-[0.68rem] font-medium tracking-[0.12em] text-white/55 uppercase`}
          style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
        >
          <Link
            href="/"
            className="transition-colors duration-(--duration-normal) hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {t("breadcrumbHome")}
          </Link>
          <ChevronRight className="size-3" aria-hidden="true" />
          <Link
            href="/blog"
            className="transition-colors duration-(--duration-normal) hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            {t("breadcrumbBlog")}
          </Link>
          <ChevronRight className="size-3" aria-hidden="true" />
          <span className="text-white/80">{category}</span>
        </nav>

        <div
          className={`${styles.reveal} mt-8 flex flex-wrap items-center gap-3`}
          style={{ "--reveal-delay": "80ms" } as React.CSSProperties}
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-[0.62rem] font-semibold tracking-[0.18em] text-primary-foreground uppercase">
            <span
              className="size-1.5 rounded-full bg-primary-foreground"
              aria-hidden="true"
            />
            {category}
          </span>
          <time
            dateTime={post.publishedAt}
            className="font-mono text-[0.68rem] tracking-[0.2em] text-white/60 uppercase"
          >
            {formatEditorialDate(post.publishedAt)}
          </time>
          <span className="text-white/25" aria-hidden="true">
            ·
          </span>
          <span
            className="font-mono text-[0.68rem] tracking-[0.2em] text-white/60 uppercase"
            aria-label={t("readingAria", { minutes: post.readingMinutes })}
          >
            {t("readingTime", { minutes: post.readingMinutes })}
          </span>
        </div>

        <h1
          className={`${styles.reveal} mt-6 max-w-4xl font-[family-name:var(--font-blog-display)] font-light leading-[1.02] tracking-[-0.02em] text-balance text-[clamp(2.1rem,5.2vw,4rem)]`}
          style={{ "--reveal-delay": "140ms" } as React.CSSProperties}
        >
          {title}
        </h1>

        <p
          className={`${styles.reveal} mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg`}
          style={{ "--reveal-delay": "220ms" } as React.CSSProperties}
        >
          {pick(post.article.lead, locale)}
        </p>

        <div
          className={`${styles.reveal} mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-white/15 pt-6`}
          style={{ "--reveal-delay": "300ms" } as React.CSSProperties}
        >
          <div className="flex items-center gap-3">
            <span className="relative size-11 shrink-0 overflow-hidden rounded-full border border-white/25 bg-white/10">
              <Image
                src={post.author.avatar}
                alt=""
                fill
                sizes="44px"
                className="object-cover"
              />
            </span>
            <div className="text-sm leading-tight">
              <p className="font-semibold text-white">{post.author.name}</p>
              <p className="text-xs text-white/60">
                {pick(post.author.role, locale)}
              </p>
            </div>
          </div>

          <ArticleShare
            url={url}
            title={title}
            labels={{
              share: t("share.label"),
              whatsapp: t("share.whatsapp"),
              facebook: t("share.facebook"),
              x: t("share.x"),
              copy: t("share.copy"),
              copied: t("share.copied"),
            }}
            className="[&_span]:text-white/55"
          />
        </div>
      </Container>
    </header>
  );
}

// Portada del artículo, montada sobre el borde inferior del hero.
export async function ArticleCover({ post }: { post: BlogPostDetail }) {
  const locale = await getLocale();
  return (
    <Container className="relative -mt-32 md:-mt-36">
      <figure
        className={`${styles.reveal} overflow-hidden rounded-[1.75rem] shadow-card-hover`}
        style={{ "--reveal-delay": "360ms" } as React.CSSProperties}
      >
        <div className="relative aspect-[16/10] w-full bg-secondary/10 sm:aspect-[16/8]">
          <Image
            src={post.cover}
            alt={pick(post.coverAlt, locale)}
            fill
            priority
            sizes="(max-width: 1280px) 100vw, 1200px"
            className="object-cover"
          />
        </div>
      </figure>
    </Container>
  );
}
