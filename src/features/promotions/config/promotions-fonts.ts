// Fuente serif variable Fraunces, usada por la página completa /promociones.
import { Fraunces } from "next/font/google";

export const fontPromotionsDisplay = Fraunces({
  subsets: ["latin"],
  variable: "--font-promotions-display",
  display: "swap",
  axes: ["SOFT", "opsz"],
});
