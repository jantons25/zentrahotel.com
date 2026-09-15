"use client";

// Carrusel horizontal de promociones (scroll-snap + flechas), al estilo de las
// pasarelas de ofertas de las grandes cadenas pero con nuestra línea gráfica.
// Cada tarjeta enlaza a WhatsApp con el mensaje de la promoción precargado.
import * as React from "react";
import Image from "next/image";
import {
  ArrowUpRight,
  CalendarCheck,
  Check,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import styles from "./special-offers.module.css";

export interface SpecialOfferCard {
  id: string;
  venue: string;
  tone: "primary" | "secondary";
  image: string;
  alt: string;
  badge: string;
  title: string;
  includes: string[];
  priceFrom: string;
  priceWeb: string;
  code?: string;
  validUntil: string;
  href: string;
  ctaAria: string;
}

interface Props {
  offers: SpecialOfferCard[];
  labels: {
    prev: string;
    next: string;
    listAria: string;
    priceFromLabel: string;
    priceWebLabel: string;
    nightFrom: string;
    validUntil: string;
    codeLabel: string;
    cta: string;
  };
}

export function SpecialOffersCarousel({ offers, labels }: Props) {
  const trackRef = React.useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = React.useState(true);
  const [atEnd, setAtEnd] = React.useState(false);

  // Mantiene el estado de las flechas sincronizado con el scroll real del track.
  const syncEdges = React.useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setAtStart(el.scrollLeft <= 4);
    setAtEnd(el.scrollLeft + el.clientWidth >= el.scrollWidth - 4);
  }, []);

  React.useEffect(() => {
    syncEdges();
    window.addEventListener("resize", syncEdges);
    return () => window.removeEventListener("resize", syncEdges);
  }, [syncEdges]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.clientWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <ul
        ref={trackRef}
        onScroll={syncEdges}
        aria-label={labels.listAria}
        className={`${styles.track} flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 md:gap-6`}
      >
        {offers.map((offer) => (
          <li
            key={offer.id}
            className="w-[82vw] max-w-[22rem] shrink-0 snap-start sm:w-[20rem] lg:w-[21.5rem]"
          >
            <article
              className={`${styles.card} flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-secondary/10 bg-card shadow-card`}
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-secondary/5">
                <Image
                  src={offer.image}
                  alt={offer.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 82vw, 22rem"
                  className={styles.media}
                />
                <span
                  className={`absolute top-0 right-0 rounded-bl-[1.25rem] px-4 py-2.5 text-[0.68rem] font-semibold tracking-[0.12em] uppercase ${
                    offer.tone === "primary"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  {offer.venue}
                </span>
                <span className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-[0.62rem] font-semibold tracking-[0.14em] text-primary-foreground uppercase shadow-card">
                  {offer.badge}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="font-[family-name:var(--font-offers-display)] text-xl leading-tight font-normal tracking-tight text-balance text-secondary">
                  {offer.title}
                </h3>

                <ul className="mt-4 space-y-2">
                  {offer.includes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[0.82rem] leading-snug text-muted-foreground"
                    >
                      <Check
                        className="mt-0.5 size-3.5 shrink-0 text-primary"
                        strokeWidth={2.5}
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-2xl border border-secondary/10 bg-muted p-4">
                  <div className="flex items-end justify-between gap-3">
                    <span className="text-[0.62rem] leading-tight font-semibold tracking-[0.16em] text-secondary/55 uppercase">
                      {labels.priceFromLabel}
                    </span>
                    <span className="text-sm text-secondary/45 line-through">
                      {offer.priceFrom}
                    </span>
                  </div>
                  <div className="mt-2 flex items-end justify-between gap-3 border-t border-dashed border-secondary/20 pt-3">
                    <span className="text-[0.62rem] leading-tight font-semibold tracking-[0.16em] text-secondary uppercase">
                      {labels.priceWebLabel}
                      <span className="mt-0.5 block text-[0.6rem] font-normal tracking-normal text-secondary/55 normal-case">
                        {labels.nightFrom}
                      </span>
                    </span>
                    <span className="font-[family-name:var(--font-offers-display)] text-2xl leading-none font-normal text-secondary">
                      {offer.priceWeb}
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[0.68rem] text-secondary/60">
                  <span className="inline-flex items-center gap-1.5">
                    <CalendarCheck
                      className="size-3.5 text-primary"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    {labels.validUntil} {offer.validUntil}
                  </span>
                  {offer.code ? (
                    <span className="rounded-full border border-dashed border-secondary/30 px-2.5 py-0.5 font-mono tracking-[0.14em] uppercase">
                      {labels.codeLabel}: {offer.code}
                    </span>
                  ) : null}
                </div>

                <a
                  href={offer.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={offer.ctaAria}
                  className="group/cta mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-[0.7rem] font-semibold tracking-[0.14em] text-primary-foreground uppercase transition-transform duration-(--duration-normal) hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  {labels.cta}
                  <ArrowUpRight
                    className="size-3.5 transition-transform duration-(--duration-normal) group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 motion-reduce:transition-none"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </a>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <div className="mt-2 flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => scrollByCard(-1)}
          disabled={atStart}
          aria-label={labels.prev}
          className="inline-flex size-11 items-center justify-center rounded-full border border-secondary/25 bg-card text-secondary transition-colors duration-(--duration-normal) hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-35 motion-reduce:transition-none"
        >
          <ChevronLeft
            className="size-5"
            strokeWidth={1.75}
            aria-hidden="true"
          />
        </button>
        <button
          type="button"
          onClick={() => scrollByCard(1)}
          disabled={atEnd}
          aria-label={labels.next}
          className="inline-flex size-11 items-center justify-center rounded-full border border-secondary/25 bg-card text-secondary transition-colors duration-(--duration-normal) hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-35 motion-reduce:transition-none"
        >
          <ChevronRight
            className="size-5"
            strokeWidth={1.75}
            aria-hidden="true"
          />
        </button>
      </div>
    </div>
  );
}
