// Tipos del feature de servicios del hotel.
import type { LucideIcon } from "lucide-react";

import type { LocalizedString } from "@/lib/i18n-pick";

// Servicio ofrecido por el hotel con su icono representativo.
export interface HotelService {
  label: LocalizedString;
  icon: LucideIcon;
}
