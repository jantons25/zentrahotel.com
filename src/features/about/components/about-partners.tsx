// Aliados y empresas que confían en Zentra: marquee suave con logos monocromáticos.
import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { fontAboutDisplay } from "@/features/about/config/about-fonts";
import { aboutPartners } from "@/features/about/data/about";

import styles from "./about.module.css";

export async function AboutPartners() {
  const t = await getTranslations("about.partners");
  const loop = [...aboutPartners, ...aboutPartners];

  return (
    <Section
      aria-labelledby="aliados-titulo"
      className={`${fontAboutDisplay.variable} ${styles.section} relative overflow-hidden bg-background`}
    >
      <Container className="relative">
        <header
          className={`${styles.reveal} mx-auto max-w-2xl text-center`}
          style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
        >
          <p className="flex items-center justify-center gap-3 text-[0.8rem] font-semibold tracking-[0.28em] text-secondary/70 uppercase">
            <span className="h-px w-8 bg-secondary/40" aria-hidden="true" />
            {t("eyebrow")}
            <span className="h-px w-8 bg-secondary/40" aria-hidden="true" />
          </p>
          <h2
            id="aliados-titulo"
            className="mt-6 font-[family-name:var(--font-about-display)] font-light leading-[1] tracking-[-0.02em] text-secondary text-balance text-[clamp(1.9rem,3.8vw,2.8rem)]"
          >
            {t("titleA")}{" "}
            <span className="italic font-normal text-secondary/80">{t("titleEmphasis")}</span>
            {t("titleB")}
          </h2>
        </header>
      </Container>

      <div
        className={`${styles.reveal} ${styles.marqueeViewport} relative mt-12 lg:mt-16`}
        style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
      >
        <ul
          className={styles.marqueeTrack}
          aria-label={t("listAria")}
        >
          {loop.map((partner, index) => (
            <li
              key={`${partner.name}-${index}`}
              className="mx-6 flex h-24 w-40 shrink-0 items-center justify-center sm:mx-8 sm:h-28 sm:w-48"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={192}
                height={112}
                loading="lazy"
                sizes="192px"
                className="h-full w-auto max-w-full object-contain opacity-60 grayscale transition-[opacity,filter] duration-(--duration-normal) hover:opacity-100 hover:grayscale-0"
              />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
