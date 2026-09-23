"use client";

// Motor de reservas horizontal de Cloudbeds embebido en el hero.
//
// Usa el web component <cb-multi-property-date-picker> de Immersive Experience 2.0:
// muestra un selector de sede + check-in / check-out + botón de búsqueda en una sola
// fila (`layout="horizontal"`) y redirige al Booking Engine de la propiedad elegida.
// El script se carga una vez en el layout raíz (`siteConfig.cloudbeds.scriptUrl`).
//
// El web component ya pinta su propia tarjeta blanca, por eso su contenedor aquí no
// lleva fondo ni sombra: duplicarlos dejaba un panel blanco alrededor del motor.
//
// El selector de sede lo dibuja el propio web component: según la documentación de
// Cloudbeds, `<cb-multi-property-date-picker>` solo carga la lista de propiedades a
// partir del atributo `sub-domain` (subdominio de la Organización). Sin Organización
// creada no hay lista que pedir, así que mientras tanto se pinta un formulario propio
// con el mismo aspecto —incluido su propio selector de sede— que apunta al Booking
// Engine de la propiedad elegida.
import * as React from "react";
import { useLocale, useTranslations } from "next-intl";
import { ArrowRight, CalendarDays, MapPin, UsersRound } from "lucide-react";

import { siteConfig } from "@/config/site";
import { propertyBookingUrl } from "@/lib/booking";

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

const { cloudbeds } = siteConfig;

// Orden del selector de sedes. Se envía solo cuando TODAS las propiedades tienen
// código: una lista parcial en `property-order` dejaría fuera del desplegable a las
// sedes que faltan, y es preferible el orden por defecto de Cloudbeds.
const propertyOrder = cloudbeds.properties.every((property) => property.code)
  ? cloudbeds.properties.map((property) => property.code).join(";")
  : "";

interface CloudbedsSearchBarProps {
  /**
   * Fija el motor a una sola propiedad (páginas de sede): en vez del selector de
   * sedes se pinta el nombre de la sede y se reserva siempre contra su código.
   */
  property?: { code: string; name: string };
}

export function CloudbedsSearchBar({ property }: CloudbedsSearchBarProps = {}) {
  const t = useTranslations("home.searchBar");
  const locale = useLocale();

  // Con sede fija se usa siempre la barra propia: el web component de Organización
  // lista todas las propiedades y no admite restringirlo a una sola.
  if (property) {
    return <FallbackSearchBar locked={property} />;
  }

  if (cloudbeds.orgSubdomain) {
    return (
      <div className="cb-embed">
        <cb-multi-property-date-picker
          sub-domain={cloudbeds.orgSubdomain}
          layout="horizontal"
          button-label={t("submit")}
          lang={locale}
          currency={cloudbeds.currency}
          open-in-new-tab="true"
          class-name="zentra-date-picker"
          {...(propertyOrder ? { "property-order": propertyOrder } : {})}
        />
      </div>
    );
  }

  return <FallbackSearchBar />;
}

