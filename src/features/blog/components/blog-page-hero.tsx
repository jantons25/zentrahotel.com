// Hero editorial del diario Zentra: fondo fotográfico con overlay, titular y filtro de categorías.
import Image from "next/image";

import { fontBlogDisplay } from "@/features/blog/config/blog-fonts";
import { blogCategoryLabels, blogPosts } from "@/features/blog/data/blog";
import type { BlogCategory } from "@/features/blog/types";

import styles from "./blog.module.css";

export function BlogPageHero() {
  const total = blogPosts.length;

  const categoryCounts = blogPosts.reduce<Record<BlogCategory, number>>(
    (acc, post) => {
      acc[post.category] = (acc[post.category] ?? 0) + 1;
      return acc;
    },
    { chiclayo: 0, viajero: 0, corporativo: 0, "casa-zentra": 0 },
  );

  const categories = (Object.keys(blogCategoryLabels) as BlogCategory[]).filter(
    (key) => categoryCounts[key] > 0,
  );

  return (
    <section
      aria-label="Bienvenida al diario Zentra"
      className={`${fontBlogDisplay.variable} ${styles.section} relative isolate -mt-16 overflow-hidden bg-secondary text-white md:-mt-20`}
    >
      <Image
        src="/images/plaza/cowork-plaza-uno.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-[center_30%] motion-safe:animate-[blog-hero-zoom_18s_ease-out_forwards]"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-black/65"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-secondary/15 via-transparent to-secondary/30"
        aria-hidden="true"
      />
      <div className={styles.auroraOne} aria-hidden="true" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 pt-32 pb-16 sm:px-6 md:pt-40 md:pb-20 lg:px-8 lg:pt-44 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <p
              className={`${styles.reveal} inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[0.62rem] font-semibold tracking-[0.28em] text-white/85 uppercase backdrop-blur`}
              style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
            >
              <span
                className="size-1.5 rounded-full bg-primary"
                aria-hidden="true"
              />
              Diario Zentra · {total.toString().padStart(2, "0")} artículos
            </p>

            <h1
              className={`${styles.reveal} mt-6 font-[family-name:var(--font-blog-display)] font-light leading-[0.95] tracking-[-0.02em] text-white text-balance text-[clamp(2.5rem,6vw,5rem)]`}
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              Historias{" "}
              <span className="italic font-normal text-primary">
                que se quedan.
              </span>
            </h1>

            <p
              className={`${styles.reveal} mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg`}
              style={{ "--reveal-delay": "220ms" } as React.CSSProperties}
            >
              Guías locales, tips de viaje y crónicas de la casa. Lo que le
              contamos a los huéspedes antes de que lleguen — para que la ciudad
              y el hotel se sientan tuyos desde el primer día.
            </p>
          </div>

          <nav
            className={`${styles.reveal} lg:col-span-4`}
            style={{ "--reveal-delay": "320ms" } as React.CSSProperties}
            aria-label="Categorías del diario"
          >
            <p className="text-center text-[0.62rem] font-semibold tracking-[0.28em] text-white/50 uppercase lg:text-left">
              Explora por tema
            </p>
            <ul className="mt-4 flex flex-wrap justify-center gap-2 lg:justify-start">
              {categories.map((key) => (
                <li key={key}>
                  <a
                    href={`#tema-${key}`}
                    className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/85 transition-colors duration-(--duration-normal) hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none"
                  >
                    {blogCategoryLabels[key]}
                    <span
                      className="font-mono text-[0.62rem] tracking-[0.14em] text-white/45 group-hover:text-primary-foreground/70"
                      aria-hidden="true"
                    >
                      {categoryCounts[key].toString().padStart(2, "0")}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
