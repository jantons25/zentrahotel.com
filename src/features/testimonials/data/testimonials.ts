// Reseñas de huéspedes mostradas en la sección de testimonios.
import type { LocalizedString } from "@/lib/i18n-pick";

// Testimonio de un huésped con calificación de 1 a 5.
export interface Testimonial {
  author: string;
  role: LocalizedString;
  rating: number;
  quote: LocalizedString;
}

export const testimonials: Testimonial[] = [
  {
    author: "Carlos M.",
    role: { es: "Viaje de negocios", en: "Business trip" },
    rating: 5,
    quote: {
      es: "Excelente ubicación en pleno centro de Chiclayo. Las habitaciones son modernas, limpias y muy cómodas.",
      en: "Excellent location right in downtown Chiclayo. The rooms are modern, clean, and very comfortable.",
    },
  },
  {
    author: "Andrea R.",
    role: {
      es: "Estadía romántica · Suite jacuzzi",
      en: "Romantic stay · Jacuzzi suite",
    },
    rating: 5,
    quote: {
      es: "La atención fue increíble desde el check-in. La suite con jacuzzi superó nuestras expectativas.",
      en: "Service was incredible from check-in. The suite with jacuzzi went beyond our expectations.",
    },
  },
  {
    author: "Luis P.",
    role: { es: "Viajero frecuente", en: "Frequent traveler" },
    rating: 5,
    quote: {
      es: "Perfecto para viajes de trabajo: Wi-Fi rápido, desayuno rico y un descanso de calidad.",
      en: "Perfect for business trips: fast Wi-Fi, great breakfast, and quality rest.",
    },
  },
  {
    author: "Mariana T.",
    role: {
      es: "Fin de semana en familia",
      en: "Family weekend",
    },
    rating: 5,
    quote: {
      es: "Nos recibieron con una atención cálida y el desayuno americano estuvo delicioso. Volveremos.",
      en: "They welcomed us with warm service and the American breakfast was delicious. We'll be back.",
    },
  },
  {
    author: "Diego V.",
    role: { es: "Experiencia Zen Deluxe", en: "Zen Deluxe Experience" },
    rating: 5,
    quote: {
      es: "El ritual Zen fue una pausa real: masaje, aromaterapia y jacuzzi. Salimos como nuevos.",
      en: "The Zen ritual was a real pause: massage, aromatherapy, and jacuzzi. We left refreshed.",
    },
  },
];
