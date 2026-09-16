"use client";

// Encabezado sticky en dos pisos: banner negro de ofertas flash (marquesina infinita)
// y barra de navegación con logo, menú desplegable flotante y conmutador ES | EN.
// Su altura total vive en `--h-header` (globals.css) para que el hero de la home
// ocupe exactamente el resto del viewport.
import * as React from "react";
import { useTranslations } from "next-intl";

import { BrandLogo } from "@/components/common/brand-logo";
import { NavMenu } from "@/components/layout/nav-menu";
import { LocaleSwitch } from "@/components/layout/locale-switch";

export function Header({ banner }: { banner: React.ReactNode }) {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-scrolled={scrolled}
      className="sticky top-0 z-(--z-header) h-[var(--h-header)]"
    >
      {banner}

      <div
        className={`h-[var(--h-navbar)] transition-[background-color,backdrop-filter,box-shadow] duration-(--duration-normal) motion-reduce:transition-none ${
          scrolled
            ? "bg-secondary/90 shadow-header backdrop-blur-xl"
            : "bg-gradient-to-b from-black/45 to-transparent"
        }`}
      >
        <div className="mx-auto flex h-full w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <BrandLogo priority className="[&_img]:brightness-0 [&_img]:invert" />

          <nav
            aria-label={t("primary")}
            className="flex items-center gap-3 md:gap-6"
          >
            <NavMenu />
            <LocaleSwitch className="text-white" />
          </nav>
        </div>
      </div>
    </header>
  );
}
