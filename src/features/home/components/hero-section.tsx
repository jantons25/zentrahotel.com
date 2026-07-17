// Hero principal: composición editorial premium con titular, chips de amenidad y widget de reservas.
import { getTranslations } from "next-intl/server";
import { BedDouble, ConciergeBell, Sparkles, Wifi } from "lucide-react";

import { fontHeroDisplay } from "@/features/home/config/hero-fonts";
import { BookingWidget } from "@/features/home/components/booking-widget";

import styles from "./hero-section.module.css";

export async function HeroSection() {
  const t = await getTranslations("home.hero");

  const highlights = [
    { icon: Wifi, label: t("amenityWifi") },
    { icon: BedDouble, label: t("amenitySuite") },
    { icon: Sparkles, label: t("amenityZen") },
    { icon: ConciergeBell, label: t("amenityReception") },
  ];

  const stats = [
    { value: t("statReceptionValue"), label: t("statReceptionLabel") },
    { value: t("statDistanceValue"), label: t("statDistanceLabel") },
    { value: t("statRoomsValue"), label: t("statRoomsLabel") },
    { value: t("statRatingValue"), label: t("statRatingLabel") },
  ];

  return (
    <section
      aria-label={t("sectionAria")}
      className={`${fontHeroDisplay.variable} ${styles.hero} relative isolate -mt-16 overflow-hidden bg-secondary text-white md:-mt-20`}
    >
      <div className={styles.vignette} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 pt-32 pb-16 sm:px-6 md:pt-40 lg:min-h-[calc(100vh-2rem)] lg:px-8 lg:pt-44 lg:pb-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-7">
            <p
              className={`${styles.reveal} inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[0.62rem] font-semibold tracking-[0.28em] text-white/85 uppercase backdrop-blur`}
              style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
            >
              <span
                className="size-1.5 rounded-full bg-primary"
                aria-hidden="true"
              />
              {t("eyebrow")}
            </p>

            <h1
              className={`${styles.reveal} mt-6 font-[family-name:var(--font-hero-display)] font-light leading-[0.95] tracking-[-0.02em] text-white text-balance text-[clamp(2.75rem,6.5vw,5.5rem)]`}
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              {t("titleA")}
              <br />
              {t("titleB")}{" "}
              <span className="italic font-normal text-primary">
                {t("titleEmphasis")}
              </span>
            </h1>

            <p
              className={`${styles.reveal} mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg`}
              style={{ "--reveal-delay": "220ms" } as React.CSSProperties}
            >
              {t("lead")}
            </p>

            <ul
              className={`${styles.reveal} mt-8 flex flex-wrap gap-2`}
              style={{ "--reveal-delay": "320ms" } as React.CSSProperties}
              aria-label={t("amenitiesAria")}
            >
              {highlights.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/90 backdrop-blur"
                >
                  <Icon
                    className="size-3.5"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`${styles.reveal} lg:col-span-5`}
            style={{ "--reveal-delay": "260ms" } as React.CSSProperties}
          >
            <BookingWidget />
          </div>
        </div>

        <ul
          className={`${styles.reveal} grid grid-cols-2 gap-3 rounded-[1.5rem] border border-white/15 bg-white/95 p-4 backdrop-blur sm:p-6 md:grid-cols-4 md:gap-6`}
          style={{ "--reveal-delay": "440ms" } as React.CSSProperties}
        >
          {stats.map(({ value, label }) => (
            <li key={label} className="flex flex-col gap-1">
              <p className="font-[family-name:var(--font-hero-display)] text-2xl font-normal leading-none text-secondary tracking-tight sm:text-3xl">
                {value}
              </p>
              <p className="text-[0.72rem] leading-snug text-secondary/70 sm:text-sm">
                {label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
