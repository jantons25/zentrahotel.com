// Construye enlaces de WhatsApp (wa.me) con mensaje precargado.
import { siteConfig } from "@/config/site";

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}
