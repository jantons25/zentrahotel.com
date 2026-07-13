// Catálogo de habitaciones y experiencias del hotel (fuente única; futura API del PMS).
import type { Room } from "@/features/rooms/types";

export const rooms: Room[] = [
  {
    slug: "habitacion-individual",
    name: "Habitación individual",
    capacity: "1 persona",
    detail: "1 cama (1.5 plazas)",
    image: "/images/room-individual.jpg",
    imageAlt: "Habitación individual con cama y baño privado",
    bookable: true,
  },
  {
    slug: "habitacion-matrimonial",
    name: "Habitación matrimonial",
    capacity: "2 personas",
    detail: "1 cama (2 plazas)",
    image: "/images/room-matrimonial.jpg",
    imageAlt: "Habitación matrimonial con cama de dos plazas",
    bookable: true,
  },
  {
    slug: "habitacion-doble",
    name: "Habitación doble",
    capacity: "3 personas",
    detail: "1 cama (2 plazas) y 1 cama (1.5 plazas)",
    image: "/images/room-doble.jpg",
    imageAlt: "Habitación doble con dos camas",
    bookable: true,
  },
  {
    slug: "suite-con-jacuzzi",
    name: "Suite con jacuzzi",
    capacity: "2 personas",
    detail: "1 cama queen",
    image: "/images/suite-jacuzzi.jpg",
    imageAlt: "Jacuzzi de la suite con copas de vino y pétalos de rosa",
    bookable: true,
  },
  {
    slug: "velada-romantica",
    name: "Velada romántica",
    capacity: "2 personas",
    detail: "1 cama queen",
    image: "/images/velada-romantica.jpg",
    imageAlt: "Cama decorada con corazón de pétalos de rosa y listones",
    bookable: false,
  },
  {
    slug: "masajes",
    name: "Masajes",
    capacity: "2 personas",
    detail: "Aromaterapia",
    image: "/images/masajes.jpg",
    imageAlt: "Toalla decorativa en forma de flor sobre la cama",
    bookable: false,
  },
];
