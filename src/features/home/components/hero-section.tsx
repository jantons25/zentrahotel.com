// Hero principal de la home: carrusel de fondo a pantalla completa con el motor de
// reservas horizontal de Cloudbeds anclado al pie.
//
// Geometría: el header sticky mide `--h-header` (banner flash + barra de navegación).
// El hero sube `--h-navbar` para que la barra flote sobre la imagen y mide
// `100dvh - --h-flash`; header + hero suman exactamente una pantalla.
import { getLocale, getTranslations } from "next-intl/server";

import { CloudbedsSearchBar } from "@/features/booking/components/cloudbeds-search-bar";
import { HeroCarousel } from "@/features/home/components/hero-carousel";
import { fontHeroDisplay } from "@/features/home/config/hero-fonts";
import { heroSlides } from "@/features/home/data/hero-slides";
import { pick } from "@/lib/i18n-pick";

export async function HeroSection() {
  const t = await getTranslations("home.hero");
  const locale = await getLocale();

  const slides = heroSlides.map((slide) => ({
    id: slide.id,
    image: slide.image,
    alt: pick(slide.alt, locale),
    title: pick(slide.title, locale),
    titleEmphasis: pick(slide.titleEmphasis, locale),
    subtitle: pick(slide.subtitle, locale),
  }));

  return (
    <section
      aria-label={t("sectionAria")}
      className={`${fontHeroDisplay.variable} relative isolate h-[calc(100dvh-var(--h-flash))] mt-[calc(var(--h-navbar)*-1)] overflow-hidden bg-secondary text-white`}
    >
      <HeroCarousel
        slides={slides}
        labels={{
          prev: t("prevAria"),
          next: t("nextAria"),
          status: t("eyebrow"),
        }}
      >
        <CloudbedsSearchBar />
      </HeroCarousel>
    </section>
  );
}
