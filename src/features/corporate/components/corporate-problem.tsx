// Problema: fondo navy con 4 costos ocultos numerados 01–04.
import { getLocale, getTranslations } from "next-intl/server";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { fontCorporateDisplay } from "@/features/corporate/config/corporate-fonts";
import { corporateProblems } from "@/features/corporate/data/corporate";
import { pick } from "@/lib/i18n-pick";

import styles from "./corporate.module.css";

export async function CorporateProblem() {
  const t = await getTranslations("corporate.problem");
  const locale = await getLocale();

  return (
    <Section
      id="problema"
      aria-labelledby="problema-titulo"
      className={`${fontCorporateDisplay.variable} ${styles.section} relative overflow-hidden bg-secondary text-secondary-foreground`}
    >
      <div className={styles.auroraOne} aria-hidden="true" />
      <div className={styles.auroraTwo} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />

      <Container className="relative">
        <header
          className={`${styles.reveal} mx-auto max-w-3xl text-center`}
          style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
        >
          <p className="flex items-center justify-center gap-3 text-[.8rem] font-semibold tracking-[0.32em] text-white/60 uppercase">
            <span className="h-px w-10 bg-white/30" aria-hidden="true" />
            {t("eyebrow")}
            <span className="h-px w-10 bg-white/30" aria-hidden="true" />
          </p>
          <h2
            id="problema-titulo"
            className="mt-6 font-[family-name:var(--font-corporate-display)] font-light leading-[0.98] tracking-[-0.02em] text-white text-balance text-[clamp(2.3rem,5vw,4rem)]"
          >
            {t("title")}
          </h2>
          <p className="mt-5 text-[0.95rem] leading-relaxed text-white/70">{t("lead")}</p>
        </header>

        <ol className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {corporateProblems.map(({ number, icon: Icon, title, description }, index) => (
            <li
              key={number}
              className={styles.reveal}
              style={
                {
                  "--reveal-delay": `${140 + index * 90}ms`,
                } as React.CSSProperties
              }
            >
              <article
                className={`${styles.card} ${styles.cardDark} group flex h-full flex-col rounded-[1.5rem] border border-white/12 bg-card p-6 backdrop-blur sm:p-7`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span
                    className={`${styles.iconChip} grid size-11 place-items-center rounded-xl bg-secondary/15 text-secondary`}
                    aria-hidden="true"
                  >
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <span className="font-[family-name:var(--font-corporate-display)] text-3xl font-light leading-none text-secondary/85 tracking-tight">
                    {number}
                  </span>
                </div>
                <h3 className="mt-6 font-[family-name:var(--font-corporate-display)] text-xl font-normal leading-tight text-secondary tracking-tight text-balance sm:text-[1.35rem]">
                  {pick(title, locale)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-secondary/70">
                  {pick(description, locale)}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
