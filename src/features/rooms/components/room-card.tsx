// Tarjeta de habitación con foto, nombre, capacidad y detalle de camas.
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import type { Room } from "@/features/rooms/types";
import { siteConfig } from "@/config/site";

interface RoomCardProps {
  room: Room;
  showAvailabilityCta?: boolean;
}

export function RoomCard({ room, showAvailabilityCta = false }: RoomCardProps) {
  return (
    <Card className="group overflow-hidden border-border py-0 shadow-card transition-shadow duration-(--duration-normal) hover:shadow-card-hover">
      <div className="relative aspect-4/3 overflow-hidden">
        <Image
          src={room.image}
          alt={room.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-(--duration-slow) group-hover:scale-105"
        />
      </div>
      <CardContent className="space-y-1.5 p-5 pt-4 pb-6">
        <h3 className="text-lg font-bold text-primary">{room.name}</h3>
        <p className="text-sm text-muted-foreground">{room.capacity}</p>
        <p className="text-sm text-muted-foreground">{room.detail}</p>
        {showAvailabilityCta ? (
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-block rounded-full bg-secondary px-5 py-2 text-sm font-semibold text-secondary-foreground transition-colors duration-(--duration-fast) hover:bg-secondary/90"
          >
            Ver disponibilidad
          </a>
        ) : null}
      </CardContent>
    </Card>
  );
}
