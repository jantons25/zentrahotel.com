// Tipos del feature de servicios del hotel.
import type { LucideIcon } from "lucide-react";

import type { LocalizedString } from "@/lib/i18n-pick";

// Servicio ofrecido por el hotel con su icono e imagen representativos.
export interface HotelService {
  label: LocalizedString;
  icon: LucideIcon;
  /** Foto de un espacio real de la cadena que ilustra el servicio. */
  image: string;
}
