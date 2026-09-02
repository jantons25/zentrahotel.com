// Renderiza el cuerpo del artículo a partir de los bloques tipados de `BlogBlock`.
import Image from "next/image";
import { ArrowRight, Lightbulb, Quote } from "lucide-react";

import type { BlogBlock } from "@/features/blog/types";
import { Link } from "@/i18n/navigation";
import { pick } from "@/lib/i18n-pick";

import styles from "./article.module.css";

interface ArticleBodyProps {
  blocks: BlogBlock[];
  locale: string;
}

export function ArticleBody({ blocks, locale }: ArticleBodyProps) {
  return (
    <div className={styles.prose}>
      {blocks.map((block, index) => {
        switch (block.type) {
          case "paragraph":
            return <p key={index}>{pick(block.text, locale)}</p>;

          case "heading":
            return (
              <h2
                key={index}
                id={block.id}
                className="max-w-[34ch] font-[family-name:var(--font-blog-display)] text-[clamp(1.6rem,3vw,2.15rem)] font-normal leading-[1.15] tracking-tight text-secondary text-balance"
              >
                {pick(block.text, locale)}
              </h2>
            );

          case "subheading":
            return (
              <h3
                key={index}
                className="max-w-[40ch] text-[1.15rem] font-semibold leading-snug text-secondary sm:text-[1.28rem]"
              >
                {pick(block.text, locale)}
              </h3>
            );

          case "image":
            return (
              <figure key={index}>
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[1.25rem] bg-secondary/5">
                  <Image
                    src={block.src}
                    alt={pick(block.alt, locale)}
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 760px"
                    className="object-cover"
                  />
                </div>
                {block.caption ? (
                  <figcaption className="mt-3 border-l-2 border-primary/60 pl-3 text-xs leading-relaxed text-muted-foreground">
                    {pick(block.caption, locale)}
                  </figcaption>
                ) : null}
              </figure>
            );

          case "list": {
            const ListTag = block.ordered ? "ol" : "ul";
            return (
              <ListTag
                key={index}
                className="max-w-[68ch] list-none space-y-3"
              >
                {block.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex gap-3 text-[1.0625rem] leading-relaxed text-foreground/85"
                  >
                    <span
                      className="mt-0.5 inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/15 font-mono text-[0.68rem] font-semibold text-secondary"
                      aria-hidden="true"
                    >
                      {block.ordered ? itemIndex + 1 : "·"}
                    </span>
                    <span>
                      {item.title ? (
                        <strong className="font-semibold text-secondary">
                          {pick(item.title, locale)}.{" "}
                        </strong>
                      ) : null}
                      {pick(item.text, locale)}
                    </span>
                  </li>
                ))}
              </ListTag>
            );
          }

          case "quote":
            return (
              <blockquote
                key={index}
                className="relative max-w-[62ch] rounded-[1.25rem] bg-accent/60 p-6 sm:p-8"
              >
                <Quote
                  className="absolute top-5 right-6 size-8 text-primary/35"
                  aria-hidden="true"
                />
                <p className="font-[family-name:var(--font-blog-display)] text-[1.25rem] leading-snug font-normal text-secondary italic text-balance sm:text-[1.45rem]">
                  {pick(block.text, locale)}
                </p>
                {block.cite ? (
                  <footer className="mt-4 text-[0.68rem] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                    {pick(block.cite, locale)}
                  </footer>
                ) : null}
              </blockquote>
            );

          case "tip":
            return (
              <aside
                key={index}
                className="flex max-w-[66ch] gap-4 rounded-[1.25rem] border border-primary/30 bg-primary/8 p-5 sm:p-6"
              >
                <Lightbulb
                  className="mt-0.5 size-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <div>
                  {block.label ? (
                    <p className="text-[0.62rem] font-semibold tracking-[0.22em] text-secondary uppercase">
                      {pick(block.label, locale)}
                    </p>
                  ) : null}
                  <p className="mt-1.5 text-[0.95rem] leading-relaxed text-foreground/85">
                    {pick(block.text, locale)}
                  </p>
                </div>
              </aside>
            );

          case "table":
            return (
              <div
                key={index}
                className="max-w-[68ch] overflow-x-auto rounded-[1.25rem] border border-secondary/12"
              >
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-secondary text-secondary-foreground">
                      {block.head.map((cell, cellIndex) => (
                        <th
                          key={cellIndex}
                          scope="col"
                          className="px-4 py-3 text-[0.68rem] font-semibold tracking-[0.16em] uppercase"
                        >
                          {pick(cell, locale)}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, rowIndex) => (
                      <tr
                        key={rowIndex}
                        className="border-t border-secondary/10 odd:bg-accent/35"
                      >
                        {row.map((cell, cellIndex) => (
                          <td
                            key={cellIndex}
                            className={`px-4 py-3 align-top ${
                              cellIndex === 0
                                ? "font-medium text-secondary"
                                : "font-mono text-[0.8rem] text-muted-foreground"
                            }`}
                          >
                            {pick(cell, locale)}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );

          case "cta":
            return (
              <aside
                key={index}
                className="max-w-[68ch] overflow-hidden rounded-[1.5rem] bg-secondary p-7 text-white sm:p-9"
              >
                <h2 className="font-[family-name:var(--font-blog-display)] text-[1.5rem] leading-tight font-normal text-balance sm:text-[1.8rem]">
                  {pick(block.title, locale)}
                </h2>
                <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-white/80">
                  {pick(block.text, locale)}
                </p>
                <Link
                  href={block.href}
                  className="group mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-xs font-semibold tracking-[0.14em] text-primary-foreground uppercase transition-colors duration-(--duration-normal) hover:bg-primary/85 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none motion-reduce:transition-none"
                >
                  {pick(block.label, locale)}
                  <ArrowRight
                    className="size-3.5 transition-transform duration-(--duration-normal) group-hover:translate-x-0.5 motion-reduce:transition-none"
                    aria-hidden="true"
                  />
                </Link>
              </aside>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
