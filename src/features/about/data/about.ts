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

export const aboutStats = [
  { value: "12+", label: "Años recibiendo huéspedes" },
  { value: "3", label: "Sedes en el centro de Chiclayo" },
  { value: "60K+", label: "Estadías gestionadas" },
  { value: "4.6★", label: "Calificación en reseñas verificadas" },
] as const;

export interface AboutValue {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const aboutValues: AboutValue[] = [
  {
    icon: Heart,
    title: "Hospitalidad cercana",
    description:
      "Cada huésped es recibido como si volviera a casa: escuchamos, anticipamos y acompañamos cada detalle de la estadía.",
  },
  {
    icon: MapPin,
    title: "Ubicación privilegiada",
    description:
      "Tres sedes en el centro de Chiclayo, a pocos minutos de la Plaza de Armas y del corazón financiero de la ciudad.",
  },
  {
    icon: ConciergeBell,
    title: "Servicio 24/7",
    description:
      "Recepción, room service y soporte disponibles cualquier hora del día para que tu descanso nunca se interrumpa.",
  },
];

export interface AboutStep {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const aboutSteps: AboutStep[] = [
  {
    number: "1",
    icon: CalendarCheck,
    title: "Reserva directo en web",
    description:
      "Elige fechas y sede en nuestro portal para asegurar la mejor tarifa, sin intermediarios ni comisiones ocultas.",
  },
  {
    number: "2",
    icon: ClipboardCheck,
    title: "Personaliza tu estadía",
    description:
      "Confirmamos tu preferencia de habitación, hora de llegada y servicios extra para tenerlo todo listo antes de tu arribo.",
  },
  {
    number: "3",
    icon: KeyRound,
    title: "Llega y haz check-in en 3 min",
    description:
      "Recepción cálida y proceso exprés en cualquiera de nuestras sedes: pasas a descansar apenas cruzas la puerta.",
  },
  {
    number: "4",
    icon: Sparkles,
    title: "Vive la experiencia Zentra",
    description:
      "Wi-Fi 5G, desayuno buffet, room service 24 h y rituales pensados para que Chiclayo se sienta tuyo.",
  },
];

export const aboutHeroBadges = [
  { icon: Building2, label: "3 sedes" },
  { icon: BedDouble, label: "Suites con jacuzzi" },
  { icon: Award, label: "Boutique hotel" },
  { icon: Smile, label: "Trato cercano" },
  { icon: Star, label: "4.6★ Google" },
] as const;

export const aboutPartners = corporateClients;
