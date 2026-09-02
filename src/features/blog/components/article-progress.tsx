"use client";

// Barra de progreso de lectura: avanza según el scroll dentro del cuerpo del artículo.
import { useEffect, useState } from "react";

import styles from "./article.module.css";

export function ArticleProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const doc = document.documentElement;
      const scrollable = doc.scrollHeight - doc.clientHeight;
      setProgress(scrollable > 0 ? (doc.scrollTop / scrollable) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className={styles.progressTrack} aria-hidden="true">
      <div
        className={styles.progressBar}
        style={{ "--progress": `${progress}%` } as React.CSSProperties}
      />
    </div>
  );
}
