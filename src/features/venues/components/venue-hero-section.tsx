// Hero de las páginas de sede: mismo carrusel a pantalla completa que la home, pero
// con las fotos de la sede y el motor de reservas fijado a su propiedad de Cloudbeds.
//
// Geometría idéntica a `HeroSection`: el hero sube `--h-navbar` para que la barra
// flote sobre la imagen y mide `100dvh - --h-flash`.
import { getLocale, getTranslations } from "next-intl/server";

import { CloudbedsSearchBar } from "@/features/booking/components/cloudbeds-search-bar";
import { HeroCarousel } from "@/features/home/components/hero-carousel";
import { fontHeroDisplay } from "@/features/home/config/hero-fonts";
import type { VenuePage } from "@/features/venues/types";
import { pick } from "@/lib/i18n-pick";

export async function VenueHeroSection({ venue }: { venue: VenuePage }) {
  const t = await getTranslations("home.hero");
  const locale = await getLocale();

  const slides = venue.heroSlides.map((slide) => ({
    id: slide.id,
    image: slide.image,
    alt: pick(slide.alt, locale),
    title: pick(slide.title, locale),
    titleEmphasis: pick(slide.titleEmphasis, locale),
    subtitle: pick(slide.subtitle, locale),
  }));

  return (
    <section
      aria-label={venue.name}
      className={`${fontHeroDisplay.variable} relative isolate mt-[calc(var(--h-navbar)*-1)] h-[calc(100dvh-var(--h-flash))] overflow-hidden bg-secondary text-white`}
    >
      <HeroCarousel
        slides={slides}
        labels={{
          prev: t("prevAria"),
          next: t("nextAria"),
          // El sello sobre el titular identifica la sede y su dirección.
          status: `${venue.name} · ${venue.address}`,
        }}
      >
        <CloudbedsSearchBar
          property={{ code: venue.propertyCode, name: venue.name }}
        />
      </HeroCarousel>
    </section>
  );
}
