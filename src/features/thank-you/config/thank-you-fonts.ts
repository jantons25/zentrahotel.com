// Fuente serif variable Fraunces, limitada a la landing de agradecimiento de reserva.
import { Fraunces } from "next/font/google";

export const fontThankYouDisplay = Fraunces({
  subsets: ["latin"],
  variable: "--font-thank-you-display",
  display: "swap",
  axes: ["SOFT", "opsz"],
});
