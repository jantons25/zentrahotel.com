// Fuente serif variable Fraunces, cargada localmente y limitada a la sección habitaciones.
import { Fraunces } from "next/font/google";

export const fontShowcaseDisplay = Fraunces({
  subsets: ["latin"],
  variable: "--font-showcase-display",
  display: "swap",
  axes: ["SOFT", "opsz"],
});
