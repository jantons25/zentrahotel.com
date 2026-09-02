"use client";

// Tabla de contenidos del artículo con scrollspy: resalta la sección visible.
import { useEffect, useState } from "react";

import styles from "./article.module.css";

export interface TocItem {
  id: string;
  label: string;
}

interface ArticleTocProps {
  title: string;
  items: TocItem[];
}

export function ArticleToc({ title, items }: ArticleTocProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    );

    const nodes = items
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => node !== null);
    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav aria-label={title}>
      <p className="text-[0.62rem] font-semibold tracking-[0.24em] text-secondary/70 uppercase">
        {title}
      </p>
      <ul className="mt-4 space-y-1 border-l border-secondary/10">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              data-active={activeId === item.id}
              className={`${styles.tocLink} relative block py-1.5 pl-4 text-sm leading-snug text-muted-foreground transition-colors duration-(--duration-normal) hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none`}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
