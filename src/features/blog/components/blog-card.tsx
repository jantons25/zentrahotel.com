// Tarjeta editorial de un post: imagen, chip de categoría, título con subrayado hover, meta.
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";

import { blogCategoryLabels } from "@/features/blog/data/blog";
import { formatEditorialDate } from "@/features/blog/lib/format-date";
import type { BlogPost } from "@/features/blog/types";
import { Link } from "@/i18n/navigation";
import { pick } from "@/lib/i18n-pick";

import styles from "./blog.module.css";

interface BlogCardProps {
  post: BlogPost;
}

export async function BlogCard({ post }: BlogCardProps) {
  const t = await getTranslations("blog.card");
  const locale = await getLocale();
  return (
    <article
      className={`${styles.card} group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-secondary/10 bg-card shadow-card`}
    >
      <Link
        href={`/blog/${post.slug}`}
        className="flex h-full flex-col focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-secondary/5">
          <Image
            src={post.cover}
            alt={pick(post.coverAlt, locale)}
            fill
            loading="lazy"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={`${styles.cardImage} object-cover`}
          />
          <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[0.62rem] font-semibold tracking-[0.18em] text-secondary uppercase shadow-card backdrop-blur">
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            {pick(blogCategoryLabels[post.category], locale)}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-3 text-[0.68rem] font-mono tracking-[0.22em] text-secondary/55 uppercase">
            <time dateTime={post.publishedAt}>
              {formatEditorialDate(post.publishedAt)}
            </time>
            <span className="text-secondary/25" aria-hidden="true">·</span>
            <span aria-label={t("readingAria", { minutes: post.readingMinutes })}>
              {t("readingLabel", { minutes: post.readingMinutes })}
            </span>
          </div>

          <h3 className="mt-4 font-[family-name:var(--font-blog-display)] text-[1.35rem] font-normal leading-[1.15] tracking-tight text-secondary text-balance sm:text-[1.5rem]">
            <span className={styles.cardTitle}>{pick(post.title, locale)}</span>
          </h3>

          <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
            {pick(post.excerpt, locale)}
          </p>

          <div className="mt-auto flex items-center gap-3 pt-6">
            <span className="relative size-8 shrink-0 overflow-hidden rounded-full border border-secondary/15 bg-secondary/5">
              <Image
                src={post.author.avatar}
                alt=""
                fill
                sizes="32px"
                className="object-cover"
              />
            </span>
            <div className="text-xs leading-tight">
              <p className="font-semibold text-secondary">{post.author.name}</p>
              <p className="text-muted-foreground">{pick(post.author.role, locale)}</p>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
