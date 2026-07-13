// Sección "Experiencia Zen": grid editorial con historia destacada y stack de rituales.
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { fontZenDisplay } from "@/features/experiences/config/zen-fonts";
import {
  zenFeaturedStory,
  zenStories,
} from "@/features/experiences/data/zen-experience";

const totalStories = zenStories.length + 1;

export function ZenExperienceSection() {
  return (
    <Section
      aria-labelledby="zen-titulo"
      className={`${fontZenDisplay.variable} relative overflow-hidden bg-[color-mix(in_oklab,var(--accent)_65%,white)]`}
    >
      <div
        className="pointer-events-none absolute -top-32 -left-24 size-[26rem] rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <Container>
        <header className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.28em] text-secondary/70 uppercase">
              <span className="h-px w-8 bg-secondary/40" aria-hidden="true" />
              Rituales · {totalStories.toString().padStart(2, "0")}
            </p>
            <h2
              id="zen-titulo"
              className="mt-6 font-[family-name:var(--font-zen-display)] font-light text-secondary leading-[0.95] tracking-[-0.02em] text-balance text-[clamp(2.5rem,5.5vw,4.5rem)]"
            >
              Experiencia{" "}
              <span className="italic font-normal text-secondary/90">Zen.</span>
            </h2>
            <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground">
              Descubre por qué somos uno de los mejores{" "}
              <Link
                href="/nosotros"
                className="font-semibold text-secondary underline-offset-4 hover:underline"
              >
                hoteles en Chiclayo
              </Link>
              . Cada ritual está pensado para hacer una pausa de verdad —
              masajes, aromaterapia y descanso en el centro de la ciudad.
            </p>
          </div>

          <Link
            href="/habitaciones"
            className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full border border-secondary/30 bg-transparent px-6 py-3 text-sm font-semibold tracking-wide text-secondary uppercase transition-colors hover:bg-secondary hover:text-secondary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary md:self-auto"
          >
            Ver paquetes
            <ArrowUpRight
              className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2}
              aria-hidden="true"
            />
          </Link>
        </header>

        <div className="mt-12 grid grid-cols-1 gap-8 lg:mt-16 lg:grid-cols-12 lg:gap-10">
          <article className="lg:col-span-7">
            <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[2rem] bg-secondary shadow-card sm:aspect-[16/11] lg:aspect-[6/5]">
              <Image
                src={zenFeaturedStory.image}
                alt={zenFeaturedStory.imageAlt}
                fill
                loading="lazy"
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover transition-transform duration-[900ms] ease-out hover:scale-[1.03]"
              />
              <span className="absolute top-5 left-5 inline-flex items-center gap-2 rounded-full bg-secondary/90 px-3.5 py-1.5 text-[0.68rem] font-semibold tracking-[0.2em] text-secondary-foreground uppercase backdrop-blur">
                <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                Signature
              </span>
            </div>

            <div className="mt-6">
              <p className="text-[0.7rem] font-mono tracking-[0.24em] text-secondary/60 uppercase">
                {zenFeaturedStory.category}
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-zen-display)] text-2xl font-light leading-[1.1] text-secondary tracking-tight text-balance sm:text-3xl lg:text-[2.15rem]">
                {zenFeaturedStory.title}
              </h3>
              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-secondary/60">
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="size-3.5" strokeWidth={1.75} aria-hidden="true" />
                  {zenFeaturedStory.duration}
                </span>
                <span className="text-secondary/30" aria-hidden="true">·</span>
                <span>{zenFeaturedStory.releaseLabel}</span>
              </div>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {zenFeaturedStory.excerpt}
              </p>
            </div>
          </article>

          <ol className="flex flex-col gap-6 lg:col-span-5">
            {zenStories.map((story, index) => (
              <li key={story.title}>
                <article className="group grid grid-cols-[7rem_1fr] items-start gap-4 sm:grid-cols-[9rem_1fr] sm:gap-6">
                  <div className="relative aspect-square overflow-hidden rounded-2xl bg-secondary shadow-card">
                    <Image
                      src={story.image}
                      alt={story.imageAlt}
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 7rem, 9rem"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="flex items-center gap-2 text-[0.68rem] font-mono tracking-[0.22em] text-secondary/55 uppercase">
                      <span aria-hidden="true">
                        {(index + 2).toString().padStart(2, "0")}
                      </span>
                      <span className="h-px w-4 bg-secondary/25" aria-hidden="true" />
                      {story.category}
                    </p>
                    <h3 className="mt-2 font-[family-name:var(--font-zen-display)] text-lg font-normal leading-tight text-secondary tracking-tight text-balance sm:text-[1.35rem]">
                      {story.title}
                    </h3>
                    <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.72rem] font-medium text-secondary/55">
                      <span className="inline-flex items-center gap-1">
                        <Clock className="size-3" strokeWidth={1.75} aria-hidden="true" />
                        {story.duration}
                      </span>
                      <span className="text-secondary/25" aria-hidden="true">·</span>
                      <span>{story.releaseLabel}</span>
                    </div>
                  </div>
                </article>
                {index < zenStories.length - 1 ? (
                  <div className="mt-6 h-px w-full bg-secondary/12" aria-hidden="true" />
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </Section>
  );
}
