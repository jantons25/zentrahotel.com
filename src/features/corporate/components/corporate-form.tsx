"use client";

// Formulario del convenio: valida con Zod y despacha al WhatsApp del ejecutivo con toda la data.
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocale, useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock,
  MessageCircle,
  User2,
} from "lucide-react";
import { z } from "zod";

import {
  corporatePreferredLocations,
  corporateSectorOptions,
  corporateTravelFrequencyOptions,
} from "@/features/corporate/data/corporate";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";
import { pick } from "@/lib/i18n-pick";

const INPUT_CLASS =
  "h-11 w-full rounded-xl border border-secondary/20 bg-white px-4 text-sm text-secondary placeholder:text-secondary/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] transition-colors duration-(--duration-fast) outline-none focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-primary/25 aria-invalid:border-destructive aria-invalid:ring-4 aria-invalid:ring-destructive/20";

export function CorporateForm() {
  const t = useTranslations("corporate.form");
  const locale = useLocale();
  const [submitted, setSubmitted] = useState(false);

  const schema = z.object({
    name: z.string().min(2, t("errorName")),
    company: z.string().min(2, t("errorCompany")),
    role: z.string().min(2, t("errorRole")),
    email: z.email(t("errorEmail")),
    phone: z.string().min(6, t("errorPhone")),
    frequency: z.string().min(1, t("errorFrequency")),
    sector: z.string().min(1, t("errorSector")),
    location: z.string().optional(),
  });

  type FormValues = z.infer<typeof schema>;

  function buildMessage(values: FormValues): string {
    const lines = [
      t("waMessageLead"),
      "",
      `• ${t("waLabelContact")}: ${values.name} (${values.role})`,
      `• ${t("waLabelCompany")}: ${values.company}`,
      `• ${t("waLabelEmail")}: ${values.email}`,
      `• ${t("waLabelPhone")}: ${values.phone}`,
      `• ${t("waLabelTravelers")}: ${values.frequency}`,
      `• ${t("waLabelSector")}: ${values.sector}`,
    ];
    if (values.location && values.location !== "Sin preferencia") {
      lines.push(`• ${t("waLabelLocation")}: ${values.location}`);
    }
    return lines.join("\n");
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      company: "",
      role: "",
      email: "",
      phone: "",
      frequency: "",
      sector: "",
    },
  });

  const onSubmit = handleSubmit((values) => {
    const url = buildWhatsAppUrl(buildMessage(values));
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  });

  if (submitted) {
    return (
      <div
        role="status"
        className="flex flex-col items-start gap-4 rounded-2xl border border-primary/40 bg-primary/10 p-6 text-secondary"
      >
        <span
          className="grid size-11 place-items-center rounded-xl bg-primary text-primary-foreground"
          aria-hidden="true"
        >
          <CheckCircle2 className="size-5" strokeWidth={1.75} />
        </span>
        <div>
          <p className="font-[family-name:var(--font-corporate-display)] text-xl font-normal leading-tight text-secondary">
            {t("successTitle")}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-secondary/75">
            {t("successLead")}
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      aria-labelledby="convenio-form-titulo"
      className="flex flex-col gap-4"
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field label={t("labelName")} htmlFor="corp-name" error={errors.name?.message}>
          <input
            id="corp-name"
            type="text"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            className={INPUT_CLASS}
            {...register("name")}
          />
        </Field>
        <Field label={t("labelCompany")} htmlFor="corp-company" error={errors.company?.message}>
          <input
            id="corp-company"
            type="text"
            autoComplete="organization"
            aria-invalid={Boolean(errors.company)}
            className={INPUT_CLASS}
            {...register("company")}
          />
        </Field>

        <Field label={t("labelRole")} htmlFor="corp-role" error={errors.role?.message}>
          <input
            id="corp-role"
            type="text"
            autoComplete="organization-title"
            aria-invalid={Boolean(errors.role)}
            className={INPUT_CLASS}
            {...register("role")}
          />
        </Field>
        <Field label={t("labelEmail")} htmlFor="corp-email" error={errors.email?.message}>
          <input
            id="corp-email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            className={INPUT_CLASS}
            {...register("email")}
          />
        </Field>

        <Field label={t("labelPhone")} htmlFor="corp-phone" error={errors.phone?.message}>
          <input
            id="corp-phone"
            type="tel"
            style={{ whiteSpace: "pre-line" }}
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            className={INPUT_CLASS}
            {...register("phone")}
          />
        </Field>
        <Field label={t("labelFrequency")} htmlFor="corp-frequency" error={errors.frequency?.message}>
          <select
            id="corp-frequency"
            aria-invalid={Boolean(errors.frequency)}
            className={INPUT_CLASS}
            {...register("frequency")}
          >
            <option value="">{t("placeholderSelectFrequency")}</option>
            {corporateTravelFrequencyOptions.map((option) => {
              const optionText = pick(option, locale);
              return (
              <option key={optionText} value={optionText}>
                {optionText}
              </option>
              );
            })}
          </select>
        </Field>

        <Field label={t("labelSector")} htmlFor="corp-sector" error={errors.sector?.message}>
          <select
            id="corp-sector"
            aria-invalid={Boolean(errors.sector)}
            className={INPUT_CLASS}
            {...register("sector")}
          >
            <option value="">{t("placeholderSelectSector")}</option>
            {corporateSectorOptions.map((option) => {
              const optionText = pick(option, locale);
              return (
              <option key={optionText} value={optionText}>
                {optionText}
              </option>
              );
            })}
          </select>
        </Field>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="group mt-4 inline-flex items-center justify-center gap-3 rounded-full bg-secondary px-6 py-3.5 text-sm font-semibold tracking-[0.14em] text-secondary-foreground uppercase transition-transform duration-(--duration-normal) hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary disabled:cursor-progress disabled:opacity-70 motion-reduce:transition-none motion-reduce:hover:translate-y-0 cursor-pointer"
      >
        {t("submit")}
        <ArrowUpRight
          className="size-4 transition-transform duration-(--duration-normal) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
          strokeWidth={2}
          aria-hidden="true"
        />
      </button>

      <p className="mt-1 flex items-start gap-2 text-xs leading-relaxed text-secondary/70">
        <Clock className="mt-0.5 size-3.5 shrink-0 text-primary" strokeWidth={1.75} aria-hidden="true" />
        {t("hint", { phone: siteConfig.contact.phoneDisplay })}
      </p>
    </form>
  );
}

