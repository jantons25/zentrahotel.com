// Fuente serif variable Fraunces, cargada localmente y limitada a la sección zen-titulo.
import { Fraunces } from "next/font/google";

export const fontZenDisplay = Fraunces({
  subsets: ["latin"],
  variable: "--font-zen-display",
  display: "swap",
  axes: ["SOFT", "opsz"],
});
