// Fuente serif variable Fraunces para el diario editorial de Zentra.
import { Fraunces } from "next/font/google";

export const fontBlogDisplay = Fraunces({
  subsets: ["latin"],
  variable: "--font-blog-display",
  display: "swap",
  axes: ["SOFT", "opsz"],
});
