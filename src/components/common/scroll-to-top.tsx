"use client";

// Botón flotante que aparece al hacer scroll y regresa suavemente al inicio de la página.
import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Volver arriba"
      className={cn(
        "fixed right-4 bottom-21 z-(--z-floating) flex size-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground shadow-card transition-all duration-(--duration-normal) hover:bg-secondary/90 focus-visible:ring-3 focus-visible:ring-ring/50 md:right-6 md:bottom-24",
        visible ? "opacity-100" : "pointer-events-none opacity-0",
      )}
    >
      <ChevronUp className="size-5" aria-hidden="true" />
    </button>
  );
}
