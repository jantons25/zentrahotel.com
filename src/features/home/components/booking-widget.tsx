"use client";

// Widget de reservas del Hero: formulario que redirige al Booking Engine Immersive 2.0 de Cloudbeds
// con los parámetros de check-in, check-out, huéspedes y código promocional prellenados.
import * as React from "react";
import { ArrowRight, CalendarDays, TicketPercent, UsersRound } from "lucide-react";

import { siteConfig } from "@/config/site";

import styles from "./hero-section.module.css";

function toISODate(date: Date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function addDays(base: Date, days: number) {
  const copy = new Date(base);
  copy.setDate(copy.getDate() + days);
  return copy;
}

// Construye la URL oficial del Booking Engine de Cloudbeds preservando `siteConfig.bookingUrl`.
function buildCloudbedsUrl(params: {
  checkin: string;
  checkout: string;
  adults: number;
  rooms: number;
  promo?: string;
}) {
  const url = new URL(siteConfig.bookingUrl);
  url.searchParams.set("checkin", params.checkin);
  url.searchParams.set("checkout", params.checkout);
  url.searchParams.set("adults", String(params.adults));
  url.searchParams.set("rooms", String(params.rooms));
  url.searchParams.set("kids", "0");
  if (params.promo) url.searchParams.set("promo", params.promo);
  return url.toString();
}

export function BookingWidget() {
  const today = React.useMemo(() => toISODate(new Date()), []);
  const defaultCheckIn = React.useMemo(
    () => toISODate(addDays(new Date(), 1)),
    [],
  );
  const defaultCheckOut = React.useMemo(
    () => toISODate(addDays(new Date(), 3)),
    [],
  );

  const [checkin, setCheckin] = React.useState(defaultCheckIn);
  const [checkout, setCheckout] = React.useState(defaultCheckOut);
  const [rooms, setRooms] = React.useState("1");
  const [adults, setAdults] = React.useState("2");
  const [promo, setPromo] = React.useState("");

  const checkoutMin = React.useMemo(
    () => toISODate(addDays(new Date(checkin), 1)),
    [checkin],
  );

  // Adelanta el checkout si el nuevo checkin lo dejaría en el pasado.
  const handleCheckinChange = (value: string) => {
    setCheckin(value);
    if (new Date(checkout) <= new Date(value)) {
      setCheckout(toISODate(addDays(new Date(value), 1)));
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const url = buildCloudbedsUrl({
      checkin,
      checkout,
      adults: Number(adults),
      rooms: Number(rooms),
      promo: promo.trim() || undefined,
    });
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`${styles.widget} relative flex flex-col gap-3 rounded-[1.75rem] border border-white/25 bg-white/95 p-5 text-secondary shadow-[0_24px_60px_rgba(0,0,0,0.3)] backdrop-blur-xl sm:p-6`}
      aria-labelledby="hero-booking-heading"
    >
      <div className="flex items-center gap-3">
        <span
          className="grid size-9 place-items-center rounded-full bg-primary/15 text-secondary"
          aria-hidden="true"
        >
          <CalendarDays className="size-4" strokeWidth={1.75} />
        </span>
        <div>
          <p className="text-[0.62rem] font-mono text-secondary/55 uppercase tracking-tight text-balance sm:text-[1.7rem]">
            Reserva directo
          </p>
          <h3
            id="hero-booking-heading"
            className="font-[family-name:var(--font-hero-display)] text-lg font-normal leading-tight text-secondary"
          >
            Consulta disponibilidad
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <label
          className={`${styles.field} flex flex-col gap-1 rounded-2xl border border-secondary/15 bg-white px-4 py-3`}
        >
          <span className="text-[0.6rem] font-semibold tracking-[0.22em] text-secondary/60 uppercase">
            Check-in
          </span>
          <input
            type="date"
            required
            min={today}
            value={checkin}
            onChange={(e) => handleCheckinChange(e.target.value)}
            className="bg-transparent text-sm font-semibold text-secondary outline-none"
          />
        </label>
        <label
          className={`${styles.field} flex flex-col gap-1 rounded-2xl border border-secondary/15 bg-white px-4 py-3`}
        >
          <span className="text-[0.6rem] font-semibold tracking-[0.22em] text-secondary/60 uppercase">
            Check-out
          </span>
          <input
            type="date"
            required
            min={checkoutMin}
            value={checkout}
            onChange={(e) => setCheckout(e.target.value)}
            className="bg-transparent text-sm font-semibold text-secondary outline-none"
          />
        </label>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <label
          className={`${styles.field} flex items-center gap-2 rounded-2xl border border-secondary/15 bg-white px-4 py-3`}
        >
          <UsersRound
            className="size-4 shrink-0 text-secondary/60"
            strokeWidth={1.75}
            aria-hidden="true"
          />
          <div className="flex min-w-0 flex-1 flex-col">
            <span className="text-[0.6rem] font-semibold tracking-[0.22em] text-secondary/60 uppercase">
              Huéspedes
            </span>
            <select
              value={adults}
              onChange={(e) => setAdults(e.target.value)}
              className="bg-transparent text-sm font-semibold text-secondary outline-none"
              aria-label="Número de adultos"
            >
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? "adulto" : "adultos"}
                </option>
              ))}
            </select>
          </div>
        </label>
        <label
          className={`${styles.field} flex flex-col gap-1 rounded-2xl border border-secondary/15 bg-white px-4 py-3`}
        >
          <span className="text-[0.6rem] font-semibold tracking-[0.22em] text-secondary/60 uppercase">
            Habitaciones
          </span>
          <select
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
            className="bg-transparent text-sm font-semibold text-secondary outline-none"
            aria-label="Número de habitaciones"
          >
            {[1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>
                {n} {n === 1 ? "habitación" : "habitaciones"}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label
        className={`${styles.field} flex items-center gap-3 rounded-2xl border border-dashed border-secondary/25 bg-white px-4 py-3`}
      >
        <TicketPercent
          className="size-4 shrink-0 text-secondary/60"
          strokeWidth={1.75}
          aria-hidden="true"
        />
        <div className="flex min-w-0 flex-1 flex-col">
          <span className="text-[0.6rem] font-semibold tracking-[0.22em] text-secondary/60 uppercase">
            Código promocional
          </span>
          <input
            type="text"
            value={promo}
            onChange={(e) => setPromo(e.target.value.toUpperCase())}
            placeholder=""
            className="bg-transparent text-sm font-semibold tracking-[0.08em] text-secondary uppercase outline-none placeholder:font-medium placeholder:tracking-normal placeholder:normal-case placeholder:text-secondary/40"
            autoComplete="off"
          />
        </div>
      </label>

      <button
        type="submit"
        className="group mt-1 inline-flex items-center justify-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold tracking-[0.16em] text-primary-foreground uppercase transition-transform duration-(--duration-normal) hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none motion-reduce:hover:translate-y-0"
      >
        Ver disponibilidad
        <ArrowRight
          className="size-4 transition-transform duration-(--duration-normal) group-hover:translate-x-1 motion-reduce:transition-none"
          strokeWidth={2}
          aria-hidden="true"
        />
      </button>

      <p className="text-center text-[0.68rem] leading-relaxed text-secondary/55">
        Sin cargos ocultos · Cancelación flexible · Confirmación inmediata
      </p>
    </form>
  );
}
