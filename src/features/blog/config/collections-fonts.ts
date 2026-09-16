// Fuente serif variable Fraunces, limitada al separador "Colecciones" del blog.
import { Fraunces } from "next/font/google";

export const fontCollectionsDisplay = Fraunces({
  subsets: ["latin"],
  variable: "--font-collections-display",
  display: "swap",
  axes: ["SOFT", "opsz"],
});
