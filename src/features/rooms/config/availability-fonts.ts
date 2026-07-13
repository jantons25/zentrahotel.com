// Fuente serif variable Fraunces, cargada localmente y limitada a la sección disponibilidad-titulo.
import { Fraunces } from "next/font/google";

export const fontAvailabilityDisplay = Fraunces({
  subsets: ["latin"],
  variable: "--font-availability-display",
  display: "swap",
  axes: ["SOFT", "opsz"],
});
