"use client";

// Explorador de promociones: filtro por sede + retícula responsive con estado local.
import { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { PromotionCard } from "@/features/promotions/components/promotion-card";
import {
  promotions,
  sedeOrder,
  sedeShortLabels,
} from "@/features/promotions/data/promotions";
import type { PromotionSede } from "@/features/promotions/types";
import { pick } from "@/lib/i18n-pick";

import styles from "./promotions.module.css";

type Filter = "todas" | PromotionSede;

export function PromotionsExplorer() {
  const t = useTranslations("promotions.explorer");
  const locale = useLocale();
  const [active, setActive] = useState<Filter>("todas");

  const filterLabels: Record<Filter, string> = {
    todas: t("filterAll"),
    balta: pick(sedeShortLabels.balta, locale),
    plaza: pick(sedeShortLabels.plaza, locale),
    "san-jose": pick(sedeShortLabels["san-jose"], locale),
    nexus: pick(sedeShortLabels.nexus, locale),
  };

  const counts = useMemo(() => {
    return promotions.reduce<Record<PromotionSede, number>>(
      (acc, promo) => {
        acc[promo.sede] = (acc[promo.sede] ?? 0) + 1;
        return acc;
      },
      { balta: 0, plaza: 0, "san-jose": 0, nexus: 0 },
    );
  }, []);

  const filters: Filter[] = ["todas", ...sedeOrder];

  const filtered = useMemo(() => {
    if (active === "todas") return promotions;
    return promotions.filter((promo) => promo.sede === active);
  }, [active]);

  return (
    <Section
      aria-labelledby="promociones-titulo"
      className={`${styles.section} relative overflow-hidden bg-[color-mix(in_oklab,var(--accent)_60%,white)]`}
    >
      <div className={styles.auroraOne} aria-hidden="true" />
      <div className={styles.auroraTwo} aria-hidden="true" />
      <Container className="relative">
        <header
          className={`${styles.reveal} flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between`}
          style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
        >
          <div>
            <p className="flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.28em] text-secondary/70 uppercase">
              <span className="h-px w-8 bg-secondary/40" aria-hidden="true" />
              {t("filterEyebrow")}
            </p>
            <h2
              id="promociones-titulo"
              className="mt-5 font-[family-name:var(--font-promotions-display)] font-light leading-[0.98] tracking-[-0.02em] text-secondary text-balance text-[clamp(2rem,4.4vw,3.2rem)]"
            >
              {t("titleA")}{" "}
              <span className="italic font-normal text-secondary/85">{t("titleEmphasis")}</span>
            </h2>
          </div>
        </header>

        <div
          className={`${styles.reveal} mt-8 -mx-4 overflow-x-auto px-4 sm:mx-0 sm:overflow-visible sm:px-0`}
          style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
        >
          <div
            role="tablist"
            aria-label={t("filterAria")}
            className="inline-flex min-w-max items-center gap-2 sm:flex-wrap"
          >
            {filters.map((filter) => {
              const isActive = active === filter;
              const count =
                filter === "todas"
                  ? promotions.length
                  : counts[filter as PromotionSede];
              return (
                <button
                  key={filter}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="promociones-lista"
                  onClick={() => setActive(filter)}
                  className={`${styles.filterPill} group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold tracking-[0.14em] uppercase focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary motion-reduce:transition-none ${
                    isActive
                      ? "border-secondary bg-secondary text-secondary-foreground"
                      : "border-secondary/20 bg-white/70 text-secondary hover:border-secondary/50 hover:bg-white"
                  }`}
                >
                  {filterLabels[filter]}
                  <span
                    className={`font-mono text-[0.62rem] tracking-[0.14em] ${
                      isActive ? "text-white/70" : "text-secondary/45"
                    }`}
                    aria-hidden="true"
                  >
                    {count.toString().padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {filtered.length > 0 ? (
          <ul
            id="promociones-lista"
            className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3 lg:gap-8"
          >
            {filtered.map((promotion, index) => (
              <li
                key={promotion.slug}
                className={styles.reveal}
                style={
                  {
                    "--reveal-delay": `${160 + index * 80}ms`,
                  } as React.CSSProperties
                }
              >
                <PromotionCard promotion={promotion} onCream />
              </li>
            ))}
          </ul>
        ) : (
          <div
            id="promociones-lista"
            className="mt-14 rounded-[1.5rem] border border-secondary/15 bg-white/80 p-10 text-center"
          >
            <p className="text-[0.72rem] font-semibold tracking-[0.24em] text-secondary/60 uppercase">
              {t("emptyEyebrow")}
            </p>
            <p className="mt-3 font-[family-name:var(--font-promotions-display)] text-2xl font-light text-secondary">
              {t("emptyTitle")}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              {t("emptyLead")}
            </p>
          </div>
        )}
      </Container>
    </Section>
  );
}
