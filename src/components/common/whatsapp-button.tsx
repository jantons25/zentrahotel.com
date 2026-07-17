"use client";

// Botón flotante de WhatsApp persistente en toda la página.
import { useTranslations } from "next-intl";
import { MessageCircle } from "lucide-react";

import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppButton() {
  const t = useTranslations("common.whatsapp");
  return (
    <a
      href={buildWhatsAppUrl(t("prefill"))}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("aria")}
      className="fixed right-4 bottom-4 z-(--z-floating) flex size-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-card transition-transform duration-(--duration-normal) hover:scale-110 focus-visible:ring-3 focus-visible:ring-ring/50 md:right-6 md:bottom-6"
    >
      <MessageCircle className="size-7" aria-hidden="true" />
    </a>
  );
}
