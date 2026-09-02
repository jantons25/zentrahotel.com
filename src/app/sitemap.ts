// Genera el sitemap.xml del sitio a partir de las rutas públicas, con hreflang por locale.
import type { MetadataRoute } from "next";

import { mainNav, siteConfig } from "@/config/site";
import { getPublishedSlugs } from "@/features/blog/lib/get-post";
import { routing } from "@/i18n/routing";

function buildLocaleUrl(locale: string, href: string) {
  const prefix =
    locale === routing.defaultLocale ? "" : `/${locale}`;
  const path = href === "/" ? "" : href;
  return `${siteConfig.url}${prefix}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Rutas fijas del menú principal + un detalle por artículo publicado del diario.
  const routes = [
    ...mainNav.map((item) => item.href),
    ...getPublishedSlugs().map((slug) => `/blog/${slug}`),
  ];

  return routing.locales.flatMap((locale) =>
    routes.map((href) => ({
      url: buildLocaleUrl(locale, href),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: href === "/" ? 1 : href.startsWith("/blog/") ? 0.6 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, buildLocaleUrl(l, href)]),
        ),
      },
    })),
  );
}
