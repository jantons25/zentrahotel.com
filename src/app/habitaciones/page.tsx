// Página "Habitaciones": hero editorial + explorador con filtro por sede y bloques tipo galería Airbnb.
import type { Metadata } from "next";

import { RoomsExplorer } from "@/features/rooms/components/rooms-explorer";
import { RoomsPageHero } from "@/features/rooms/components/rooms-page-hero";
import { fontRoomsDisplay } from "@/features/rooms/config/rooms-page-fonts";

export const metadata: Metadata = {
  title: "Habitaciones · Zentra Hotel",
  description:
    "Habitaciones por sede en Zentra Balta, Plaza y San José: individual, matrimonial, doble, suite con jacuzzi y más. Filtra por sede y reserva directo con mejor tarifa.",
  alternates: { canonical: "/habitaciones" },
};

export default function HabitacionesPage() {
  return (
    <div className={fontRoomsDisplay.variable}>
      <RoomsPageHero />
      <RoomsExplorer />
    </div>
  );
}
