// Segunda sección de la home: "Promociones y ofertas especiales".
// Pasarela horizontal de tarjetas; cada promoción abre WhatsApp con el mensaje listo.
import { getLocale, getTranslations } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { SpecialOffersCarousel } from "@/features/offers/components/special-offers-carousel";
import { fontOffersDisplay } from "@/features/offers/config/offers-fonts";
import { specialOffers } from "@/features/offers/data/special-offers";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { pick } from "@/lib/i18n-pick";

import styles from "./special-offers.module.css";

function formatShortDate(iso: string, locale: string): string {
  return new Intl.DateTimeFormat(locale === "en" ? "en-US" : "es-PE", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "America/Lima",
  }).format(new Date(iso));
}

function formatPrice(value: number, locale: string): string {
  return new Intl.NumberFormat(locale === "en" ? "en-US" : "es-PE", {
    style: "currency",
    currency: "PEN",
    maximumFractionDigits: 0,
  }).format(value);
}

export async function SpecialOffersSection() {
  const t = await getTranslations("home.specialOffers");
  const locale = await getLocale();

  const offers = specialOffers.map((offer) => {
    const title = pick(offer.title, locale);
    return {
      id: offer.id,
      venue: offer.venue,
      tone: offer.tone,
      image: offer.image,
      alt: pick(offer.alt, locale),
      badge: pick(offer.badge, locale),
      title,
      includes: offer.includes.map((item) => pick(item, locale)),
      priceFrom: formatPrice(offer.priceFrom, locale),
      priceWeb: formatPrice(offer.priceWeb, locale),
      code: offer.code,
      validUntil: formatShortDate(offer.validUntil, locale),
      ctaAria: t("ctaAria", { offer: title }),
      href: buildWhatsAppUrl(
        t("whatsappPrefill", {
          offer: title,
          venue: offer.venue,
          code: offer.code,
        }),
      ),
    };
  });

  return (
    <Section
      id="promociones"
      aria-labelledby="promociones-titulo"
      className={`${fontOffersDisplay.variable} relative overflow-hidden bg-[color-mix(in_oklab,var(--accent)_55%,white)]`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-44 -right-28 size-[28rem] rounded-full bg-primary/12 blur-3xl"
      />
      <Container className="relative">
        <header
          className={`${styles.reveal} flex flex-col gap-8 md:flex-row md:items-end md:justify-between`}
          style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
        >
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.28em] text-secondary/70 uppercase">
              <span className="h-px w-8 bg-secondary/40" aria-hidden="true" />
              {t("eyebrow")} ·{" "}
              {specialOffers.length.toString().padStart(2, "0")}
            </p>
            <h2
              id="promociones-titulo"
              className="mt-6 font-[family-name:var(--font-offers-display)] text-[clamp(2.25rem,5vw,4rem)] leading-[0.98] font-light tracking-[-0.02em] text-balance text-secondary"
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
            href={buildWhatsAppUrl(t("ctaPrefill"))}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full border border-secondary/30 px-6 py-3 text-sm font-semibold tracking-wide text-secondary uppercase transition-colors duration-(--duration-normal) hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary motion-reduce:transition-none md:self-auto"
          >
            {t("ctaAll")}
            <ArrowUpRight
              className="size-4 transition-transform duration-(--duration-normal) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
              strokeWidth={2}
              aria-hidden="true"
            />
          </a>
        </header>

        <div
          className={`${styles.reveal} mt-12 lg:mt-16`}
          style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
        >
          <SpecialOffersCarousel
            offers={offers}
            labels={{
              prev: t("prevAria"),
              next: t("nextAria"),
              listAria: t("listAria"),
              priceFromLabel: t("priceFromLabel"),
              priceWebLabel: t("priceWebLabel"),
              nightFrom: t("nightFrom"),
              validUntil: t("validUntil"),
              codeLabel: t("codeLabel"),
              cta: t("cta"),
            }}
          />
        </div>
      </Container>
    </Section>
  );
}
