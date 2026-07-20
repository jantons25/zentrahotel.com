// Helper para resolver campos bilingües en los data files.
// Uso: pick(item.title, locale) — devuelve el valor del locale actual, con fallback a español.

import { routing } from "@/i18n/routing";

export type AppLocale = (typeof routing.locales)[number];

// Un campo bilingüe: un objeto con una entrada por locale soportado.
export type LocalizedString = Record<AppLocale, string>;

// Resuelve un LocalizedString al valor del locale actual (fallback: defaultLocale).
export function pick(field: LocalizedString, locale: string): string {
  if (locale in field) return field[locale as AppLocale];
  return field[routing.defaultLocale as AppLocale];
}
