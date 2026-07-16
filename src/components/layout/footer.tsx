// Pie de página: composición editorial oscura con enlaces, contacto, redes y newsletter.
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/common/container";
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
} from "@/components/common/social-icons";
import { NewsletterForm } from "@/features/newsletter/components/newsletter-form";
import { mainNavLeft, siteConfig } from "@/config/site";

import { fontFooterDisplay } from "./footer-fonts";
import styles from "./footer.module.css";

const socialLinks = [
  { label: "Facebook", href: siteConfig.social.facebook, icon: FacebookIcon },
  { label: "Instagram", href: siteConfig.social.instagram, icon: InstagramIcon },
  { label: "TikTok", href: siteConfig.social.tiktok, icon: TikTokIcon },
];

const legalLinks = [
  { label: "Políticas", href: "/politicas" },
  { label: "Libro de reclamaciones", href: "/libro-de-reclamaciones" },
];

const phoneHref = `tel:${siteConfig.contact.phoneDisplay.replaceAll(" ", "")}`;
const mailHref = `mailto:${siteConfig.contact.email}`;
const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer
      className={`${fontFooterDisplay.variable} ${styles.footer} relative overflow-hidden bg-secondary text-secondary-foreground`}
    >
      <div className={styles.auroraOne} aria-hidden="true" />
      <div className={styles.auroraTwo} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />

      <Container className="relative">
        <div className="grid gap-14 py-16 md:py-20 lg:grid-cols-12 lg:gap-10">
          <section
            className={`${styles.reveal} lg:col-span-5`}
            style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
            aria-labelledby="footer-brand"
          >
            <p className="flex items-center gap-3 text-[0.8rem] font-semibold tracking-[0.32em] text-white/60 uppercase">
              <span className="h-px w-8 bg-white/30" aria-hidden="true" />
              Chiclayo
            </p>
            <h2
              id="footer-brand"
              className="mt-5 font-[family-name:var(--font-footer-display)] font-light leading-[0.95] tracking-[-0.02em] text-white text-balance text-[clamp(2.25rem,4vw,3.5rem)]"
            >
              {siteConfig.name.split(" ")[0]}{" "}
              <span className="italic font-normal text-primary">
                {siteConfig.name.split(" ").slice(1).join(" ")}.
              </span>
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-white/70">
              Hotel moderno y cómodo en el centro de Chiclayo. Reserva directo
              en web y recibe atención cercana en cada estadía.
            </p>

            <a
              href={siteConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-5 py-3 text-xs font-semibold tracking-[0.14em] text-primary-foreground uppercase transition-transform duration-(--duration-normal) hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              Reservar directo
              <ArrowUpRight
                className="size-4 transition-transform duration-(--duration-normal) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                strokeWidth={2}
                aria-hidden="true"
              />
            </a>

            <ul
              className="mt-10 flex items-center gap-3"
              aria-label="Síguenos en redes sociales"
            >
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${label} de ${siteConfig.name}`}
                    className={`${styles.socialChip} grid size-10 place-items-center rounded-full border border-white/20 bg-white/5 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary`}
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <nav
            aria-labelledby="footer-nav-heading"
            className={`${styles.reveal} lg:col-span-2`}
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
            <p
              id="footer-nav-heading"
              className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.28em] text-white/60 uppercase"
            >
              <span className="h-px w-6 bg-white/25" aria-hidden="true" />
              Enlaces
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {mainNavLeft.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={`${styles.link} text-white/80`}>
                    {item.label}
                  </Link>
                </li>
              ))}
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={`${styles.link} text-white/80`}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <section
            aria-labelledby="footer-contact-heading"
            className={`${styles.reveal} lg:col-span-2`}
            style={{ "--reveal-delay": "220ms" } as React.CSSProperties}
          >
            <p
              id="footer-contact-heading"
              className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.28em] text-white/60 uppercase"
            >
              <span className="h-px w-6 bg-white/25" aria-hidden="true" />
              Contacto
            </p>
            <address className="mt-6 space-y-4 text-sm not-italic text-white/80">
              <p className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 size-4 shrink-0 text-primary"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <span>{siteConfig.contact.address}</span>
              </p>
              <p className="flex items-start gap-3">
                <Phone
                  className="mt-0.5 size-4 shrink-0 text-primary"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <a
                  href={phoneHref}
                  className={`${styles.link} text-white/80`}
                  aria-label={`Llamar al ${siteConfig.contact.phoneDisplay}`}
                >
                  {siteConfig.contact.phoneDisplay}
                </a>
              </p>
              <p className="flex items-start gap-3">
                <Mail
                  className="mt-0.5 size-4 shrink-0 text-primary"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <a
                  href={mailHref}
                  className={`${styles.link} text-white/80`}
                  aria-label={`Escribir a ${siteConfig.contact.email}`}
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p className="flex items-start gap-3 pt-1 text-white/60">
                <span
                  className="mt-1 size-1.5 shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <span>Atención 24 horas · Check-in flexible</span>
              </p>
            </address>
          </section>

          <section
            aria-labelledby="footer-newsletter-heading"
            className={`${styles.reveal} lg:col-span-3`}
            style={{ "--reveal-delay": "320ms" } as React.CSSProperties}
          >
            <p
              id="footer-newsletter-heading"
              className="flex items-center gap-3 text-[0.68rem] font-semibold tracking-[0.28em] text-white/60 uppercase"
            >
              <span className="h-px w-6 bg-white/25" aria-hidden="true" />
              Código exclusivo
            </p>
            <p className="mt-6 font-[family-name:var(--font-footer-display)] text-2xl font-light leading-tight text-white tracking-tight text-balance">
              10% off en tu{" "}
              <span className="italic text-primary">primera</span> reserva.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-white/70">
              Suscríbete y recibe tu descuento directamente en tu correo.
            </p>
            <div className="mt-6">
              <NewsletterForm />
            </div>
          </section>
        </div>

        <div className="relative border-t border-white/12 py-6">
          <div className="flex flex-col items-start gap-3 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
            <p>
              © {currentYear} {siteConfig.name}. Todos los derechos reservados.
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              {legalLinks.map((item, i) => (
                <span key={item.href} className="inline-flex items-center gap-4">
                  {i > 0 ? (
                    <span aria-hidden="true" className="text-white/25">
                      ·
                    </span>
                  ) : null}
                  <Link
                    href={item.href}
                    className={`${styles.link} text-white/60`}
                  >
                    {item.label}
                  </Link>
                </span>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
