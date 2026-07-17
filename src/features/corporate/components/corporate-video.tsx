"use client";

// Video "En acción": banner navy con el video real del hub y CTA de reunión.
import { useTranslations } from "next-intl";
import { ArrowUpRight, Volume2, VolumeX } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { fontCorporateDisplay } from "@/features/corporate/config/corporate-fonts";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

import styles from "./corporate.module.css";

export function CorporateVideo() {
  const t = useTranslations("corporate.video");
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <Section
      id="video"
      aria-labelledby="video-titulo"
      className={`${fontCorporateDisplay.variable} ${styles.section} relative overflow-hidden bg-secondary text-secondary-foreground`}
    >
      <div className={styles.auroraTwo} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-5">
            <p
              className={`${styles.reveal} flex items-center gap-3 text-[0.8rem] font-semibold tracking-[0.28em] text-white/60 uppercase`}
              style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
            >
              <span className="h-px w-8 bg-white/30" aria-hidden="true" />
              {t("eyebrow")}
            </p>
            <h2
              id="video-titulo"
              className={`${styles.reveal} mt-6 font-[family-name:var(--font-corporate-display)] font-light leading-[0.95] tracking-[-0.02em] text-white text-balance text-[clamp(2.2rem,4.8vw,3.75rem)]`}
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              {t("titleA")}{" "}
              <span className="italic font-normal text-primary">{t("titleEmphasis")}</span>
            </h2>
            <p
              className={`${styles.reveal} mt-6 max-w-lg text-[0.95rem] leading-relaxed text-white/70`}
              style={{ "--reveal-delay": "220ms" } as React.CSSProperties}
            >
              {t("lead")}
            </p>

            <div
              className={`${styles.reveal} mt-8`}
              style={{ "--reveal-delay": "320ms" } as React.CSSProperties}
            >
              <a
                href={buildWhatsAppUrl(t("whatsappPrefill"))}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-6 py-3 text-sm font-semibold tracking-wide text-primary-foreground uppercase transition-transform duration-(--duration-normal) hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                {t("ctaMeeting")}
                <ArrowUpRight
                  className="size-4 transition-transform duration-(--duration-normal) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

          <div
            className={`${styles.reveal} lg:col-span-7`}
            style={{ "--reveal-delay": "260ms" } as React.CSSProperties}
          >
            <div className={`${styles.card} relative mx-auto aspect-[9/16] w-full max-w-[320px] overflow-hidden rounded-[1.75rem] border border-white/12 bg-black sm:max-w-[360px]`}>
              <video
                ref={videoRef}
                src="/videos/hub-corporativo.mp4"
                muted={isMuted}
                loop
                playsInline
                preload="metadata"
                aria-hidden="true"
                className="absolute inset-0 size-full object-cover"
              />
              <button
                type="button"
                onClick={() => setIsMuted((muted) => !muted)}
                aria-label={isMuted ? t("unmuteAria") : t("muteAria")}
                className="absolute top-4 right-4 grid size-9 place-items-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur transition-colors duration-(--duration-normal) hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:top-6 sm:right-6"
              >
                {isMuted ? (
                  <VolumeX className="size-4" strokeWidth={1.75} />
                ) : (
                  <Volume2 className="size-4" strokeWidth={1.75} />
                )}
              </button>
              <span className="pointer-events-none absolute right-4 bottom-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[0.62rem] font-semibold tracking-[0.22em] text-white uppercase backdrop-blur sm:right-6 sm:bottom-6">
                <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                {t("videoBadge")}
              </span>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
