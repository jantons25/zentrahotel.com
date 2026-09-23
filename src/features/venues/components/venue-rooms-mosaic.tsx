"use client";

// Mosaico clicable de "Nuestras habitaciones" + modal de detalle.
//
// Cada foto es un botón: al pulsarla se abre un diálogo con el carrusel de fotos de
// ese tipo de habitación, su descripción, los servicios y el CTA al motor de reservas.
// Los datos llegan como texto plano desde el server (los iconos se resuelven aquí,
// porque los componentes de Lucide no son serializables).
import * as React from "react";
import Image from "next/image";
import { Dialog } from "@base-ui/react/dialog";
import { useLocale, useTranslations } from "next-intl";
import {
  ArrowUpRight,
  Bath,
  Bed,
  BriefcaseBusiness,
  ChevronLeft,
  ChevronRight,
  Coffee,
  Snowflake,
  Sparkles,
  Tv,
  UtensilsCrossed,
  Wifi,
  X,
  type LucideIcon,
} from "lucide-react";

import type {
  VenueAmenityKey,
  VenueRoomShot,
  VenueRoomType,
} from "@/features/venues/types";
import { pick } from "@/lib/i18n-pick";

import styles from "./venue-rooms-section.module.css";

const AMENITY_ICONS: Record<VenueAmenityKey, LucideIcon> = {
  wifi: Wifi,
  ac: Snowflake,
  tv: Tv,
  bath: Bath,
  desk: BriefcaseBusiness,
  coffee: Coffee,
  breakfast: UtensilsCrossed,
  bed: Bed,
  sparkles: Sparkles,
};

interface Props {
  shots: VenueRoomShot[];
  roomTypes: VenueRoomType[];
  /** URL del Booking Engine de la sede (CTA "Consultar disponibilidad"). */
  bookingUrl: string;
}

