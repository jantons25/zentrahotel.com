// "Por qué elegir Zentra": navy dark con 3 tarjetas serifadas siguiendo la estética corporativa.
import { ArrowUpRight } from "lucide-react";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { fontAboutDisplay } from "@/features/about/config/about-fonts";
import { aboutValues } from "@/features/about/data/about";

import styles from "./about.module.css";

export function AboutValues() {
  const total = aboutValues.length;

  return (
    <Section
      id="valores"
      aria-labelledby="valores-titulo"
      className={`${fontAboutDisplay.variable} ${styles.section} relative overflow-hidden bg-secondary text-secondary-foreground`}
    >
      <div className={styles.auroraOne} aria-hidden="true" />
      <div className={styles.auroraTwo} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />

      <Container className="relative">
        <header
          className={`${styles.reveal} flex flex-col gap-8 md:flex-row md:items-end md:justify-between`}
          style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
        >
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-[0.8rem] font-semibold tracking-[0.28em] text-white/60 uppercase">
              <span className="h-px w-8 bg-white/30" aria-hidden="true" />
              Por qué Zentra · {total.toString().padStart(2, "0")}
            </p>
            <h2
              id="valores-titulo"
              className="mt-6 font-[family-name:var(--font-about-display)] font-light leading-[0.95] tracking-[-0.02em] text-white text-balance text-[clamp(2.3rem,5vw,4rem)]"
            >
              La experiencia que{" "}
              <span className="italic font-normal text-primary">
                nos hace diferentes
              </span>{" "}
              en Chiclayo.
            </h2>
            <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-white/70">
              Cada decisión, desde la ubicación de nuestras sedes hasta el ritual
              de bienvenida, está pensada para que tu descanso se sienta
              genuinamente cuidado.
            </p>
          </div>

          <a
            href="#experiencia"
            className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold tracking-wide text-white uppercase transition-colors duration-(--duration-normal) hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none md:self-auto"
          >
            Cómo hospedarte
            <ArrowUpRight
              className="size-4 transition-transform duration-(--duration-normal) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
              strokeWidth={2}
              aria-hidden="true"
            />
          </a>
        </header>

        <ul className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3 lg:mt-16 lg:gap-6">
          {aboutValues.map(({ icon: Icon, title, description }, index) => (
            <li
              key={title}
              className={styles.reveal}
              style={
                {
                  "--reveal-delay": `${140 + index * 100}ms`,
                } as React.CSSProperties
              }
            >
              <article
                className={`${styles.card} ${styles.cardDark} group flex h-full flex-col gap-6 rounded-[1.75rem] border border-white/12 bg-white p-7 backdrop-blur sm:p-8`}
              >
                <div className="flex items-baseline justify-between gap-3">
                  <span className="font-[family-name:var(--font-about-display)] text-4xl font-light leading-none text-secondary/40 tracking-tight">
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                  <span
                    className={`${styles.iconChip} grid size-12 place-items-center rounded-2xl bg-primary/15 text-secondary ring-1 ring-primary/25`}
                    aria-hidden="true"
                  >
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-about-display)] text-2xl font-normal leading-tight text-secondary tracking-tight text-balance sm:text-[1.55rem]">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-secondary/75">
                    {description}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
