// Sección "Nuestros servicios": grid editorial con todas las amenidades del hotel.
import { getTranslations } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { fontServicesDisplay } from "@/features/services/config/services-fonts";
import { hotelServices } from "@/features/services/data/services";
import { siteConfig } from "@/config/site";

import styles from "./services-section.module.css";

// Máxima demora escalonada antes de que las cards revelen todas a la vez (evita cascadas eternas).
const MAX_STAGGER_INDEX = 12;

export async function ServicesSection() {
  const t = await getTranslations("home.services");
  const total = hotelServices.length;

  return (
    <Section
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
              className="mt-6 font-[family-name:var(--font-services-display)] font-light leading-[0.95] tracking-[-0.02em] text-secondary text-balance text-[clamp(2.5rem,5.5vw,4.5rem)]"
            >
              {t("titleA")}{" "}
              <span className="italic font-normal text-secondary/90">
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
          className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:mt-16 lg:grid-cols-6 lg:gap-5"
          aria-label={t("listAria", { count: total })}
        >
          {hotelServices.map(({ label, icon: Icon }, index) => (
            <li
              key={label}
              className={styles.reveal}
              style={
                {
                  "--reveal-delay": `${80 + Math.min(index, MAX_STAGGER_INDEX) * 55}ms`,
                } as React.CSSProperties
              }
            >
              <article
                className={`${styles.card} group flex h-full flex-col items-start gap-4 rounded-2xl border border-secondary/10 bg-card p-4 shadow-card sm:p-5`}
              >
                <span
                  className={`${styles.iconChip} grid size-11 place-items-center rounded-xl bg-primary/15 text-secondary`}
                  aria-hidden="true"
                >
                  <Icon className="size-5" strokeWidth={1.75} />
                </span>
                <p className="text-sm font-medium leading-snug text-secondary text-balance sm:text-[0.95rem]">
                  {label}
                </p>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
