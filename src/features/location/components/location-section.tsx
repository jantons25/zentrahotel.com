// Sección de ubicación: cards de ventajas cercanas + croquis de ubicación con panel de dirección.
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { ArrowUpRight, MapPin } from "lucide-react";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { fontLocationDisplay } from "@/features/location/config/location-fonts";
import { locationHighlights } from "@/features/location/data/location-highlights";
import { siteConfig } from "@/config/site";
import { pick } from "@/lib/i18n-pick";

import styles from "./location-section.module.css";

export async function LocationSection() {
  const t = await getTranslations("home.location");
  const locale = await getLocale();
  const total = locationHighlights.length;

  return (
    <Section
      aria-labelledby="ubicacion-titulo"
      className={`${fontLocationDisplay.variable} relative overflow-hidden bg-secondary text-secondary-foreground`}
    >
      <div
        className="pointer-events-none absolute -top-32 -right-24 size-[26rem] rounded-full bg-primary/20 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative">
        <header
          className={`${styles.reveal} flex flex-col gap-8 md:flex-row md:items-end md:justify-between`}
          style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
        >
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.28em] text-white/60 uppercase">
              <span className="h-px w-8 bg-white/30" aria-hidden="true" />
              {t("eyebrow")} · {total.toString().padStart(2, "0")}
            </p>
            <h2
              id="ubicacion-titulo"
              className="mt-6 font-[family-name:var(--font-location-display)] font-light leading-[0.95] tracking-[-0.02em] text-white text-balance text-[clamp(2.5rem,5.5vw,4.5rem)]"
            >
              {t("titleA")}{" "}
              <span className="italic font-normal text-primary/90">
                {t("titleEmphasis")}
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-white/70">
              {t("lead", {
                balta: siteConfig.contact.addressBalta,
                plaza: siteConfig.contact.addressPlaza,
                sanJose: siteConfig.contact.addressSanJose,
              })}
            </p>
          </div>

          <a
            href={siteConfig.contact.mapShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold tracking-wide text-white uppercase backdrop-blur-md transition-colors duration-(--duration-normal) hover:bg-white hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none md:self-auto"
          >
            {t("ctaDirections")}
            <ArrowUpRight
              className="size-4 transition-transform duration-(--duration-normal) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
              strokeWidth={2}
              aria-hidden="true"
            />
          </a>
        </header>

        <div
          className={`${styles.reveal} mt-12 lg:mt-16`}
          style={{ "--reveal-delay": "460ms" } as React.CSSProperties}
        >
          <div
            className={`${styles.mapCard} relative overflow-hidden rounded-[1.75rem] border border-white/12 bg-card shadow-card`}
          >
            <div className="relative h-80 w-full md:h-[28rem]">
              <Image
                src="/images/croquis-01.jpeg"
                alt={t("mapTitle", { brand: siteConfig.name })}
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 1152px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {locationHighlights.map(
            ({ icon: Icon, category, title, distance, description }, index) => {
              const titleText = pick(title, locale);
              return (
                <li
                  key={titleText}
                  className={styles.reveal}
                  style={
                    {
                      "--reveal-delay": `${120 + index * 80}ms`,
                    } as React.CSSProperties
                  }
                >
                  <article
                    className={`${styles.card} group flex h-full flex-col rounded-[1.5rem] border border-white/12 bg-card p-6 shadow-card sm:p-7`}
                  >
                    <span
                      className={`${styles.iconWrap} grid size-12 place-items-center rounded-2xl bg-primary/15 text-secondary`}
                      aria-hidden="true"
                    >
                      <Icon className="size-5" strokeWidth={1.75} />
                    </span>
                    <p className="mt-6 text-[0.68rem] font-mono tracking-[0.22em] text-secondary/55 uppercase">
                      {(index + 1).toString().padStart(2, "0")} ·{" "}
                      {pick(category, locale)}
                    </p>
                    <h3 className="mt-2 font-[family-name:var(--font-location-display)] text-xl font-normal leading-tight text-secondary tracking-tight text-balance sm:text-[1.5rem]">
                      {titleText}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {pick(description, locale)}
                    </p>
                    <p className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary uppercase tracking-[0.16em]">
                      <MapPin
                        className="size-3.5"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                      {pick(distance, locale)}
                    </p>
                  </article>
                </li>
              );
            },
          )}
        </ul>
      </Container>
    </Section>
  );
}
