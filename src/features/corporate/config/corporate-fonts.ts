// Fuente serif variable Fraunces, cargada localmente y limitada a la landing corporativa.
import { Fraunces } from "next/font/google";

export const fontCorporateDisplay = Fraunces({
  subsets: ["latin"],
  variable: "--font-corporate-display",
  display: "swap",
  axes: ["SOFT", "opsz"],
});
