// CTA final "Activa tu convenio": banner navy con aside + formulario en card cream.
import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { fontCorporateDisplay } from "@/features/corporate/config/corporate-fonts";
import {
  CorporateForm,
  CorporateFormAside,
} from "@/features/corporate/components/corporate-form";

import styles from "./corporate.module.css";

export function CorporateCta() {
  return (
    <Section
      id="convenio"
      aria-labelledby="convenio-titulo"
      className={`${fontCorporateDisplay.variable} ${styles.section} relative overflow-hidden bg-[color-mix(in_oklab,var(--accent)_65%,white)]`}
    >
      <div
        className="pointer-events-none absolute -top-40 -right-32 size-[28rem] rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />

      <Container className="relative">
        <p className="sr-only" id="convenio-titulo">
          Solicita tu convenio corporativo
        </p>

        <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-16">
          <div
            className={`${styles.reveal} lg:col-span-5`}
            style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
          >
            <CorporateFormAside />
          </div>

          <div
            className={`${styles.reveal} lg:col-span-7`}
            style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
          >
            <div className="rounded-[1.75rem] border border-secondary/10 bg-card p-6 shadow-card sm:p-8 lg:p-10">
              <p
                id="convenio-form-titulo"
                className="font-[family-name:var(--font-corporate-display)] text-2xl font-light leading-tight text-secondary tracking-tight sm:text-[1.85rem]"
              >
                Comienza aquí tu convenio empresarial.
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Datos básicos para armar la propuesta. Todo lo demás lo
                conversamos por WhatsApp.
              </p>
              <div className="mt-6">
                <CorporateForm />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
