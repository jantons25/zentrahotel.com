// Cierre del artículo: etiquetas, ficha del autor, compartir y vuelta al diario.
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { ArrowLeft } from "lucide-react";

import { ArticleShare } from "@/features/blog/components/article-share";
import type { BlogPostDetail } from "@/features/blog/types";
import { Link } from "@/i18n/navigation";
import { pick } from "@/lib/i18n-pick";

interface ArticleFooterProps {
  post: BlogPostDetail;
  url: string;
}

export async function ArticleFooter({ post, url }: ArticleFooterProps) {
  const t = await getTranslations("blog.article");
  const locale = await getLocale();

  return (
    <div className="mt-14 border-t border-secondary/12 pt-8">
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-[0.62rem] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
          {t("tags")}
        </span>
        {post.article.tags.map((tag, index) => (
          <span
            key={index}
            className="rounded-full border border-secondary/15 bg-accent/50 px-3 py-1 text-xs font-medium text-secondary"
          >
            {pick(tag, locale)}
          </span>
        ))}
      </div>

      <div className="mt-8 flex flex-col gap-6 rounded-[1.5rem] border border-secondary/10 bg-card p-6 shadow-card sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div className="flex items-center gap-4">
          <span className="relative size-14 shrink-0 overflow-hidden rounded-full border border-secondary/15 bg-secondary/5">
            <Image
              src={post.author.avatar}
              alt=""
              fill
              sizes="56px"
              className="object-cover"
            />
          </span>
          <div>
            <p className="text-[0.62rem] font-semibold tracking-[0.22em] text-muted-foreground uppercase">
              {t("writtenBy")}
            </p>
            <p className="mt-1 font-semibold text-secondary">
              {post.author.name}
            </p>
            <p className="text-sm text-muted-foreground">
              {pick(post.author.role, locale)}
            </p>
          </div>
        </div>

        <ArticleShare
          url={url}
          title={pick(post.title, locale)}
          labels={{
            share: t("share.label"),
            whatsapp: t("share.whatsapp"),
            facebook: t("share.facebook"),
            x: t("share.x"),
            copy: t("share.copy"),
            copied: t("share.copied"),
          }}
        />
      </div>

      <Link
        href="/blog"
        className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-colors duration-(--duration-normal) hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none"
      >
        <ArrowLeft
          className="size-4 transition-transform duration-(--duration-normal) group-hover:-translate-x-0.5 motion-reduce:transition-none"
          aria-hidden="true"
        />
        {t("backToBlog")}
      </Link>
    </div>
  );
}
