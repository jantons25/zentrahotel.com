"use client";

// Carrusel del separador "Registro para la misa del Papa": misma composición que
// "Colecciones" (columna editorial + contador + tarjetas), pero las láminas se
// muestran limpias porque ya traen su propio texto.
import Image from "next/image";
import * as React from "react";
import { useLocale, useTranslations } from "next-intl";
import { ArrowUpRight } from "lucide-react";

import { Link } from "@/i18n/navigation";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { CollectionsCarouselNav } from "@/features/blog/components/blog-collections-carousel";
import {
  papaRegistroPostSlug,
  papaRegistroSlides,
} from "@/features/blog/data/papa-registro";
import { pick } from "@/lib/i18n-pick";

const total = papaRegistroSlides.length;

export function BlogPapaRegistroCarousel() {
  const t = useTranslations("blog.papaRegistro");
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
          id="registro-papa-titulo"
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
              {papaRegistroSlides[current]?.tag &&
                pick(papaRegistroSlides[current].tag, locale)}
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

        <Link
          href={`/blog/${papaRegistroPostSlug}`}
          className="group/cta mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-[0.7rem] font-semibold tracking-[0.16em] text-primary-foreground uppercase transition-transform duration-(--duration-normal) hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        >
          {t("cta")}
          <ArrowUpRight
            className="size-3.5 transition-transform duration-(--duration-normal) group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 motion-reduce:transition-none"
            strokeWidth={2}
            aria-hidden="true"
          />
        </Link>
      </header>

      <div className="relative lg:col-span-8 lg:pl-4">
        <Carousel
          setApi={setApi}
          opts={{ align: "start", loop: true, containScroll: "trimSnaps" }}
          className="lg:-mr-[max(1rem,calc((100vw-80rem)/2))]"
        >
          <CarouselContent className="-ml-4 md:-ml-6">
            {papaRegistroSlides.map(({ image, imageAlt }, index) => {
              const active = index === current;
              return (
                <CarouselItem
                  key={image}
                  className="basis-[78%] pl-4 sm:basis-[46%] md:pl-6 lg:basis-[42%] xl:basis-[38%]"
                >
                  <figure
                    className={cn(
                      "relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] bg-white ring-1 ring-white/15 transition-transform duration-500 will-change-transform",
                      active ? "sm:translate-y-0" : "sm:translate-y-2",
                    )}
                  >
                    <Image
                      src={image}
                      alt={pick(imageAlt, locale)}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 46vw, 32vw"
                      className="object-cover"
                    />
                  </figure>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          <CollectionsCarouselNav
            prevLabel={t("prevAria")}
            nextLabel={t("nextAria")}
          />
        </Carousel>
      </div>
    </div>
  );
}
