// Tercera sección de la home: "Nuestros servicios".
// Tres tarjetas con foto + icono + nombre; al pasar el cursor (o al recibir foco)
// la tarjeta se expande con una transición suave y revela el detalle del servicio.
// La reja usa `items-start` para que solo crezca la tarjeta activa: sin estirado
// de fila, las hermanas conservan su alto original.
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { fontServicesDisplay } from "@/features/services/config/services-fonts";
import { hotelServices } from "@/features/services/data/services";
import { siteConfig } from "@/config/site";
import { pick } from "@/lib/i18n-pick";

import styles from "./services-section.module.css";

export async function ServicesSection() {
  const t = await getTranslations("home.services");
  const locale = await getLocale();
  const total = hotelServices.length;

  return (
    <Section
      id="servicios"
      aria-labelledby="servicios-titulo"
      className={`${fontServicesDisplay.variable} relative overflow-hidden bg-[color-mix(in_oklab,var(--accent)_65%,white)]`}
    >
      <div
        className="pointer-events-none absolute -top-40 -left-24 size-[26rem] rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative">
        <header
          className={`${styles.reveal} flex flex-col gap-8 md:flex-row md:items-end md:justify-between`}
          style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
        >
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.28em] text-secondary/70 uppercase">
              <span className="h-px w-8 bg-secondary/40" aria-hidden="true" />
              {t("eyebrow")} · {total.toString().padStart(2, "0")}
            </p>
            <h2
              id="servicios-titulo"
              className="mt-6 font-[family-name:var(--font-services-display)] text-[clamp(2.25rem,5vw,4rem)] leading-[0.98] font-light tracking-[-0.02em] text-balance text-secondary"
            >
              {t("titleA")}{" "}
              <span className="font-normal text-primary italic">
                {t("titleEmphasis")}
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground">
              {t("lead")}
            </p>
          </div>

          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full border border-secondary/30 bg-transparent px-6 py-3 text-sm font-semibold tracking-wide text-secondary uppercase transition-colors duration-(--duration-normal) hover:bg-secondary hover:text-secondary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary motion-reduce:transition-none md:self-auto"
          >
            {t("ctaBook")}
            <ArrowUpRight
              className="size-4 transition-transform duration-(--duration-normal) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
              strokeWidth={2}
              aria-hidden="true"
            />
          </a>
        </header>

        <ul
          className="mx-auto mt-12 grid max-w-[64rem] grid-cols-1 items-start gap-6 sm:grid-cols-3 lg:mt-16 lg:gap-8"
          aria-label={t("listAria", { count: total })}
        >
          {hotelServices.map(
            ({ label, icon: Icon, image, detail, highlights }, index) => {
              const labelText = pick(label, locale);
              return (
                <li
                  key={labelText}
                  className={styles.reveal}
                  style={
                    {
                      "--reveal-delay": `${120 + index * 90}ms`,
                    } as React.CSSProperties
                  }
                >
                  <article
                    tabIndex={0}
                    className={`${styles.card} group flex h-full flex-col overflow-hidden rounded-2xl border border-secondary/10 bg-card text-center shadow-card focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary`}
                  >
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary/5">
                      <Image
                        src={image}
                        alt=""
                        fill
                        loading="lazy"
                        sizes="(max-width: 640px) 100vw, 21rem"
                        className={styles.media}
                      />
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-secondary/55 via-secondary/10 to-transparent"
                        aria-hidden="true"
                      />
                    </div>

                    {/* El chip del icono monta sobre la foto para coser imagen y texto. */}
                    <div className="relative z-10 -mt-7 flex flex-1 flex-col items-center px-5 pb-6">
                      <span
                        className={`${styles.iconChip} grid size-14 place-items-center rounded-full border-4 border-card bg-card text-secondary shadow-card`}
                        aria-hidden="true"
                      >
                        <Icon className="size-5" strokeWidth={1.75} />
                      </span>
                      <p className="mt-3 text-base leading-snug font-medium text-balance text-secondary">
                        {labelText}
                      </p>

                      {/* Detalle plegado: se despliega al hacer hover o al enfocar. */}
                      <div className={styles.detail}>
                        <div className={styles.detailInner}>
                          <p className="mt-3 text-[0.85rem] leading-relaxed text-balance text-muted-foreground">
                            {pick(detail, locale)}
                          </p>
                          <ul className="mt-3 space-y-1.5 text-left">
                            {highlights.map((highlight) => {
                              const highlightText = pick(highlight, locale);
                              return (
                                <li
                                  key={highlightText}
                                  className="flex items-start gap-2 text-[0.8rem] leading-snug text-secondary/75"
                                >
                                  <span
                                    aria-hidden="true"
                                    className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary"
                                  />
                                  {highlightText}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </div>
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
