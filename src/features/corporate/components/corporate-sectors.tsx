// Empresas clientas: cream light + marquee horizontal continuo (distintivo de esta landing).
import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { fontCorporateDisplay } from "@/features/corporate/config/corporate-fonts";
import { corporateClients } from "@/features/corporate/data/corporate";

import styles from "./corporate.module.css";

export async function CorporateSectors() {
  const t = await getTranslations("corporate.sectors");
  const doubled = [...corporateClients, ...corporateClients];

  return (
    <Section
      id="sectores"
      aria-labelledby="sectores-titulo"
      className={`${fontCorporateDisplay.variable} relative overflow-hidden bg-[color-mix(in_oklab,var(--accent)_65%,white)]`}
    >
      <div
        className="pointer-events-none absolute -top-32 left-1/2 size-[28rem] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative">
        <header
          className={`${styles.reveal} mx-auto max-w-3xl text-center`}
          style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
        >
          <p className="flex items-center justify-center gap-3 text-[0.8rem] font-semibold tracking-[0.32em] text-secondary/70 uppercase">
            <span className="h-px w-10 bg-secondary/40" aria-hidden="true" />
            {t("eyebrow")}
            <span className="h-px w-10 bg-secondary/40" aria-hidden="true" />
          </p>
          <h2
            id="sectores-titulo"
            className="mt-6 font-[family-name:var(--font-corporate-display)] font-light leading-[0.98] tracking-[-0.02em] text-secondary text-balance text-[clamp(2.3rem,5vw,4rem)]"
          >
            {t("titleA")}{" "}
            <span className="italic font-normal text-secondary/90">{t("titleEmphasis")}</span>
          </h2>
          <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">
            {t("lead")}
          </p>
        </header>
      </Container>

      <div
        className={`${styles.reveal} ${styles.marqueeViewport} mt-12 lg:mt-16`}
        style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
        aria-label={t("marqueeAria")}
      >
        <ul className={styles.marqueeTrack}>
          {doubled.map(({ name, logo }, index) => (
            <li
              key={`${name}-${index}`}
              className="flex items-center gap-3 border-r border-secondary/15 px-6 py-4 text-secondary sm:px-8"
              aria-hidden={index >= corporateClients.length}
            >
              <span className="grid size-9 place-items-center rounded-full bg-primary/15 text-secondary" aria-hidden="true">
                <Image src={logo} alt="" width={48} height={48} loading="eager" className="size-7 object-contain" />
              </span>
              <span className="text-sm font-semibold tracking-[0.08em] whitespace-nowrap">
                {name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <Container className="relative mt-12 lg:mt-14">
        <p className="mx-auto max-w-2xl text-center text-xs leading-relaxed text-secondary/60">
          {t("closingNote")}
        </p>
      </Container>
    </Section>
  );
}
