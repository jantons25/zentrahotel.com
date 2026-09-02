// "Te puede interesar": tres posts relacionados al final del artículo.
import { getTranslations } from "next-intl/server";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { BlogCard } from "@/features/blog/components/blog-card";
import type { BlogPost } from "@/features/blog/types";

import styles from "./blog.module.css";

interface ArticleRelatedProps {
  posts: BlogPost[];
}

export async function ArticleRelated({ posts }: ArticleRelatedProps) {
  const t = await getTranslations("blog.article");
  if (posts.length === 0) return null;

  return (
    <Section
      aria-labelledby="relacionados-titulo"
      className="relative overflow-hidden bg-[color-mix(in_oklab,var(--accent)_60%,white)]"
    >
      <div className={styles.auroraTwo} aria-hidden="true" />
      <Container className="relative">
        <header>
          <p className="flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.28em] text-secondary/70 uppercase">
            <span className="h-px w-8 bg-secondary/40" aria-hidden="true" />
            {t("relatedEyebrow")}
          </p>
          <h2
            id="relacionados-titulo"
            className="mt-5 font-[family-name:var(--font-blog-display)] font-light leading-[0.98] tracking-[-0.02em] text-secondary text-balance text-[clamp(1.8rem,4vw,2.8rem)]"
          >
            {t("relatedTitle")}
          </h2>
        </header>

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {posts.map((post) => (
            <li key={post.slug}>
              <BlogCard post={post} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
