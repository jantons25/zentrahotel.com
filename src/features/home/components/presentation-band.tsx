// Banda de presentación: reformula la propuesta de valor de Zentra como un intermezzo editorial
// entre el hero y las promociones, sobre un campo oliva (--primary) coherente con el resto del sitio.
import { ArrowUpRight, MapPin, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { fontPresentationDisplay } from "@/features/home/config/presentation-fonts";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

import styles from "./presentation-band.module.css";

const directBookingPerks = [
  {
    icon: MapPin,
    title: "Ubicación privilegiada",
    detail: "A cinco minutos de la Plaza de Armas.",
  },
  {
    icon: ShieldCheck,
    title: "Tarifa web garantizada",
    detail: "Reserva directo y ahorra en cada noche.",
  },
  {
    icon: Sparkles,
    title: "Atención cercana 24 h",
    detail: "Recepción y room service siempre listos.",
  },
];

export function PresentationBand() {
  return (
    <Section
      aria-labelledby="presentacion-titulo"
      className={`${fontPresentationDisplay.variable} ${styles.section} relative overflow-hidden`}
    >
      <div className={styles.auroraOne} aria-hidden="true" />
      <div className={styles.auroraTwo} aria-hidden="true" />
      <div className={styles.auroraThree} aria-hidden="true" />
      <div className={styles.orb + " " + styles.orbSmall} aria-hidden="true" />
      <div className={styles.orb + " " + styles.orbLarge} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />

      <Container className="relative">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-7">
            <p
              className={`${styles.reveal} flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.28em] text-secondary uppercase`}
              style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
            >
              <span
                className="h-px w-8 bg-secondary/50"
                aria-hidden="true"
              />
              Zentra · Chiclayo, Perú
            </p>

            <h2
              id="presentacion-titulo"
              className={`${styles.reveal} mt-6 font-[family-name:var(--font-presentation-display)] font-light leading-[0.95] tracking-[-0.02em] text-secondary text-balance text-[clamp(2.4rem,5.4vw,4.4rem)]`}
              style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
            >
              {siteConfig.tagline.split("en el centro de Chiclayo")[0]}
              <span className="italic font-normal text-white/95">
                en el centro de Chiclayo.
              </span>
            </h2>

            <p
              className={`${styles.reveal} mt-6 max-w-xl text-[0.98rem] leading-relaxed text-secondary/85 md:text-base`}
              style={{ "--reveal-delay": "220ms" } as React.CSSProperties}
            >
              Reserva directo en web y ahorra en tu próximo viaje a Chiclayo.
              Una estadía pensada al detalle, con la calidez de un boutique
              hotel a pasos del centro histórico.
            </p>

            <div
              className={`${styles.reveal} mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center`}
              style={{ "--reveal-delay": "320ms" } as React.CSSProperties}
            >
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-secondary px-6 py-3 text-sm font-semibold tracking-wide text-secondary-foreground uppercase transition-transform duration-(--duration-normal) hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                Reservar ahora
                <ArrowUpRight
                  className="size-4 transition-transform duration-(--duration-normal) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </a>

              <a
                href={buildWhatsAppUrl(
                  "Hola, quiero información para reservar en Zentra Hotel.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 rounded-full border border-secondary/40 bg-white/10 px-6 py-3 text-sm font-semibold tracking-wide text-secondary uppercase transition-colors duration-(--duration-normal) hover:bg-secondary hover:text-secondary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary motion-reduce:transition-none"
              >
                <MessageCircle
                  className="size-4"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                Escríbenos por WhatsApp
              </a>
            </div>
          </div>

          <aside
            className={`${styles.reveal} ${styles.card} relative lg:col-span-5`}
            style={{ "--reveal-delay": "260ms" } as React.CSSProperties}
            aria-labelledby="presentacion-card-titulo"
          >
            <div className="rounded-[1.75rem] border border-secondary/15 bg-card/95 p-6 shadow-card backdrop-blur-sm sm:p-8">
              <div className="flex items-center gap-3">
                <span
                  className="grid size-10 place-items-center rounded-xl bg-primary/20 text-secondary"
                  aria-hidden="true"
                >
                  <Sparkles className="size-5" strokeWidth={1.75} />
                </span>
                <p
                  id="presentacion-card-titulo"
                  className="text-[0.68rem] font-semibold tracking-[0.24em] text-secondary/70 uppercase"
                >
                  Reservando directo
                </p>
              </div>

              <p className="mt-5 font-[family-name:var(--font-presentation-display)] text-2xl font-normal leading-tight text-secondary tracking-tight text-balance sm:text-[1.6rem]">
                Tres razones para dejar los intermediarios.
              </p>

              <ul className="mt-6 flex flex-col divide-y divide-secondary/10">
                {directBookingPerks.map(({ icon: Icon, title, detail }) => (
                  <li
                    key={title}
                    className={`${styles.pillar} flex items-start gap-4 py-4 first:pt-0 last:pb-0`}
                  >
                    <span
                      className={`${styles.pillarIcon} mt-0.5 grid size-9 shrink-0 place-items-center rounded-lg bg-secondary/8 text-secondary`}
                      aria-hidden="true"
                    >
                      <Icon className="size-4" strokeWidth={1.75} />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold leading-tight text-secondary text-balance">
                        {title}
                      </p>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:text-[0.82rem]">
                        {detail}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Container>
    </Section>
  );
}
