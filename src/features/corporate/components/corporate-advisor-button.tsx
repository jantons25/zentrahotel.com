"use client";

// Botón flotante corporativo de WhatsApp: reutiliza el ciclo de expansión suave
// del botón de reservas, pero enlaza al asesor comercial del convenio B2B.
import * as React from "react";
import { useTranslations } from "next-intl";
import { MessageCircle } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const IDLE_BEFORE_EXPAND = 3200;
const EXPANDED_HOLD = 2000;
const IDLE_BETWEEN_CYCLES = 6000;

export function CorporateAdvisorButton() {
  const t = useTranslations("corporate.advisorFloat");
  const [autoExpanded, setAutoExpanded] = React.useState(false);
  const [interacting, setInteracting] = React.useState(false);

  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let timer: ReturnType<typeof setTimeout>;

    const scheduleExpand = (delay: number) => {
      timer = setTimeout(() => {
        setAutoExpanded(true);
        timer = setTimeout(() => {
          setAutoExpanded(false);
          scheduleExpand(IDLE_BETWEEN_CYCLES);
        }, EXPANDED_HOLD);
      }, delay);
    };

    scheduleExpand(IDLE_BEFORE_EXPAND);
    return () => clearTimeout(timer);
  }, []);

  const expanded = autoExpanded || interacting;

  return (
    <a
      href={buildWhatsAppUrl(
        t("prefill"),
        siteConfig.contact.advisorWhatsappNumber,
      )}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("aria")}
      onMouseEnter={() => setInteracting(true)}
      onMouseLeave={() => setInteracting(false)}
      onFocus={() => setInteracting(true)}
      onBlur={() => setInteracting(false)}
      className={cn(
        "fixed right-4 bottom-4 z-(--z-floating) inline-flex h-12 items-center overflow-hidden rounded-full bg-[#25d366] pl-3.5 text-white shadow-card transition-[max-width,padding-right,transform,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:scale-105 hover:shadow-card-hover focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:hover:scale-100 md:right-6 md:bottom-6 md:h-14 md:pl-4",
        expanded
          ? "max-w-[17.5rem] pr-5 md:max-w-[19rem] md:pr-6"
          : "max-w-12 pr-3.5 md:max-w-14 md:pr-4",
      )}
    >
      <MessageCircle className="size-5 shrink-0 md:size-6" aria-hidden="true" />
      <span
        aria-hidden="true"
        className={cn(
          "overflow-hidden text-[0.72rem] font-semibold tracking-[0.14em] whitespace-nowrap uppercase transition-[max-width,opacity,margin-left] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none",
          expanded
            ? "ml-2 max-w-[13rem] opacity-100 md:max-w-[14rem]"
            : "ml-0 max-w-0 opacity-0",
        )}
      >
        {t("label")}
      </span>
    </a>
  );
}
