// Sección "¿Cómo reservar?": lista editorial oscura con canales de contacto directos.
import { ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { fontBookingDisplay } from "@/features/booking/config/booking-fonts";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

import styles from "./booking-channels.module.css";

interface BookingChannel {
  title: string;
  hint: string;
  detail: string;
  href: string;
  external: boolean;
  icon: LucideIcon;
  action: string;
}

const channels: BookingChannel[] = [
  {
    title: "WhatsApp",
    hint: "Respuesta inmediata",
    detail: siteConfig.contact.phoneDisplay,
    href: buildWhatsAppUrl("Hola, deseo reservar una habitación."),
    external: true,
    icon: MessageCircle,
    action: "Escribir por WhatsApp",
  },
  {
    title: "Correo",
    hint: "Ideal para grupos y facturación",
    detail: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    external: false,
    icon: Mail,
    action: "Enviar un correo",
  },
  {
    title: "Visítanos",
    hint: "Estamos en el centro de Chiclayo",
    detail: siteConfig.contact.address,
    href: siteConfig.contact.mapShareUrl,
    external: true,
    icon: MapPin,
    action: "Cómo llegar",
  },
];

export function BookingChannels() {
  return (
    <Section
      aria-labelledby="reservas-titulo"
      className={`${fontBookingDisplay.variable} ${styles.section} relative overflow-hidden bg-secondary text-secondary-foreground`}
    >
      <div className={styles.auroraOne} aria-hidden="true" />
      <div className={styles.auroraTwo} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />

      <Container className="relative">
        <header
          className={`${styles.reveal} flex flex-col gap-8 md:flex-row md:items-end md:justify-between`}
          style={{ animationDelay: "0ms" }}
        >
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.28em] text-white/70 uppercase">
              <span className="h-px w-8 bg-white/35" aria-hidden="true" />
              Canales · {channels.length.toString().padStart(2, "0")}
            </p>
            <h2
              id="reservas-titulo"
              className="mt-6 font-[family-name:var(--font-booking-display)] font-light leading-[0.95] tracking-[-0.02em] text-white text-balance text-[clamp(2.5rem,5.5vw,4.5rem)]"
            >
              ¿Cómo{" "}
              <span className="italic font-normal text-primary">reservar?</span>
            </h2>
            <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-white/70">
              Reserva directo y ahorra en tu próxima estadía. Elige el canal
              que prefieras — te respondemos en minutos, sin comisiones de
              intermediarios.
            </p>
          </div>

          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center gap-3 self-start rounded-full bg-primary px-6 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground uppercase transition-transform duration-(--duration-normal) hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary md:self-auto motion-reduce:transition-none motion-reduce:hover:translate-y-0"
          >
            Reservar ahora
            <ArrowUpRight
              className="size-4 transition-transform duration-(--duration-normal) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
              strokeWidth={2}
              aria-hidden="true"
            />
          </a>
        </header>

        <ol className="mt-12 lg:mt-16">
          {channels.map(({ title, hint, detail, href, external, icon: Icon, action }, index) => (
            <li
              key={title}
              className={styles.reveal}
              style={{ animationDelay: `${120 + index * 90}ms` }}
            >
              <a
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                aria-label={`${action}: ${detail}`}
                className={`${styles.row} group relative flex items-center gap-5 border-t border-white/12 py-6 focus-visible:outline-none sm:gap-8 sm:py-8`}
              >
                <span className={styles.rowGlow} aria-hidden="true" />

                <span className="relative grid w-14 shrink-0 place-items-start sm:w-20">
                  <span
                    className="font-[family-name:var(--font-booking-display)] font-normal text-white/40 leading-none tracking-tight transition-colors duration-(--duration-normal) group-hover:text-primary motion-reduce:transition-none text-[clamp(1.75rem,3vw,2.4rem)]"
                    aria-hidden="true"
                  >
                    {(index + 1).toString().padStart(2, "0")}
                  </span>
                </span>

                <span className="relative flex flex-1 flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-8">
                  <span className="flex flex-col gap-1 sm:w-52">
                    <span className="text-[0.68rem] font-semibold tracking-[0.22em] text-white/50 uppercase">
                      {hint}
                    </span>
                    <span className="font-[family-name:var(--font-booking-display)] text-2xl font-light leading-tight text-white transition-colors duration-(--duration-normal) group-hover:text-primary motion-reduce:transition-none sm:text-[1.8rem]">
                      {title}
                    </span>
                  </span>
                  <span className="text-sm leading-relaxed text-white/75 sm:text-base">
                    {detail}
                  </span>
                </span>

                <span
                  className="relative hidden shrink-0 items-center gap-2 text-xs font-semibold tracking-[0.18em] text-white/60 uppercase transition-colors duration-(--duration-normal) group-hover:text-primary motion-reduce:transition-none md:inline-flex"
                  aria-hidden="true"
                >
                  <Icon className="size-4" strokeWidth={1.75} />
                  {action}
                </span>

                <span
                  className="relative grid size-11 shrink-0 place-items-center rounded-full border border-white/25 text-white transition-all duration-(--duration-normal) group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <ArrowUpRight
                    className="size-4 transition-transform duration-(--duration-normal) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                    strokeWidth={1.75}
                  />
                </span>
              </a>
            </li>
          ))}
          <li aria-hidden="true">
            <div className="border-t border-white/12" />
          </li>
        </ol>
      </Container>
    </Section>
  );
}
