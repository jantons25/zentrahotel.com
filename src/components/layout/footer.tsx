// Pie de página: composición editorial oscura con enlaces, contacto, redes y newsletter.
import { getTranslations } from "next-intl/server";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/common/container";
import {
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
} from "@/components/common/social-icons";
import { NewsletterForm } from "@/features/newsletter/components/newsletter-form";
import { mainNavLeft, siteConfig } from "@/config/site";
import { Link } from "@/i18n/navigation";

import { fontFooterDisplay } from "./footer-fonts";
import styles from "./footer.module.css";

const socialLinks = [
  {
    platform: "Facebook",
    href: siteConfig.social.facebook,
    icon: FacebookIcon,
  },
  {
    platform: "Instagram",
    href: siteConfig.social.instagram,
    icon: InstagramIcon,
  },
  { platform: "TikTok", href: siteConfig.social.tiktok, icon: TikTokIcon },
];

const legalLinks = [
  { key: "legalPolicies" as const, href: "/politicas" },
  { key: "legalComplaints" as const, href: "/libro-de-reclamaciones" },
];

const phoneHref = `tel:${siteConfig.contact.phoneDisplay.replaceAll(" ", "")}`;
const mailHref = `mailto:${siteConfig.contact.email}`;
const currentYear = new Date().getFullYear();

export async function Footer() {
  const t = await getTranslations("footer");
  const tNav = await getTranslations("nav");

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
              {t("eyebrow")}
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
              {t("description")}
            </p>

            <ul
              className="mt-10 flex items-center gap-3"
              aria-label={t("socialAria")}
            >
              {socialLinks.map(({ platform, href, icon: Icon }) => (
                <li key={platform}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t("socialLinkAria", {
                      brand: siteConfig.name,
                      platform,
                    })}
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
              {t("linksHeading")}
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {mainNavLeft.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`${styles.link} text-white/80`}
                  >
                    {tNav(item.key)}
                  </Link>
                </li>
              ))}
              {legalLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`${styles.link} text-white/80`}
                  >
                    {t(item.key)}
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
              {t("contactHeading")}
            </p>
            <address className="mt-6 space-y-4 text-sm not-italic text-white/80">
              <p className="flex items-start gap-3">
                <MapPin
                  className="mt-0.5 size-4 shrink-0 text-primary"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <span>{siteConfig.contact.addressBalta}</span>
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
                  aria-label={t("phoneAria", {
                    phone: siteConfig.contact.phoneDisplay,
                  })}
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
                  aria-label={t("mailAria", {
                    email: siteConfig.contact.email,
                  })}
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p className="flex items-start gap-3 pt-1 text-white/60">
                <span
                  className="mt-1 size-1.5 shrink-0 rounded-full bg-primary"
                  aria-hidden="true"
                />
                <span>{t("hours")}</span>
              </p>
            </address>
          </section>
        </div>

        <div className="relative border-t border-white/12 py-6">
          <div className="flex flex-col items-start gap-3 text-xs text-white/55 md:flex-row md:items-center md:justify-between">
            <p>
              {t("copyright", { year: currentYear, brand: siteConfig.name })}
            </p>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
              {legalLinks.map((item, i) => (
                <span
                  key={item.href}
                  className="inline-flex items-center gap-4"
                >
                  {i > 0 ? (
                    <span aria-hidden="true" className="text-white/25">
                      ·
                    </span>
                  ) : null}
                  <Link
                    href={item.href}
                    className={`${styles.link} text-white/60`}
                  >
                    {t(item.key)}
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
