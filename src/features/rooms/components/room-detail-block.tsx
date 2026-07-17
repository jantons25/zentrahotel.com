// Bloque editorial por habitación: mosaico tipo galería + ficha con capacidad, amenidades y CTA.
import { ArrowUpRight, BedDouble, Eye, MessageCircle, Ruler, Users } from "lucide-react";

import { Container } from "@/components/common/container";
import { Section } from "@/components/common/section";
import { RoomGallery } from "@/features/rooms/components/room-gallery";
import { sedeLabels } from "@/features/rooms/data/rooms";
import { siteConfig } from "@/config/site";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import type { Room } from "@/features/rooms/types";

import styles from "./rooms-page.module.css";

interface RoomDetailBlockProps {
  room: Room;
  index: number;
  total: number;
}

export function RoomDetailBlock({ room, index, total }: RoomDetailBlockProps) {
  const isAlt = index % 2 === 1;
  const gallery = room.gallery ?? [{ src: room.image, alt: room.imageAlt }];
  const [mainImage, ...thumbs] = gallery;
  const visibleThumbs = thumbs.slice(0, 4);

  const number = (index + 1).toString().padStart(2, "0");
  const totalLabel = total.toString().padStart(2, "0");
  const sedeLabel = sedeLabels[room.sede];

  const ctaHref = room.pending
    ? buildWhatsAppUrl(
        `Hola, me interesa la ${room.name.toLowerCase()} de ${sedeLabel}. ¿Podrían confirmarme fotos, tarifa y disponibilidad?`,
      )
    : room.bookable
      ? siteConfig.bookingUrl
      : buildWhatsAppUrl(
          `Hola, me gustaría reservar la experiencia "${room.name}" en Zentra Hotel.`,
        );
  const ctaLabel = room.pending
    ? "Consultar disponibilidad"
    : room.bookable
      ? "Reservar"
      : "Solicitar por WhatsApp";
  const ctaExternal = true;

  return (
    <Section
      id={room.slug}
      aria-labelledby={`${room.slug}-titulo`}
      className={`relative scroll-mt-24 overflow-hidden ${
        isAlt
          ? "bg-[color-mix(in_oklab,var(--accent)_65%,white)]"
          : "bg-background"
      }`}
    >
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <aside
            className={`${styles.reveal} lg:col-span-5 xl:col-span-4`}
            style={{ "--reveal-delay": "0ms" } as React.CSSProperties}
          >
            <div className="flex items-start gap-4">
              <span
                className={`${styles.verticalLabel} hidden shrink-0 lg:inline-flex`}
                aria-hidden="true"
              >
                {room.category}
              </span>

              <div className="flex-1 min-w-0">
                <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[0.68rem] font-mono tracking-[0.22em] text-secondary/55 uppercase">
                  <span>Habitación · {number} / {totalLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-primary">{sedeLabel}</span>
                </p>

                {room.pending ? (
                  <p className="mt-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[0.62rem] font-semibold tracking-[0.18em] text-primary uppercase">
                    Fotos y detalle próximamente
                  </p>
                ) : null}

                <h2
                  id={`${room.slug}-titulo`}
                  className="mt-3 font-[family-name:var(--font-rooms-display)] font-light leading-[0.98] tracking-[-0.02em] text-secondary text-balance text-[clamp(2rem,4.2vw,3.2rem)]"
                >
                  {room.name.split(" ").slice(0, -1).join(" ")}{" "}
                  <span className="italic font-normal text-secondary/85">
                    {room.name.split(" ").slice(-1).join(" ")}.
                  </span>
                </h2>

                <p className="mt-4 text-[0.85rem] leading-relaxed font-medium tracking-wide text-primary uppercase">
                  {room.tagline}
                </p>

                <p className="mt-6 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {room.description}
                </p>

                <dl className="mt-8 grid grid-cols-1 gap-4 border-y border-secondary/10 py-6 sm:grid-cols-2">
                  <div className="flex items-start gap-3">
                    <Users
                      className="mt-0.5 size-4 text-primary"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="text-[0.62rem] font-semibold tracking-[0.22em] text-secondary/60 uppercase">
                        Capacidad
                      </dt>
                      <dd className="mt-1 text-sm font-medium text-secondary">
                        {room.capacity}
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <BedDouble
                      className="mt-0.5 size-4 text-primary"
                      strokeWidth={1.75}
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="text-[0.62rem] font-semibold tracking-[0.22em] text-secondary/60 uppercase">
                        Cama
                      </dt>
                      <dd className="mt-1 text-sm font-medium text-secondary">
                        {room.detail}
                      </dd>
                    </div>
                  </div>

                  {room.size ? (
                    <div className="flex items-start gap-3">
                      <Ruler
                        className="mt-0.5 size-4 text-primary"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                      <div>
                        <dt className="text-[0.62rem] font-semibold tracking-[0.22em] text-secondary/60 uppercase">
                          Tamaño
                        </dt>
                        <dd className="mt-1 text-sm font-medium text-secondary">
                          {room.size}
                        </dd>
                      </div>
                    </div>
                  ) : null}

                  {room.view ? (
                    <div className="flex items-start gap-3">
                      <Eye
                        className="mt-0.5 size-4 text-primary"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                      <div>
                        <dt className="text-[0.62rem] font-semibold tracking-[0.22em] text-secondary/60 uppercase">
                          Vista
                        </dt>
                        <dd className="mt-1 text-sm font-medium text-secondary">
                          {room.view}
                        </dd>
                      </div>
                    </div>
                  ) : null}
                </dl>

                {room.amenities && room.amenities.length > 0 ? (
                  <div className="mt-6">
                    <p className="text-[0.62rem] font-semibold tracking-[0.22em] text-secondary/60 uppercase">
                      Incluye
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {room.amenities.map((amenity) => (
                        <li
                          key={amenity.label}
                          className="inline-flex items-center gap-2 rounded-full border border-secondary/15 bg-white px-3 py-1.5 text-xs font-medium text-secondary"
                        >
                          <amenity.icon
                            className="size-3.5 text-primary"
                            strokeWidth={1.75}
                            aria-hidden="true"
                          />
                          {amenity.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <a
                    href={ctaHref}
                    target={ctaExternal ? "_blank" : undefined}
                    rel={ctaExternal ? "noopener noreferrer" : undefined}
                    className="group inline-flex items-center justify-center gap-2 rounded-full bg-secondary px-6 py-3 text-sm font-semibold tracking-wide text-secondary-foreground uppercase transition-transform duration-(--duration-normal) hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                    aria-label={`${ctaLabel}: ${room.name}`}
                  >
                    {ctaLabel}
                    <ArrowUpRight
                      className="size-4 transition-transform duration-(--duration-normal) group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transition-none"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </a>

                  {room.bookable ? (
                    <a
                      href={buildWhatsAppUrl(
                        `Hola, me interesa la ${room.name} en Zentra Hotel. ¿Podrían darme más información?`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center gap-2 rounded-full border border-secondary/30 bg-transparent px-6 py-3 text-sm font-semibold tracking-wide text-secondary uppercase transition-colors duration-(--duration-normal) hover:border-secondary hover:bg-secondary hover:text-secondary-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-secondary motion-reduce:transition-none"
                    >
                      <MessageCircle
                        className="size-4"
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                      Consultar
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
          </aside>

          <div
            className={`${styles.reveal} lg:col-span-7 xl:col-span-8`}
            style={{ "--reveal-delay": "160ms" } as React.CSSProperties}
          >
            <RoomGallery
              mainImage={mainImage}
              thumbs={visibleThumbs}
              badge={`${number} · ${room.category}`}
              priority={index === 0}
              srLabel={`Fotografías de ${room.name} en Zentra Hotel.`}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
