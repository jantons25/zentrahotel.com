// Post destacado del diario: imagen grande con overlay editorial + info sobre el gradiente.
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { blogCategoryLabels } from "@/features/blog/data/blog";
import { formatEditorialDate } from "@/features/blog/lib/format-date";
import type { BlogPost } from "@/features/blog/types";
import { Link } from "@/i18n/navigation";
import { pick } from "@/lib/i18n-pick";

import styles from "./blog.module.css";

interface BlogFeaturedProps {
  post: BlogPost;
}

export async function BlogFeatured({ post }: BlogFeaturedProps) {
  const t = await getTranslations("blog.featured");
  const locale = await getLocale();
  return (
    <Section
      aria-labelledby="featured-titulo"
      className="relative overflow-hidden bg-background"
    >
      <Container className="relative">
        <header
          className={`${styles.reveal} flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between`}
          style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
        >
          <p className="flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.28em] text-secondary/70 uppercase">
            <span className="h-px w-8 bg-secondary/40" aria-hidden="true" />
            {t("eyebrow")}
          </p>
          <time
            dateTime={post.publishedAt}
            className="font-mono text-[0.72rem] tracking-[0.22em] text-secondary/55 uppercase"
          >
            {formatEditorialDate(post.publishedAt)}
          </time>
        </header>

        <Link
          href={`/blog/${post.slug}`}
          className={`${styles.card} group mt-8 block overflow-hidden rounded-[1.75rem] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary`}
          aria-labelledby="featured-titulo"
        >
          <article className="relative">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary/10 sm:aspect-[16/9] lg:aspect-[21/9]">
              <Image
                src={post.cover}
                alt={pick(post.coverAlt, locale)}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 1200px"
                className={`${styles.cardImage} object-cover`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/45 to-secondary/5" aria-hidden="true" />

              <div className="absolute inset-x-0 bottom-0 flex flex-col gap-5 p-6 text-white sm:p-10 lg:p-14">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-[0.65rem] font-semibold tracking-[0.18em] text-primary-foreground uppercase shadow-card">
                    <span className="size-1.5 rounded-full bg-primary-foreground" aria-hidden="true" />
                    {t("badge", { category: pick(blogCategoryLabels[post.category], locale) })}
                  </span>
                  <span
                    className="font-mono text-[0.68rem] tracking-[0.22em] text-white/70 uppercase"
                    aria-label={t("readingAria", { minutes: post.readingMinutes })}
                  >
                    {t("readingTime", { minutes: post.readingMinutes })}
                  </span>
                </div>

                <h2
                  id="featured-titulo"
                  className="max-w-3xl font-[family-name:var(--font-blog-display)] font-light leading-[1.02] tracking-[-0.01em] text-balance text-[clamp(1.9rem,4.5vw,3.4rem)]"
                >
                  {pick(post.title, locale)}
                </h2>

                <p className="max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base">
                  {pick(post.excerpt, locale)}
                </p>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="relative size-9 shrink-0 overflow-hidden rounded-full border border-white/30 bg-white/10">
                      <Image
                        src={post.author.avatar}
                        alt=""
                        fill
                        sizes="36px"
                        className="object-cover"
                      />
                    </span>
                    <div className="text-xs leading-tight text-white/85">
                      <p className="font-semibold text-white">{post.author.name}</p>
                      <p className="text-white/60">{pick(post.author.role, locale)}</p>
                    </div>
                  </div>

                  <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-4 py-2 text-xs font-semibold tracking-[0.14em] text-white uppercase backdrop-blur transition-colors duration-(--duration-normal) group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground motion-reduce:transition-none">
                    {t("cta")}
                    <ArrowUpRight
                      className="size-3.5 transition-transform duration-(--duration-normal) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </div>
            </div>
          </article>
        </Link>
      </Container>
    </Section>
  );
}
