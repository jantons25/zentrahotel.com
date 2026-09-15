// Fuente serif variable Fraunces, cargada localmente y limitada al menú a pantalla completa.
import { Fraunces } from "next/font/google";

export const fontMenuDisplay = Fraunces({
  subsets: ["latin"],
  variable: "--font-menu-display",
  display: "swap",
  axes: ["SOFT", "opsz"],
});
