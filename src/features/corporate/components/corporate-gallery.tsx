// Galería del hub: grid editorial mixto con las marcas Zentra + Nexus.
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { fontCorporateDisplay } from "@/features/corporate/config/corporate-fonts";
import { corporateGallery } from "@/features/corporate/data/corporate";
import { pick } from "@/lib/i18n-pick";

import styles from "./corporate.module.css";

type GalleryTone = "solid" | "accent";

interface GalleryLayout {
  colSpan: string;
  aspect: string;
  tone: GalleryTone;
}

const galleryLayout: GalleryLayout[] = [
  { colSpan: "lg:col-span-2", aspect: "aspect-[3/4]", tone: "solid" },
  { colSpan: "lg:col-span-4", aspect: "aspect-[16/10]", tone: "solid" },
  { colSpan: "lg:col-span-3", aspect: "aspect-[3/2]", tone: "solid" },
  { colSpan: "lg:col-span-3", aspect: "aspect-[3/2]", tone: "accent" },
  { colSpan: "lg:col-span-4", aspect: "aspect-[16/10]", tone: "solid" },
  { colSpan: "lg:col-span-2", aspect: "aspect-[3/4]", tone: "accent" },
];

export async function CorporateGallery() {
  const t = await getTranslations("corporate.gallery");
  const locale = await getLocale();

  return (
    <Section
      id="galeria"
      aria-labelledby="galeria-titulo"
      className={`${fontCorporateDisplay.variable} relative overflow-hidden bg-[color-mix(in_oklab,var(--accent)_65%,white)]`}
    >
      <div
        className="pointer-events-none absolute -top-40 -left-24 size-[26rem] rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <Container className="relative">
        <header
          className={`${styles.reveal} flex flex-col gap-8 md:flex-row md:items-end md:justify-between`}
          style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
        >
          <div className="max-w-2xl">
            <p className="flex items-center gap-3 text-[0.8rem] font-semibold tracking-[0.28em] text-secondary/70 uppercase">
              <span className="h-px w-8 bg-secondary/40" aria-hidden="true" />
              {t("eyebrow")} · {corporateGallery.length.toString().padStart(2, "0")}
            </p>
            <h2
              id="galeria-titulo"
              className="mt-6 font-[family-name:var(--font-corporate-display)] font-light leading-[0.95] tracking-[-0.02em] text-secondary text-balance text-[clamp(2.3rem,5vw,4rem)]"
            >
              {t("titleA")}{" "}
              <span className="italic font-normal text-primary/90">{t("titleEmphasis")}</span>
            </h2>
            <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground">
              {t("lead")}
            </p>
          </div>
        </header>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-6 lg:gap-6">
          {corporateGallery.map((item, index) => {
            const layout = galleryLayout[index] ?? galleryLayout[0];
            const isAccent = layout.tone === "accent";
            const captionText = pick(item.caption, locale);
            const [title, tagline] = captionText.includes(" · ")
              ? captionText.split(" · ")
              : [captionText, ""];

            return (
              <li
                key={item.src}
                className={`${styles.reveal} ${layout.colSpan}`}
                style={
                  {
                    "--reveal-delay": `${120 + index * 80}ms`,
                  } as React.CSSProperties
                }
              >
                <figure
                  className={`${styles.card} group relative flex h-full w-full ${layout.aspect} flex-col justify-between overflow-hidden rounded-[1.75rem] p-6 text-white shadow-card sm:p-7`}
                >
                  <Image
                    src={item.src}
                    alt={pick(item.alt, locale)}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 40vw, 33vw"
                    className="absolute inset-0 -z-20 object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                  <div
                    className={
                      isAccent
                        ? "absolute inset-0 -z-10 bg-gradient-to-t from-secondary/60 via-secondary/25 to-primary/10"
                        : "absolute inset-0 -z-10 bg-gradient-to-t from-secondary/60 via-secondary/30 to-secondary/5"
                    }
                    aria-hidden="true"
                  />

                  <div className="flex items-start justify-between gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-[0.65rem] font-semibold tracking-[0.18em] text-primary-foreground uppercase shadow-card">
                      <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                      {(index + 1).toString().padStart(2, "0")} · {item.brand}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-[family-name:var(--font-corporate-display)] text-2xl font-light leading-tight tracking-tight text-balance sm:text-[1.9rem] lg:text-[2.05rem]">
                      {title}
                    </h3>
                    {tagline ? (
                      <p className="mt-2 max-w-sm text-sm leading-relaxed text-white/80">
                        {tagline}
                      </p>
                    ) : null}
                  </div>
                </figure>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
