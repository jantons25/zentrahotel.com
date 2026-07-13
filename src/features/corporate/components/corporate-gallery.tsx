// Galería del hub: grid editorial mixto con las marcas Zentra + Nexus.
import Image from "next/image";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { fontCorporateDisplay } from "@/features/corporate/config/corporate-fonts";
import { corporateGallery } from "@/features/corporate/data/corporate";

import styles from "./corporate.module.css";

const galleryLayout = [
  "aspect-[4/5] sm:col-span-1 lg:col-span-3 lg:aspect-[3/4]",
  "aspect-[4/3] sm:col-span-1 lg:col-span-4 lg:aspect-[16/10]",
  "aspect-[4/3] sm:col-span-1 lg:col-span-5 lg:aspect-[16/9]",
  "aspect-[4/5] sm:col-span-1 lg:col-span-4 lg:aspect-[5/4]",
  "aspect-[4/5] sm:col-span-1 lg:col-span-4 lg:aspect-[3/4]",
  "aspect-[4/3] sm:col-span-2 lg:col-span-4 lg:aspect-[5/4]",
];

export function CorporateGallery() {
  return (
    <Section
      id="galeria"
      aria-labelledby="galeria-titulo"
      className={`${fontCorporateDisplay.variable} relative overflow-hidden bg-[color-mix(in_oklab,var(--accent)_65%,white)]`}
    >
      <div
        className="pointer-events-none absolute -top-40 -left-24 size-[26rem] rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative">
        <header
          className={`${styles.reveal} flex flex-col gap-8 md:flex-row md:items-end md:justify-between`}
          style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
        >
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.28em] text-secondary/70 uppercase">
              <span className="h-px w-8 bg-secondary/40" aria-hidden="true" />
              Nuestros espacios · {corporateGallery.length.toString().padStart(2, "0")}
            </p>
            <h2
              id="galeria-titulo"
              className="mt-6 font-[family-name:var(--font-corporate-display)] font-light leading-[0.95] tracking-[-0.02em] text-secondary text-balance text-[clamp(2.3rem,5vw,4rem)]"
            >
              Conoce el hub{" "}
              <span className="italic font-normal text-secondary/90">
                antes de llegar.
              </span>
            </h2>
            <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground">
              Todas las fotos son de los espacios reales de la cadena Zentra y
              Nexus Cowork en Chiclayo. Sin renders, sin retoques imposibles.
            </p>
          </div>
        </header>

        <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-12 lg:gap-5">
          {corporateGallery.map((item, index) => (
            <li
              key={item.src}
              className={`${styles.reveal} ${galleryLayout[index] ?? galleryLayout[0]}`}
              style={
                {
                  "--reveal-delay": `${120 + index * 70}ms`,
                } as React.CSSProperties
              }
            >
              <figure
                className={`${styles.card} group relative flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-secondary/10 bg-secondary shadow-card`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="absolute inset-0 -z-10 object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
                <div
                  className="absolute inset-0 -z-[5] bg-gradient-to-t from-secondary/70 via-secondary/10 to-transparent"
                  aria-hidden="true"
                />
                <figcaption className="mt-auto flex items-center justify-between gap-3 p-4 text-white sm:p-5">
                  <span className="text-sm font-semibold leading-tight text-balance">
                    {item.caption}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-2.5 py-1 text-[0.6rem] font-semibold tracking-[0.18em] text-white uppercase backdrop-blur">
                    <span
                      className="size-1.5 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                    {item.brand}
                  </span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
