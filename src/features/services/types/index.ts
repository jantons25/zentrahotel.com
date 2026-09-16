// Tipos del feature de servicios del hotel.
import type { LucideIcon } from "lucide-react";

import type { LocalizedString } from "@/lib/i18n-pick";

// Servicio ofrecido por el hotel con su icono, imagen y el detalle que se
// despliega al pasar el cursor sobre la tarjeta.
export interface HotelService {
  label: LocalizedString;
  icon: LucideIcon;
  /** Foto de un espacio real de la cadena que ilustra el servicio. */
  image: string;
  /** Descripción breve que aparece al expandir la tarjeta. */
  detail: LocalizedString;
  /** Puntos concretos del servicio, visibles al expandir la tarjeta. */
  highlights: LocalizedString[];
}
