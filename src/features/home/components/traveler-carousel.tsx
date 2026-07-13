"use client";

// Experiencia interactiva de la sección viajero-titulo:
// columna editorial (título + copy + CTA + contador) y carrusel de tarjetas.
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  useCarousel,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { travelerTypes } from "@/features/home/data/travelers";

function CarouselNav() {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } = useCarousel();
  return (
    <div className="mt-8 flex items-center justify-end gap-2 pr-4 lg:pr-8">
      <button
        type="button"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        aria-label="Categoría anterior"
        className="grid size-11 place-items-center rounded-full border border-secondary/25 text-secondary transition-colors hover:bg-secondary hover:text-secondary-foreground disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
      >
        <ChevronLeft className="size-5" strokeWidth={1.75} />
      </button>
      <button
        type="button"
        onClick={scrollNext}
        disabled={!canScrollNext}
        aria-label="Siguiente categoría"
        className="grid size-11 place-items-center rounded-full border border-secondary/25 text-secondary transition-colors hover:bg-secondary hover:text-secondary-foreground disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
      >
        <ChevronRight className="size-5" strokeWidth={1.75} />
      </button>
    </div>
  );
}

const total = travelerTypes.length;

export function TravelerCarousel() {
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
        <p className="flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.28em] text-secondary/70 uppercase">
          <span className="h-px w-8 bg-secondary/40" aria-hidden="true" />
          Colecciones · {format(total)}
        </p>

        <h2
          id="viajero-titulo"
          className="mt-6 font-[family-name:var(--font-traveler-display)] font-light text-secondary leading-[0.92] tracking-[-0.02em] text-balance text-[clamp(2.75rem,6vw,4.75rem)]"
        >
          Para cada
          <br />
          tipo de{" "}
          <span className="italic font-normal text-secondary/90">viajero.</span>
        </h2>

        <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
          Cuartos, servicios y experiencias curadas según el motivo de tu
          visita: negocios, turismo, celebraciones o descanso profundo en el
          centro de Chiclayo.
        </p>

        <Link
          href="/habitaciones"
          className="group mt-8 inline-flex items-center gap-3 rounded-full bg-secondary px-6 py-3.5 text-sm font-semibold tracking-wide text-secondary-foreground uppercase transition-colors hover:bg-secondary/90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
        >
          Ver colecciones
          <ArrowUpRight
            className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            strokeWidth={2}
            aria-hidden="true"
          />
        </Link>

        <div
          className="mt-12 max-w-xs"
          role="status"
          aria-live="polite"
          aria-label={`Categoría ${current + 1} de ${total}`}
        >
          <div className="flex items-baseline gap-3 font-mono text-xs text-secondary/60">
            <span className="font-[family-name:var(--font-traveler-display)] text-3xl font-normal text-secondary">
              {format(current + 1)}
            </span>
            <span className="translate-y-[-2px] tracking-[0.2em]">/ {format(total)}</span>
            <span className="ml-auto uppercase tracking-[0.24em]">
              {travelerTypes[current]?.tag}
            </span>
          </div>
          <div className="relative mt-4 h-px w-full bg-secondary/15">
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
            {travelerTypes.map(({ title, description, icon: Icon, image, imageAlt, tag }, index) => {
              const active = index === current;
              return (
                <CarouselItem
                  key={title}
                  className="pl-4 md:pl-6 basis-[78%] sm:basis-[46%] lg:basis-[42%] xl:basis-[38%]"
                >
                  <article
                    className={cn(
                      "group relative flex aspect-[3/4] w-full flex-col justify-between overflow-hidden rounded-[2rem] bg-secondary p-6 text-secondary-foreground shadow-card transition-transform duration-500 will-change-transform sm:p-7",
                      active ? "sm:translate-y-0" : "sm:translate-y-2",
                    )}
                  >
                    <Image
                      src={image}
                      alt={imageAlt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 80vw, (max-width: 1024px) 46vw, 32vw"
                      className="absolute inset-0 -z-10 object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                    />
                    <div
                      className="absolute inset-0 -z-10 bg-gradient-to-t from-secondary via-secondary/70 to-secondary/10"
                      aria-hidden="true"
                    />

                    <div className="flex items-start justify-between">
                      <span className="inline-flex items-center rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[0.68rem] font-semibold tracking-[0.18em] uppercase backdrop-blur">
                        {tag}
                      </span>
                      <span
                        className="grid size-10 place-items-center rounded-full bg-primary text-primary-foreground shadow-card"
                        aria-hidden="true"
                      >
                        <Icon className="size-4" strokeWidth={1.75} />
                      </span>
                    </div>

                    <div>
                      <p className="text-[0.7rem] font-mono tracking-[0.24em] text-white/60">
                        · {(index + 1).toString().padStart(2, "0")}
                      </p>
                      <h3 className="mt-2 font-[family-name:var(--font-traveler-display)] text-3xl font-light leading-[1] tracking-tight sm:text-[2.1rem]">
                        {title}
                      </h3>
                      <p className="mt-3 max-w-[22ch] text-sm leading-relaxed text-white/80">
                        {description}
                      </p>
                    </div>
                  </article>
                </CarouselItem>
              );
            })}
          </CarouselContent>

          <CarouselNav />
        </Carousel>
      </div>
    </div>
  );
}
