// Fuente serif variable Fraunces, cargada localmente y limitada a la sección promociones.
import { Fraunces } from "next/font/google";

export const fontOffersDisplay = Fraunces({
  subsets: ["latin"],
  variable: "--font-offers-display",
  display: "swap",
  axes: ["SOFT", "opsz"],
});
