// Retícula de posts del diario (excluye el destacado) con reveal escalonado.
// Se pinta en dos bloques: el primero con cabecera y el segundo, tras el separador
// "Colecciones", sin cabecera para que la lectura continúe sin repetir títulos.
import { getTranslations } from "next-intl/server";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { BlogCard } from "@/features/blog/components/blog-card";
import type { BlogPost } from "@/features/blog/types";

import styles from "./blog.module.css";

interface BlogGridProps {
  posts: BlogPost[];
  /** `false` para el bloque que continúa tras el separador de colecciones. */
  withHeader?: boolean;
}

export async function BlogGrid({ posts, withHeader = true }: BlogGridProps) {
  const t = await getTranslations("blog.grid");
  return (
    <Section
      {...(withHeader
        ? { "aria-labelledby": "reciente-titulo" }
        : { "aria-label": t("listAria") })}
      className={`relative overflow-hidden bg-[color-mix(in_oklab,var(--accent)_60%,white)] ${
        withHeader ? "" : "pt-12 md:pt-14 lg:pt-16"
      }`}
    >
      <div className={styles.auroraOne} aria-hidden="true" />
      <div className={styles.auroraTwo} aria-hidden="true" />
      <Container className="relative">
        {withHeader ? (
          <header
            className={`${styles.reveal} flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between`}
            style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
          >
            <div>
              <p className="flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.28em] text-secondary/70 uppercase">
                <span className="h-px w-8 bg-secondary/40" aria-hidden="true" />
                {t("eyebrow")} · {posts.length.toString().padStart(2, "0")}
              </p>
              <h2
                id="reciente-titulo"
                className="mt-5 font-[family-name:var(--font-blog-display)] text-[clamp(2rem,4.4vw,3.2rem)] leading-[0.98] font-light tracking-[-0.02em] text-balance text-secondary"
              >
                {t("titleA")}{" "}
                <span className="font-normal text-secondary/85 italic">
                  {t("titleEmphasis")}
                </span>
              </h2>
            </div>
          </header>
        ) : (
          <p
            className={`${styles.reveal} flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.28em] text-secondary/70 uppercase`}
            style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
          >
            <span className="h-px w-8 bg-secondary/40" aria-hidden="true" />
            {t("moreEyebrow")}
          </p>
        )}

        <ul
          className={`grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 ${
            withHeader ? "mt-10 lg:mt-14" : "mt-8 lg:mt-10"
          }`}
        >
          {posts.map((post, index) => (
            <li
              key={post.slug}
              id={`tema-${post.category}`}
              className={`${styles.reveal} scroll-mt-24`}
              style={
                {
                  "--reveal-delay": `${120 + index * 80}ms`,
                } as React.CSSProperties
              }
            >
              <BlogCard post={post} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
