// Hero de la landing de agradecimiento: mensaje de reserva recibida + camino hasta la confirmación.
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import {
  ArrowDown,
  CalendarCheck,
  Check,
  Landmark,
  MessageCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { fontThankYouDisplay } from "@/features/thank-you/config/thank-you-fonts";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

import styles from "./thank-you.module.css";

interface ConfirmationStep {
  title: string;
  hint: string;
  icon: LucideIcon;
  done?: boolean;
}

export async function ThankYouHero() {
  const t = await getTranslations("thankYou.hero");
  const tPayment = await getTranslations("thankYou.payment");

  const steps: ConfirmationStep[] = [
    {
      title: t("stepReceivedTitle"),
      hint: t("stepReceivedHint"),
      icon: Check,
      done: true,
    },
    { title: t("stepPayTitle"), hint: t("stepPayHint"), icon: Landmark },
    { title: t("stepSendTitle"), hint: t("stepSendHint"), icon: MessageCircle },
    {
      title: t("stepConfirmedTitle"),
      hint: t("stepConfirmedHint"),
      icon: CalendarCheck,
    },
  ];

  return (
    <section
      aria-labelledby="gracias-titulo"
      className={`${fontThankYouDisplay.variable} relative isolate mt-[calc(var(--h-navbar)*-1)] overflow-hidden bg-secondary text-white`}
    >
      <Image
        src="/images/balta/hab-suite.webp"
        alt=""
        fill
        loading="eager"
        // En móvil el héroe es más alto que ancho y la foto se recorta y amplía: pide más resolución.
        sizes="(max-width: 768px) 200vw, 100vw"
        className="absolute inset-0 -z-20 object-cover"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-black/65"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-secondary/25 via-transparent to-secondary/40"
        aria-hidden="true"
      />
      <div className={styles.aurora} aria-hidden="true" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 pt-[calc(var(--h-navbar)+3rem)] pb-12 sm:px-6 md:pt-[calc(var(--h-navbar)+4rem)] md:pb-16 lg:px-8 lg:pb-20">
        <div className="max-w-3xl">
          <span
            className={`${styles.reveal} ${styles.seal} grid size-14 place-items-center rounded-full bg-primary text-primary-foreground`}
            aria-hidden="true"
          >
            <Check className="size-7" strokeWidth={2.25} />
          </span>

          <h1
            id="gracias-titulo"
            className={`${styles.reveal} mt-6 font-[family-name:var(--font-thank-you-display)] text-[clamp(2.5rem,6.5vw,5.25rem)] leading-[0.95] font-light tracking-[-0.02em] text-balance text-white`}
            style={{ "--reveal-delay": "100ms" } as React.CSSProperties}
          >
            {t("titleA")}{" "}
            <span className="font-normal text-primary italic">
              {t("titleEmphasis")}
            </span>
          </h1>

          <p
            className={`${styles.reveal} mt-7 inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-[0.62rem] font-semibold tracking-[0.2em] text-white/90 uppercase backdrop-blur-md sm:tracking-[0.28em]`}
            style={{ "--reveal-delay": "200ms" } as React.CSSProperties}
          >
            <span
              className="size-1.5 shrink-0 rounded-full bg-primary"
              aria-hidden="true"
            />
            {t("status")}
          </p>

          <p
            className={`${styles.reveal} mt-5 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg`}
            style={{ "--reveal-delay": "280ms" } as React.CSSProperties}
          >
            {t("lead")}
          </p>

          <div
            className={`${styles.reveal} mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center`}
            style={{ "--reveal-delay": "360ms" } as React.CSSProperties}
          >
            <a
              href="#pago"
              className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-6 py-3 text-sm font-semibold tracking-wide text-primary-foreground uppercase transition-transform duration-(--duration-normal) hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              {t("ctaPayment")}
              <ArrowDown
                className="size-4 transition-transform duration-(--duration-normal) group-hover:translate-y-0.5 motion-reduce:transition-none"
                strokeWidth={2}
                aria-hidden="true"
              />
            </a>
            <a
              href={buildWhatsAppUrl(tPayment("whatsappPrefill"))}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold tracking-wide text-white uppercase transition-colors duration-(--duration-normal) hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none"
            >
              <MessageCircle
                className="size-4"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              {t("ctaWhatsapp")}
            </a>
          </div>
        </div>

        <ol
          aria-label={t("stepsAria")}
          className={`${styles.reveal} grid gap-5 rounded-[1.5rem] border border-white/25 bg-white/95 p-5 shadow-[0_24px_60px_rgba(0,0,0,0.3)] backdrop-blur-md sm:grid-cols-2 sm:p-6 lg:grid-cols-4 lg:gap-6`}
          style={{ "--reveal-delay": "460ms" } as React.CSSProperties}
        >
          {steps.map(({ title, hint, icon: Icon, done }, index) => (
            <li key={title} className="flex items-start gap-3.5">
              <span
                className={`grid size-10 shrink-0 place-items-center rounded-full ${
                  done
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary/8 text-secondary"
                }`}
                aria-hidden="true"
              >
                <Icon className="size-[1.125rem]" strokeWidth={1.75} />
              </span>
              <div>
                <p className="font-mono text-[0.68rem] tracking-[0.22em] text-secondary/55 uppercase">
                  {(index + 1).toString().padStart(2, "0")}
                  {done ? ` · ${t("stepDone")}` : ""}
                </p>
                <p className="mt-1 font-[family-name:var(--font-thank-you-display)] text-xl leading-tight tracking-tight text-secondary">
                  {title}
                </p>
                <p className="mt-1 text-[0.8rem] leading-snug text-secondary/70">
                  {hint}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
