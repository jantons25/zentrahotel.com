"use client";

// Selector de idioma del sitio (español activo; inglés y portugués preparados para i18n).
import { ChevronDown, Globe } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { siteConfig } from "@/config/site";

export function LanguageSelector() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors duration-(--duration-fast) hover:text-secondary focus-visible:ring-3 focus-visible:ring-ring/50 rounded-md px-1 py-1 outline-none">
        <Globe className="size-4" aria-hidden="true" />
        ES
        <ChevronDown className="size-3.5" aria-hidden="true" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {siteConfig.languages.map((lang) => (
          <DropdownMenuItem key={lang.code} disabled={!lang.available}>
            {lang.label}
            {!lang.available ? (
              <span className="ml-auto text-xs text-muted-foreground">
                Próximamente
              </span>
            ) : null}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
