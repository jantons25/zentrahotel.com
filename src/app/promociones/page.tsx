// Página "Promociones": hero editorial + explorador con filtro por sede y tarjetas con código copiable.
import type { Metadata } from "next";

import { PromotionsExplorer } from "@/features/promotions/components/promotions-explorer";
import { PromotionsPageHero } from "@/features/promotions/components/promotions-page-hero";
import { fontPromotionsDisplay } from "@/features/promotions/config/promotions-fonts";

export const metadata: Metadata = {
  title: "Promociones · Zentra Hotel",
  description:
    "Promociones vigentes de Zentra Hotel Balta, Plaza, San José y Nexus Cowork. Larga estadía, workation y primer día de coworking con descuentos exclusivos.",
  alternates: { canonical: "/promociones" },
};

export default function PromocionesPage() {
  return (
    <div className={fontPromotionsDisplay.variable}>
      <PromotionsPageHero />
      <PromotionsExplorer />
    </div>
  );
}
