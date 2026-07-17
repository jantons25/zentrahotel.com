// Hero principal: composición editorial premium con titular, chips de amenidad y widget de reservas.
import { BedDouble, ConciergeBell, Sparkles, Wifi } from "lucide-react";

import { fontHeroDisplay } from "@/features/home/config/hero-fonts";
import { BookingWidget } from "@/features/home/components/booking-widget";

import styles from "./hero-section.module.css";

const highlights = [
  { icon: Wifi, label: "Wi-Fi 5G" },
  { icon: BedDouble, label: "Suite con jacuzzi" },
  { icon: Sparkles, label: "Experiencia Zen" },
  { icon: ConciergeBell, label: "Recepción 24 h" },
];

const stats = [
  { value: "24 h", label: "Recepción y room service" },
  { value: "5 min", label: "Plaza de Armas de Chiclayo" },
  { value: "6", label: "Tipos de habitaciones" },
  { value: "4.6★", label: "En reseñas de Google Maps" },
];

export function HeroSection() {
  return (
    <section
      aria-label="Bienvenida"
      className={`${fontHeroDisplay.variable} ${styles.hero} relative isolate -mt-16 overflow-hidden bg-secondary text-white md:-mt-20`}
    >
      <div className={styles.vignette} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-12 px-4 pt-32 pb-16 sm:px-6 md:pt-40 lg:min-h-[calc(100vh-2rem)] lg:px-8 lg:pt-44 lg:pb-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-7">
            <p
              className={`${styles.reveal} inline-flex items-center gap-3 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-[0.62rem] font-semibold tracking-[0.28em] text-white/85 uppercase backdrop-blur`}
              style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
            >
              <span
                className="size-1.5 rounded-full bg-primary"
                aria-hidden="true"
              />
              Zentra Hotel & Cowork
            </p>

            <h1
              className={`${styles.reveal} mt-6 font-[family-name:var(--font-hero-display)] font-light leading-[0.95] tracking-[-0.02em] text-white text-balance text-[clamp(2.75rem,6.5vw,5.5rem)]`}
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              Bienvenido a Zentra,
              <br />
              donde Chiclayo se{" "}
              <span className="italic font-normal text-primary">
                hace hogar.
              </span>
            </h1>

            <p
              className={`${styles.reveal} mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg`}
              style={{ "--reveal-delay": "220ms" } as React.CSSProperties}
            >
              Un descanso pensado para ti en pleno corazón del centro histórico:
              habitaciones modernas, atención cercana y experiencias diseñadas
              para que la ciudad se sienta tuya desde el primer instante.
            </p>

            <ul
              className={`${styles.reveal} mt-8 flex flex-wrap gap-2`}
              style={{ "--reveal-delay": "320ms" } as React.CSSProperties}
              aria-label="Amenidades incluidas"
            >
              {highlights.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-white/90 backdrop-blur"
                >
                  <Icon
                    className="size-3.5"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`${styles.reveal} lg:col-span-5`}
            style={{ "--reveal-delay": "260ms" } as React.CSSProperties}
          >
            <BookingWidget />
          </div>
        </div>

        <ul
          className={`${styles.reveal} grid grid-cols-2 gap-3 rounded-[1.5rem] border border-white/15 bg-white/95 p-4 backdrop-blur sm:p-6 md:grid-cols-4 md:gap-6`}
          style={{ "--reveal-delay": "440ms" } as React.CSSProperties}
        >
          {stats.map(({ value, label }) => (
            <li key={label} className="flex flex-col gap-1">
              <p className="font-[family-name:var(--font-hero-display)] text-2xl font-normal leading-none text-secondary tracking-tight sm:text-3xl">
                {value}
              </p>
              <p className="text-[0.72rem] leading-snug text-secondary/70 sm:text-sm">
                {label}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
