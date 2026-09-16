// Banner superior del header: cinta verde (--primary) de ofertas flash con
// desplazamiento horizontal infinito. El contenido se duplica para que el bucle
// no tenga corte. Sobre el oliva, el texto va en navy para mantener el contraste.
import { getLocale, getTranslations } from "next-intl/server";
import { Zap } from "lucide-react";

import { flashOffers } from "@/features/flash-offers/data/flash-offers";
import { pick } from "@/lib/i18n-pick";

export async function FlashOffersBanner() {
  const t = await getTranslations("flashOffers");
  const locale = await getLocale();

  const items = flashOffers.map((offer) => ({
    id: offer.id,
    text: pick(offer.label, locale),
    code: offer.code,
  }));

  // Duración proporcional al número de piezas para mantener una velocidad constante.
  const duration = `${items.length * 9}s`;

  return (
    <div
      aria-label={t("aria")}
      className="relative flex h-[var(--h-flash)] w-full items-center overflow-hidden bg-primary text-secondary"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-primary to-transparent md:w-16"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-primary to-transparent md:w-16"
      />

      <div
        className="animate-marquee-x flex w-max items-center"
        style={{ "--marquee-duration": duration } as React.CSSProperties}
      >
        {/* Dos pasadas idénticas: la animación recorre justo el 50% del ancho. */}
        {[0, 1].map((pass) => (
          <ul
            key={pass}
            aria-hidden={pass === 1 ? "true" : undefined}
            className="flex items-center"
          >
            {items.map((item) => (
              <li
                key={`${pass}-${item.id}`}
                className="flex shrink-0 items-center gap-3 px-5 md:gap-4 md:px-8"
              >
                <Zap
                  className="size-3.5 shrink-0 text-secondary md:size-4"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <span className="text-[0.62rem] font-semibold tracking-[0.18em] whitespace-nowrap text-secondary uppercase md:text-[0.72rem] md:tracking-[0.22em]">
                  {t("prefix")}
                </span>
                <span className="text-xs font-medium whitespace-nowrap text-secondary md:text-sm">
                  {item.text}
                </span>
                {item.code ? (
                  <span className="rounded-full bg-secondary px-2.5 py-0.5 font-mono text-[0.6rem] tracking-[0.16em] whitespace-nowrap text-white uppercase md:text-[0.68rem]">
                    {item.code}
                  </span>
                ) : null}
                <span
                  aria-hidden="true"
                  className="ml-2 size-1 rounded-full bg-secondary/35 md:ml-4"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
