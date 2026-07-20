// Beneficios B2B: campo accent (cream) con 4 tarjetas serifadas y CTA integrado.
import { getLocale, getTranslations } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { fontCorporateDisplay } from "@/features/corporate/config/corporate-fonts";
import { corporateBenefits } from "@/features/corporate/data/corporate";
import { pick } from "@/lib/i18n-pick";

import styles from "./corporate.module.css";

export async function CorporateBenefits() {
  const t = await getTranslations("corporate.benefits");
  const locale = await getLocale();
  const total = corporateBenefits.length;

  return (
    <Section
      id="beneficios"
      aria-labelledby="beneficios-titulo"
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
              {t("eyebrow")} · {total.toString().padStart(2, "0")}
            </p>
            <h2
              id="beneficios-titulo"
              className="mt-6 font-[family-name:var(--font-corporate-display)] font-light leading-[0.95] tracking-[-0.02em] text-secondary text-balance text-[clamp(2.3rem,5vw,4rem)]"
            >
              {t("titleA")}{" "}
              <span className="italic font-normal text-primary/85">{t("titleEmphasis")}</span>
            </h2>
            <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground">
              {t("lead")}
            </p>
          </div>
        </header>

        <ol className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {corporateBenefits.map(({ number, icon: Icon, title, description }, index) => (
            <li
              key={number}
              className={styles.reveal}
              style={
                {
                  "--reveal-delay": `${140 + index * 90}ms`,
                } as React.CSSProperties
              }
            >
              <article className={`${styles.card} ${styles.cardDark} group flex h-full flex-col gap-6 rounded-[1.5rem] border border-secondary/15 bg-card p-6 shadow-card backdrop-blur sm:p-7`}>
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-[family-name:var(--font-corporate-display)] text-4xl font-light leading-none text-primary tracking-tight">
                    {number}
                  </span>
                  <span
                    className={`${styles.iconChip} grid size-11 place-items-center rounded-xl bg-primary/15 text-secondary`}
                    aria-hidden="true"
                  >
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-corporate-display)] text-xl font-normal leading-tight text-secondary tracking-tight text-balance sm:text-[1.35rem]">
                    {pick(title, locale)}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-secondary/75">
                    {pick(description, locale)}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
