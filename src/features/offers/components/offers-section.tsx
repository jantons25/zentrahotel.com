// Sección "promociones": oferta destacada + cupones canjeables sobre fondo navy editorial.
import { getLocale, getTranslations } from "next-intl/server";
import { ArrowUpRight, MessageCircle, Sparkles, TicketPercent } from "lucide-react";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { fontOffersDisplay } from "@/features/offers/config/offers-fonts";
import { CountdownBadge } from "@/features/offers/components/countdown-badge";
import { coupons, featuredOffer } from "@/features/offers/data/offers";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";

import styles from "./offers-section.module.css";

const totalPromos = coupons.length + 1;

function formatShortDate(iso: string, locale: string): string {
  return new Intl.DateTimeFormat(locale === "en" ? "en-US" : "es-PE", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "America/Lima",
  }).format(new Date(iso));
}

export async function OffersSection() {
  const t = await getTranslations("home.offers");
  const locale = await getLocale();

  return (
    <Section
      id="promociones"
      aria-labelledby="ofertas-titulo"
      className={`${fontOffersDisplay.variable} ${styles.section} relative overflow-hidden bg-secondary text-secondary-foreground`}
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
              {t("eyebrow")} · {totalPromos.toString().padStart(2, "0")}
            </p>
            <h2
              id="ofertas-titulo"
              className="mt-6 font-[family-name:var(--font-offers-display)] font-light leading-[0.95] tracking-[-0.02em] text-white text-balance text-[clamp(2.5rem,5.5vw,4.5rem)]"
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

          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold tracking-wide text-white uppercase transition-colors duration-(--duration-normal) hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none md:self-auto"
          >
            {t("ctaBook")}
            <ArrowUpRight
              className="size-4 transition-transform duration-(--duration-normal) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
              strokeWidth={2}
              aria-hidden="true"
            />
          </a>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:mt-16 lg:grid-cols-12 lg:gap-8">
          <article
            className={`${styles.reveal} ${styles.card} ${styles.featured} relative flex flex-col rounded-[1.75rem] bg-card p-6 text-secondary shadow-card sm:p-8 lg:col-span-7 lg:p-10`}
            style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
            aria-labelledby="promocion-destacada"
          >
            <CountdownBadge expiresAt={featuredOffer.expiresAt} />

            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/15 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.2em] text-secondary uppercase">
              <Sparkles className="size-3.5" strokeWidth={1.75} aria-hidden="true" />
              {t("featuredBadge")}
            </span>

            <p
              id="promocion-destacada"
              className="mt-5 font-[family-name:var(--font-offers-display)] text-3xl font-light leading-[1.05] text-secondary tracking-tight text-balance sm:text-[2.4rem] lg:text-[2.75rem]"
            >
              {featuredOffer.highlight}
            </p>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
              {featuredOffer.description}
            </p>

            <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-dashed border-secondary/25 bg-primary p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div>
                <p className="text-[0.65rem] font-mono tracking-[0.22em] text-white/95 uppercase">
                  {t("featuredCodeLabel")}
                </p>
                <p className="mt-2 font-[family-name:var(--font-offers-display)] text-xl font-normal tracking-[0.14em] text-white sm:text-2xl">
                  {featuredOffer.code}
                </p>
              </div>
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-secondary px-5 py-3 text-xs font-semibold tracking-[0.16em] text-secondary-foreground uppercase transition-transform duration-(--duration-normal) hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                {t("featuredCtaBook")}
                <ArrowUpRight
                  className="size-3.5 transition-transform duration-(--duration-normal) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </a>
            </div>

            <div className="mt-6 flex items-start gap-2 border-t border-secondary/10 pt-5 text-xs text-secondary/60">
              <TicketPercent className="mt-0.5 size-4 shrink-0 text-primary" strokeWidth={1.75} aria-hidden="true" />
              <p>
                {t("featuredValidUntil", {
                  title: featuredOffer.title,
                  date: formatShortDate(featuredOffer.expiresAt, locale),
                })}
              </p>
            </div>
          </article>

          <ol className="flex flex-col gap-6 lg:col-span-5">
            {coupons.map((coupon, index) => (
              <li
                key={coupon.code}
                className={styles.reveal}
                style={
                  {
                    "--reveal-delay": `${260 + index * 100}ms`,
                  } as React.CSSProperties
                }
              >
                <article
                  className={`${styles.card} ${styles.coupon} flex h-full flex-col gap-4 rounded-[1.5rem] border border-white/15 bg-white/5 p-6 backdrop-blur sm:p-7`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="flex items-center gap-2 text-[0.65rem] font-mono tracking-[0.22em] text-white/60 uppercase">
                      <span aria-hidden="true">
                        {(index + 2).toString().padStart(2, "0")}
                      </span>
                      <span className="h-px w-4 bg-white/25" aria-hidden="true" />
                      {t("couponLabel")}
                    </p>
                    <TicketPercent
                      className="size-4 text-primary"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                  </div>

                  <p className="font-[family-name:var(--font-offers-display)] text-xl font-normal leading-tight text-white tracking-tight text-balance sm:text-[1.35rem]">
                    {coupon.description}
                  </p>

                  <div className="mt-1 rounded-xl border-2 border-dashed border-secondary bg-white px-4 py-3 text-center">
                    <p className="text-[0.62rem] font-mono tracking-[0.22em] text-secondary/55 uppercase">
                      {t("couponCodeLabel")}
                    </p>
                    <p className="mt-1 font-[family-name:var(--font-offers-display)] text-lg font-normal tracking-[0.16em] text-secondary sm:text-xl">
                      {coupon.code}
                    </p>
                  </div>

                  <a
                    href={buildWhatsAppUrl(t("couponPrefill", { code: coupon.code }))}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("couponAria", { code: coupon.code })}
                    className="group mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-xs font-semibold tracking-[0.14em] text-primary-foreground uppercase transition-transform duration-(--duration-normal) hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                  >
                    <MessageCircle className="size-4" strokeWidth={1.75} aria-hidden="true" />
                    {t("couponCta")}
                    <ArrowUpRight
                      className="size-3.5 transition-transform duration-(--duration-normal) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </a>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
