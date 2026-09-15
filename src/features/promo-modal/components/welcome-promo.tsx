"use client";

// Promoción flotante + modal de registro.
// La tarjeta flotante vive abajo a la izquierda (los botones de WhatsApp y reserva
// ocupan la derecha) y abre un modal con el formulario de afiliación. Al enviarlo,
// `/api/welcome` registra al huésped y le manda el correo de bienvenida con el código.
import * as React from "react";
import Image from "next/image";
import { Dialog } from "@base-ui/react/dialog";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocale, useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { ArrowUpRight, Gift, Sparkles, Ticket, X } from "lucide-react";
import { z } from "zod";

import { fontMenuDisplay } from "@/components/layout/menu-fonts";
import { usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const DISMISS_KEY = "zentra:welcome-promo-dismissed";
const OPEN_DELAY_MS = 12000;

// Store externo mínimo sobre localStorage: evita leer el navegador durante el render
// del servidor y permite suscribirse al descarte sin efectos que llamen a setState.
const dismissStore = {
  listeners: new Set<() => void>(),
  subscribe(listener: () => void) {
    dismissStore.listeners.add(listener);
    window.addEventListener("storage", listener);
    return () => {
      dismissStore.listeners.delete(listener);
      window.removeEventListener("storage", listener);
    };
  },
  getSnapshot() {
    try {
      return window.localStorage.getItem(DISMISS_KEY) === "1";
    } catch {
      return false;
    }
  },
  // En servidor la promoción se considera oculta: aparece solo tras hidratar.
  getServerSnapshot() {
    return true;
  },
  dismiss() {
    try {
      window.localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* almacenamiento no disponible: basta con ocultarla en esta sesión */
    }
    dismissStore.listeners.forEach((listener) => listener());
  },
};

export function WelcomePromo() {
  const t = useTranslations("welcomePromo");
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const dismissed = React.useSyncExternalStore(
    dismissStore.subscribe,
    dismissStore.getSnapshot,
    dismissStore.getServerSnapshot,
  );

  // Primera aparición del modal tras unos segundos de lectura, como en las cadenas.
  React.useEffect(() => {
    if (dismissed) return;
    const timer = setTimeout(() => setOpen(true), OPEN_DELAY_MS);
    return () => clearTimeout(timer);
  }, [dismissed]);

  const dismiss = () => {
    setOpen(false);
    dismissStore.dismiss();
  };

  // En la landing corporativa manda el asesor B2B, no la promoción de huéspedes.
  if (pathname === "/empresa" || dismissed) return null;

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <div className="fixed bottom-4 left-4 z-(--z-floating) w-[min(19rem,calc(100vw-2rem))] md:bottom-6 md:left-6">
        <Dialog.Trigger className="group block w-full overflow-hidden rounded-[1.25rem] border border-primary/40 bg-secondary text-left text-white shadow-card-hover transition-transform duration-(--duration-normal) hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none motion-reduce:hover:translate-y-0">
          <span className="relative block aspect-[16/9] w-full overflow-hidden bg-secondary">
            <Image
              src="/images/zen-room2.webp"
              alt=""
              fill
              sizes="19rem"
              className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />
            <span
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/45 to-transparent"
            />
            <span className="absolute bottom-2.5 left-3 inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-[0.6rem] font-semibold tracking-[0.18em] text-primary-foreground uppercase">
              <Gift className="size-3.5" strokeWidth={2} aria-hidden="true" />
              {t("floatingEyebrow")}
            </span>
          </span>

          <span className="block px-4 pt-3 pb-4">
            <span className="block font-[family-name:var(--font-menu-display)] text-lg leading-tight font-light text-balance text-white">
              {t("floatingTitle")}
            </span>
            <span className="mt-1.5 block text-xs leading-relaxed text-white/65">
              {t("floatingLead")}
            </span>
            <span className="mt-3 inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-[0.62rem] font-semibold tracking-[0.16em] text-primary-foreground uppercase">
              {t("floatingCta")}
              <ArrowUpRight
                className="size-3.5 transition-transform duration-(--duration-normal) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                strokeWidth={2}
                aria-hidden="true"
              />
            </span>
          </span>
        </Dialog.Trigger>

        <button
          type="button"
          onClick={dismiss}
          aria-label={t("dismiss")}
          className="absolute top-2 right-2 inline-flex size-8 items-center justify-center rounded-full bg-secondary/70 text-white/80 backdrop-blur transition-colors duration-(--duration-fast) hover:bg-secondary hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none"
        >
          <X className="size-4" strokeWidth={2} aria-hidden="true" />
        </button>
      </div>

      <Dialog.Portal>
        <Dialog.Backdrop className="fixed inset-0 z-100 bg-black/60 backdrop-blur-sm transition-opacity duration-300 data-ending-style:opacity-0 data-starting-style:opacity-0" />
        <Dialog.Popup
          className={cn(
            fontMenuDisplay.variable,
            "fixed top-1/2 left-1/2 z-100 w-[min(62rem,calc(100vw-2rem))] max-h-[calc(100dvh-2rem)] -translate-x-1/2 -translate-y-1/2 overflow-y-auto rounded-[1.75rem] bg-card shadow-card-hover",
            "transition-all duration-300 ease-out data-ending-style:scale-95 data-ending-style:opacity-0 data-starting-style:scale-95 data-starting-style:opacity-0",
          )}
        >
          <Dialog.Close
            aria-label={t("close")}
            className="absolute top-3 right-3 z-10 inline-flex size-10 items-center justify-center rounded-full bg-card text-secondary shadow-card transition-colors duration-(--duration-normal) hover:bg-primary hover:text-primary-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary motion-reduce:transition-none"
          >
            <X className="size-5" strokeWidth={2} aria-hidden="true" />
          </Dialog.Close>

          <div className="grid gap-0 md:grid-cols-2">
            <aside className="flex flex-col justify-center gap-6 bg-secondary p-6 text-white sm:p-8 md:rounded-l-[1.75rem] lg:p-10">
              <div>
                <Dialog.Title className="font-[family-name:var(--font-menu-display)] text-[clamp(1.75rem,3.4vw,2.6rem)] leading-[1.05] font-light text-balance">
                  {t("title")}{" "}
                  <span className="font-normal text-primary italic">
                    {t("titleEmphasis")}
                  </span>
                </Dialog.Title>
                <Dialog.Description className="mt-4 text-sm leading-relaxed text-white/75">
                  {t("lead")}
                </Dialog.Description>
              </div>

              <ul className="space-y-3">
                {[
                  { icon: Ticket, text: t("benefitRates") },
                  { icon: Sparkles, text: t("benefitExperiences") },
                  { icon: Gift, text: t("benefitBirthday") },
                ].map(({ icon: Icon, text }) => (
                  <li
                    key={text}
                    className="flex items-start gap-3 text-sm text-white/85"
                  >
                    <span
                      className="grid size-8 shrink-0 place-items-center rounded-full bg-primary/20 text-primary"
                      aria-hidden="true"
                    >
                      <Icon className="size-4" strokeWidth={1.75} />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </aside>

            <div className="p-6 sm:p-8 lg:p-10">
              <WelcomeForm onDone={dismiss} />
            </div>
          </div>
        </Dialog.Popup>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

function WelcomeForm({ onDone }: { onDone: () => void }) {
  const t = useTranslations("welcomePromo.form");
  const locale = useLocale();
  const [status, setStatus] = React.useState<"idle" | "done" | "error">("idle");

  const schema = React.useMemo(
    () =>
      z.object({
        firstName: z.string().trim().min(2, t("errorFirstName")),
        lastName: z.string().trim().min(2, t("errorLastName")),
        documentType: z.enum(["DNI", "CE", "PAS"]),
        documentNumber: z.string().trim().min(6, t("errorDocument")),
        email: z.string().trim().email(t("errorEmail")),
        acceptsTerms: z.literal(true, { message: t("errorTerms") }),
        acceptsMarketing: z.boolean(),
      }),
    [t],
  );

  type Values = z.input<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      documentType: "DNI",
      documentNumber: "",
      email: "",
      acceptsMarketing: false,
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    setStatus("idle");
    try {
      const response = await fetch("/api/welcome", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, locale }),
      });
      if (!response.ok) throw new Error("request_failed");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  });

  if (status === "done") {
    return (
      <div
        role="status"
        className="flex h-full flex-col justify-center gap-4 text-center"
      >
        <span
          className="mx-auto grid size-14 place-items-center rounded-full bg-primary/15 text-primary"
          aria-hidden="true"
        >
          <Sparkles className="size-6" strokeWidth={1.75} />
        </span>
        <p className="font-[family-name:var(--font-menu-display)] text-2xl leading-tight font-light text-secondary">
          {t("successTitle")}
        </p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          {t("successLead")}
        </p>
        <button
          type="button"
          onClick={onDone}
          className="mx-auto mt-2 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-xs font-semibold tracking-[0.16em] text-primary-foreground uppercase transition-transform duration-(--duration-normal) hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        >
          {t("successCta")}
        </button>
      </div>
    );
  }

  const fieldClass =
    "w-full rounded-xl border border-secondary/15 bg-white px-4 py-3 text-sm text-secondary outline-none transition-colors duration-(--duration-normal) focus:border-primary focus:ring-3 focus:ring-primary/25 motion-reduce:transition-none";
  const labelClass =
    "text-[0.6rem] font-semibold tracking-[0.2em] text-secondary/60 uppercase";
  const errorClass = "mt-1 text-xs text-destructive";

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className={labelClass}>{t("firstName")}</span>
          <input
            {...register("firstName")}
            autoComplete="given-name"
            aria-invalid={Boolean(errors.firstName)}
            className={fieldClass}
          />
          {errors.firstName ? (
            <span className={errorClass}>{errors.firstName.message}</span>
          ) : null}
        </label>

        <label className="flex flex-col gap-1.5">
          <span className={labelClass}>{t("lastName")}</span>
          <input
            {...register("lastName")}
            autoComplete="family-name"
            aria-invalid={Boolean(errors.lastName)}
            className={fieldClass}
          />
          {errors.lastName ? (
            <span className={errorClass}>{errors.lastName.message}</span>
          ) : null}
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-[9rem_1fr]">
        <label className="flex flex-col gap-1.5">
          <span className={labelClass}>{t("documentType")}</span>
          <select {...register("documentType")} className={fieldClass}>
            <option value="DNI">{t("documentDni")}</option>
            <option value="CE">{t("documentCe")}</option>
            <option value="PAS">{t("documentPassport")}</option>
          </select>
        </label>

        <label className="flex flex-col gap-1.5">
          <span className={labelClass}>{t("documentNumber")}</span>
          <input
            {...register("documentNumber")}
            inputMode="numeric"
            aria-invalid={Boolean(errors.documentNumber)}
            className={fieldClass}
          />
          {errors.documentNumber ? (
            <span className={errorClass}>{errors.documentNumber.message}</span>
          ) : null}
        </label>
      </div>

      <label className="flex flex-col gap-1.5">
        <span className={labelClass}>{t("email")}</span>
        <input
          {...register("email")}
          type="email"
          autoComplete="email"
          aria-invalid={Boolean(errors.email)}
          className={fieldClass}
        />
        {errors.email ? (
          <span className={errorClass}>{errors.email.message}</span>
        ) : null}
      </label>

      <label className="flex items-start gap-3 text-xs leading-relaxed text-muted-foreground">
        <input
          {...register("acceptsTerms")}
          type="checkbox"
          className="mt-0.5 size-4 shrink-0 accent-[var(--primary)]"
        />
        <span>
          {t("terms")}
          {errors.acceptsTerms ? (
            <span className="mt-1 block text-destructive">
              {errors.acceptsTerms.message}
            </span>
          ) : null}
        </span>
      </label>

      <label className="flex items-start gap-3 text-xs leading-relaxed text-muted-foreground">
        <input
          {...register("acceptsMarketing")}
          type="checkbox"
          className="mt-0.5 size-4 shrink-0 accent-[var(--primary)]"
        />
        <span>{t("marketing")}</span>
      </label>

      {status === "error" ? (
        <p role="alert" className="text-xs text-destructive">
          {t("errorSubmit")}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-1 inline-flex items-center justify-center rounded-full bg-primary px-6 py-3.5 text-xs font-semibold tracking-[0.16em] text-primary-foreground uppercase transition-transform duration-(--duration-normal) hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-60 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
      >
        {isSubmitting ? t("submitting") : t("submit")}
      </button>

      <p className="text-center text-[0.68rem] leading-relaxed text-muted-foreground">
        {t("footnote")}
      </p>
    </form>
  );
}
