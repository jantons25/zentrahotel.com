// Genera el sitemap.xml del sitio a partir de las rutas públicas.
import type { MetadataRoute } from "next";

import { mainNav, siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return mainNav.map((item) => ({
    url: `${siteConfig.url}${item.href === "/" ? "" : item.href}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: item.href === "/" ? 1 : 0.7,
  }));
}
