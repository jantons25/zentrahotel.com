"use client";

// Carrusel del separador "Colecciones" del blog: columna editorial (título + copy
// + contador) y tarjetas con foto. Cada tarjeta lleva un botón "Ver más" que abre
// el artículo del diario correspondiente.
import Image from "next/image";
import * as React from "react";
import { useLocale, useTranslations } from "next-intl";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

import { Link } from "@/i18n/navigation";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { collections } from "@/features/blog/data/collections";
import { pick } from "@/lib/i18n-pick";

function CarouselNav() {
  const t = useTranslations("blog.collections");
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } =
    useCarousel();
  return (
    <div className="mt-8 flex items-center justify-end gap-2 pr-4 lg:pr-8">
      <button
        type="button"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        aria-label={t("prevAria")}
        className="grid size-11 place-items-center rounded-full border border-white/30 text-white transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <ChevronLeft className="size-5" strokeWidth={1.75} />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        disabled={!canScrollNext}
        aria-label={t("nextAria")}
        className="grid size-11 place-items-center rounded-full border border-white/30 text-white transition-colors hover:border-primary hover:bg-primary hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        <ChevronRight className="size-5" strokeWidth={1.75} />
      </button>
    </div>
  );
}

const total = collections.length;

export function BlogCollectionsCarousel() {
  const t = useTranslations("blog.collections");
  const locale = useLocale();
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!api) return;
    const sync = () => setCurrent(api.selectedScrollSnap());
    sync();
    api.on("select", sync);
    api.on("reInit", sync);
    return () => {
      api.off("select", sync);
      api.off("reInit", sync);
    };
  }, [api]);

  const format = (n: number) => n.toString().padStart(2, "0");
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
      <header className="lg:col-span-4 lg:pt-6">
        <p className="flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.28em] text-white/60 uppercase">
          <span className="h-px w-8 bg-white/30" aria-hidden="true" />
          {t("eyebrow")} · {format(total)}
        </p>

        <h2
          id="colecciones-titulo"
          className="mt-6 font-[family-name:var(--font-collections-display)] text-[clamp(2.75rem,6vw,4.75rem)] leading-[0.92] font-light tracking-[-0.02em] text-balance text-white"
        >
          {t("titleA")}
          <br />
          {t("titleB")}{" "}
          <span className="font-normal text-primary italic">
            {t("titleEmphasis")}
          </span>
        </h2>

        <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-white/70">
          {t("lead")}
        </p>

        <div
          className="mt-10 max-w-xs"
          role="status"
          aria-live="polite"
          aria-label={t("statusAria", { current: current + 1, total })}
        >
          <div className="flex items-baseline gap-3 font-mono text-xs text-white/60">
            <span className="font-[family-name:var(--font-collections-display)] text-3xl font-normal text-white">
              {format(current + 1)}
            </span>
            <span className="translate-y-[-2px] tracking-[0.2em]">
              / {format(total)}
            </span>
            <span className="ml-auto tracking-[0.24em] uppercase">
              {collections[current]?.tag &&
                pick(collections[current].tag, locale)}
            </span>
          </div>
          <div className="relative mt-4 h-px w-full bg-white/20">
            <div
              className="absolute inset-y-0 left-0 bg-primary transition-[width] duration-[400ms] ease-out"
              style={{ width: `${progress}%` }}
              aria-hidden="true"
            />
          </div>
        </div>
      </header>

      <div className="relative lg:col-span-8 lg:pl-4">
        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: true, containScroll: "trimSnaps" }}
          className="lg:-mr-[max(1rem,calc((100vw-80rem)/2))]"
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {collections.map(
              (
                {
                  title,
                  description,
                  icon: Icon,
                  image,
                  imageAlt,
                  tag,
                  postSlug,
                },
                index,
              ) => {
                const active = index === current;
                const titleText = pick(title, locale);
                return (
                  <CarouselItem
                    key={titleText}
                    className="basis-[78%] pl-4 sm:basis-[46%] md:pl-6 lg:basis-[42%] xl:basis-[38%]"
                  >
                    <article
                      className={cn(
                        "group relative flex aspect-[3/4] w-full flex-col justify-between overflow-hidden rounded-[2rem] bg-secondary p-6 text-secondary-foreground ring-1 ring-white/15 transition-transform duration-500 will-change-transform sm:p-7",
                        active ? "sm:translate-y-0" : "sm:translate-y-2",
                      )}
                    >
                      <Image
                        src={image}
                        alt={pick(imageAlt, locale)}
                        fill
                        loading="lazy"
                        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 46vw, 32vw"
                        className="absolute inset-0 -z-10 object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                      />
                      <div
                        className="absolute inset-0 -z-10 bg-gradient-to-t from-black/85 via-black/35 to-black/10"
                        aria-hidden="true"
                      />

                      <div className="flex items-start justify-between">
                        <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.18em] uppercase backdrop-blur">
                          {pick(tag, locale)}
                        </span>
                        <span
                          className="grid size-10 place-items-center rounded-full bg-primary text-primary-foreground shadow-card"
                          aria-hidden="true"
                        >
                          <Icon className="size-4" strokeWidth={1.75} />
                        </span>
                      </div>

                      <div>
                        <p className="font-mono text-[0.7rem] tracking-[0.24em] text-white/60">
                          · {(index + 1).toString().padStart(2, "0")}
                        </p>
                        <h3 className="mt-2 font-[family-name:var(--font-collections-display)] text-3xl leading-[1] font-light tracking-tight sm:text-[2.1rem]">
                          {titleText}
                        </h3>
                        <p className="mt-3 max-w-[24ch] text-sm leading-relaxed text-white/80">
                          {pick(description, locale)}
                        </p>

                        <Link
                          href={`/blog/${postSlug}`}
                          aria-label={t("ctaAria", { collection: titleText })}
                          className="group/cta mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-[0.7rem] font-semibold tracking-[0.16em] text-primary-foreground uppercase transition-transform duration-(--duration-normal) hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                        >
                          {t("ctaMore")}
                          <ArrowUpRight
                            className="size-3.5 transition-transform duration-(--duration-normal) group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 motion-reduce:transition-none"
                            strokeWidth={2}
                            aria-hidden="true"
                          />
                        </Link>
                      </div>
                    </article>
                  </CarouselItem>
                );
              },
            )}
          </CarouselContent>

          <CarouselNav />
        </Carousel>
      </div>
    </div>
  );
}
