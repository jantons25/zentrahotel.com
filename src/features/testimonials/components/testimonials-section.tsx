// Sección "Lo que dicen nuestros huéspedes": carrusel editorial en fondo oscuro.
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { fontTestimonialsDisplay } from "@/features/testimonials/config/testimonials-fonts";
import { TestimonialsCarousel } from "@/features/testimonials/components/testimonials-carousel";
import { testimonials } from "@/features/testimonials/data/testimonials";
import { siteConfig } from "@/config/site";

import styles from "./testimonials-section.module.css";

export function TestimonialsSection() {
  const total = testimonials.length;

  return (
    <Section
      aria-labelledby="testimonios-titulo"
      className={`${fontTestimonialsDisplay.variable} ${styles.section} relative overflow-hidden bg-secondary text-secondary-foreground`}
    >
      <div className={styles.auroraOne} aria-hidden="true" />
      <div className={styles.auroraTwo} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />

      <Container className="relative">
        <header
          className={`${styles.reveal} mx-auto max-w-3xl text-center`}
          style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
        >
          <p className="flex items-center justify-center gap-3 text-[0.72rem] font-semibold tracking-[0.32em] text-white/60 uppercase">
            <span className="h-px w-10 bg-white/30" aria-hidden="true" />
            Huéspedes verificados · {total.toString().padStart(2, "0")}
            <span className="h-px w-10 bg-white/30" aria-hidden="true" />
          </p>
          <h2
            id="testimonios-titulo"
            className="mt-6 font-[family-name:var(--font-testimonials-display)] font-light leading-[0.95] tracking-[-0.02em] text-white text-balance text-[clamp(2.5rem,5.5vw,4.5rem)]"
          >
            Lo que dicen nuestros{" "}
            <span className="italic font-normal text-primary">
              huéspedes.
            </span>
          </h2>
          <p className="mt-5 text-[0.95rem] leading-relaxed text-white/70">
            Reseñas reales de quienes ya vivieron Zentra. Historias breves de
            estadías cómodas, atención cercana y momentos memorables en el
            centro de Chiclayo.
          </p>
        </header>

        <div
          className={styles.reveal}
          style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
        >
          <div className="mt-12 lg:mt-16">
            <TestimonialsCarousel />
          </div>
        </div>

        <div
          className={`${styles.reveal} mt-10 flex justify-center`}
          style={{ "--reveal-delay": "320ms" } as React.CSSProperties}
        >
          <Link
            href={siteConfig.contact.mapShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-sm font-semibold tracking-wide text-white/80 uppercase transition-colors duration-(--duration-normal) hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none"
          >
            Ver reseñas en Google Maps
            <ArrowUpRight
              className="size-4 transition-transform duration-(--duration-normal) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
              strokeWidth={2}
              aria-hidden="true"
            />
          </Link>
        </div>
      </Container>
    </Section>
  );
}
