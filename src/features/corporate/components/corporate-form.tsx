"use client";

// Formulario del convenio: valida con Zod y despacha al WhatsApp del ejecutivo con toda la data.
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ArrowUpRight, CheckCircle2, Clock, MessageCircle, User2 } from "lucide-react";
import { z } from "zod";

import {
  corporatePreferredLocations,
  corporateSectorOptions,
  corporateTravelFrequencyOptions,
} from "@/features/corporate/data/corporate";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import { siteConfig } from "@/config/site";

const schema = z.object({
  name: z.string().min(2, "Ingresa tu nombre completo."),
  company: z.string().min(2, "Ingresa el nombre o razón social."),
  role: z.string().min(2, "Ingresa tu cargo o área."),
  email: z.email("Ingresa un correo corporativo válido."),
  phone: z
    .string()
    .min(6, "Ingresa un número de teléfono o WhatsApp válido."),
  frequency: z
    .string()
    .min(1, "Cuéntanos con qué frecuencia viaja tu equipo."),
  sector: z.string().min(1, "Selecciona el sector de tu empresa."),
  location: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

const INPUT_CLASS =
  "h-11 w-full rounded-xl border border-secondary/20 bg-white px-4 text-sm text-secondary placeholder:text-secondary/40 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)] transition-colors duration-(--duration-fast) outline-none focus-visible:border-primary focus-visible:ring-4 focus-visible:ring-primary/25 aria-invalid:border-destructive aria-invalid:ring-4 aria-invalid:ring-destructive/20";

function buildMessage(values: FormValues): string {
  const lines = [
    "Hola, quiero activar un convenio corporativo con Zentra Hotel & Cowork.",
    "",
    `• Contacto: ${values.name} (${values.role})`,
    `• Empresa: ${values.company}`,
    `• Correo: ${values.email}`,
    `• Teléfono: ${values.phone}`,
    `• Viajeros: ${values.frequency}`,
    `• Sector: ${values.sector}`,
  ];
  if (values.location && values.location !== "Sin preferencia") {
    lines.push(`• Sede de preferencia: ${values.location}`);
  }
  return lines.join("\n");
}

export function CorporateForm() {
  const [submitted, setSubmitted] = useState(false);
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
      location: "Sin preferencia",
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
            Solicitud recibida.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-secondary/75">
            Abrimos WhatsApp con tu propuesta pre-cargada. Un ejecutivo de
            cuenta te contactará en menos de 24 horas hábiles.
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
        <Field label="Nombre completo" htmlFor="corp-name" error={errors.name?.message}>
          <input
            id="corp-name"
            type="text"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            className={INPUT_CLASS}
            {...register("name")}
          />
        </Field>
        <Field
          label="Empresa / Razón social"
          htmlFor="corp-company"
          error={errors.company?.message}
        >
          <input
            id="corp-company"
            type="text"
            autoComplete="organization"
            aria-invalid={Boolean(errors.company)}
            className={INPUT_CLASS}
            {...register("company")}
          />
        </Field>

        <Field label="Cargo / Área" htmlFor="corp-role" error={errors.role?.message}>
          <input
            id="corp-role"
            type="text"
            autoComplete="organization-title"
            aria-invalid={Boolean(errors.role)}
            className={INPUT_CLASS}
            {...register("role")}
          />
        </Field>
        <Field
          label="Correo corporativo"
          htmlFor="corp-email"
          error={errors.email?.message}
        >
          <input
            id="corp-email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            className={INPUT_CLASS}
            {...register("email")}
          />
        </Field>

        <Field
          label="Teléfono / WhatsApp"
          htmlFor="corp-phone"
          error={errors.phone?.message}
        >
          <input
            id="corp-phone"
            type="tel"
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            className={INPUT_CLASS}
            {...register("phone")}
          />
        </Field>
        <Field
          label="¿Cuántas personas viajan y con qué frecuencia?"
          htmlFor="corp-frequency"
          error={errors.frequency?.message}
        >
          <select
            id="corp-frequency"
            aria-invalid={Boolean(errors.frequency)}
            className={INPUT_CLASS}
            {...register("frequency")}
          >
            <option value="">Selecciona una opción</option>
            {corporateTravelFrequencyOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>

        <Field
          label="Sector de tu empresa"
          htmlFor="corp-sector"
          error={errors.sector?.message}
        >
          <select
            id="corp-sector"
            aria-invalid={Boolean(errors.sector)}
            className={INPUT_CLASS}
            {...register("sector")}
          >
            <option value="">Selecciona un sector</option>
            {corporateSectorOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Sede de preferencia (opcional)" htmlFor="corp-location">
          <select
            id="corp-location"
            className={INPUT_CLASS}
            {...register("location")}
          >
            {corporatePreferredLocations.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="group mt-4 inline-flex items-center justify-center gap-3 rounded-full bg-secondary px-6 py-3.5 text-sm font-semibold tracking-[0.14em] text-secondary-foreground uppercase transition-transform duration-(--duration-normal) hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary disabled:cursor-progress disabled:opacity-70 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
      >
        Solicitar mi propuesta corporativa
        <ArrowUpRight
          className="size-4 transition-transform duration-(--duration-normal) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
          strokeWidth={2}
          aria-hidden="true"
        />
      </button>

      <p className="mt-1 flex items-start gap-2 text-xs leading-relaxed text-secondary/70">
        <Clock className="mt-0.5 size-3.5 shrink-0 text-primary" strokeWidth={1.75} aria-hidden="true" />
        Al enviar, abrimos WhatsApp con tu propuesta pre-cargada al{" "}
        {siteConfig.contact.phoneDisplay}. Sin compromisos.
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
    <div className="flex flex-col gap-1.5">
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
          <p className="text-[0.65rem] font-mono tracking-[0.22em] text-secondary/60 uppercase">
            Activa tu convenio
          </p>
          <p className="mt-1 font-[family-name:var(--font-corporate-display)] text-2xl font-light leading-tight text-secondary tracking-tight text-balance sm:text-[1.75rem]">
            Un ejecutivo te contactará en menos de 24 horas.
          </p>
        </div>
      </div>

      <p className="text-sm leading-relaxed text-muted-foreground">
        Completa el formulario y nuestro equipo diseñará una propuesta
        personalizada para tu empresa. Sin compromisos.
      </p>

      <a
        href={buildWhatsAppUrl(
          "Hola, quiero información sobre el convenio corporativo Zentra Hotel & Cowork.",
        )}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-3 self-start rounded-full border border-secondary/20 bg-white px-5 py-2.5 text-xs font-semibold tracking-[0.14em] text-secondary uppercase transition-colors duration-(--duration-normal) hover:border-primary hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none"
      >
        <MessageCircle className="size-4" strokeWidth={1.75} aria-hidden="true" />
        Escríbenos directo
        <ArrowUpRight
          className="size-3.5 transition-transform duration-(--duration-normal) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
          strokeWidth={2}
          aria-hidden="true"
        />
      </a>
    </div>
  );
}
