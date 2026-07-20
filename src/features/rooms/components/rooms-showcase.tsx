// Sección "habitaciones": bento grid editorial en fondo oscuro con tarjetas de habitación.
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { ArrowUpRight, BedDouble, Users } from "lucide-react";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { fontShowcaseDisplay } from "@/features/rooms/config/showcase-fonts";
import { featuredRooms as rooms } from "@/features/rooms/data/rooms";
import { siteConfig } from "@/config/site";
import { Link } from "@/i18n/navigation";
import { pick } from "@/lib/i18n-pick";

import styles from "./rooms-showcase.module.css";

type BentoTone = "solid" | "accent";

interface BentoLayout {
  colSpan: string;
  aspect: string;
  tone: BentoTone;
  tagKey: string;
  taglineKey: string;
}

const bentoLayout: BentoLayout[] = [
  { colSpan: "lg:col-span-2", aspect: "aspect-[3/4]",  tone: "solid",  tagKey: "bentoTag0", taglineKey: "bentoTagline0" },
  { colSpan: "lg:col-span-4", aspect: "aspect-[16/10]", tone: "solid",  tagKey: "bentoTag1", taglineKey: "bentoTagline1" },
  { colSpan: "lg:col-span-3", aspect: "aspect-[3/2]",  tone: "solid",  tagKey: "bentoTag2", taglineKey: "bentoTagline2" },
  { colSpan: "lg:col-span-3", aspect: "aspect-[3/2]",  tone: "accent", tagKey: "bentoTag3", taglineKey: "bentoTagline3" },
  { colSpan: "lg:col-span-4", aspect: "aspect-[16/10]", tone: "solid",  tagKey: "bentoTag4", taglineKey: "bentoTagline4" },
  { colSpan: "lg:col-span-2", aspect: "aspect-[3/4]",  tone: "accent", tagKey: "bentoTag5", taglineKey: "bentoTagline5" },
];

export async function RoomsShowcase() {
  const t = await getTranslations("home.roomsShowcase");
  const locale = await getLocale();
  const total = rooms.length;

  return (
    <Section
      id="habitaciones"
      aria-labelledby="habitaciones-titulo"
      className={`${fontShowcaseDisplay.variable} ${styles.section} relative overflow-hidden bg-secondary text-secondary-foreground`}
    >
      <div className={styles.auroraOne} aria-hidden="true" />
      <div className={styles.auroraTwo} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />

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
              id="habitaciones-titulo"
              className="mt-6 font-[family-name:var(--font-showcase-display)] font-light leading-[0.95] tracking-[-0.02em] text-white text-balance text-[clamp(2.5rem,5.5vw,4.5rem)]"
            >
              {t("titleA")}{" "}
              <span className="italic font-normal text-primary">
                {t("titleEmphasis")}
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-white/70">
              {t("lead")}
            </p>
          </div>

          <Link
            href="/habitaciones"
            className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold tracking-wide text-white uppercase transition-colors duration-(--duration-normal) hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none md:self-auto"
          >
            {t("ctaSeeAll")}
            <ArrowUpRight
              className="size-4 transition-transform duration-(--duration-normal) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
              strokeWidth={2}
              aria-hidden="true"
            />
          </Link>
        </header>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-6 lg:gap-6">
          {rooms.map((room, index) => {
            const layout = bentoLayout[index] ?? bentoLayout[0];
            const isAccent = layout.tone === "accent";
            const ctaLabel = room.bookable ? t("ctaBook") : t("ctaDetails");
            const ctaHref = room.bookable ? siteConfig.bookingUrl : "/habitaciones";
            const ctaExternal = room.bookable;
            const roomName = pick(room.name, locale);

            return (
              <li
                key={room.slug}
                className={`${styles.reveal} ${layout.colSpan}`}
                style={
                  {
                    "--reveal-delay": `${120 + index * 80}ms`,
                  } as React.CSSProperties
                }
              >
                <article
                  className={`${styles.card} group relative flex h-full w-full ${layout.aspect} flex-col justify-between overflow-hidden rounded-[1.75rem] p-6 text-white shadow-card sm:p-7`}
                >
                  <Image
                    src={room.image}
                    alt={pick(room.imageAlt, locale)}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 40vw, 33vw"
                    className={`${styles.cardImage} absolute inset-0 -z-20 object-cover`}
                  />
                  <div
                    className={
                      isAccent
                        ? "absolute inset-0 -z-10 bg-gradient-to-t from-secondary/48 via-secondary/28 to-primary/10"
                        : "absolute inset-0 -z-10 bg-gradient-to-t from-secondary/48 via-secondary/30 to-secondary/5"
                    }
                    aria-hidden="true"
                  />

                  <div className="flex items-start justify-between gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-[0.65rem] font-semibold tracking-[0.18em] text-primary-foreground uppercase shadow-card">
                      <span className="size-1.5 rounded-full bg-primary-foreground" aria-hidden="true" />
                      {(index + 1).toString().padStart(2, "0")} · {t(layout.tagKey)}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-[family-name:var(--font-showcase-display)] text-2xl font-light leading-tight tracking-tight text-balance sm:text-[1.9rem] lg:text-[2.05rem]">
                      {roomName}
                    </h3>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/80">
                      {t(layout.taglineKey)}
                    </p>

                    <dl className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-white/70">
                      <div className="flex items-center gap-1.5">
                        <Users className="size-3.5 text-white/60" strokeWidth={1.75} aria-hidden="true" />
                        <dt className="sr-only">Capacidad</dt>
                        <dd>{pick(room.capacity, locale)}</dd>
                      </div>
                      <span className="text-white/30" aria-hidden="true">·</span>
                      <div className="flex items-center gap-1.5">
                        <BedDouble className="size-3.5 text-white/60" strokeWidth={1.75} aria-hidden="true" />
                        <dt className="sr-only">Cama</dt>
                        <dd>{pick(room.detail, locale)}</dd>
                      </div>
                    </dl>

                    <a
                      href={ctaHref}
                      target={ctaExternal ? "_blank" : undefined}
                      rel={ctaExternal ? "noopener noreferrer" : undefined}
                      aria-label={t("ctaAria", { action: ctaLabel, room: roomName })}
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold tracking-[0.14em] text-primary-foreground uppercase transition-transform duration-(--duration-normal) hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                    >
                      {ctaLabel}
                      <ArrowUpRight
                        className="size-3.5 transition-transform duration-(--duration-normal) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
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
