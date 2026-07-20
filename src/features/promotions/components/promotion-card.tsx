"use client";

// Tarjeta editorial de promoción: cinta de código copiable, descuento en Fraunces y CTA.
import { useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { ArrowUpRight, CalendarClock, Check, Copy, MapPin } from "lucide-react";

import { sedeLabels } from "@/features/promotions/data/promotions";
import { formatValidUntil } from "@/features/promotions/lib/format-until";
import type { Promotion } from "@/features/promotions/types";
import { pick } from "@/lib/i18n-pick";

import styles from "./promotions.module.css";

interface PromotionCardProps {
  promotion: Promotion;
  onCream?: boolean;
}

export function PromotionCard({ promotion, onCream }: PromotionCardProps) {
  const t = useTranslations("promotions.card");
  const locale = useLocale();
  const [copied, setCopied] = useState(false);

  const title = pick(promotion.title, locale);
  const tagline = pick(promotion.tagline, locale);
  const description = pick(promotion.description, locale);
  const discount = pick(promotion.discount, locale);
  const coverAlt = pick(promotion.coverAlt, locale);
  const ctaLabel = pick(promotion.ctaLabel, locale);
  const ctaHref = pick(promotion.ctaHref, locale);

  async function handleCopy() {
    if (!promotion.code) return;
    try {
      await navigator.clipboard.writeText(promotion.code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Silencioso: si el navegador rechaza clipboard, dejamos el código visible para copiar manual.
    }
  }

  return (
    <article
      className={`${styles.card} ${
        onCream ? styles.cardOnCream : ""
      } group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-secondary/10 bg-card shadow-card`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-secondary/5">
        <Image
          src={promotion.cover}
          alt={coverAlt}
          fill
          loading="lazy"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={`${styles.cardImage} object-cover`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/45 via-transparent to-transparent" aria-hidden="true" />

        <div className="absolute inset-x-4 top-4 flex items-start justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[0.62rem] font-semibold tracking-[0.18em] text-secondary uppercase shadow-card backdrop-blur">
            <MapPin className="size-3 text-primary" strokeWidth={2} aria-hidden="true" />
            {pick(sedeLabels[promotion.sede], locale)}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/90 px-3 py-1 font-mono text-[0.62rem] tracking-[0.16em] text-white uppercase backdrop-blur">
            <CalendarClock className="size-3" strokeWidth={2} aria-hidden="true" />
            {formatValidUntil(promotion.validUntil)}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-[family-name:var(--font-promotions-display)] text-[1.35rem] font-normal leading-[1.15] tracking-tight text-secondary text-balance sm:text-[1.5rem]">
            {title}
          </h3>
          <p
            className="shrink-0 font-[family-name:var(--font-promotions-display)] text-[1.6rem] font-normal italic leading-none text-primary sm:text-[1.9rem]"
            aria-label={t("discountAria", { discount })}
          >
            {discount}
          </p>
        </div>

        <p className="mt-2 text-[0.85rem] leading-relaxed font-medium tracking-wide text-primary uppercase">
          {tagline}
        </p>

        <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        {promotion.tags.length > 0 ? (
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {promotion.tags.map((tag) => {
              const tagText = pick(tag, locale);
              return (
              <li
                key={tagText}
                className="inline-flex items-center rounded-full border border-secondary/15 bg-secondary/[0.04] px-2.5 py-1 text-[0.68rem] font-medium text-secondary"
              >
                {tagText}
              </li>
              );
            })}
          </ul>
        ) : null}

        {promotion.code ? (
          <div className={`${styles.codeStrip} mt-6`}>
            <div className="min-w-0">
              <p className="text-[0.55rem] font-semibold tracking-[0.28em] text-white/60 uppercase">
                {t("codeLabel")}
              </p>
              <p className="mt-0.5 truncate font-mono text-sm font-semibold tracking-[0.18em] text-white uppercase">
                {promotion.code}
              </p>
            </div>
            <button
              type="button"
              onClick={handleCopy}
              className={`${styles.copyButton} inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-2.5 py-1 text-[0.62rem] font-semibold tracking-[0.18em] text-white uppercase`}
              aria-label={
                copied ? t("copiedAria") : t("copyAria", { code: promotion.code })
              }
            >
              {copied ? (
                <>
                  <Check className="size-3" strokeWidth={2.25} aria-hidden="true" />
                  {t("copied")}
                </>
              ) : (
                <>
                  <Copy className="size-3" strokeWidth={2} aria-hidden="true" />
                  {t("copy")}
                </>
              )}
            </button>
          </div>
        ) : null}

        {promotion.conditions.length > 0 ? (
          <ul className="mt-5 space-y-1.5">
            {promotion.conditions.map((condition) => {
              const conditionText = pick(condition, locale);
              return (
              <li
                key={conditionText}
                className="flex items-start gap-2 text-[0.78rem] leading-relaxed text-muted-foreground"
              >
                <span className="mt-1.5 size-1 shrink-0 rounded-full bg-secondary/30" aria-hidden="true" />
                {conditionText}
              </li>
              );
            })}
          </ul>
        ) : null}

        <div className="mt-auto pt-6">
          <a
            href={ctaHref}
            target={promotion.ctaExternal ? "_blank" : undefined}
            rel={promotion.ctaExternal ? "noopener noreferrer" : undefined}
            aria-label={t("ctaAria", { action: ctaLabel, title })}
            className="group/cta inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-secondary uppercase transition-colors duration-(--duration-normal) hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary motion-reduce:transition-none"
          >
            {ctaLabel}
            <ArrowUpRight
              className="size-4 transition-transform duration-(--duration-normal) group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 motion-reduce:transition-none"
              strokeWidth={2}
              aria-hidden="true"
            />
          </a>
        </div>
      </div>
    </article>
  );
}
