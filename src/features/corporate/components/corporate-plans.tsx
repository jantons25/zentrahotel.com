// Niveles del convenio corporativo: grid de 4 tarjetas espejando el layout de "Nuestras sedes".
import { getLocale, getTranslations } from "next-intl/server";
import { ArrowUpRight, Check } from "lucide-react";

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
  const total = corporatePlans.length;

  return (
    <Section
      id="planes"
      aria-labelledby="planes-titulo"
      className={`${fontCorporateDisplay.variable} relative overflow-hidden bg-[color-mix(in_oklab,var(--accent)_65%,white)]`}
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
            <p className="flex items-center gap-3 text-[0.8rem] font-semibold tracking-[0.28em] text-secondary/70 uppercase">
              <span className="h-px w-8 bg-secondary/40" aria-hidden="true" />
              {t("eyebrow")} · {total.toString().padStart(2, "0")}
            </p>
            <h2
              id="planes-titulo"
              className="mt-6 font-[family-name:var(--font-corporate-display)] font-light leading-[0.95] tracking-[-0.02em] text-secondary text-balance text-[clamp(2.4rem,5.2vw,4.2rem)]"
            >
              {t("titleA")}{" "}
              <span className="italic font-normal text-primary/90">{t("titleEmphasis")}</span>
            </h2>
            <p className="mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-muted-foreground">
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

        <ol className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 xl:grid-cols-4 xl:gap-8">
          {corporatePlans.map(({ number, name, rangeBadge, features, featured }, index) => {
            const planName = pick(name, locale);
            const text = featured ? "text-white" : "text-secondary";
            return (
              <li
                key={number}
                className={styles.reveal}
                style={
                  {
                    "--reveal-delay": `${120 + index * 80}ms`,
                  } as React.CSSProperties
                }
              >
                <article
                  className={`${styles.card} ${featured ? styles.cardDark : ""} group flex h-full flex-col overflow-hidden rounded-[1.75rem] border shadow-card ${
                    featured
                      ? "border-secondary/40 bg-secondary"
                      : "border-secondary/10 bg-card"
                  }`}
                >
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <span
                      className={`inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1 text-[0.65rem] font-semibold tracking-[0.18em] uppercase shadow-card ${
                        featured
                          ? "bg-white/10 text-white backdrop-blur"
                          : "bg-secondary text-white"
                      }`}
                    >
                      <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                      {number} · {pick(rangeBadge, locale)}
                    </span>

                    <p
                      className={`mt-5 text-[0.68rem] font-mono tracking-[0.22em] uppercase ${
                        featured ? "text-white/55" : "text-secondary/55"
                      }`}
                    >
                      {t("cardEyebrow")} · {number}
                    </p>
                    <h3
                      className={`mt-2 font-[family-name:var(--font-corporate-display)] text-2xl font-light leading-tight tracking-tight text-balance sm:text-[1.7rem] ${text}`}
                    >
                      {planName}
                    </h3>

                    <ul className="mt-6 space-y-3">
                      {features.map((feature) => {
                        const featureText = pick(feature, locale);
                        return (
                          <li
                            key={featureText}
                            className={`flex items-start gap-3 text-sm leading-relaxed ${
                              featured ? "text-white/85" : "text-secondary"
                            }`}
                          >
                            <span
                              className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full ${
                                featured ? "bg-primary/25 text-white" : "bg-primary/15 text-primary"
                              }`}
                              aria-hidden="true"
                            >
                              <Check className="size-3" strokeWidth={2.5} />
                            </span>
                            {featureText}
                          </li>
                        );
                      })}
                    </ul>

                    <div className="mt-auto pt-8">
                      <a
                        href={buildWhatsAppUrl(t("whatsappPlanPrefill", { plan: planName }))}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t("ctaPlanAria", { plan: planName })}
                        className={`inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-(--duration-normal) hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary motion-reduce:transition-none ${text}`}
                      >
                        {t("ctaPlan")}
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
        </ol>
      </Container>
    </Section>
  );
}
