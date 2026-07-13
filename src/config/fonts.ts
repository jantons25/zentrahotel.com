// Centraliza la carga de tipografías con next/font (Montserrat para todo el sitio).
import { Montserrat } from "next/font/google";

export const fontSans = Montserrat({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