export function VenueRoomsMosaic({ shots, roomTypes, bookingUrl }: Props) {
  const t = useTranslations("venuePage.rooms");
  const locale = useLocale();

  const [openTypeId, setOpenTypeId] = React.useState<string | null>(null);
  const [index, setIndex] = React.useState(0);

  const room = roomTypes.find((type) => type.id === openTypeId) ?? null;
  const total = room?.images.length ?? 0;

  const open = (typeId: string) => {
    setOpenTypeId(typeId);
    setIndex(0);
  };

  const go = (delta: number) => {
    if (!total) return;
    setIndex((current) => (current + delta + total) % total);
  };

  return (
    <>
      <ul className="mt-12 columns-1 gap-5 sm:columns-2 lg:mt-16 lg:columns-3 lg:gap-6">
        {shots.map((shot, i) => (
          <li
            key={shot.id}
            className={`${styles.reveal} mb-5 break-inside-avoid lg:mb-6`}
            style={
              { "--reveal-delay": `${100 + i * 70}ms` } as React.CSSProperties
            }
          >
            <button
              type="button"
              onClick={() => open(shot.typeId)}
              aria-label={t("openDetail", { room: pick(shot.label, locale) })}
              className={`${styles.card} group relative block w-full cursor-pointer ${shot.aspect} overflow-hidden rounded-[1.5rem] bg-secondary/10 text-left shadow-card focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary`}
            >
              <Image
                src={shot.src}
                alt={pick(shot.alt, locale)}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={styles.media}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-secondary/60 via-secondary/10 to-transparent"
              />
              <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 p-5 text-base font-light text-white sm:p-6 sm:text-lg">
                {pick(shot.label, locale)}
                <ArrowUpRight
                  className="size-5 shrink-0 opacity-0 transition-opacity duration-(--duration-normal) group-hover:opacity-100 group-focus-visible:opacity-100 motion-reduce:transition-none"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </span>
            </button>
          </li>
        ))}
      </ul>

      <Dialog.Root
        open={room !== null}
        onOpenChange={(next) => {
          if (!next) setOpenTypeId(null);
        }}
      >
        <Dialog.Portal>
          <Dialog.Backdrop className="fixed inset-0 z-100 bg-secondary/70 backdrop-blur-sm transition-opacity duration-(--duration-normal) data-ending-style:opacity-0 data-starting-style:opacity-0" />
          <Dialog.Popup className="fixed top-1/2 left-1/2 z-100 flex max-h-[92svh] w-[min(46rem,calc(100vw-2rem))] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-[1.75rem] bg-card text-card-foreground shadow-card-hover transition-[opacity,transform] duration-(--duration-normal) ease-out data-ending-style:scale-[0.97] data-ending-style:opacity-0 data-starting-style:scale-[0.97] data-starting-style:opacity-0 motion-reduce:transition-none">
            {room ? (
              <>
                {/* Carrusel: una foto visible, flechas laterales y puntos abajo.
                    La foto es el único bloque elástico del modal: cede altura a la
                    ficha para que todo entre sin scroll (recorta con object-cover). */}
                <div className="relative w-full min-h-[7rem] shrink grow basis-[clamp(10rem,34svh,22rem)] overflow-hidden bg-secondary/10">
                  {room.images.map((image, i) => (
                    <Image
                      key={`${image.src}-${i}`}
                      src={image.src}
                      alt={pick(image.alt, locale)}
                      fill
                      sizes="(max-width: 768px) 100vw, 46rem"
                      priority={i === 0}
                      className={`object-cover transition-opacity duration-(--duration-slow) motion-reduce:transition-none ${
                        i === index ? "opacity-100" : "opacity-0"
                      }`}
                    />
                  ))}

                  <Dialog.Close
                    aria-label={t("close")}
                    className="absolute top-4 right-4 inline-flex size-9 cursor-pointer items-center justify-center rounded-full bg-secondary/55 text-white backdrop-blur transition-colors duration-(--duration-normal) hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
                  >
                    <X className="size-4" strokeWidth={2} aria-hidden="true" />
                  </Dialog.Close>

                  {total > 1 ? (
                    <>
                      <button
                        type="button"
                        onClick={() => go(-1)}
                        aria-label={t("prev")}
                        className="absolute top-1/2 left-4 inline-flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-secondary/55 text-white backdrop-blur transition-colors duration-(--duration-normal) hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
                      >
                        <ChevronLeft
                          className="size-5"
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                      </button>
                      <button
                        type="button"
                        onClick={() => go(1)}
                        aria-label={t("next")}
                        className="absolute top-1/2 right-4 inline-flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-secondary/55 text-white backdrop-blur transition-colors duration-(--duration-normal) hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none"
                      >
                        <ChevronRight
                          className="size-5"
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                      </button>

                      <div className="absolute inset-x-0 bottom-4 flex items-center justify-center gap-2">
                        {room.images.map((image, i) => (
                          <button
                            key={`dot-${image.src}-${i}`}
                            type="button"
                            onClick={() => setIndex(i)}
                            aria-label={t("goTo", { index: i + 1 })}
                            aria-current={i === index}
                            className={`h-1.5 cursor-pointer rounded-full transition-all duration-(--duration-normal) motion-reduce:transition-none ${
                              i === index
                                ? "w-6 bg-white"
                                : "w-1.5 bg-white/55 hover:bg-white/80"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  ) : null}
                </div>

                {/* Ficha: sello + título, descripción, servicios y CTA. */}
                <div className="flex shrink-0 flex-col p-5 sm:p-7">
                  <div className="flex items-start gap-4">
                    <span
                      aria-hidden="true"
                      className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-accent text-secondary"
                    >
                      {React.createElement(AMENITY_ICONS[room.icon], {
                        className: "size-5",
                        strokeWidth: 1.75,
                      })}
                    </span>
                    <div>
                      <Dialog.Title className="font-[family-name:var(--font-venues-display)] text-2xl leading-tight font-light tracking-tight text-secondary sm:text-[1.75rem]">
                        {pick(room.name, locale)}
                      </Dialog.Title>
                      <Dialog.Description className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">
                        {pick(room.description, locale)}
                      </Dialog.Description>
                    </div>
                  </div>

                  <p className="mt-6 text-[0.62rem] font-semibold tracking-[0.28em] text-secondary/55 uppercase">
                    {t("amenitiesTitle")}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {room.amenities.map((amenity) => {
                      const Icon = AMENITY_ICONS[amenity.key];
                      const label = pick(amenity.label, locale);
                      return (
                        <li key={amenity.key} title={label}>
                          <span className="inline-flex size-10 items-center justify-center rounded-full bg-accent text-secondary">
                            <Icon
                              className="size-4.5"
                              strokeWidth={1.75}
                              aria-hidden="true"
                            />
                            <span className="sr-only">{label}</span>
                          </span>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="mt-6 flex flex-col gap-3 border-t border-secondary/12 pt-5 sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-sm text-muted-foreground">
                      {t("rateNote")}
                    </p>
                    <a
                      href={bookingUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full bg-primary px-6 py-3 text-[0.7rem] font-semibold tracking-[0.16em] text-primary-foreground uppercase transition-transform duration-(--duration-normal) hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                    >
                      {t("ctaAvailability")}
                      <ArrowUpRight
                        className="size-4 transition-transform duration-(--duration-normal) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                        strokeWidth={2}
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </div>
              </>
            ) : null}
          </Dialog.Popup>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