// Barra horizontal propia (fechas + huéspedes + buscar) con los mismos tokens de
// marca. Redirige al Booking Engine con los parámetros ya prellenados.
function FallbackSearchBar({
  locked,
}: {
  locked?: { code: string; name: string };
}) {
  const t = useTranslations("home.searchBar");

  const today = React.useMemo(() => toISODate(new Date()), []);
  // Las tres sedes ya tienen código de propiedad. La guarda se mantiene para que una
  // sede nueva sin código se liste inhabilitada en vez de romper la redirección.
  const [property, setProperty] = React.useState<string>(
    () =>
      locked?.code ??
      cloudbeds.properties.find((item) => item.code)?.code ??
      "",
  );
  const [checkin, setCheckin] = React.useState(() =>
    toISODate(addDays(new Date(), 1)),
  );
  const [checkout, setCheckout] = React.useState(() =>
    toISODate(addDays(new Date(), 3)),
  );
  const [adults, setAdults] = React.useState("2");

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
    const url = new URL(
      property ? propertyBookingUrl(property) : siteConfig.bookingUrl,
    );
    url.searchParams.set("checkin", checkin);
    url.searchParams.set("checkout", checkout);
    url.searchParams.set("adults", adults);
    url.searchParams.set("rooms", "1");
    url.searchParams.set("kids", "0");
    window.open(url.toString(), "_blank", "noopener,noreferrer");
  };

  return (
    <form
      onSubmit={handleSubmit}
      aria-label={t("aria")}
      className="flex flex-col gap-2.5 rounded-[1.5rem] border border-white/25 bg-white/95 p-3 text-secondary shadow-[0_24px_60px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:p-4 lg:flex-row lg:items-stretch lg:gap-3"
    >
      <label className="flex flex-1 items-center gap-3 rounded-2xl border border-secondary/15 bg-white px-4 py-2.5 transition-colors duration-(--duration-normal) focus-within:border-secondary/35 hover:border-secondary/30 motion-reduce:transition-none lg:max-w-[15rem]">
        <MapPin
          className="size-4 shrink-0 text-secondary/60"
          strokeWidth={1.75}
          aria-hidden="true"
        />
        <span className="flex min-w-0 flex-1 flex-col">
          <span className="text-[0.58rem] font-semibold tracking-[0.22em] text-secondary/60 uppercase">
            {t("venue")}
          </span>
          {locked ? (
            <span className="truncate text-sm font-semibold text-secondary">
              {locked.name}
            </span>
          ) : (
            <select
              value={property}
              onChange={(e) => setProperty(e.target.value)}
              aria-label={t("venueAria")}
              className="bg-transparent text-sm font-semibold text-secondary outline-none"
            >
              {cloudbeds.properties.map(({ code, name }) => (
                <option key={name} value={code} disabled={!code}>
                  {code ? name : `${name} ${t("venueSoon")}`}
                </option>
              ))}
            </select>
          )}
        </span>
      </label>

      <label className="flex flex-1 items-center gap-3 rounded-2xl border border-secondary/15 bg-white px-4 py-2.5 transition-colors duration-(--duration-normal) focus-within:border-secondary/35 hover:border-secondary/30 motion-reduce:transition-none">
        <CalendarDays
          className="size-4 shrink-0 text-secondary/60"
          strokeWidth={1.75}
          aria-hidden="true"
        />
        <span className="flex min-w-0 flex-1 flex-col">
          <span className="text-[0.58rem] font-semibold tracking-[0.22em] text-secondary/60 uppercase">
            {t("checkIn")}
          </span>
          <input
            type="date"
            required
            min={today}
            value={checkin}
            onChange={(e) => handleCheckinChange(e.target.value)}
            className="bg-transparent text-sm font-semibold text-secondary outline-none"
          />
        </span>
      </label>

      <label className="flex flex-1 items-center gap-3 rounded-2xl border border-secondary/15 bg-white px-4 py-2.5 transition-colors duration-(--duration-normal) focus-within:border-secondary/35 hover:border-secondary/30 motion-reduce:transition-none">
        <CalendarDays
          className="size-4 shrink-0 text-secondary/60"
          strokeWidth={1.75}
          aria-hidden="true"
        />
        <span className="flex min-w-0 flex-1 flex-col">
          <span className="text-[0.58rem] font-semibold tracking-[0.22em] text-secondary/60 uppercase">
            {t("checkOut")}
          </span>
          <input
            type="date"
            required
            min={checkoutMin}
            value={checkout}
            onChange={(e) => setCheckout(e.target.value)}
            className="bg-transparent text-sm font-semibold text-secondary outline-none"
          />
        </span>
      </label>

      <label className="flex flex-1 items-center gap-3 rounded-2xl border border-secondary/15 bg-white px-4 py-2.5 transition-colors duration-(--duration-normal) focus-within:border-secondary/35 hover:border-secondary/30 motion-reduce:transition-none lg:max-w-[13rem]">
        <UsersRound
          className="size-4 shrink-0 text-secondary/60"
          strokeWidth={1.75}
          aria-hidden="true"
        />
        <span className="flex min-w-0 flex-1 flex-col">
          <span className="text-[0.58rem] font-semibold tracking-[0.22em] text-secondary/60 uppercase">
            {t("guests")}
          </span>
          <select
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
            aria-label={t("guestsAria")}
            className="bg-transparent text-sm font-semibold text-secondary outline-none"
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>
                {t("adult", { n })}
              </option>
            ))}
          </select>
        </span>
      </label>

      <button
        type="submit"
        className="group inline-flex shrink-0 items-center justify-center gap-2.5 rounded-2xl bg-primary px-7 py-3.5 text-xs font-semibold tracking-[0.16em] text-primary-foreground uppercase transition-transform duration-(--duration-normal) hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary motion-reduce:transition-none motion-reduce:hover:translate-y-0 lg:px-8"
      >
        {t("submit")}
        <ArrowRight
          className="size-4 transition-transform duration-(--duration-normal) group-hover:translate-x-1 motion-reduce:transition-none"
          strokeWidth={2}
          aria-hidden="true"
        />
      </button>
    </form>
  );
}
