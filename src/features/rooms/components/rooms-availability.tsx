// Sección "Reserva tu habitación": grid editorial de habitaciones reservables.
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { ArrowUpRight, BedDouble, Users } from "lucide-react";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { fontAvailabilityDisplay } from "@/features/rooms/config/availability-fonts";
import { featuredRooms as rooms } from "@/features/rooms/data/rooms";
import { siteConfig } from "@/config/site";
import { pick } from "@/lib/i18n-pick";

import styles from "./rooms-availability.module.css";

export async function RoomsAvailability() {
  const t = await getTranslations("home.availability");
  const locale = await getLocale();
  const bookableRooms = rooms.filter((room) => room.bookable);
  const total = bookableRooms.length;

  return (
    <Section
      aria-labelledby="disponibilidad-titulo"
      className={`${fontAvailabilityDisplay.variable} relative overflow-hidden bg-[color-mix(in_oklab,var(--accent)_65%,white)]`}
    >
      <div
        className="pointer-events-none absolute -top-40 right-[-8rem] size-[26rem] rounded-full bg-primary/10 blur-3xl"
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
              id="disponibilidad-titulo"
              className="mt-6 font-[family-name:var(--font-availability-display)] font-light leading-[0.95] tracking-[-0.02em] text-secondary text-balance text-[clamp(2.5rem,5.5vw,4.5rem)]"
            >
              {t("titleA")}{" "}
              <span className="italic font-normal text-secondary/90">{t("titleEmphasis")}</span>
            </h2>
            <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground">
              {t("lead")}
            </p>
          </div>

          <a
            href="/habitaciones"
            className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full border border-secondary/30 bg-transparent px-6 py-3 text-sm font-semibold tracking-wide text-secondary uppercase transition-colors duration-(--duration-normal) hover:bg-secondary hover:text-secondary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary motion-reduce:transition-none md:self-auto"
          >
            {t("ctaSeeAll")}
            <ArrowUpRight
              className="size-4 transition-transform duration-(--duration-normal) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
              strokeWidth={2}
              aria-hidden="true"
            />
          </a>
        </header>

        <ul className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 xl:grid-cols-4 xl:gap-8">
          {bookableRooms.map((room, index) => {
            const roomName = pick(room.name, locale);
            return (
            <li
              key={room.slug}
              className={styles.reveal}
              style={
                {
                  "--reveal-delay": `${120 + index * 80}ms`,
                } as React.CSSProperties
              }
            >
              <article
                className={`${styles.card} group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-secondary/10 bg-card shadow-card`}
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-secondary/5">
                  <Image
                    src={room.image}
                    alt={pick(room.imageAlt, locale)}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent opacity-70"
                    aria-hidden="true"
                  />
                  <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.18em] text-secondary uppercase shadow-card backdrop-blur">
                    <span
                      className="size-1.5 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    {(index + 1).toString().padStart(2, "0")} · {t("badgeAvailable")}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <p className="text-[0.68rem] font-mono tracking-[0.22em] text-secondary/55 uppercase">
                    {t("cardEyebrow")} · {(index + 1).toString().padStart(2, "0")}
                  </p>
                  <h3 className="mt-2 font-[family-name:var(--font-availability-display)] text-2xl font-light leading-tight text-secondary tracking-tight text-balance sm:text-[1.7rem]">
                    {roomName}
                  </h3>
                  <dl className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1.5">
                      <Users className="size-4 text-secondary/60" strokeWidth={1.75} aria-hidden="true" />
                      <dt className="sr-only">Capacity</dt>
                      <dd>{pick(room.capacity, locale)}</dd>
                    </div>
                    <span className="text-secondary/25" aria-hidden="true">·</span>
                    <div className="flex items-center gap-1.5">
                      <BedDouble className="size-4 text-secondary/60" strokeWidth={1.75} aria-hidden="true" />
                      <dt className="sr-only">Bed</dt>
                      <dd>{pick(room.detail, locale)}</dd>
                    </div>
                  </dl>

                  <div className="mt-auto pt-6">
                    <a
                      href={siteConfig.bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-secondary transition-colors duration-(--duration-normal) hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary motion-reduce:transition-none"
                      aria-label={t("ctaAria", { room: roomName })}
                    >
                      {t("ctaCheck")}
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
