// Hero editorial de la página Nosotros: photo backdrop navy + statement + barra de KPIs.
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowUpRight, MessageCircle } from "lucide-react";

import { fontAboutDisplay } from "@/features/about/config/about-fonts";
import { aboutHeroBadges, aboutStats } from "@/features/about/data/about";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

import styles from "./about.module.css";

export async function AboutHero() {
  const t = await getTranslations("about.hero");

  return (
    <section
      aria-label={t("sectionAria", { brand: siteConfig.name })}
      className={`${fontAboutDisplay.variable} ${styles.section} relative isolate -mt-16 overflow-hidden bg-secondary text-white md:-mt-20`}
    >
      <Image
        src="/images/cowork-plaza.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-[center_30%] motion-safe:animate-[about-hero-zoom_18s_ease-out_forwards]"
      />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-black/65" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-secondary/25 via-transparent to-secondary/40" aria-hidden="true" />
      <div className={styles.auroraOne} aria-hidden="true" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 pt-32 pb-12 sm:px-6 md:pt-40 md:pb-16 lg:px-8 lg:pt-44 lg:pb-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-8">
            <p
              className={`${styles.reveal} inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-[0.62rem] font-semibold tracking-[0.28em] text-white/90 uppercase backdrop-blur-md`}
              style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
            >
              <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
              {t("eyebrow", { brand: siteConfig.name })}
            </p>

            <h1
              className={`${styles.reveal} mt-6 font-[family-name:var(--font-about-display)] font-light leading-[0.95] tracking-[-0.02em] text-white text-balance text-[clamp(2.5rem,6.5vw,5.25rem)]`}
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              {t("titleA")}{" "}
              <span className="italic font-normal text-primary">{t("titleEmphasis")}</span>{" "}
              {t("titleB")}
            </h1>

            <p
              className={`${styles.reveal} mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg`}
              style={{ "--reveal-delay": "220ms" } as React.CSSProperties}
            >
              {t("lead")}
            </p>

            <ul
              className={`${styles.reveal} mt-8 flex flex-wrap gap-2`}
              style={{ "--reveal-delay": "320ms" } as React.CSSProperties}
              aria-label={t("badgesAria")}
            >
              {aboutHeroBadges.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/90 backdrop-blur"
                >
                  <Icon className="size-3.5" strokeWidth={1.75} aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>

            <div
              className={`${styles.reveal} mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center`}
              style={{ "--reveal-delay": "420ms" } as React.CSSProperties}
            >
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-6 py-3 text-sm font-semibold tracking-wide text-primary-foreground uppercase transition-transform duration-(--duration-normal) hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                {t("ctaBook")}
                <ArrowUpRight className="size-4 transition-transform duration-(--duration-normal) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" strokeWidth={2} aria-hidden="true" />
              </a>

              <a
                href={buildWhatsAppUrl(t("whatsappPrefill"))}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold tracking-wide text-white uppercase transition-colors duration-(--duration-normal) hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none"
              >
                <MessageCircle className="size-4" strokeWidth={1.75} aria-hidden="true" />
                {t("ctaTeam")}
              </a>
            </div>
          </div>
        </div>

        <ul
          className={`${styles.reveal} grid grid-cols-2 gap-3 rounded-[1.5rem] border border-white/25 bg-white/95 p-4 shadow-[0_24px_60px_rgba(0,0,0,0.3)] backdrop-blur-md sm:p-6 md:grid-cols-4 md:gap-6`}
          style={{ "--reveal-delay": "520ms" } as React.CSSProperties}
          aria-label={t("statsAria")}
        >
          {aboutStats.map(({ value, label }) => (
            <li key={label} className="flex flex-col gap-1">
              <p className="font-[family-name:var(--font-about-display)] text-3xl font-normal leading-none text-secondary tracking-tight sm:text-4xl">
                {value}
              </p>
              <p className="text-[0.75rem] leading-snug text-secondary/70 sm:text-sm">
                {label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
