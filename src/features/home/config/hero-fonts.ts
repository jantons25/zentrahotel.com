// Fuente serif variable Fraunces, cargada localmente y limitada al Hero.
import { Fraunces } from "next/font/google";

export const fontHeroDisplay = Fraunces({
  subsets: ["latin"],
  variable: "--font-hero-display",
  display: "swap",
  axes: ["SOFT", "opsz"],
});
