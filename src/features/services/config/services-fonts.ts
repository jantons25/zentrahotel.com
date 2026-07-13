// Fuente serif variable Fraunces, cargada localmente y limitada a la sección servicios-titulo.
import { Fraunces } from "next/font/google";

export const fontServicesDisplay = Fraunces({
  subsets: ["latin"],
  variable: "--font-services-display",
  display: "swap",
  axes: ["SOFT", "opsz"],
});
