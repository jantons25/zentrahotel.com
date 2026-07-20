"use client";

// Mosaico de fotos tipo Airbnb: clic en una miniatura la intercambia con la foto principal.
import { useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import type { RoomGalleryImage } from "@/features/rooms/types";
import { pick } from "@/lib/i18n-pick";

import styles from "./rooms-page.module.css";

interface RoomGalleryProps {
  mainImage: RoomGalleryImage;
  thumbs: RoomGalleryImage[];
  badge: string;
  priority?: boolean;
  srLabel: string;
}

export function RoomGallery({
  mainImage: initialMainImage,
  thumbs: initialThumbs,
  badge,
  priority,
  srLabel,
}: RoomGalleryProps) {
  const t = useTranslations("rooms.gallery");
  const locale = useLocale();
  const [gallery, setGallery] = useState<RoomGalleryImage[]>(() => [
    initialMainImage,
    ...initialThumbs,
  ]);
  const [mainImage, ...thumbs] = gallery;

  function handleSelectImage(galleryIndex: number) {
    setGallery((prev) => {
      const next = [...prev];
      [next[0], next[galleryIndex]] = [next[galleryIndex], next[0]];
      return next;
    });
  }

  return (
    <figure className={styles.mosaic}>
      <div className={styles.mosaicMain}>
        <div key={mainImage.src} className={styles.imageSwapLayer}>
          <Image
            src={mainImage.src}
            alt={pick(mainImage.alt, locale)}
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className={`${styles.image} object-cover`}
            priority={priority}
          />
        </div>
        <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.18em] text-secondary uppercase shadow-card backdrop-blur">
          <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
          {badge}
        </span>
      </div>

      {thumbs.length > 0 ? (
        <div className={styles.mosaicThumbs} data-count={thumbs.length}>
          {thumbs.map((thumb, thumbPosition) => {
            const galleryIndex = thumbPosition + 1;
            const altText = pick(thumb.alt, locale);
            return (
              <button
                key={`thumb-slot-${thumbPosition}`}
                type="button"
                onClick={() => handleSelectImage(galleryIndex)}
                aria-label={t("thumbAria", { alt: altText })}
                className={`${styles.mosaicThumb} block w-full cursor-pointer appearance-none border-0 bg-transparent p-0 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary`}
              >
                <div key={thumb.src} className={styles.imageSwapLayer}>
                  <Image
                    src={thumb.src}
                    alt={altText}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 22vw"
                    loading="lazy"
                    className={`${styles.image} object-cover`}
                  />
                </div>
              </button>
            );
          })}
        </div>
      ) : null}

      <figcaption className="sr-only">{srLabel}</figcaption>
    </figure>
  );
}
