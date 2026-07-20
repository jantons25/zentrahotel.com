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
      className={`${fontCorporateDisplay.variable} relative overflow-hidden bg-primary`}
    >
      <Container className="relative">
        <header
          className={`${styles.reveal} mx-auto max-w-3xl text-center`}
          style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
        >
          <p className="flex items-center justify-center gap-3 text-[0.8rem] font-semibold tracking-[0.32em] text-secondary/70 uppercase">
            <span className="h-px w-10 bg-secondary/30" aria-hidden="true" />
            {t("eyebrow")}
            <span className="h-px w-10 bg-secondary/30" aria-hidden="true" />
          </p>
          <h2
            id="sectores-titulo"
            className="mt-6 font-[family-name:var(--font-corporate-display)] font-light leading-[0.98] tracking-[-0.02em] text-secondary text-balance text-[clamp(2.3rem,5vw,4rem)]"
          >
            {t("titleA")}{" "}
            <span className="italic font-normal text-white/90">{t("titleEmphasis")}</span>
          </h2>
          <p className="mt-5 text-[0.95rem] leading-relaxed text-secondary/85">
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
                width={380}
                height={380}
                loading="eager"
                className="h-40 w-auto max-w-[20rem] object-contain sm:h-32"
              />
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
