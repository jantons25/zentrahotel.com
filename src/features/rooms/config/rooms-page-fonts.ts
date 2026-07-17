// Fuente serif variable Fraunces, usada por la página completa /habitaciones.
import { Fraunces } from "next/font/google";

export const fontRoomsDisplay = Fraunces({
  subsets: ["latin"],
  variable: "--font-rooms-display",
  display: "swap",
  axes: ["SOFT", "opsz"],
});
