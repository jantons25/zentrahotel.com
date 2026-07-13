"use client";

// Insignia con cuenta regresiva de días restantes de una oferta.
import { useSyncExternalStore } from "react";

import { Badge } from "@/components/ui/badge";

interface CountdownBadgeProps {
  expiresAt: string;
}

// Calcula los días completos que faltan hasta la fecha de expiración (negativo si ya venció).
function daysUntil(expiresAt: string): number {
  const diff = new Date(expiresAt).getTime() - Date.now();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

// Suscripción vacía: el valor solo necesita diferir entre servidor y cliente, no reaccionar.
const emptySubscribe = () => () => {};

export function CountdownBadge({ expiresAt }: CountdownBadgeProps) {
  // En el servidor se omite (null) para evitar diferencias de hidratación con la hora local.
  const days = useSyncExternalStore(
    emptySubscribe,
    () => daysUntil(expiresAt),
    () => null,
  );

  if (days === null) return null;

  const label =
    days > 0
      ? `Termina en ${days} ${days === 1 ? "día" : "días"}`
      : days === 0
        ? "Último día"
        : "Oferta finalizada";

  return (
    <Badge
      className={`absolute -top-3 right-4 rounded-full px-4 py-1.5 text-xs font-bold shadow-card md:text-sm ${
        days < 0
          ? "bg-muted text-muted-foreground"
          : "bg-secondary text-secondary-foreground"
      }`}
    >
      {label}
    </Badge>
  );
}
