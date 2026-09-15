"use client";

// Carrusel de fondo del hero: imágenes a pantalla completa que se suceden en bucle
// infinito con un barrido horizontal de izquierda a derecha, flechas de control y
// un titular + bajada propios de cada imagen.
import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import styles from "./hero-carousel.module.css";

// Cada diapositiva ya llega con sus textos resueltos al locale activo.
export interface HeroCarouselSlide {
  id: string;
  image: string;
  alt: string;
  title: string;
  titleEmphasis: string;
  subtitle: string;
}

interface HeroCarouselProps {
  slides: HeroCarouselSlide[];
  labels: { prev: string; next: string; status: string };
  /** Barra de reservas anclada al pie del hero. */
  children?: React.ReactNode;
}

const AUTOPLAY_MS = 7000;

export function HeroCarousel({ slides, labels, children }: HeroCarouselProps) {
  const total = slides.length;
  const [index, setIndex] = React.useState(0);
  const [previous, setPrevious] = React.useState<number | null>(null);
  // "next" barre de izquierda a derecha; "prev" invierte el sentido.
  const [direction, setDirection] = React.useState<"next" | "prev">("next");
  const [paused, setPaused] = React.useState(false);

  const go = React.useCallback(
    (nextIndex: number, dir: "next" | "prev") => {
      setPrevious((current) => (nextIndex === index ? current : index));
      setDirection(dir);
      setIndex(((nextIndex % total) + total) % total);
    },
    [index, total],
  );

  const goNext = React.useCallback(() => go(index + 1, "next"), [go, index]);
  const goPrev = React.useCallback(() => go(index - 1, "prev"), [go, index]);

  // Avance automático en bucle; se detiene con el puntero encima o con foco dentro.
  React.useEffect(() => {
    if (paused || total < 2) return;
    const timer = setTimeout(goNext, AUTOPLAY_MS);
    return () => clearTimeout(timer);
  }, [goNext, paused, total, index]);

  const active = slides[index];

  return (
    <div
      className="absolute inset-0"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Capa de imágenes */}
      <div className="absolute inset-0 overflow-hidden bg-secondary">
        {slides.map((slide, position) => {
          const isActive = position === index;
          const isLeaving = position === previous && !isActive;
          // La entrante parte del borde contrario al que sale la saliente.
          const parked = direction === "next" ? "-100%" : "100%";
          const exiting = direction === "next" ? "100%" : "-100%";

          return (
            <div
              key={slide.id}
              aria-hidden={!isActive}
              className={`${styles.slide} ${isActive ? styles.slideActive : ""}`}
              style={
                {
                  "--slide-offset": isActive
                    ? "0"
                    : isLeaving
                      ? exiting
                      : parked,
                } as React.CSSProperties
              }
            >
              <Image
                src={slide.image}
                alt={isActive ? slide.alt : ""}
                fill
                priority={position === 0}
                loading={position === 0 ? undefined : "lazy"}
                sizes="100vw"
                className={styles.media}
              />
            </div>
          );
        })}
        <div className={styles.scrim} aria-hidden="true" />
        <div className={styles.grain} aria-hidden="true" />
      </div>

      {/* Capa de contenido */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl flex-col px-4 pt-[var(--h-navbar)] sm:px-6 lg:px-8">
        <div className="flex flex-1 items-center py-8 md:py-10">
          <div key={active.id} className="max-w-3xl">
            <p
              className={`${styles.copy} inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[0.6rem] font-semibold tracking-[0.28em] text-white/85 uppercase backdrop-blur md:text-[0.62rem]`}
              style={{ "--copy-delay": "0ms" } as React.CSSProperties}
            >
              <span
                className="size-1.5 rounded-full bg-primary"
                aria-hidden="true"
              />
              {labels.status}
            </p>

            <h1
              className={`${styles.copy} mt-5 font-[family-name:var(--font-hero-display)] text-[clamp(2.1rem,6vw,5rem)] leading-[0.98] font-light tracking-[-0.02em] text-balance text-white md:mt-6`}
              style={{ "--copy-delay": "120ms" } as React.CSSProperties}
            >
              {active.title}{" "}
              <span className="font-normal text-primary italic">
                {active.titleEmphasis}
              </span>
            </h1>

            <p
              className={`${styles.copy} mt-5 max-w-xl text-sm leading-relaxed text-white/80 md:text-lg`}
              style={{ "--copy-delay": "220ms" } as React.CSSProperties}
            >
              {active.subtitle}
            </p>
          </div>
        </div>

        {/* Controles + barra de reservas, centrada al pie del hero */}
        <div className="flex flex-col gap-4 pb-6 md:gap-5 md:pb-8">
          <div className="flex items-center justify-between gap-4">
            <ol className="flex items-center gap-2" aria-hidden="true">
              {slides.map((slide, position) => (
                <li
                  key={slide.id}
                  className={`h-1 rounded-full transition-all duration-(--duration-slow) motion-reduce:transition-none ${
                    position === index ? "w-8 bg-primary" : "w-3 bg-white/35"
                  }`}
                />
              ))}
            </ol>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={goPrev}
                aria-label={labels.prev}
                className="inline-flex size-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition-colors duration-(--duration-normal) hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none md:size-12"
              >
                <ChevronLeft
                  className="size-5"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label={labels.next}
                className="inline-flex size-10 items-center justify-center rounded-full border border-white/30 bg-white/10 text-white backdrop-blur transition-colors duration-(--duration-normal) hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none md:size-12"
              >
                <ChevronRight
                  className="size-5"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>

          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </div>
      </div>
    </div>
  );
}
