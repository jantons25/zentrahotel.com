// Fuente serif variable Fraunces, cargada localmente y limitada a la sección reservas-titulo.
import { Fraunces } from "next/font/google";

export const fontBookingDisplay = Fraunces({
  subsets: ["latin"],
  variable: "--font-booking-display",
  display: "swap",
  axes: ["SOFT", "opsz"],
});
