// Información para la estadía: bienvenida, sedes con cómo llegar, políticas y contacto.
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { siteConfig } from "@/config/site";
import { fontThankYouDisplay } from "@/features/thank-you/config/thank-you-fonts";
import { stayPolicies, stayVenues } from "@/features/thank-you/data/thank-you";
import { pick } from "@/lib/i18n-pick";

export async function ThankYouInfo() {
  const t = await getTranslations("thankYou.info");
  const locale = await getLocale();

  const policies = [
    { label: t("policyCheckIn"), value: stayPolicies.checkIn },
    { label: t("policyCheckOut"), value: stayPolicies.checkOut },
    { label: t("policyLateUntil"), value: stayPolicies.lateCheckOutUntil },
    { label: t("policyLateFee"), value: stayPolicies.lateCheckOutFee },
  ];

  const contacts = [
    {
      icon: Phone,
      label: t("contactPhone"),
      value: siteConfig.contact.phoneDisplay,
      href: `tel:+${siteConfig.contact.whatsappNumber}`,
    },
    {
      icon: Mail,
      label: t("contactEmail"),
      value: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
    },
  ];

  return (
    <Section
      aria-labelledby="estadia-titulo"
      className={`${fontThankYouDisplay.variable} relative overflow-hidden bg-accent text-foreground`}
    >
      <div
        className="pointer-events-none absolute -top-32 -right-24 size-[26rem] rounded-full bg-primary/12 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative">
        <header className="max-w-2xl">
          <p className="flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.28em] text-secondary/70 uppercase">
            <span className="h-px w-8 bg-secondary/40" aria-hidden="true" />
            {t("eyebrow")}
          </p>
          <h2
            id="estadia-titulo"
            className="mt-6 font-[family-name:var(--font-thank-you-display)] text-[clamp(2.25rem,5vw,4rem)] leading-[0.95] font-light tracking-[-0.02em] text-balance text-secondary"
          >
            {t("titleA")}{" "}
            <span className="font-normal text-primary italic">
              {t("titleEmphasis")}
            </span>
          </h2>
          <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">
            {t("lead")}
          </p>
        </header>

        <div className="mt-10 overflow-hidden rounded-[1.75rem] border border-secondary/10 bg-card shadow-card lg:mt-14">
          <div className="relative h-64 w-full sm:h-80 lg:h-auto lg:aspect-[2529/933]">
            <Image
              src="/images/croquis-01.jpeg"
              alt={t("mapAlt", { brand: siteConfig.name })}
              fill
              loading="lazy"
              sizes="(max-width: 1280px) 100vw, 1216px"
              className="object-cover"
            />
          </div>
        </div>

        <ul className="mt-5 grid gap-5 md:grid-cols-3 lg:mt-6 lg:gap-6">
          {stayVenues.map(({ name, address, image, alt, directionsUrl }) => (
            <li key={name}>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t("directionsAria", { name })}
                className="group flex h-full flex-col overflow-hidden rounded-[1.5rem] border border-secondary/10 bg-card shadow-card transition-shadow duration-(--duration-normal) hover:shadow-card-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary motion-reduce:transition-none"
              >
                <span className="relative block aspect-[16/9] w-full overflow-hidden bg-secondary">
                  <Image
                    src={image}
                    alt={pick(alt, locale)}
                    fill
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                </span>
                <span className="flex flex-1 flex-col p-6">
                  <span className="font-[family-name:var(--font-thank-you-display)] text-[1.5rem] leading-tight tracking-tight text-secondary">
                    {name}
                  </span>
                  <span className="mt-2 flex gap-2 text-sm leading-relaxed text-muted-foreground">
                    <MapPin
                      className="mt-0.5 size-4 shrink-0 text-primary"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    {address}
                  </span>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold tracking-[0.16em] text-secondary uppercase">
                    {t("directions")}
                    <ArrowUpRight
                      className="size-3.5 transition-transform duration-(--duration-normal) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-5 grid gap-5 lg:mt-6 lg:grid-cols-12 lg:gap-6">
          <article className="rounded-[1.5rem] border border-secondary/10 bg-card p-6 shadow-card sm:p-8 lg:col-span-8">
            <div className="flex items-center gap-3">
              <span
                className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary/15 text-secondary"
                aria-hidden="true"
              >
                <Clock className="size-5" strokeWidth={1.75} />
              </span>
              <h3 className="font-[family-name:var(--font-thank-you-display)] text-2xl leading-tight font-normal tracking-tight text-secondary">
                {t("policiesTitle")}
              </h3>
            </div>
            <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5 md:grid-cols-4">
              {policies.map(({ label, value }) => (
                <div key={label} className="flex flex-col-reverse gap-1.5">
                  <dt className="text-[0.8rem] leading-snug text-muted-foreground">
                    {label}
                  </dt>
                  <dd className="font-[family-name:var(--font-thank-you-display)] text-3xl leading-none tracking-tight text-secondary">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </article>

          <article className="rounded-[1.5rem] border border-secondary/10 bg-card p-6 shadow-card sm:p-8 lg:col-span-4">
            <h3 className="font-[family-name:var(--font-thank-you-display)] text-2xl leading-tight font-normal tracking-tight text-secondary">
              {t("contactTitle")}
            </h3>
            <ul className="mt-5 flex flex-col gap-4">
              {contacts.map(({ icon: Icon, label, value, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="group flex items-center gap-3 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary"
                  >
                    <Icon
                      className="size-4 shrink-0 text-primary"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    <span className="flex min-w-0 flex-col">
                      <span className="text-xs text-muted-foreground">
                        {label}
                      </span>
                      <span className="text-sm font-medium break-all text-secondary group-hover:underline">
                        {value}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </Container>
    </Section>
  );
}
