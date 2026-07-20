// Contenido estructurado de la página Nosotros (KPIs, valores, pasos y aliados).
import {
  Award,
  BedDouble,
  Building2,
  CalendarCheck,
  ClipboardCheck,
  ConciergeBell,
  Heart,
  KeyRound,
  MapPin,
  Smile,
  Sparkles,
  Star,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { corporateClients } from "@/features/corporate/data/corporate";
import type { LocalizedString } from "@/lib/i18n-pick";

export interface AboutStat {
  value: string;
  label: LocalizedString;
}

export const aboutStats: readonly AboutStat[] = [
  { value: "12+", label: { es: "Años recibiendo huéspedes", en: "Years welcoming guests" } },
  { value: "3", label: { es: "Sedes en el centro de Chiclayo", en: "Locations in downtown Chiclayo" } },
  { value: "60K+", label: { es: "Estadías gestionadas", en: "Stays managed" } },
  { value: "4.6★", label: { es: "Calificación en reseñas verificadas", en: "Rating in verified reviews" } },
] as const;

export interface AboutValue {
  icon: LucideIcon;
  title: LocalizedString;
  description: LocalizedString;
}

export const aboutValues: AboutValue[] = [
  {
    icon: Heart,
    title: { es: "Hospitalidad cercana", en: "Warm hospitality" },
    description: {
      es: "Cada huésped es recibido como si volviera a casa: escuchamos, anticipamos y acompañamos cada detalle de la estadía.",
      en: "Every guest is welcomed like they're coming home: we listen, anticipate, and take care of every detail of the stay.",
    },
  },
  {
    icon: MapPin,
    title: { es: "Ubicación privilegiada", en: "Prime location" },
    description: {
      es: "Tres sedes en el centro de Chiclayo, a pocos minutos de la Plaza de Armas y del corazón financiero de la ciudad.",
      en: "Three locations in downtown Chiclayo, minutes from Plaza de Armas and the city's financial core.",
    },
  },
  {
    icon: ConciergeBell,
    title: { es: "Servicio 24/7", en: "24/7 service" },
    description: {
      es: "Recepción, room service y soporte disponibles cualquier hora del día para que tu descanso nunca se interrumpa.",
      en: "Reception, room service, and support any time of day so your rest is never interrupted.",
    },
  },
];

export interface AboutStep {
  number: string;
  icon: LucideIcon;
  title: LocalizedString;
  description: LocalizedString;
}

export const aboutSteps: AboutStep[] = [
  {
    number: "1",
    icon: CalendarCheck,
    title: { es: "Reserva directo en web", en: "Book direct on our site" },
    description: {
      es: "Elige fechas y sede en nuestro portal para asegurar la mejor tarifa, sin intermediarios ni comisiones ocultas.",
      en: "Pick dates and location on our portal to lock in the best rate — no middlemen, no hidden fees.",
    },
  },
  {
    number: "2",
    icon: ClipboardCheck,
    title: { es: "Personaliza tu estadía", en: "Customize your stay" },
    description: {
      es: "Confirmamos tu preferencia de habitación, hora de llegada y servicios extra para tenerlo todo listo antes de tu arribo.",
      en: "We confirm your room preference, arrival time, and extras so everything is ready before you get there.",
    },
  },
  {
    number: "3",
    icon: KeyRound,
    title: { es: "Llega y haz check-in en 3 min", en: "Arrive and check in in 3 min" },
    description: {
      es: "Recepción cálida y proceso exprés en cualquiera de nuestras sedes: pasas a descansar apenas cruzas la puerta.",
      en: "Warm reception and express check-in at any of our locations: you're resting as soon as you're through the door.",
    },
  },
  {
    number: "4",
    icon: Sparkles,
    title: { es: "Vive la experiencia Zentra", en: "Live the Zentra experience" },
    description: {
      es: "Wi-Fi 5G, desayuno buffet, room service 24 h y rituales pensados para que Chiclayo se sienta tuyo.",
      en: "5G Wi-Fi, buffet breakfast, 24-hour room service, and rituals designed so Chiclayo feels like yours.",
    },
  },
];

export interface AboutHeroBadge {
  icon: LucideIcon;
  label: LocalizedString;
}

export const aboutHeroBadges: readonly AboutHeroBadge[] = [
  { icon: Building2, label: { es: "3 sedes", en: "3 locations" } },
  { icon: BedDouble, label: { es: "Suites con jacuzzi", en: "Jacuzzi suites" } },
  { icon: Award, label: { es: "Boutique hotel", en: "Boutique hotel" } },
  { icon: Smile, label: { es: "Trato cercano", en: "Warm service" } },
  { icon: Star, label: { es: "4.6★ Google", en: "4.6★ Google" } },
] as const;

export const aboutPartners = corporateClients;
