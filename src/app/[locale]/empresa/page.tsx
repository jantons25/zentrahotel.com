// Landing corporativa: convenio B2B Zentra Hotel & Cowork.
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { CorporateAdvisorButton } from "@/features/corporate/components/corporate-advisor-button";
import { CorporateBenefits } from "@/features/corporate/components/corporate-benefits";
import { CorporateCta } from "@/features/corporate/components/corporate-cta";
import { CorporateGallery } from "@/features/corporate/components/corporate-gallery";
import { CorporateHero } from "@/features/corporate/components/corporate-hero";
import { CorporateLocations } from "@/features/corporate/components/corporate-locations";
import { CorporatePlans } from "@/features/corporate/components/corporate-plans";
import { CorporateProblem } from "@/features/corporate/components/corporate-problem";
import { CorporateSectors } from "@/features/corporate/components/corporate-sectors";
import { CorporateSolution } from "@/features/corporate/components/corporate-solution";
import { CorporateVideo } from "@/features/corporate/components/corporate-video";
import { LocationSection } from "@/features/location/components/location-section";

export const metadata: Metadata = {
  title: "Empresa · Convenio corporativo B2B",
  description:
    "Cadena hotelera corporativa Zentra Hotel & Cowork: tres sedes ejecutivas más espacios de trabajo premium en Chiclayo bajo un solo convenio.",
  alternates: { canonical: "/empresa" },
};

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function EmpresaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <CorporateHero />
      <CorporateProblem />
      <CorporateBenefits />
      <CorporateSectors />
      <CorporateLocations />
      <LocationSection />
      <CorporateGallery />
      <CorporateSolution />
      <CorporatePlans />
      <CorporateVideo />
      <CorporateCta />
      <CorporateAdvisorButton />
    </>
  );
}
