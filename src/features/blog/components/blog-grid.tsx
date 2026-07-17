// Retícula de posts del diario (excluye el destacado) con reveal escalonado.
import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { BlogCard } from "@/features/blog/components/blog-card";
import type { BlogPost } from "@/features/blog/types";

import styles from "./blog.module.css";

interface BlogGridProps {
  posts: BlogPost[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <Section
      aria-labelledby="reciente-titulo"
      className="relative overflow-hidden bg-[color-mix(in_oklab,var(--accent)_60%,white)]"
    >
      <div className={styles.auroraOne} aria-hidden="true" />
      <div className={styles.auroraTwo} aria-hidden="true" />
      <Container className="relative">
        <header
          className={`${styles.reveal} flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between`}
          style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
        >
          <div>
            <p className="flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.28em] text-secondary/70 uppercase">
              <span className="h-px w-8 bg-secondary/40" aria-hidden="true" />
              Publicaciones recientes ·{" "}
              {posts.length.toString().padStart(2, "0")}
            </p>
            <h2
              id="reciente-titulo"
              className="mt-5 font-[family-name:var(--font-blog-display)] font-light leading-[0.98] tracking-[-0.02em] text-secondary text-balance text-[clamp(2rem,4.4vw,3.2rem)]"
            >
              Lo último del{" "}
              <span className="italic font-normal text-secondary/85">
                diario.
              </span>
            </h2>
          </div>
        </header>

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-8">
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
