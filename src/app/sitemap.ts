// Genera el sitemap.xml del sitio a partir de las rutas públicas, con hreflang por locale.
import type { MetadataRoute } from "next";

import { mainNav, siteConfig } from "@/config/site";
import { routing } from "@/i18n/routing";

function buildLocaleUrl(locale: string, href: string) {
  const prefix =
    locale === routing.defaultLocale ? "" : `/${locale}`;
  const path = href === "/" ? "" : href;
  return `${siteConfig.url}${prefix}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routing.locales.flatMap((locale) =>
    mainNav.map((item) => ({
      url: buildLocaleUrl(locale, item.href),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: item.href === "/" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, buildLocaleUrl(l, item.href)]),
        ),
      },
    })),
  );
}