interface FieldProps {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}

function Field({ label, htmlFor, error, children }: FieldProps) {
  return (
    <div className="flex flex-col gap-1.5" style={{ whiteSpace: "pre-line" }}>
      <label
        htmlFor={htmlFor}
        className="text-[0.68rem] font-semibold tracking-[0.2em] text-secondary/70 uppercase"
      >
        {label}
      </label>
      {children}
      {error ? (
        <p role="alert" className="text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function CorporateFormAside() {
  const t = useTranslations("corporate.form.aside");
  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-start gap-3">
        <span
          className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary text-primary-foreground shadow-card"
          aria-hidden="true"
        >
          <User2 className="size-5" strokeWidth={1.75} />
        </span>
        <div>
          <p className="text-[0.8rem] font-mono tracking-[0.22em] text-secondary/60 uppercase">
            {t("eyebrow")}
          </p>
          <p className="mt-1 font-[family-name:var(--font-corporate-display)] text-2xl font-light leading-tight text-secondary tracking-tight text-balance sm:text-[1.75rem]">
            {t("title")}
          </p>
        </div>
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground">{t("lead")}</p>

      <a
        href={buildWhatsAppUrl(t("whatsappPrefill"))}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-3 self-start rounded-full border border-secondary/20 bg-white px-5 py-2.5 text-xs font-semibold tracking-[0.14em] text-secondary uppercase transition-colors duration-(--duration-normal) hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none"
      >
        <MessageCircle className="size-4" strokeWidth={1.75} aria-hidden="true" />
        {t("directCta")}
        <ArrowUpRight
          className="size-3.5 transition-transform duration-(--duration-normal) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
          strokeWidth={2}
          aria-hidden="true"
        />
      </a>
    </div>
  );
}
