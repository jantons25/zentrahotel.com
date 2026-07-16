// Fuente serif variable Fraunces, cargada localmente y limitada a la página Nosotros.
import { Fraunces } from "next/font/google";

export const fontAboutDisplay = Fraunces({
  subsets: ["latin"],
  variable: "--font-about-display",
  display: "swap",
  axes: ["SOFT", "opsz"],
});
