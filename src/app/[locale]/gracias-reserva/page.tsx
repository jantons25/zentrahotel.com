// Landing de agradecimiento tras reservar: pasos para confirmar la reserva e información de la estadía.
// No se indexa: es una página de destino post-reserva, no debe recibir tráfico orgánico.
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { ThankYouHero } from "@/features/thank-you/components/thank-you-hero";
import { ThankYouInfo } from "@/features/thank-you/components/thank-you-info";
import { ThankYouPayment } from "@/features/thank-you/components/thank-you-payment";

export const metadata: Metadata = {
  title: "Gracias por tu reserva",
  description:
    "Tu reserva en Zentra Hotel está pendiente de confirmación. Sigue los pasos para confirmarla.",
  alternates: { canonical: "/gracias-reserva" },
  robots: { index: false, follow: false },
};

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function GraciasReservaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <ThankYouHero />
      <ThankYouPayment />
      <ThankYouInfo />
    </>
  );
}
