// Sección de ubicación: cards de ventajas cercanas + mapa embebido con panel de dirección.
import { ArrowUpRight, MapPin, Star } from "lucide-react";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { fontLocationDisplay } from "@/features/location/config/location-fonts";
import { locationHighlights } from "@/features/location/data/location-highlights";
import { siteConfig } from "@/config/site";

import styles from "./location-section.module.css";

const streetAddress = siteConfig.contact.address.replace(", Perú", "");

export function LocationSection() {
  const total = locationHighlights.length;

  return (
    <Section
      aria-labelledby="ubicacion-titulo"
      className={`${fontLocationDisplay.variable} relative overflow-hidden bg-[color-mix(in_oklab,var(--accent)_65%,white)]`}
    >
      <div
        className="pointer-events-none absolute -top-32 -right-24 size-[26rem] rounded-full bg-primary/10 blur-3xl"
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
              Ubicación · {total.toString().padStart(2, "0")}
            </p>
            <h2
              id="ubicacion-titulo"
              className="mt-6 font-[family-name:var(--font-location-display)] font-light leading-[0.95] tracking-[-0.02em] text-secondary text-balance text-[clamp(2.5rem,5.5vw,4.5rem)]"
            >
              En el corazón de{" "}
              <span className="italic font-normal text-secondary/90">
                Chiclayo.
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground">
              Nuestra ubicación en {streetAddress} te deja a pasos de la Av.
              Balta y los principales puntos comerciales, gastronómicos y
              turísticos de la ciudad.
            </p>
          </div>

          <a
            href={siteConfig.contact.mapShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full border border-secondary/30 bg-transparent px-6 py-3 text-sm font-semibold tracking-wide text-secondary uppercase transition-colors duration-(--duration-normal) hover:bg-secondary hover:text-secondary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary motion-reduce:transition-none md:self-auto"
          >
            Cómo llegar
            <ArrowUpRight
              className="size-4 transition-transform duration-(--duration-normal) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
              strokeWidth={2}
              aria-hidden="true"
            />
          </a>
        </header>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {locationHighlights.map(
            ({ icon: Icon, category, title, distance, description }, index) => (
              <li
                key={title}
                className={styles.reveal}
                style={
                  {
                    "--reveal-delay": `${120 + index * 80}ms`,
                  } as React.CSSProperties
                }
              >
                <article
                  className={`${styles.card} group flex h-full flex-col rounded-[1.5rem] border border-secondary/10 bg-card p-6 shadow-card sm:p-7`}
                >
                  <span
                    className={`${styles.iconWrap} grid size-12 place-items-center rounded-2xl bg-primary/15 text-secondary`}
                    aria-hidden="true"
                  >
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <p className="mt-6 text-[0.68rem] font-mono tracking-[0.22em] text-secondary/55 uppercase">
                    {(index + 1).toString().padStart(2, "0")} · {category}
                  </p>
                  <h3 className="mt-2 font-[family-name:var(--font-location-display)] text-xl font-normal leading-tight text-secondary tracking-tight text-balance sm:text-[1.5rem]">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {description}
                  </p>
                  <p className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-primary uppercase tracking-[0.16em]">
                    <MapPin
                      className="size-3.5"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    {distance}
                  </p>
                </article>
              </li>
            ),
          )}
        </ul>

        <div
          className={`${styles.reveal} mt-12 lg:mt-16`}
          style={{ "--reveal-delay": "460ms" } as React.CSSProperties}
        >
          <div
            className={`${styles.mapCard} relative overflow-hidden rounded-[1.75rem] border border-secondary/10 bg-card shadow-card`}
          >
            <iframe
              src={siteConfig.contact.mapEmbedUrl}
              title={`Ubicación de ${siteConfig.name} en Google Maps`}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-80 w-full border-0 md:h-[28rem]"
            />

            <aside className="pointer-events-none absolute inset-x-4 bottom-4 md:inset-x-auto md:bottom-6 md:left-6 md:max-w-sm">
              <div className="pointer-events-auto flex flex-col gap-3 rounded-2xl border border-secondary/10 bg-card/95 p-5 shadow-card backdrop-blur">
                <div className="flex items-start gap-3">
                  <span
                    className="grid size-10 shrink-0 place-items-center rounded-xl bg-primary/15 text-secondary"
                    aria-hidden="true"
                  >
                    <MapPin className="size-4" strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[0.65rem] font-mono tracking-[0.22em] text-secondary/55 uppercase">
                      {siteConfig.name}
                    </p>
                    <p className="mt-1 font-[family-name:var(--font-location-display)] text-lg font-normal leading-tight text-secondary">
                      {streetAddress}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-secondary/70">
                  <span className="inline-flex items-center gap-1 text-primary">
                    <Star className="size-3.5 fill-primary" strokeWidth={0} aria-hidden="true" />
                    <span className="font-semibold text-secondary">4.6</span>
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>Excelente en Google Maps</span>
                </div>

                <a
                  href={siteConfig.contact.mapShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 self-start text-sm font-semibold text-secondary transition-colors duration-(--duration-normal) hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary motion-reduce:transition-none"
                >
                  Ver mapa ampliado
                  <ArrowUpRight
                    className="size-4 transition-transform duration-(--duration-normal) hover:translate-x-0.5 hover:-translate-y-0.5 motion-reduce:transition-none"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </a>
              </div>
            </aside>
          </div>
        </div>
      </Container>
    </Section>
  );
}
