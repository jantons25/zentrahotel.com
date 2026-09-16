// Segunda sección de las páginas de sede: "Nuestras habitaciones".
//
// Mosaico desordenado resuelto con columnas CSS (`columns-*` + `break-inside-avoid`):
// cada foto conserva su propia proporción, así que las columnas quedan desfasadas sin
// necesidad de librería de masonry. El rótulo va sobre la foto, abajo a la izquierda.
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { fontVenuesDisplay } from "@/features/venues/config/venues-fonts";
import type { VenuePage } from "@/features/venues/types";
import { Link } from "@/i18n/navigation";
import { pick } from "@/lib/i18n-pick";

import styles from "./venue-rooms-section.module.css";

export async function VenueRoomsSection({ venue }: { venue: VenuePage }) {
  const t = await getTranslations("venuePage.rooms");
  const locale = await getLocale();
  const total = venue.roomShots.length;

  return (
    <Section
      id="habitaciones"
      aria-labelledby="habitaciones-sede-titulo"
      className={`${fontVenuesDisplay.variable} bg-muted`}
    >
      <Container>
        <header
          className={`${styles.reveal} flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between`}
          style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
        >
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.28em] text-secondary/55 uppercase">
              {t("eyebrow")}
              <span className="inline-flex items-center justify-center rounded-full border border-secondary/20 px-2.5 py-0.5 font-mono text-[0.62rem] tracking-[0.18em]">
                {total.toString().padStart(2, "0")}
              </span>
            </p>
            <h2
              id="habitaciones-sede-titulo"
              className="mt-6 font-[family-name:var(--font-venues-display)] text-[clamp(2.25rem,5vw,4rem)] leading-[0.98] font-light tracking-[-0.02em] text-balance text-secondary"
            >
              {t("title")}
            </h2>
          </div>

          <div className="max-w-md lg:pt-2">
            <p className="text-[0.95rem] leading-relaxed text-muted-foreground">
              {t("lead")}
            </p>
            <Link
              href="/habitaciones"
              className="group mt-6 inline-flex items-center gap-3 rounded-full border border-secondary/25 px-6 py-3 text-sm font-semibold text-secondary transition-colors duration-(--duration-normal) hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none"
            >
              {t("ctaSeeAll")}
              <ArrowUpRight
                className="size-4 transition-transform duration-(--duration-normal) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                strokeWidth={2}
                aria-hidden="true"
              />
            </Link>
          </div>
        </header>

        <ul className="mt-12 columns-1 gap-5 sm:columns-2 lg:mt-16 lg:columns-3 lg:gap-6">
          {venue.roomShots.map((shot, index) => (
            <li
              key={shot.id}
              className={`${styles.reveal} mb-5 break-inside-avoid lg:mb-6`}
              style={
                { "--reveal-delay": `${100 + index * 70}ms` } as React.CSSProperties
              }
            >
              <figure
                className={`${styles.card} group relative w-full ${shot.aspect} overflow-hidden rounded-[1.5rem] bg-secondary/10 shadow-card`}
              >
                <Image
                  src={shot.src}
                  alt={pick(shot.alt, locale)}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className={styles.media}
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-secondary/10 to-transparent"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-5 text-base font-light text-white sm:p-6 sm:text-lg">
                  {pick(shot.label, locale)}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
