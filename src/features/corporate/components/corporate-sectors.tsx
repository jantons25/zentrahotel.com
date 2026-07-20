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
      className={`${fontCorporateDisplay.variable} relative overflow-hidden bg-secondary`}
    >
      <div
        className="pointer-events-none absolute -top-32 left-1/2 size-[28rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative">
        <header
          className={`${styles.reveal} mx-auto max-w-3xl text-center`}
          style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
        >
          <p className="flex items-center justify-center gap-3 text-[0.8rem] font-semibold tracking-[0.32em] text-white/70 uppercase">
            <span className="h-px w-10 bg-white/30" aria-hidden="true" />
            {t("eyebrow")}
            <span className="h-px w-10 bg-white/30" aria-hidden="true" />
          </p>
          <h2
            id="sectores-titulo"
            className="mt-6 font-[family-name:var(--font-corporate-display)] font-light leading-[0.98] tracking-[-0.02em] text-white text-balance text-[clamp(2.3rem,5vw,4rem)]"
          >
            {t("titleA")}{" "}
            <span className="italic font-normal text-white/90">{t("titleEmphasis")}</span>
          </h2>
          <p className="mt-5 text-[0.95rem] leading-relaxed text-white/70">
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
              className="flex items-center justify-center border-r border-white/15 px-8 py-5 sm:px-10"
              aria-hidden={index >= corporateClients.length}
            >
              <Image
                src={logo}
                alt=""
                width={96}
                height={96}
                loading="eager"
                className="h-14 w-auto max-w-[9rem] object-contain sm:h-16"
              />
            </li>
          ))}
        </ul>
      </div>

      <Container className="relative mt-12 lg:mt-14">
        <p className="mx-auto max-w-2xl text-center text-xs leading-relaxed text-white/60">
          {t("closingNote")}
        </p>
      </Container>
    </Section>
  );
}
