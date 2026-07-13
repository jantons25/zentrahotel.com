// Fuente serif variable Fraunces, cargada localmente y limitada a la sección ubicacion-titulo.
import { Fraunces } from "next/font/google";

export const fontLocationDisplay = Fraunces({
  subsets: ["latin"],
  variable: "--font-location-display",
  display: "swap",
  axes: ["SOFT", "opsz"],
});
