// "Cómo hospedarte en 4 pasos": imagen editorial a la izquierda, lista numerada a la derecha.
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { fontAboutDisplay } from "@/features/about/config/about-fonts";
import { aboutSteps } from "@/features/about/data/about";
import { siteConfig } from "@/config/site";

import styles from "./about.module.css";

export async function AboutExperience() {
  const t = await getTranslations("about.experience");

  return (
    <Section
      id="experiencia"
      aria-labelledby="experiencia-titulo"
      className={`${fontAboutDisplay.variable} ${styles.section} relative overflow-hidden bg-[color-mix(in_oklab,var(--accent)_65%,white)]`}
    >
      <div className="pointer-events-none absolute -top-40 -right-24 size-[26rem] rounded-full bg-primary/15 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 size-[22rem] rounded-full bg-secondary/10 blur-3xl" aria-hidden="true" />
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div
            className={`${styles.reveal} relative lg:col-span-5`}
            style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
          >
            <div className={`${styles.card} relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-secondary/10 bg-secondary/5 shadow-card`}>
              <Image
                src="/images/plaza/cowork-plaza-uno.webp"
                alt={t("imageAlt")}
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-secondary/10 to-transparent" aria-hidden="true" />
              <div className="absolute inset-x-6 bottom-6 flex flex-col gap-2 sm:inset-x-8 sm:bottom-8">
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.22em] text-white uppercase backdrop-blur">
                  <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                  {t("badge")}
                </span>
                <p className="font-[family-name:var(--font-about-display)] text-2xl font-light leading-tight text-white text-balance sm:text-[1.75rem]">
                  {t("imageCaption")}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <p
              className={`${styles.reveal} flex items-center gap-3 text-[0.8rem] font-semibold tracking-[0.28em] text-secondary/70 uppercase`}
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              <span className="h-px w-8 bg-secondary/40" aria-hidden="true" />
              {t("eyebrow")}
            </p>

            <h2
              id="experiencia-titulo"
              className={`${styles.reveal} mt-6 font-[family-name:var(--font-about-display)] font-light leading-[0.95] tracking-[-0.02em] text-secondary text-balance text-[clamp(2.2rem,4.8vw,3.8rem)]`}
              style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
            >
              {t("titleA")}{" "}
              <span className="italic font-normal text-secondary/85">{t("titleEmphasis")}</span>
            </h2>

            <p
              className={`${styles.reveal} mt-5 max-w-xl text-[0.98rem] leading-relaxed text-muted-foreground md:text-base`}
              style={{ "--reveal-delay": "280ms" } as React.CSSProperties}
            >
              {t("lead")}
            </p>

            <ol className="mt-10 flex flex-col gap-6 sm:gap-7">
              {aboutSteps.map(({ number, icon: Icon, title, description }, index) => (
                <li
                  key={number}
                  className={`${styles.reveal} relative`}
                  style={
                    {
                      "--reveal-delay": `${360 + index * 110}ms`,
                    } as React.CSSProperties
                  }
                >
                  {index < aboutSteps.length - 1 && (
                    <span className={styles.stepConnector} aria-hidden="true" />
                  )}
                  <article className="relative flex gap-5">
                    <span className="relative z-10 grid size-12 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground shadow-[0_10px_24px_rgba(185,188,49,0.35)]" aria-hidden="true">
                      <span className="font-[family-name:var(--font-about-display)] text-lg font-normal leading-none">
                        {number}
                      </span>
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-3">
                        <h3 className="font-[family-name:var(--font-about-display)] text-xl font-normal leading-tight text-secondary tracking-tight text-balance sm:text-[1.35rem]">
                          {title}
                        </h3>
                        <Icon className="hidden size-4 text-secondary/60 sm:block" strokeWidth={1.75} aria-hidden="true" />
                      </div>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-[0.95rem]">
                        {description}
                      </p>
                    </div>
                  </article>
                </li>
              ))}
            </ol>

            <div
              className={`${styles.reveal} mt-10`}
              style={{ "--reveal-delay": "820ms" } as React.CSSProperties}
            >
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-secondary px-6 py-3 text-sm font-semibold tracking-wide text-secondary-foreground uppercase transition-transform duration-(--duration-normal) hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                {t("ctaBook")}
                <ArrowUpRight className="size-4 transition-transform duration-(--duration-normal) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none" strokeWidth={2} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
