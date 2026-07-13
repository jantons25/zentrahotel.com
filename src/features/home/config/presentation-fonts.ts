// Fuente serif variable Fraunces, cargada localmente y limitada a la sección de presentación.
import { Fraunces } from "next/font/google";

export const fontPresentationDisplay = Fraunces({
  subsets: ["latin"],
  variable: "--font-presentation-display",
  display: "swap",
  axes: ["SOFT", "opsz"],
});
