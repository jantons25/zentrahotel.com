// Tercera sección de la home: "Nuestros servicios".
// Tarjetas con foto + icono + nombre, en un flex-wrap siempre centrado horizontalmente.
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

// Máxima demora escalonada antes de que las cards revelen todas a la vez (evita cascadas eternas).
const MAX_STAGGER_INDEX = 12;

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
          className="mt-12 flex flex-wrap justify-center gap-4 lg:mt-16 lg:gap-5"
          aria-label={t("listAria", { count: total })}
        >
          {hotelServices.map(({ label, icon: Icon, image }, index) => {
            const labelText = pick(label, locale);
            return (
              <li
                key={labelText}
                className={`${styles.reveal} w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.75rem)] md:w-[15rem] lg:w-[15.5rem]`}
                style={
                  {
                    "--reveal-delay": `${80 + Math.min(index, MAX_STAGGER_INDEX) * 55}ms`,
                  } as React.CSSProperties
                }
              >
                <article
                  className={`${styles.card} group flex h-full flex-col overflow-hidden rounded-2xl border border-secondary/10 bg-card text-center shadow-card`}
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-secondary/5">
                    <Image
                      src={image}
                      alt=""
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 16rem"
                      className={styles.media}
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-secondary/55 via-secondary/10 to-transparent"
                      aria-hidden="true"
                    />
                  </div>

                  {/* El chip del icono monta sobre la foto para coser imagen y texto. */}
                  <div className="relative z-10 -mt-7 flex flex-1 flex-col items-center px-4 pb-5">
                    <span
                      className={`${styles.iconChip} grid size-14 place-items-center rounded-full border-4 border-card bg-card text-secondary shadow-card`}
                      aria-hidden="true"
                    >
                      <Icon className="size-5" strokeWidth={1.75} />
                    </span>
                    <p className="mt-3 text-sm leading-snug font-medium text-balance text-secondary">
                      {labelText}
                    </p>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
