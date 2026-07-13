// Reseñas de huéspedes mostradas en la sección de testimonios.

// Testimonio de un huésped con calificación de 1 a 5.
export interface Testimonial {
  author: string;
  role: string;
  rating: number;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    author: "Carlos M.",
    role: "Viaje de negocios",
    rating: 5,
    quote:
      "Excelente ubicación en pleno centro de Chiclayo. Las habitaciones son modernas, limpias y muy cómodas.",
  },
  {
    author: "Andrea R.",
    role: "Estadía romántica · Suite jacuzzi",
    rating: 5,
    quote:
      "La atención fue increíble desde el check-in. La suite con jacuzzi superó nuestras expectativas.",
  },
  {
    author: "Luis P.",
    role: "Viajero frecuente",
    rating: 5,
    quote:
      "Perfecto para viajes de trabajo: Wi-Fi rápido, desayuno rico y un descanso de calidad.",
  },
  {
    author: "Mariana T.",
    role: "Fin de semana en familia",
    rating: 5,
    quote:
      "Nos recibieron con una atención cálida y el desayuno americano estuvo delicioso. Volveremos.",
  },
  {
    author: "Diego V.",
    role: "Experiencia Zen Deluxe",
    rating: 5,
    quote:
      "El ritual Zen fue una pausa real: masaje, aromaterapia y jacuzzi. Salimos como nuevos.",
  },
];
