// Solución: campo oliva con diagrama del hub (signature) + doble columna Zentra + Nexus.
import { ArrowUpRight, Building2, Sparkles } from "lucide-react";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { fontCorporateDisplay } from "@/features/corporate/config/corporate-fonts";
import {
  corporateHubHighlights,
  corporateSolutionNexusFeatures,
  corporateSolutionZentraFeatures,
} from "@/features/corporate/data/corporate";

import styles from "./corporate.module.css";

const hubNodes = [
  { label: "Zentra Balta", angle: 270 },
  { label: "Zentra Plaza", angle: 342 },
  { label: "Zentra San José", angle: 54 },
  { label: "Nexus Cowork", angle: 126 },
  { label: "1 factura", angle: 198 },
];

function nodePosition(angle: number, radius = 46) {
  const rad = (angle * Math.PI) / 180;
  return {
    left: `${50 + radius * Math.cos(rad)}%`,
    top: `${50 + radius * Math.sin(rad)}%`,
  };
}

export function CorporateSolution() {
  return (
    <Section
      id="solucion"
      aria-labelledby="solucion-titulo"
      className={`${fontCorporateDisplay.variable} ${styles.section} relative overflow-hidden text-secondary`}
      style={{ backgroundColor: "var(--primary)" }}
    >
      <div className={styles.auroraOne} aria-hidden="true" />
      <div className={styles.auroraThree} aria-hidden="true" />
      <div className={styles.grainDark} aria-hidden="true" />

      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-6">
            <p
              className={`${styles.reveal} flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.28em] text-secondary uppercase`}
              style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
            >
              <span className="h-px w-8 bg-secondary/50" aria-hidden="true" />
              La solución · Un solo hub
            </p>

            <h2
              id="solucion-titulo"
              className={`${styles.reveal} mt-6 font-[family-name:var(--font-corporate-display)] font-light leading-[0.95] tracking-[-0.02em] text-secondary text-balance text-[clamp(2.3rem,5vw,4rem)]`}
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              El primer hub corporativo del{" "}
              <span className="italic font-normal text-white/95">
                norte del Perú.
              </span>
            </h2>

            <p
              className={`${styles.reveal} mt-6 max-w-xl text-[0.98rem] leading-relaxed text-secondary/85 md:text-base`}
              style={{ "--reveal-delay": "220ms" } as React.CSSProperties}
            >
              Zentra Hotel & Cowork integra una cadena de tres hoteles ejecutivos
              y espacios de trabajo premium bajo un mismo convenio. Tu equipo
              aterriza en Chiclayo listo para operar desde el primer minuto.
            </p>

            <ul
              className={`${styles.reveal} mt-8 flex flex-wrap gap-2`}
              style={{ "--reveal-delay": "300ms" } as React.CSSProperties}
              aria-label="Highlights del hub"
            >
              {corporateHubHighlights.map(({ value, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-secondary/25 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-secondary backdrop-blur"
                >
                  <span className="font-[family-name:var(--font-corporate-display)] text-base font-normal leading-none tracking-tight text-secondary">
                    {value}
                  </span>
                  {label}
                </li>
              ))}
            </ul>

            <div
              className={`${styles.reveal} mt-9`}
              style={{ "--reveal-delay": "380ms" } as React.CSSProperties}
            >
              <a
                href="#convenio"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-secondary px-6 py-3 text-sm font-semibold tracking-wide text-secondary-foreground uppercase transition-transform duration-(--duration-normal) hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                Activar convenio
                <ArrowUpRight
                  className="size-4 transition-transform duration-(--duration-normal) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

          <div
            className={`${styles.reveal} relative lg:col-span-6`}
            style={{ "--reveal-delay": "260ms" } as React.CSSProperties}
            aria-hidden="true"
          >
            <div
              className="absolute inset-6 rounded-[2rem] bg-secondary shadow-[0_30px_80px_rgba(0,0,0,0.35)]"
              aria-hidden="true"
            />
            <div className="relative p-6 sm:p-8">
              <div className={styles.hubDiagram}>
                <div className={styles.hubRing} />
                <div className={`${styles.hubRing} ${styles.hubRingInner}`} />
                <div className={styles.hubCore}>
                  <div>
                    <p className="text-[0.6rem] font-mono tracking-[0.24em] text-primary-foreground/80 uppercase">
                      1 convenio
                    </p>
                    <p className="mt-1 font-[family-name:var(--font-corporate-display)] text-lg font-normal leading-tight tracking-tight text-primary-foreground">
                      Zentra Hotel & Cowork
                    </p>
                  </div>
                </div>
                <div className={styles.hubNode}>
                  {hubNodes.map((node) => (
                    <span
                      key={node.label}
                      className={styles.hubNodeChip}
                      style={nodePosition(node.angle)}
                    >
                      <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                      {node.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-2 lg:gap-8">
          <article
            className={`${styles.reveal} ${styles.card} flex h-full flex-col rounded-[1.75rem] border border-secondary/15 bg-card p-6 shadow-card sm:p-8`}
            style={{ "--reveal-delay": "440ms" } as React.CSSProperties}
          >
            <p className="flex items-center gap-2 text-[0.65rem] font-mono tracking-[0.22em] text-secondary/55 uppercase">
              <Building2 className="size-3.5" strokeWidth={1.75} aria-hidden="true" />
              Cadena Zentra Hotel · Hospedaje ejecutivo
            </p>
            <h3 className="mt-4 font-[family-name:var(--font-corporate-display)] text-2xl font-light leading-tight text-secondary tracking-tight text-balance sm:text-[1.85rem]">
              Tres establecimientos en el centro, diseñados para el viajero de negocios.
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Comodidad, tecnología y servicio sin tiempos de espera. Habitaciones
              pensadas para equipos que trabajan hasta tarde y arrancan temprano.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {corporateSolutionZentraFeatures.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-start gap-3 text-sm text-secondary"
                >
                  <span
                    className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg bg-primary/15 text-secondary"
                    aria-hidden="true"
                  >
                    <Icon className="size-4" strokeWidth={1.75} />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </article>

          <article
            className={`${styles.reveal} ${styles.card} flex h-full flex-col rounded-[1.75rem] border border-secondary/15 bg-secondary p-6 text-white shadow-card sm:p-8`}
            style={{ "--reveal-delay": "520ms" } as React.CSSProperties}
          >
            <p className="flex items-center gap-2 text-[0.65rem] font-mono tracking-[0.22em] text-white/60 uppercase">
              <Sparkles className="size-3.5" strokeWidth={1.75} aria-hidden="true" />
              Nexus Cowork · Espacios de trabajo premium
            </p>
            <h3 className="mt-4 font-[family-name:var(--font-corporate-display)] text-2xl font-light leading-tight text-white tracking-tight text-balance sm:text-[1.85rem]">
              Oficinas privadas, coworking y salas 100% implementadas.
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              Tu equipo trabaja con las mismas herramientas que en la oficina
              central, sin interrupciones. Un solo punto de contacto, operación
              sin fricciones.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {corporateSolutionNexusFeatures.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="flex items-start gap-3 text-sm text-white/90"
                >
                  <span
                    className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-lg bg-primary/25 text-primary"
                    aria-hidden="true"
                  >
                    <Icon className="size-4" strokeWidth={1.75} />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Container>
    </Section>
  );
}
