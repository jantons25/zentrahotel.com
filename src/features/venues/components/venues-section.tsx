// Cuarta sección de la home: "Nuestras sedes".
// Campo navy editorial con tarjetas numeradas: foto arriba y ficha abajo, cuatro por
// fila en escritorio (tarjetas estrechas y más altas) y una sola columna en móvil.
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { fontVenuesDisplay } from "@/features/venues/config/venues-fonts";
import { venues } from "@/features/venues/data/venues";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { pick } from "@/lib/i18n-pick";

import styles from "./venues-section.module.css";

export async function VenuesSection() {
  const t = await getTranslations("home.venues");
  const locale = await getLocale();
  const total = venues.length;

  return (
    <Section
      id="sedes"
      aria-labelledby="sedes-home-titulo"
      className={`${fontVenuesDisplay.variable} relative overflow-hidden bg-secondary text-secondary-foreground`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-28 size-[28rem] rounded-full bg-primary/25 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-44 -left-28 size-[26rem] rounded-full bg-white/10 blur-3xl"
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
              id="sedes-home-titulo"
              className="mt-6 font-[family-name:var(--font-venues-display)] text-[clamp(2.25rem,5vw,4rem)] leading-[0.98] font-light tracking-[-0.02em] text-balance text-white"
            >
              {t("titleA")}{" "}
              <span className="font-normal text-primary italic">
                {t("titleEmphasis")}
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-white/70">
              {t("lead")}
            </p>
          </div>
        </header>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {venues.map((venue, index) => {
            const order = (index + 1).toString().padStart(2, "0");
            // Nexus Cowork se distingue con el oliva de marca; el navy ya es el fondo.
            const isCowork = venue.brand === "Nexus Cowork";
            const surface = isCowork ? "bg-primary" : "bg-card";
            const heading = "text-secondary";
            const body = isCowork
              ? "text-secondary/80"
              : "text-muted-foreground";
            const eyebrow = isCowork
              ? "text-secondary/65"
              : "text-secondary/55";

            return (
              <li
                key={venue.id}
                id={venue.anchor}
                className={`${styles.reveal} scroll-mt-[calc(var(--h-header)+1rem)]`}
                style={
                  {
                    "--reveal-delay": `${120 + index * 90}ms`,
                  } as React.CSSProperties
                }
              >
                <article
                  className={`${styles.card} group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-white/15 ${surface} shadow-card`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-secondary/10">
                    <Image
                      src={venue.image}
                      alt={pick(venue.alt, locale)}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 23vw"
                      className={styles.media}
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-secondary/45 via-transparent to-transparent"
                    />
                    <span
                      className={`absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[0.58rem] font-semibold tracking-[0.16em] uppercase shadow-card ${
                        isCowork
                          ? "bg-secondary text-white"
                          : "bg-card text-secondary"
                      }`}
                    >
                      <span
                        className="size-1.5 rounded-full bg-primary"
                        aria-hidden="true"
                      />
                      {order} · {venue.brand}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <p
                      className={`font-mono text-[0.64rem] tracking-[0.22em] uppercase ${eyebrow}`}
                    >
                      {t("cardEyebrow")} · {order}
                    </p>
                    <h3
                      className={`mt-1.5 font-[family-name:var(--font-venues-display)] text-xl leading-tight font-light tracking-tight text-balance sm:text-2xl ${heading}`}
                    >
                      {venue.name}
                    </h3>

                    <ul className={`mt-4 space-y-2 text-sm ${body}`}>
                      {venue.features.map(({ icon: Icon, label }) => (
                        <li
                          key={pick(label, locale)}
                          className="flex items-start gap-2"
                        >
                          <Icon
                            className={`mt-0.5 size-4 shrink-0 ${isCowork ? "text-secondary" : "text-primary"}`}
                            strokeWidth={1.75}
                            aria-hidden="true"
                          />
                          <span className="leading-snug">
                            {pick(label, locale)}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={buildWhatsAppUrl(
                        t("whatsappPrefill", { venue: venue.name }),
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={t("ctaAria", { venue: venue.name })}
                      className={`mt-auto inline-flex w-fit items-center gap-2 pt-5 text-sm font-semibold transition-colors duration-(--duration-normal) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none ${
                        isCowork
                          ? "text-secondary hover:text-white"
                          : "text-secondary hover:text-primary"
                      }`}
                    >
                      {t("cta")}
                      <ArrowUpRight
                        className="size-4 transition-transform duration-(--duration-normal) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </a>
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
