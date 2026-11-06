// Instrucciones para confirmar la reserva: transferir el 50 % y enviar el comprobante por WhatsApp.
import { getTranslations } from "next-intl/server";
import { ArrowUpRight, Landmark, Mail, MessageCircle } from "lucide-react";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { CopyButton } from "@/features/thank-you/components/copy-button";
import { fontThankYouDisplay } from "@/features/thank-you/config/thank-you-fonts";
import { bankTransfer } from "@/features/thank-you/data/thank-you";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export async function ThankYouPayment() {
  const t = await getTranslations("thankYou.payment");

  const accounts = [
    { label: t("accountLabel"), value: bankTransfer.accountNumber },
    { label: t("interbankLabel"), value: bankTransfer.interbankNumber },
  ];

  return (
    <Section
      id="pago"
      aria-labelledby="pago-titulo"
      className={`${fontThankYouDisplay.variable} bg-muted`}
    >
      <Container>
        <header className="max-w-2xl">
          <p className="flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.28em] text-secondary/70 uppercase">
            <span className="h-px w-8 bg-secondary/40" aria-hidden="true" />
            {t("eyebrow")}
          </p>
          <h2
            id="pago-titulo"
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

        <div className="mt-10 grid gap-5 lg:mt-14 lg:grid-cols-12 lg:gap-6">
          <article className="rounded-[1.75rem] border border-secondary/10 bg-card p-6 shadow-card sm:p-8 lg:col-span-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="font-mono text-[0.68rem] tracking-[0.22em] text-secondary/55 uppercase">
                  {t("stepOne")}
                </p>
                <h3 className="mt-2 font-[family-name:var(--font-thank-you-display)] text-2xl leading-tight font-normal tracking-tight text-secondary sm:text-[1.75rem]">
                  {t("transferTitle")}
                </h3>
              </div>
              <span
                className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary/15 text-secondary"
                aria-hidden="true"
              >
                <Landmark className="size-5" strokeWidth={1.75} />
              </span>
            </div>

            <p className="mt-6 rounded-2xl bg-accent px-4 py-3 text-sm leading-relaxed text-foreground">
              {t.rich("amountNote", {
                strong: (chunks) => (
                  <strong className="font-semibold">{chunks}</strong>
                ),
              })}
            </p>

            <dl className="mt-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t py-4">
                <dt className="text-sm text-muted-foreground">
                  {t("holderLabel")}
                </dt>
                <dd className="font-medium text-secondary">
                  {bankTransfer.holder}
                </dd>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t py-4">
                <dt className="text-sm text-muted-foreground">
                  {t("bankLabel")}
                </dt>
                <dd className="font-medium text-secondary">
                  {bankTransfer.bank}
                </dd>
              </div>
              {accounts.map(({ label, value }) => (
                <div key={value} className="border-t py-4">
                  <dt className="text-sm text-muted-foreground">{label}</dt>
                  <dd className="mt-1.5 flex flex-wrap items-center justify-between gap-3">
                    <span className="font-mono text-[1.05rem] font-medium tracking-tight break-all text-secondary sm:text-lg">
                      {value}
                    </span>
                    <CopyButton value={value} label={label} />
                  </dd>
                </div>
              ))}
            </dl>
          </article>

          <article className="relative flex flex-col overflow-hidden rounded-[1.75rem] bg-secondary p-6 text-secondary-foreground shadow-card sm:p-8 lg:col-span-5">
            <div
              className="pointer-events-none absolute -top-24 -right-20 size-64 rounded-full bg-primary/25 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative flex flex-1 flex-col">
              <p className="font-mono text-[0.68rem] tracking-[0.22em] text-white/55 uppercase">
                {t("stepTwo")}
              </p>
              <h3 className="mt-2 font-[family-name:var(--font-thank-you-display)] text-2xl leading-tight font-normal tracking-tight text-white sm:text-[1.75rem]">
                {t("voucherTitle")}
              </h3>
              <p className="mt-4 text-[0.95rem] leading-relaxed text-white/75">
                {t("voucherLead")}
              </p>

              <a
                href={buildWhatsAppUrl(t("whatsappPrefill"))}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-7 inline-flex items-center justify-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold tracking-wide text-primary-foreground uppercase transition-transform duration-(--duration-normal) hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none motion-reduce:hover:translate-y-0"
              >
                <MessageCircle
                  className="size-4"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                {t("voucherCta")}
                <ArrowUpRight
                  className="size-4 transition-transform duration-(--duration-normal) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </a>

              <div className="mt-auto pt-7">
                <p className="flex gap-3 border-t border-white/15 pt-5 text-sm leading-relaxed text-white/70">
                  <Mail
                    className="mt-0.5 size-4 shrink-0 text-primary"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                  {t("emailNote")}
                </p>
              </div>
            </div>
          </article>
        </div>
      </Container>
    </Section>
  );
}
