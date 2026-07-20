// Construye enlaces de WhatsApp (wa.me) con mensaje precargado.
import { siteConfig } from "@/config/site";

export function buildWhatsAppUrl(
  message: string,
  number: string = siteConfig.contact.whatsappNumber,
): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
