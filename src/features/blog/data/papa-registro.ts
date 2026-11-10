// Láminas del carrusel "Registro para la misa del Papa": separador editorial del
// blog. Cada lámina ya trae su propio texto, así que el carrusel las muestra limpias.
import type { LocalizedString } from "@/lib/i18n-pick";

export interface PapaRegistroSlide {
  image: string;
  imageAlt: LocalizedString;
  /** Etiqueta corta que acompaña al contador de la columna editorial. */
  tag: LocalizedString;
}

/** Artículo del diario que desarrolla la guía completa del registro. */
export const papaRegistroPostSlug = "registro-joinnus-misa-papa-chiclayo";

const base = "/images/blog/registro-joinnus-misa/carrusel";

export const papaRegistroSlides: PapaRegistroSlide[] = [
  {
    image: `${base}/lamina-01.webp`,
    imageAlt: {
      es: "Visita del papa León XIV: así será tu registro e ingreso para la misa en las Pampas de Pimentel",
      en: "Pope Leo XIV's visit: how registration and entry will work for the Mass at the Pampas de Pimentel",
    },
    tag: { es: "Portada", en: "Cover" },
  },
  {
    image: `${base}/lamina-02.webp`,
    imageAlt: {
      es: "Se abre el registro el viernes 30 de octubre a las 10:00 a. m., hasta 3 entradas intransferibles por persona",
      en: "Registration opens Friday 30 October at 10:00 a.m., up to 3 non-transferable tickets per person",
    },
    tag: { es: "Apertura", en: "Opening" },
  },
  {
    image: `${base}/lamina-03.webp`,
    imageAlt: {
      es: "Crea tu cuenta en Joinnus en tres pasos: regístrate, verifica tu email con el código de 6 dígitos y listo",
      en: "Create your Joinnus account in three steps: sign up, verify your email with the 6-digit code, and you're done",
    },
    tag: { es: "Joinnus", en: "Joinnus" },
  },
  {
    image: `${base}/lamina-04.webp`,
    imageAlt: {
      es: "Datos de tu entrada: nombre completo, número de DNI, cuadrante, horario de ingreso y puerta asignada",
      en: "Your ticket details: full name, ID number, assigned quadrant, entry time, and assigned gate",
    },
    tag: { es: "Tu entrada", en: "Your ticket" },
  },
  {
    image: `${base}/lamina-05.webp`,
    imageAlt: {
      es: "El DNI es obligatorio. Apertura de puertas el jueves 12 de noviembre a las 8:00 p. m. y cierre el viernes 13 a las 8:00 a. m.",
      en: "Your ID is mandatory. Gates open Thursday 12 November at 8:00 p.m. and close Friday 13 at 8:00 a.m.",
    },
    tag: { es: "DNI y horarios", en: "ID and times" },
  },
  {
    image: `${base}/lamina-06.webp`,
    imageAlt: {
      es: "Reserva ahora en Zentra Hotel & Cowork por WhatsApp al +51 924 048 177",
      en: "Book now at Zentra Hotel & Cowork via WhatsApp at +51 924 048 177",
    },
    tag: { es: "Reserva", en: "Book" },
  },
];
