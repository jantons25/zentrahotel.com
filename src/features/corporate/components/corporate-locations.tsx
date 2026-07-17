// Sedes corporativas: grid uniforme espejando el layout de "Reserva tu habitación".
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { fontCorporateDisplay } from "@/features/corporate/config/corporate-fonts";
import { corporateLocations } from "@/features/corporate/data/corporate";

import styles from "./corporate.module.css";

export async function CorporateLocations() {
  const t = await getTranslations("corporate.locations");
  const total = corporateLocations.length;

  return (
    <Section
      id="sedes"
      aria-labelledby="sedes-titulo"
      className={`${fontCorporateDisplay.variable} relative overflow-hidden bg-[color-mix(in_oklab,var(--accent)_65%,white)]`}
    >
      <div
        className="pointer-events-none absolute -top-40 -right-24 size-[26rem] rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative">
        <header
          className={`${styles.reveal} flex flex-col gap-8 md:flex-row md:items-end md:justify-between`}
          style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
        >
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-[0.8rem] font-semibold tracking-[0.28em] text-secondary/70 uppercase">
              <span className="h-px w-8 bg-secondary/40" aria-hidden="true" />
              {t("eyebrow")} · {total.toString().padStart(2, "0")}
            </p>
            <h2
              id="sedes-titulo"
              className="mt-6 font-[family-name:var(--font-corporate-display)] font-light leading-[0.95] tracking-[-0.02em] text-secondary text-balance text-[clamp(2.4rem,5.2vw,4.2rem)]"
            >
              {t("titleA")}{" "}
              <span className="italic font-normal text-secondary/90">
                {t("titleEmphasis")}
              </span>
            </h2>
            <p className="mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground">
              {t("lead")}
            </p>
          </div>
        </header>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
          {corporateLocations.map((location, index) => {
            const CapacityIcon = location.stats.capacity.icon;
            const DetailIcon = location.stats.detail.icon;
            const LocationIcon = location.stats.location.icon;
            const background =
              location.brand === "Nexus Cowork" ? "bg-secondary" : "bg-card";
            const text =
              location.brand === "Nexus Cowork"
                ? "text-white"
                : "text-secondary";
            return (
              <li
                key={location.slug}
                className={styles.reveal}
                style={
                  {
                    "--reveal-delay": `${120 + index * 80}ms`,
                  } as React.CSSProperties
                }
              >
                <article
                  className={`${styles.card} group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-secondary/10 ${background} shadow-card`}
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-secondary/5">
                    <Image
                      src={location.image}
                      alt={location.imageAlt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                      className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent opacity-70"
                      aria-hidden="true"
                    />
                    <span
                      className={`absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full ${background}/95 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.18em] ${text} uppercase shadow-card backdrop-blur`}
                    >
                      <span
                        className="size-1.5 rounded-full bg-primary"
                        aria-hidden="true"
                      />
                      {(index + 1).toString().padStart(2, "0")} ·{" "}
                      {location.brand}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p
                      className={`text-[0.68rem] font-mono tracking-[0.22em] ${text}/55 uppercase`}
                    >
                      {t("cardEyebrow")} ·{" "}
                      {(index + 1).toString().padStart(2, "0")}
                    </p>
                    <h3
                      className={`mt-2 font-[family-name:var(--font-corporate-display)] text-2xl font-light leading-tight ${text} tracking-tight text-balance sm:text-[1.7rem]`}
                    >
                      {location.name}
                    </h3>
                    <dl className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5">
                        <LocationIcon
                          className={`size-4 ${text}/60`}
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                        <dt className="sr-only">Profile</dt>
                        <dd
                          className={
                            location.brand == "Nexus Cowork" ? "text-white" : ""
                          }
                        >
                          {location.stats.location.label}
                        </dd>
                      </div>
                      <span className="text-secondary/25" aria-hidden="true">
                        ·
                      </span>
                      <div className="flex items-center gap-1.5">
                        <DetailIcon
                          className={`size-4 ${text}60`}
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                        <dt className="sr-only">Detail</dt>
                        <dd
                          className={
                            location.brand == "Nexus Cowork" ? "text-white" : ""
                          }
                        >
                          {location.stats.detail.label}
                        </dd>
                      </div>
                      <span className="text-secondary/25" aria-hidden="true">
                        ·
                      </span>
                      <div className="flex items-center gap-1.5">
                        <CapacityIcon
                          className={`size-4 ${text}60`}
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                        <dt className="sr-only">Detail</dt>
                        <dd
                          className={
                            location.brand == "Nexus Cowork" ? "text-white" : ""
                          }
                        >
                          {location.stats.capacity.label}
                        </dd>
                      </div>
                    </dl>

                    <div className="mt-auto pt-6">
                      <a
                        href="#convenio"
                        className={`inline-flex items-center gap-2 text-sm font-semibold ${text} transition-colors duration-(--duration-normal) hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary motion-reduce:transition-none`}
                        aria-label={t("ctaAria", { location: location.name })}
                      >
                        {t("cta")}
                        <ArrowUpRight
                          className="size-4 transition-transform duration-(--duration-normal) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                      </a>
                    </div>
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
