// Video "En acción": banner navy con placeholder de video 45s y CTA de reunión.
import Image from "next/image";
import { ArrowUpRight, Play } from "lucide-react";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { fontCorporateDisplay } from "@/features/corporate/config/corporate-fonts";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

import styles from "./corporate.module.css";

export function CorporateVideo() {
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
              className={`${styles.reveal} flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.28em] text-white/60 uppercase`}
              style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
            >
              <span className="h-px w-8 bg-white/30" aria-hidden="true" />
              En acción · 45 segundos
            </p>
            <h2
              id="video-titulo"
              className={`${styles.reveal} mt-6 font-[family-name:var(--font-corporate-display)] font-light leading-[0.95] tracking-[-0.02em] text-white text-balance text-[clamp(2.2rem,4.8vw,3.75rem)]`}
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              Mira cómo opera un equipo en el{" "}
              <span className="italic font-normal text-primary">
                hub corporativo.
              </span>
            </h2>
            <p
              className={`${styles.reveal} mt-6 max-w-lg text-[0.95rem] leading-relaxed text-white/70`}
              style={{ "--reveal-delay": "220ms" } as React.CSSProperties}
            >
              Así es un día de operación continua para tu equipo en Chiclayo:
              del check-in express al escritorio en Nexus, sin fricciones.
            </p>

            <div
              className={`${styles.reveal} mt-8`}
              style={{ "--reveal-delay": "320ms" } as React.CSSProperties}
            >
              <a
                href={buildWhatsAppUrl(
                  "Hola, quiero coordinar una reunión para conocer la propuesta corporativa Zentra Hotel & Cowork.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-6 py-3 text-sm font-semibold tracking-wide text-primary-foreground uppercase transition-transform duration-(--duration-normal) hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                Reserva una reunión
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
            <button
              type="button"
              aria-label="Reproducir el video de 45 segundos del hub corporativo"
              className={`${styles.card} group relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-[1.75rem] border border-white/12 bg-black/40`}
            >
              <Image
                src="/images/hero-collage.webp"
                alt=""
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="absolute inset-0 -z-10 object-cover opacity-70 transition-transform duration-[900ms] ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
              <div
                className="absolute inset-0 -z-[5] bg-gradient-to-t from-secondary/80 via-secondary/40 to-secondary/10"
                aria-hidden="true"
              />
              <span
                className="grid size-20 place-items-center rounded-full bg-primary text-primary-foreground shadow-[0_18px_38px_rgba(0,0,0,0.35)] transition-transform duration-(--duration-normal) group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100 sm:size-24"
                aria-hidden="true"
              >
                <Play className="size-8 fill-current" strokeWidth={0} />
              </span>
              <span className="absolute right-4 bottom-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[0.62rem] font-semibold tracking-[0.22em] text-white uppercase backdrop-blur sm:right-6 sm:bottom-6">
                <span
                  className="size-1.5 rounded-full bg-primary"
                  aria-hidden="true"
                />
                Video · 0:45
              </span>
            </button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
