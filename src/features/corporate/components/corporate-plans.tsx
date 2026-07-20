// Planes de oficina virtual: campo accent (cream) con 3 tarjetas y el plan central destacado en primary.
import { getLocale, getTranslations } from "next-intl/server";
import { ArrowUpRight, Check, Sparkles } from "lucide-react";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { fontCorporateDisplay } from "@/features/corporate/config/corporate-fonts";
import { corporatePlans } from "@/features/corporate/data/corporate";
import { pick } from "@/lib/i18n-pick";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

import styles from "./corporate.module.css";

export async function CorporatePlans() {
  const t = await getTranslations("corporate.plans");
  const locale = await getLocale();

  return (
    <Section
      id="planes"
      aria-labelledby="planes-titulo"
      className={`${fontCorporateDisplay.variable} ${styles.section} relative overflow-hidden bg-accent text-secondary`}
    >
      <div className={styles.auroraOne} aria-hidden="true" />
      <div className={styles.auroraThree} aria-hidden="true" />
      <div className={styles.grainDark} aria-hidden="true" />

      <Container className="relative">
        <header
          className={`${styles.reveal} flex flex-col gap-8 md:flex-row md:items-end md:justify-between`}
          style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
        >
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-[0.8rem] font-semibold tracking-[0.28em] text-secondary/60 uppercase">
              <span className="h-px w-8 bg-secondary/30" aria-hidden="true" />
              {t("eyebrow")} · {corporatePlans.length.toString().padStart(2, "0")}
            </p>
            <h2
              id="planes-titulo"
              className="mt-6 font-[family-name:var(--font-corporate-display)] font-light leading-[0.95] tracking-[-0.02em] text-secondary text-balance text-[clamp(2.3rem,5vw,4rem)]"
            >
              {t("titleA")}{" "}
              <span className="italic font-normal text-secondary/85">{t("titleEmphasis")}</span>
            </h2>
            <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground">
              {t("lead")}
            </p>
          </div>

          <a
            href={buildWhatsAppUrl(t("whatsappPrefill"))}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full border border-secondary/20 bg-white px-6 py-3 text-sm font-semibold tracking-wide text-secondary uppercase transition-colors duration-(--duration-normal) hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none md:self-auto"
          >
            {t("ctaAdvisor")}
            <ArrowUpRight
              className="size-4 transition-transform duration-(--duration-normal) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
              strokeWidth={2}
              aria-hidden="true"
            />
          </a>
        </header>

        <ol className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3 lg:mt-20 lg:gap-8">
          {corporatePlans.map(
            (
              { number, name, durationBadge, priceCurrent, priceOriginal, features, featured },
              index,
            ) => {
              const planName = pick(name, locale);
              return (
                <li
                  key={number}
                  className={`${styles.reveal} relative`}
                  style={
                    {
                      "--reveal-delay": `${140 + index * 90}ms`,
                    } as React.CSSProperties
                  }
                >
                  <article
                    className={`${styles.card} group flex h-full flex-col rounded-[1.75rem] border bg-card p-6 shadow-card sm:p-8 ${
                      featured
                        ? "border-2 border-primary shadow-card-hover lg:-translate-y-4"
                        : "border-secondary/15"
                    }`}
                  >
                    {featured ? (
                      <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-[0.62rem] font-semibold tracking-[0.18em] text-primary-foreground uppercase shadow-card">
                        <Sparkles className="size-3" strokeWidth={2} aria-hidden="true" />
                        {t("featuredBadge")}
                      </span>
                    ) : null}

                    <p className="flex items-center gap-2 text-[0.65rem] font-mono tracking-[0.22em] text-secondary/55 uppercase">
                      {number} — {pick(durationBadge, locale)}
                    </p>
                    <h3 className="mt-3 font-[family-name:var(--font-corporate-display)] text-2xl font-light leading-tight text-secondary tracking-tight text-balance sm:text-[1.85rem]">
                      {planName}
                    </h3>

                    <div className="mt-6 rounded-xl border border-dashed border-secondary/25 p-4">
                      <p className="text-[0.6rem] font-mono tracking-[0.22em] text-secondary/50 uppercase">
                        {t("priceLabel")}
                      </p>
                      <p className="mt-1.5 flex items-baseline gap-2">
                        <span className="font-[family-name:var(--font-corporate-display)] text-3xl font-normal text-secondary sm:text-4xl">
                          S/ {priceCurrent}
                        </span>
                        <span className="text-sm text-muted-foreground line-through">
                          S/ {priceOriginal}
                        </span>
                      </p>
                    </div>

                    <ul className="mt-6 flex-1 space-y-3">
                      {features.map((feature) => {
                        const featureText = pick(feature, locale);
                        return (
                          <li
                            key={featureText}
                            className="flex items-start gap-3 text-sm leading-relaxed text-secondary"
                          >
                            <span
                              className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary/15 text-primary"
                              aria-hidden="true"
                            >
                              <Check className="size-3" strokeWidth={2.5} />
                            </span>
                            {featureText}
                          </li>
                        );
                      })}
                    </ul>

                    <div className="mt-8">
                      <a
                        href={buildWhatsAppUrl(
                          t("whatsappPlanPrefill", { plan: planName, price: priceCurrent }),
                        )}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t("ctaPlanAria", { plan: planName })}
                        className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold tracking-wide uppercase transition-transform duration-(--duration-normal) hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none motion-reduce:hover:translate-y-0 ${
                          featured
                            ? "bg-primary text-primary-foreground"
                            : "border border-secondary/20 text-secondary hover:border-primary"
                        }`}
                      >
                        {t("ctaPlan")}
                        <ArrowUpRight className="size-4" strokeWidth={2} aria-hidden="true" />
                      </a>
                    </div>
                  </article>
                </li>
              );
            },
          )}
        </ol>
      </Container>
    </Section>
  );
}
