// Problema: fondo navy con 4 costos ocultos numerados 01–04.
import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { fontCorporateDisplay } from "@/features/corporate/config/corporate-fonts";
import { corporateProblems } from "@/features/corporate/data/corporate";

import styles from "./corporate.module.css";

export function CorporateProblem() {
  return (
    <Section
      id="problema"
      aria-labelledby="problema-titulo"
      className={`${fontCorporateDisplay.variable} ${styles.section} relative overflow-hidden bg-secondary text-secondary-foreground`}
    >
      <div className={styles.auroraOne} aria-hidden="true" />
      <div className={styles.auroraTwo} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />

      <Container className="relative">
        <header
          className={`${styles.reveal} mx-auto max-w-3xl text-center`}
          style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
        >
          <p className="flex items-center justify-center gap-3 text-[0.72rem] font-semibold tracking-[0.32em] text-white/60 uppercase">
            <span className="h-px w-10 bg-white/30" aria-hidden="true" />
            El costo invisible del viaje corporativo
            <span className="h-px w-10 bg-white/30" aria-hidden="true" />
          </p>
          <h2
            id="problema-titulo"
            className="mt-6 font-[family-name:var(--font-corporate-display)] font-light leading-[0.98] tracking-[-0.02em] text-white text-balance text-[clamp(2.3rem,5vw,4rem)]"
          >
            ¿Tu equipo viaja a Chiclayo?
          </h2>
          <p className="mt-5 text-[0.95rem] leading-relaxed text-white/70">
            Cada vez que un colaborador viaja, tu empresa gestiona al menos tres
            proveedores distintos: el hotel, la oficina y la sala de reuniones.
            Eso se traduce en tiempo perdido, facturas duplicadas y
            coordinaciones.
          </p>
        </header>

        <ol className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-6">
          {corporateProblems.map(({ number, icon: Icon, title, description }, index) => (
            <li
              key={number}
              className={styles.reveal}
              style={
                {
                  "--reveal-delay": `${140 + index * 90}ms`,
                } as React.CSSProperties
              }
            >
              <article
                className={`${styles.card} ${styles.cardDark} group flex h-full flex-col rounded-[1.5rem] border border-white/12 bg-white/5 p-6 backdrop-blur sm:p-7`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span
                    className={`${styles.iconChip} grid size-11 place-items-center rounded-xl bg-primary/15 text-primary`}
                    aria-hidden="true"
                  >
                    <Icon className="size-5" strokeWidth={1.75} />
                  </span>
                  <span className="font-[family-name:var(--font-corporate-display)] text-3xl font-light leading-none text-white/85 tracking-tight">
                    {number}
                  </span>
                </div>
                <h3 className="mt-6 font-[family-name:var(--font-corporate-display)] text-xl font-normal leading-tight text-white tracking-tight text-balance sm:text-[1.35rem]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {description}
                </p>
              </article>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
