"use client";

// Carrusel interactivo de testimonios: 1/2/3 tarjetas visibles, dots + prev/next.
import * as React from "react";
import { useLocale, useTranslations } from "next-intl";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";
import { testimonials } from "@/features/testimonials/data/testimonials";
import { pick } from "@/lib/i18n-pick";

import styles from "./testimonials-section.module.css";

function initialsOf(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("")
    .slice(0, 2);
}

function StarRating({ rating }: { rating: number }) {
  const t = useTranslations("home.testimonials");
  return (
    <div
      role="img"
      aria-label={t("ratingAria", { rating })}
      className="flex gap-0.5"
    >
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          strokeWidth={1.5}
          className={
            i < rating
              ? "size-3.5 fill-primary text-primary"
              : "size-3.5 text-secondary/20"
          }
        />
      ))}
    </div>
  );
}

function CarouselControls({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  const t = useTranslations("home.testimonials");
  const { scrollPrev, scrollNext, api } = useCarousel();
  return (
    <div className="mt-10 flex flex-col items-center gap-6">
      <div
        className="flex items-center gap-2"
        role="tablist"
        aria-label={t("listAria")}
      >
        {Array.from({ length: total }, (_, i) => {
          const active = i === current;
          return (
            <button
              key={i}
              type="button"
              role="tab"
              aria-selected={active}
              aria-label={t("goToAria", { current: i + 1, total })}
              onClick={() => api?.scrollTo(i)}
              className={
                active
                  ? "h-2 w-8 rounded-full bg-primary transition-all duration-(--duration-normal) motion-reduce:transition-none"
                  : "h-2 w-2 rounded-full bg-white/25 transition-all duration-(--duration-normal) hover:bg-white/45 motion-reduce:transition-none"
              }
            />
          );
        })}
      </div>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={scrollPrev}
          aria-label={t("prevAria")}
          className="grid size-12 place-items-center rounded-full border border-white/25 bg-white/5 text-white transition-colors duration-(--duration-normal) hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none"
        >
          <ChevronLeft className="size-5" strokeWidth={1.75} />
        </button>
        <button
          type="button"
          onClick={scrollNext}
          aria-label={t("nextAria")}
          className="grid size-12 place-items-center rounded-full border border-white/25 bg-white/5 text-white transition-colors duration-(--duration-normal) hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none"
        >
          <ChevronRight className="size-5" strokeWidth={1.75} />
        </button>
      </div>
    </div>
  );
}

export function TestimonialsCarousel() {
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

  return (
    <Carousel
      setApi={setApi}
      opts={{ align: "start", loop: true, containScroll: "trimSnaps" }}
      className="relative"
    >
      <CarouselContent className="-ml-4 md:-ml-6">
        {testimonials.map((testimonial, index) => (
          <CarouselItem
            key={testimonial.author}
            className="pl-4 md:pl-6 basis-full sm:basis-[70%] md:basis-1/2 lg:basis-1/3"
          >
            <article
              className={`${styles.card} flex h-full flex-col gap-6 rounded-[1.75rem] bg-white p-7 shadow-card sm:p-8`}
              aria-labelledby={`testimonio-${index}`}
            >
              <div className="flex items-start justify-between gap-4">
                <span
                  className="font-[family-name:var(--font-testimonials-display)] text-[4.5rem] font-normal leading-[0.7] text-primary/80 select-none"
                  aria-hidden="true"
                >
                  &ldquo;
                </span>
                <StarRating rating={testimonial.rating} />
              </div>

              <blockquote className="flex-1">
                <p
                  id={`testimonio-${index}`}
                  className="font-[family-name:var(--font-testimonials-display)] text-xl font-light leading-[1.35] text-secondary tracking-tight text-balance sm:text-[1.35rem]"
                >
                  {pick(testimonial.quote, locale)}
                </p>
              </blockquote>

              <div className="mt-2 flex items-center gap-4 border-t border-secondary/10 pt-5">
                <span
                  aria-hidden="true"
                  className="grid size-12 shrink-0 place-items-center rounded-full bg-secondary text-sm font-semibold tracking-wide text-secondary-foreground"
                >
                  {initialsOf(testimonial.author)}
                </span>
                <div className="min-w-0">
                  <p className="font-semibold text-secondary">
                    {testimonial.author}
                  </p>
                  <p className="text-[0.72rem] font-mono tracking-[0.2em] text-secondary/55 uppercase truncate">
                    {pick(testimonial.role, locale)}
                  </p>
                </div>
              </div>
            </article>
          </CarouselItem>
        ))}
      </CarouselContent>

      <CarouselControls current={current} total={testimonials.length} />
    </Carousel>
  );
}
