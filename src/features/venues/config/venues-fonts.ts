// Fuente serif variable Fraunces, cargada localmente y limitada a la sección de sedes.
import { Fraunces } from "next/font/google";

export const fontVenuesDisplay = Fraunces({
  subsets: ["latin"],
  variable: "--font-venues-display",
  display: "swap",
  axes: ["SOFT", "opsz"],
});
