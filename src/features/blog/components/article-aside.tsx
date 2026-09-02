// Columna lateral del artículo: tabla de contenidos con scrollspy y CTA de reserva sticky.
import { getTranslations } from "next-intl/server";
import { CalendarCheck } from "lucide-react";

import { ArticleToc, type TocItem } from "@/features/blog/components/article-toc";
import { bookingLinkProps } from "@/lib/booking";

interface ArticleAsideProps {
  items: TocItem[];
}

export async function ArticleAside({ items }: ArticleAsideProps) {
  const t = await getTranslations("blog.article");

  return (
    <aside className="lg:sticky lg:top-28 lg:self-start">
      <div className="flex flex-col gap-8">
        <ArticleToc title={t("tocTitle")} items={items} />

        <div className="rounded-[1.25rem] border border-secondary/10 bg-card p-6 shadow-card">
          <p className="text-[0.62rem] font-semibold tracking-[0.22em] text-secondary/70 uppercase">
            {t("asideEyebrow")}
          </p>
          <p className="mt-3 font-[family-name:var(--font-blog-display)] text-[1.25rem] leading-snug font-normal text-secondary text-balance">
            {t("asideTitle")}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {t("asideText")}
          </p>
          <a
            {...bookingLinkProps}
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-secondary px-4 py-2.5 text-xs font-semibold tracking-[0.14em] text-secondary-foreground uppercase transition-colors duration-(--duration-normal) hover:bg-secondary/90 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none motion-reduce:transition-none"
          >
            <CalendarCheck className="size-4" aria-hidden="true" />
            {t("asideCta")}
          </a>
        </div>
      </div>
    </aside>
  );
}
