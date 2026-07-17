"use client";

// Selector de idioma del sitio: cambia el prefijo de locale de la URL preservando la ruta.
import { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { ChevronDown, Globe } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { siteConfig } from "@/config/site";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

type SupportedLocale = (typeof routing.locales)[number];

function isSupported(code: string): code is SupportedLocale {
  return (routing.locales as readonly string[]).includes(code);
}

export function LanguageSelector() {
  const t = useTranslations("languageSelector");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleSelect = (nextCode: string) => {
    if (!isSupported(nextCode) || nextCode === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: nextCode });
    });
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        aria-label={t("trigger")}
        disabled={isPending}
        className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors duration-(--duration-fast) hover:text-secondary focus-visible:ring-3 focus-visible:ring-ring/50 rounded-md px-1 py-1 outline-none disabled:opacity-70"
      >
        <Globe className="size-4" aria-hidden="true" />
        {locale.toUpperCase()}
        <ChevronDown className="size-3.5" aria-hidden="true" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {siteConfig.languages.map((lang) => {
          const enabled = isSupported(lang.code);
          return (
            <DropdownMenuItem
              key={lang.code}
              disabled={!enabled}
              onClick={enabled ? () => handleSelect(lang.code) : undefined}
            >
              {lang.label}
              {!enabled ? (
                <span className="ml-auto text-xs text-muted-foreground">
                  {t("soon")}
                </span>
              ) : null}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
