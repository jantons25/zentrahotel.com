// Fuente serif variable Fraunces, cargada localmente y limitada al footer.
import { Fraunces } from "next/font/google";

export const fontFooterDisplay = Fraunces({
  subsets: ["latin"],
  variable: "--font-footer-display",
  display: "swap",
  axes: ["SOFT", "opsz"],
});
