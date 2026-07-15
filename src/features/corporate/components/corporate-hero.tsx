// Hero corporativo: foto de Nexus Cowork detrás, capa oscura al 50% y statement editorial.
import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";

import { fontCorporateDisplay } from "@/features/corporate/config/corporate-fonts";
import { corporateHeroKpis } from "@/features/corporate/data/corporate";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

import styles from "./corporate.module.css";

export function CorporateHero() {
  return (
    <section
      aria-label="Bienvenida corporativa"
      className={`${fontCorporateDisplay.variable} ${styles.section} relative isolate -mt-16 overflow-hidden bg-secondary text-white md:-mt-20`}
    >
      * <Image
        src="/images/cowork-plaza.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-[center_35%] motion-safe:animate-[corp-hero-zoom_18s_ease-out_forwards]"
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-black/65"
        aria-hidden="true"
      /> 
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-secondary/15 via-transparent to-secondary/30"
        aria-hidden="true"
      />
      <div className={styles.auroraOne} aria-hidden="true" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 pt-32 pb-12 sm:px-6 md:pt-40 md:pb-16 lg:px-8 lg:pt-44 lg:pb-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-8">
            <p
              className={`${styles.reveal} inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-[0.62rem] font-semibold tracking-[0.28em] text-white/90 uppercase backdrop-blur-md`}
              style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
            >
              <span
                className="size-1.5 rounded-full bg-primary"
                aria-hidden="true"
              />
              Cadena hotelera corporativa · 3 sedes en Chiclayo · 2026
            </p>

            <h1
              className={`${styles.reveal} mt-6 font-[family-name:var(--font-corporate-display)] font-light leading-[0.95] tracking-[-0.02em] text-white text-balance text-[clamp(2.5rem,6.5vw,5.25rem)]`}
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              Tu equipo opera desde{" "}
              <span className="italic font-normal text-primary">
                el primer minuto.
              </span>
            </h1>

            <p
              className={`${styles.reveal} mt-6 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg`}
              style={{ "--reveal-delay": "220ms" } as React.CSSProperties}
            >
              Elige tu hospedaje ejecutivo en cualquiera de nuestras 3 sedes,
              más espacios de coworking premium
            </p>

            <div
              className={`${styles.reveal} mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center`}
              style={{ "--reveal-delay": "320ms" } as React.CSSProperties}
            >
              <a
                href="#convenio"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-primary px-6 py-3 text-sm font-semibold tracking-wide text-primary-foreground uppercase transition-transform duration-(--duration-normal) hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                Solicita tu cotización
                <ArrowUpRight
                  className="size-4 transition-transform duration-(--duration-normal) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </a>

              <a
                href={buildWhatsAppUrl(
                  "Hola, quiero información sobre el convenio corporativo Zentra Hotel & Cowork.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold tracking-wide text-white uppercase transition-colors duration-(--duration-normal) hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none"
              >
                <MessageCircle
                  className="size-4"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                Hablar con un asesor
              </a>
            </div>
          </div>

          {/* <aside
            className={`${styles.reveal} lg:col-span-4`}
            style={{ "--reveal-delay": "260ms" } as React.CSSProperties}
            aria-label="Resumen del convenio"
          >
            <div className="rounded-[1.75rem] border border-white/20 bg-white/95 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.3)] backdrop-blur-md">
              <p className="text-[0.68rem] font-mono tracking-[0.24em] text-primary uppercase">
                Ecosistema corporativo
              </p>
              <p className="mt-3 font-[family-name:var(--font-corporate-display)] text-2xl font-normal leading-tight text-secondary">
                Un convenio, cuatro sedes, un ejecutivo de cuenta.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-secondary">
                Cadena Zentra Hotel + Nexus Cowork, integrados como el primer
                hub corporativo del norte del Perú.
              </p>
            </div>
          </aside> */}
        </div>

        <ul
          className={`${styles.reveal} grid grid-cols-2 gap-3 rounded-[1.5rem] border border-white/25 bg-white/95 p-4 shadow-[0_24px_60px_rgba(0,0,0,0.3)]   backdrop-blur-md sm:p-6 md:grid-cols-4 md:gap-6`}
          style={{ "--reveal-delay": "440ms" } as React.CSSProperties}
          aria-label="Indicadores clave del convenio"
        >
          {corporateHeroKpis.map(({ icon: Icon, label, detail }) => (
            <li key={label} className="flex items-center gap-3">
              <span
                className="mt-0.5 grid size-9 shrink-0 place-items-center rounded-xl bg-primary/15 text-secondary"
                aria-hidden="true"
              >
                <Icon className="size-4" strokeWidth={1.75} />
              </span>
              <div className="min-w-0">
                <p className="font-[family-name:var(--font-corporate-display)] text-xl font-normal leading-none text-secondary tracking-tight sm:text-2xl">
                  {label}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
