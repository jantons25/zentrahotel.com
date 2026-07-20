// Hero editorial de /promociones: fondo fotográfico + overlay + titular con acento itálico.
import Image from "next/image";
import { getTranslations } from "next-intl/server";

import { fontPromotionsDisplay } from "@/features/promotions/config/promotions-fonts";
import { promotions } from "@/features/promotions/data/promotions";

import styles from "./promotions.module.css";

export async function PromotionsPageHero() {
  const t = await getTranslations("promotions.hero");
  const total = promotions.length;

  return (
    <section
      aria-label={t("sectionAria")}
      className={`${fontPromotionsDisplay.variable} ${styles.section} relative isolate -mt-16 overflow-hidden bg-secondary text-white md:-mt-20`}
    >
      <Image
        src="/images/balta/hab-suite.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-[center_40%] motion-safe:animate-[promo-hero-zoom_18s_ease-out_forwards]"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-black/65" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-secondary/15 via-transparent to-secondary/30" aria-hidden="true" />
      <div className={styles.auroraOne} aria-hidden="true" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 pt-32 pb-16 sm:px-6 md:pt-40 md:pb-20 lg:px-8 lg:pt-44 lg:pb-24">
        <div className="max-w-4xl">
          <p
            className={`${styles.reveal} inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[0.62rem] font-semibold tracking-[0.28em] text-white/85 uppercase backdrop-blur`}
            style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
          >
            <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
            {t("eyebrow", { total: total.toString().padStart(2, "0") })}
          </p>

          <h1
            className={`${styles.reveal} mt-6 font-[family-name:var(--font-promotions-display)] font-light leading-[0.95] tracking-[-0.02em] text-white text-balance text-[clamp(2.5rem,6vw,5rem)]`}
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
            {t("titleA")}{" "}
            <span className="italic font-normal text-primary">{t("titleEmphasis")}</span>
          </h1>

          <p
            className={`${styles.reveal} mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg`}
            style={{ "--reveal-delay": "220ms" } as React.CSSProperties}
          >
            {t("lead")}
          </p>
        </div>
      </div>
    </section>
  );
}
