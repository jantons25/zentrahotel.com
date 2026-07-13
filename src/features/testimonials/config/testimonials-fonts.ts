// Fuente serif variable Fraunces, cargada localmente y limitada a la sección testimonios-titulo.
import { Fraunces } from "next/font/google";

export const fontTestimonialsDisplay = Fraunces({
  subsets: ["latin"],
  variable: "--font-testimonials-display",
  display: "swap",
  axes: ["SOFT", "opsz"],
});
