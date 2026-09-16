// Página de la sede: hero con carrusel y motor de reservas propios + mosaico de habitaciones.
import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import { VenuePageView } from "@/features/venues/components/venue-page-view";
import { venuePages } from "@/features/venues/data/venue-pages";

const venue = venuePages["sede-balta"];

export const metadata: Metadata = {
  title: venue.name,
  description: venue.metaDescription.es,
  alternates: { canonical: "/sede-balta" },
};

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <VenuePageView slug="sede-balta" />;
}
