// Tipos del feature de habitaciones y experiencias reservables.

// Habitación o experiencia mostrada en las tarjetas de la página.
export interface Room {
  slug: string;
  name: string;
  capacity: string;
  detail: string;
  image: string;
  imageAlt: string;
  bookable: boolean;
}
