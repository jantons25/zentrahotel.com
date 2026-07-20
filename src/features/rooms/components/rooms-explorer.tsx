"use client";

// Explorador de habitaciones: filtro por sede + bloques editoriales, misma lógica que /promociones.
import { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { RoomDetailBlock } from "@/features/rooms/components/room-detail-block";
import {
  rooms,
  sedeOrder,
  sedeShortLabels,
} from "@/features/rooms/data/rooms";
import type { RoomSede } from "@/features/rooms/types";
import { pick } from "@/lib/i18n-pick";

import styles from "./rooms-page.module.css";

type Filter = "todas" | RoomSede;

export function RoomsExplorer() {
  const t = useTranslations("rooms.explorer");
  const locale = useLocale();
  const [active, setActive] = useState<Filter>("todas");

  const filterLabels: Record<Filter, string> = {
    todas: t("filterAll"),
    balta: pick(sedeShortLabels.balta, locale),
    plaza: pick(sedeShortLabels.plaza, locale),
    "san-jose": pick(sedeShortLabels["san-jose"], locale),
  };

  const counts = useMemo(() => {
    return rooms.reduce<Record<RoomSede, number>>(
      (acc, room) => {
        acc[room.sede] = (acc[room.sede] ?? 0) + 1;
        return acc;
      },
      { balta: 0, plaza: 0, "san-jose": 0 },
    );
  }, []);

  const filters: Filter[] = ["todas", ...sedeOrder];

  const filtered = useMemo(() => {
    if (active === "todas") return rooms;
    return rooms.filter((room) => room.sede === active);
  }, [active]);

  return (
    <div id="habitaciones-explorador">
      <Section
        aria-labelledby="habitaciones-filtro-titulo"
        className={`${styles.section} relative overflow-hidden bg-[color-mix(in_oklab,var(--accent)_60%,white)]`}
      >
        <div className={styles.auroraOne} aria-hidden="true" />
        <div className={styles.auroraTwo} aria-hidden="true" />
        <Container className="relative">
          <header
            className={`${styles.reveal} flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between`}
            style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
          >
            <div>
              <p className="flex items-center gap-3 text-[0.72rem] font-semibold tracking-[0.28em] text-secondary/70 uppercase">
                <span className="h-px w-8 bg-secondary/40" aria-hidden="true" />
                {t("filterEyebrow")}
              </p>
              <h2
                id="habitaciones-filtro-titulo"
                className="mt-5 font-[family-name:var(--font-rooms-display)] font-light leading-[0.98] tracking-[-0.02em] text-secondary text-balance text-[clamp(2rem,4.4vw,3.2rem)]"
              >
                {t("titleA")}{" "}
                <span className="italic font-normal text-secondary/85">{t("titleEmphasis")}</span>
              </h2>
            </div>
          </header>

          <div
            className={`${styles.reveal} mt-8 -mx-4 overflow-x-auto px-4 sm:mx-0 sm:overflow-visible sm:px-0`}
            style={{ "--reveal-delay": "120ms" } as React.CSSProperties}
          >
            <div
              role="tablist"
              aria-label={t("filterAria")}
              className="inline-flex min-w-max items-center gap-2 sm:flex-wrap"
            >
              {filters.map((filter) => {
                const isActive = active === filter;
                const count = filter === "todas" ? rooms.length : counts[filter as RoomSede];
                return (
                  <button
                    key={filter}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    aria-controls="habitaciones-lista"
                    onClick={() => setActive(filter)}
                    className={`${styles.filterPill} group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold tracking-[0.14em] uppercase focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary motion-reduce:transition-none ${
                      isActive
                        ? "border-secondary bg-secondary text-secondary-foreground"
                        : "border-secondary/20 bg-white/70 text-secondary hover:border-secondary/50 hover:bg-white"
                    }`}
                  >
                    {filterLabels[filter]}
                    <span
                      className={`font-mono text-[0.62rem] tracking-[0.14em] ${
                        isActive ? "text-white/70" : "text-secondary/45"
                      }`}
                      aria-hidden="true"
                    >
                      {count.toString().padStart(2, "0")}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>

      {filtered.length > 0 ? (
        <div id="habitaciones-lista">
          {filtered.map((room, index) => (
            <RoomDetailBlock
              key={room.slug}
              room={room}
              index={index}
              total={filtered.length}
            />
          ))}
        </div>
      ) : (
        <div
          id="habitaciones-lista"
          className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
        >
          <div className="rounded-[1.5rem] border border-secondary/15 bg-white/80 p-10 text-center">
            <p className="text-[0.72rem] font-semibold tracking-[0.24em] text-secondary/60 uppercase">
              {t("emptyEyebrow")}
            </p>
            <p className="mt-3 font-[family-name:var(--font-rooms-display)] text-2xl font-light text-secondary">
              {t("emptyTitle")}
            </p>
            <p className="mt-3 text-sm text-muted-foreground">
              {t("emptyLead")}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
