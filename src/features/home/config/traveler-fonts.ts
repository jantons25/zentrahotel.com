// Fuente serif variable Fraunces, cargada localmente y limitada a la sección viajero-titulo.
import { Fraunces } from "next/font/google";

export const fontTravelerDisplay = Fraunces({
  subsets: ["latin"],
  variable: "--font-traveler-display",
  display: "swap",
  axes: ["SOFT", "opsz"],
});
