// Tipos del feature de experiencias del hotel.
import type { LocalizedString } from "@/lib/i18n-pick";

// Historia editorial de un ritual Zen para el grid de zen-titulo.
export interface ZenStory {
  category: LocalizedString;
  title: LocalizedString;
  excerpt: LocalizedString;
  duration: LocalizedString;
  releaseLabel: LocalizedString;
  image: string;
  imageAlt: LocalizedString;
}
