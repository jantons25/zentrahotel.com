"use client";

// Conmutador de idioma en línea: "ES | EN". Sustituye al desplegable en el header
// porque ahora la barra solo carga el botón de menú y los idiomas.
import { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { cn } from "@/lib/utils";

interface LocaleSwitchProps {
  className?: string;
  size?: "sm" | "lg";
}

export function LocaleSwitch({ className, size = "sm" }: LocaleSwitchProps) {
  const t = useTranslations("languageSelector");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleSelect = (next: string) => {
    if (next === locale) return;
    startTransition(() => {
      router.replace(pathname, {
        locale: next as (typeof routing.locales)[number],
      });
    });
  };

  return (
    <div
      aria-label={t("trigger")}
      className={cn(
        "flex items-center gap-2 font-semibold tracking-[0.18em] uppercase",
        size === "lg" ? "text-sm gap-3" : "text-[0.72rem]",
        isPending && "opacity-60",
        className,
      )}
    >
      {routing.locales.map((code, index) => (
        <span key={code} className="flex items-center gap-2">
          {index > 0 ? (
            <span aria-hidden="true" className="text-current/35">
              |
            </span>
          ) : null}
          <button
            type="button"
            disabled={isPending}
            onClick={() => handleSelect(code)}
            aria-current={code === locale ? "true" : undefined}
            className={cn(
              "rounded-sm transition-opacity duration-(--duration-fast) focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none",
              code === locale
                ? "opacity-100 underline decoration-primary decoration-2 underline-offset-[6px]"
                : "opacity-60 hover:opacity-100",
            )}
          >
            {code.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}
